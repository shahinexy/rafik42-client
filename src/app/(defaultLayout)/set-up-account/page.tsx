import CommonSetupAcc from "@/components/modules/setupAccount/CommonSetupAcc";
import CustomContainer from "@/components/shared/CustomContainer";
import PageHeader from "@/components/shared/PageHeader";

const AccountSetUppage = () => {
  return (
    <div>
      <PageHeader title={"Set up Account"} path={"/"} />

      <CustomContainer>
        <CommonSetupAcc />
      </CustomContainer>
    </div>
  );
};

export default AccountSetUppage;
