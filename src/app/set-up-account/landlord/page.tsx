import CreateLandlordForm from "@/components/modules/setupAccount/CreateForm/CreateLandlordForm";
import MyContainer from "@/components/shared/MyContainer";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const LandlordPage = () => {
  return (
    <div>
      <PageHeader title={"Landlord Account"} path="/set-up-account" />
      <MyContainer>
        <CreateLandlordForm />
      </MyContainer>
    </div>
  );
};

export default LandlordPage;
