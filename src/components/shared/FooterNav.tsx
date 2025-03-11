"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBuildings } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import NabToltip from "../modules/common/NabToltip";

const FooterNav = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between">
      <div className="bg-white p-3 w-full">
        <nav className="mt-5">
          <ul className=" flex gap-3 justify-evenly items-center z-40">
            <Link
              href={`/setting`}
              className={`${
                pathName === `/null` ? "text-primary " : "text-black"
              }  hover:text-primary duration-300 text-center flex flex-col items-center`}
            >
              <IoSettingsOutline className="text-2xl" />
              <small className="text-[12px]">Settng</small>
            </Link>
            <Link
              href={`/`}
              className={`${
                pathName === `/` ? "text-primary " : "text-black"
              }  hover:text-primary duration-300 text-center flex flex-col items-center`}
            >
              <BsBuildings className="text-2xl" />
              <small className="text-[12px]">Properties</small>
            </Link>

            <NabToltip />

            <Link
              href={`/setting`}
              className={`${
                pathName === `/null` ? "text-primary " : "text-black"
              }  hover:text-primary duration-300 text-center flex flex-col items-center`}
            >
              <IoSettingsOutline className="text-2xl" />
              <small className="text-[12px]">Settng</small>
            </Link>

            <Link
              href={`/setting`}
              className={`${
                pathName === `/null` ? "text-primary " : "text-black"
              }  hover:text-primary duration-300 text-center flex flex-col items-center`}
            >
              <IoSettingsOutline className="text-2xl" />
              <small className="text-[12px]">Settng</small>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FooterNav;
