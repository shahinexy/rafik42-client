import CommonHome from "@/components/modules/home/CommonHome";
import MyContainer from "@/components/shared/MyContainer";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <PageHeader title="Properties" path="/" />

      <MyContainer>
        <CommonHome />
      </MyContainer>
    </div>
  );
};

export default HomePage;
