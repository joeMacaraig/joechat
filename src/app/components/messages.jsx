"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { messageCard } from "./messageCard";
import Image from "next/image";

export const Messages = () => {
  const { data: session } = useSession();
  const [message, setMessages] = useState([]);
  const [send, setSend] = useState(false);
  const [msg, setMsg] = useState({
    message: "",
    date: "",
  });

  const createMsg = async (e) => {
    e.preventDefault();

    setSend(true);

    try {
      const res = await fetch("/api/message/create", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          message: msg.message,
          date: new Date().toUTCString(),
        }),
      });

      if (res.ok) {
        window.location.reload();
      }
    } catch (err) {
      console.log({ error: err });
    } finally {
      setSend(false);
    }
  };

  //get messages
  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch("/api/message");
      const data = await res.json();
      setMessages(data);
    };
    getMessages();
  }, []);

  return (
    <div className="flex flex-1 w-full flex-col p-4 relative gap-2">
      <div className="flex flex-1">Messages</div>
      {message.map((item, index) => (
        <div className="border flex gap-2 p-2 items-center shadow-sm rounded-md">
          <div className="border rounded-full w-[60px] h-[60px] overflow-hidden">
            <Image
              src={item.messenger.image}
              height={100}
              width={100}
              alt="img"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{item.messenger.username}</h1>
              <p className="font-light text-sm text-gray-500">{item.date}</p>
            </div>
            <p>{item.message}</p>
          </div>
        </div>
      ))}
      <messageCard />
      <form className="border" onSubmit={createMsg}>
        <input
          placeholder="Message Me 👋🏽"
          className="w-full p-4"
          onChange={(e) =>
            setMsg({
              ...msg,
              message: e.target.value,
            })
          }
        />
      </form>
    </div>
  );
};
