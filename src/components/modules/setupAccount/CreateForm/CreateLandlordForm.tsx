"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { FieldValues } from "react-hook-form";
import MyBtn from "../../common/MyBtn";

const CreateLandlordForm = () => {
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
        <MyFormInput
          name="emiratesIdOrPassport"
          type="text"
          placeholder="Emirates ID/Passport Number"
        />
        <MyFormInput name="emial" type="email" placeholder="Enter Email" />
        <MyFormInput
          name="mobileNumber"
          type="text"
          placeholder="Enter Mobile"
        />

        <div className="flex justify-center md:mt-40 mt-20">
          <MyBtn name="Continue" />
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default CreateLandlordForm;
