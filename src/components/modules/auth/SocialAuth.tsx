import Image from "next/image";
import google from '../../../../public/images/google.png'
import facebook from '../../../../public/images/facbook.png'
import apple from '../../../../public/images/apple.png'

const SocialAuth = () => {
  return (
    <div className="">
      <div className="max-w-[640px] mx-auto relative border-t border-sky-200">
        <div className="absolute inset-0 flex justify-center">
          <div className="md:max-w-[500px] max-w-[380px] w-full border-t border-primary"></div>
        </div>
        <p className="absolute left-1/2 -translate-x-1/2 -top-3 px-8 py-1 border border-primary rounded-full text-[10px] bg-white">
          or sign up with
        </p>
      </div>

      <div className="w-full flex justify-center gap-5 md:mt-10 mt-7">
        <button><Image src={google} alt="google" height={50} width={50}/></button>
        <button><Image src={facebook} alt="google" height={50} width={50}/></button>
        <button><Image src={apple} alt="google" height={50} width={50}/></button>
      </div>
    </div>
  );
};

export default SocialAuth;
