import CommonAuth from "@/components/modules/auth/CommonAuth";
import LoginForm from "@/components/modules/auth/Login/LoginForm";
import SocialAuth from "@/components/modules/auth/SocialAuth";

export default function Page() {
  return (
    <div className="max-w-[916px] mx-auto md:py-5 md:px-0 px-5 h-screen flex justify-center items-center">
      <div className="w-full md:border border-primary border-0 rounded-[31px] flex flex-col justify-center items-center md:py-12 py-5">
        <div className="w-full md:mb-16 mb-6">
          <CommonAuth />
        </div>

        <div className="w-full mx-auto">
          <LoginForm />
        </div>

        <div className="w-full mx-auto md:mt-14 mt-8">
          <SocialAuth />
        </div>
      </div>
    </div>
  );
}
