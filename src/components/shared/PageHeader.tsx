import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

type PageHeaderProps = {
  title: string;
  path: string;
};

const PageHeader = ({ title, path }: PageHeaderProps) => {
  return (
    <div className="bg-white w-full md:py-7 py-3 px-5 flex justify-between items-center gap-5 shadow-md shadow-gray-300">
      <Link href={`${path}`}>
        <button className="w-[52] md:w-[44] h-[52] md:h-[44] rounded-full bg-[#F5F7F9] flex justify-center items-center">
          <IoMdArrowBack className="md:text-3xl text-2xl" />
        </button>
      </Link>
      <h1 className="md:text-[32px] text-xl font-semibold md:font-medium">
        {title}
      </h1>
      <div></div>
    </div>
  );
};

export default PageHeader;
