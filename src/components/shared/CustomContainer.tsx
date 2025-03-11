import { ReactNode } from "react";

type CustomContainerProps = {
  children: ReactNode;
};

const CustomContainer = ({ children }: CustomContainerProps) => {
  return <div className="max-w-[1327px] mx-auto px-5 py-6">{children}</div>;
};

export default CustomContainer;
