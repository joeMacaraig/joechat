"use client";

import Link from "next/link";
import { links } from "../../../lib/data";

import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaSuitcase,
} from "react-icons/fa";

import { Signin } from "./signin";

const icons = [
  <FaLinkedin size={25} className="text-blue-500" />,
  <FaGithubSquare size={25} />,
  <FaInstagramSquare size={25} className="text-pink-500" />,
  <FaSuitcase size={20} className="mr-1" />,
];

export const Developer = () => {
  return (
    <div className="hidden md:flex flex-col items-center border h-full p-4 w-[300px] overflow-y-auto">
      <div className="flex flex-1 flex-col gap-8 justify-start items-center">
        <div className="flex flex-col gap-1">
          <div className="rounded-full bg-black w-[200px] h-[200px] self-center"></div>
          <h1 className="font-bold text-xl text-center">
            Joseph Bryan Macaraig
          </h1>
          <p className="text-center text-gray-500">jbmacaraig14@gmail.com</p>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          {links.map((item, index) => (
            <Link key={index} href={item.link} className="w-full group">
              <div className="flex items-center gap-2">
                <div className="group-hover:scale-110 duration-500 ease-in-out">{icons[index]}</div>
                <h1 className="group-hover:text-gray-500 font-medium">{item.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Signin />
    </div>
  );
};
