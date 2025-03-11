"use client";
import Image from "next/image";
import Link from "next/link";
import vector1 from "../../../../public/images/Vector1.png";
import vector2 from "../../../../public/images/Vector2.png";
import vector3 from "../../../../public/images/Vector3.png";
import vector4 from "../../../../public/images/Vector4.png";
import MyBtn from "../common/MyBtn";

const CommonSetupAcc = () => {
  return (
    <div
      className="flex flex-col min-h-[calc(100vh-200px)]
 md:gap-5 gap-3"
    >
      <h2 className="font-semibold md:text-3xl text-xl">
        Please select your account
      </h2>
      {/* Landlord */}
      <Link href={"/set-up-account/landlord"}>
        <div className="bg-gradient-to-r from-[#57AA3E] to-[#68D735] md:px-10 px-5 md:py-12 py-7 rounded-xl relative">
          <div className="text-white">
            <h3 className="text-xl font-medium">Landlord</h3>
            <p>Manage your properties easily</p>
          </div>
          <Image
            src={vector1}
            alt="vector"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
          <Image
            src={vector2}
            alt="vector"
            className="absolute top-1/2 right-0 -translate-y-1/2"
          />
        </div>
      </Link>

      {/* Tenant */}
      <Link href={"/set-up-account/tenant"}>
        <div className="bg-gradient-to-r from-[#076271] to-[#076271B8] md:px-10 px-5 md:py-12 py-7 rounded-xl relative">
          <div className="text-white">
            <h3 className="text-xl font-medium">Tenant</h3>
            <p>Track rent, requests & more</p>
          </div>
          <Image
            src={vector3}
            alt="vector"
            className="absolute top-1/2 right-0 -translate-y-1/2"
          />
        </div>
      </Link>

      {/* Agency */}
      <Link href={"/"}>
        <div className="bg-gradient-to-r from-[#179DFF] to-[#42aefe] md:px-10 px-5 md:py-12 py-7 rounded-xl relative">
          <div className="text-white">
            <h3 className="text-xl font-medium">Agency</h3>
            <p>Handle multiple properties to manage multiple landlords</p>
          </div>
          <Image
            src={vector4}
            alt="vector"
            className="absolute top-1/2 right-0 -translate-y-1/2"
          />
        </div>
      </Link>

      <div className="flex justify-center mt-auto">
        <MyBtn name="Continue" />
      </div>
    </div>
  );
};

export default CommonSetupAcc;
