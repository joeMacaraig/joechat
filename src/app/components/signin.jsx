"use client";

import { useState, useEffect } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  SessionProvider,
} from "next-auth/react";
import { MdLogin, MdOutlineClear } from "react-icons/md";

export const Signin = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <>
      <div className="flex justify-end w-full">
        {session?.user ? (
          <button
            className="flex justify-center items-center border w-[40px] py-2 rounded duration-500 ease-in-out hover:-translate-y-1 hover:border-purple-500 shadow hover:shadow-purple-500"
            onClick={() => signOut()}
          >
            <MdOutlineClear size={25} />
          </button>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="flex justify-center items-center border w-[40px] py-2 rounded duration-500 ease-in-out hover:-translate-y-1 hover:border-purple-500 shadow hover:shadow-purple-500"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  <MdLogin size={25} />
                </button>
              ))}
          </>
        )}
      </div>
    </>
  );
};
