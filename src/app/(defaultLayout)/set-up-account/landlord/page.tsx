import CreateLandlordForm from "@/components/modules/setupAccount/CreateForm/CreateLandlordForm";
import CustomContainer from "@/components/shared/CustomContainer";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const LandlordPage = () => {
  return (
    <div>
      <PageHeader title={"Landlord Account"} path="/set-up-account" />
      <CustomContainer>
        <CreateLandlordForm />
      </CustomContainer>
    </div>
  );
};

export default LandlordPage;
