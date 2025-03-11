"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/renterdxb.png";
import { usePathname } from "next/navigation";
import React from "react";

const CommonAuth = () => {
  const pathName = usePathname();
  return (
    <div className="max-w-[575px] mx-auto">
      <div className="flex justify-center mb-14">
        <Image src={logo} alt="Renterdxb" height={116} width={316} priority />
      </div>
      <div className="px-12 flex justify-between gap-5">
        <Link href={"/register"}>
          <p
            className={`${
              pathName === "/register"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500"
            } text-[17px] font-medium px-2`}
          >
            Create Account
          </p>
        </Link>
        <Link href={"/login"}>
          <p
            className={`${
              pathName === "/login"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500"
            } text-[17px] font-medium  px-2`}
          >
            Log In
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CommonAuth;
