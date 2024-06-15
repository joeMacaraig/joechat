"use client";

import { MdLogin } from "react-icons/md";

export const Signin = () => {
  return (
    <>
      <div className="flex justify-end w-full">
        <button className="flex justify-center items-center border w-[40px] py-2 rounded hover:-translate-y-1 duration-500 ease-in-out hover:border-purple-500 shadow hover:shadow-purple-500">
          <MdLogin size={25} />
        </button>
      </div>
    </>
  );
};
