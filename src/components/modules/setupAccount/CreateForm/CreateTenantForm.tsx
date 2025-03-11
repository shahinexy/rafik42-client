"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { FieldValues } from "react-hook-form";

const CreateTenantForm = () => {
  const formHandler = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="md:mt-4">
      <h2 className="md:text-[32px] text-[17px] font-medium text-grayText mb-3">
        Welcome to Renter DXB
      </h2>
      <MyFormWrapper onSubmit={formHandler}>
        <MyFormInput name="name" type="text" placeholder="Enter Full Name" />
        <MyFormInput name="emiratesId=" type="text" placeholder="Emirates ID" />
        <MyFormInput name="emial" type="email" placeholder="Enter Email" />
        <MyFormInput
          name="mobileNumber"
          type="text"
          placeholder="Enter Mobile"
        />
      </MyFormWrapper>
    </div>
  );
};

export default CreateTenantForm;
