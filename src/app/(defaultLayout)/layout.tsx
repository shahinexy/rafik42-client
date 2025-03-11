
import FooterNav from "@/components/shared/FooterNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="relative">{children}</div>
      <div className="fixed bottom-0 w-full">
        <FooterNav />
      </div>
    </main>
  );
};

export default CommonLayout;
