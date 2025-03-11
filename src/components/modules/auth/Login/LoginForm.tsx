"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import React from "react";
import { FieldValues } from "react-hook-form";
import { CgLock } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

const LoginForm = () => {
  const formHandler = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="max-w-[575px] mx-auto">
      <div>
        <h2 className="text-xl font-semibold">Welcome Back</h2>
        <p className="text-grayText">
          Fill out the information below in order to access your account
        </p>
      </div>

      <div className="mt-3">
        <MyFormWrapper onSubmit={formHandler}>
          <div className="relative">
            <MyFormInput
              type="email"
              name="email"
              placeholder="Enter You Email"
              inputClassName="rounded-full bg-[#F9F9FB] border-none px-12 py-4 text-[17px]"
            />
            <FiMail className="absolute  text-2xl font-semibold top-[16px] left-4 text-gray-400" />
          </div>
          <div className="relative">
            <MyFormInput
              type="password"
              name="password"
              placeholder="Enter You Password"
              inputClassName="rounded-full bg-[#F9F9FB] border-none px-12 py-4 text-[17px]"
            />
            <CgLock className="absolute  text-2xl font-light top-[16px] left-4 text-gray-400" />
          </div>

          <div className="flex justify-center">
            <button className="bg-primary px-20 py-3 text-white rounded-full md:w-auto w-full">
              Get Started
            </button>
          </div>
        </MyFormWrapper>
      </div>
    </div>
  );
};

export default LoginForm;
