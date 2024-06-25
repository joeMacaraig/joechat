"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Messengers = () => {
  const [messengers, setMessengers] = useState([]);
  //get messages
  useEffect(() => {
    const getMessengers = async () => {
      const res = await fetch("/api/messengers");
      const data = await res.json();
      setMessengers(data);
    };
    getMessengers();
  }, []);

  return (
    <section className="relative overflow-y-auto">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col border w-[300px] p-4 h-full">
        <h1 className="font-medium underline">Messengers - {messengers.length}</h1>
        <div className="py-2">
          {messengers.map((item) => (
            <div className="border border-black pl-2 py-2 text-center flex items-center gap-2 mb-1 rounded-md">
              <div className="rounded-full overflow-hidden w-[30px] h-[30px]">
                <Image src={item.image} height={100} width={100} alt="photo" />
              </div>
              <h1 className="font-medium text-sm">{item.username}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden top-5 right-5 absolute ">ICON</div>
    </section>
  );
};
