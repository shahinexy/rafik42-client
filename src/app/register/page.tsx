import Image from "next/image";
import logo from "../../../public/images/renterdxb.png";
import CommonAuth from "@/components/modules/auth/CommonAuth";
import RegisterForm from "@/components/modules/auth/register/RegisterForm";

export default function Page() {
  return (
    <div className="max-w-[916px] mx-auto md:py-5 md:px-0 px-3 h-screen flex justify-center items-center">
      <div className="w-full md:border border-primary border-0 rounded-[31px] flex flex-col justify-center items-center md:py-12 py-5">
        <Image src={logo} alt="Renterdxb" height={116} width={316} priority />

        <div className="w-full mt-14 md:mb-16 mb-3">
          <CommonAuth />
        </div>

        <div className="w-full mx-auto ">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
