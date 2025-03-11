import CommonSetupAcc from "@/components/modules/setupAccount/CommonSetupAcc";
import MyContainer from "@/components/shared/MyContainer";
import PageHeader from "@/components/shared/PageHeader";

const AccountSetUppage = () => {
  return (
    <div>
      <PageHeader title={"Set up Account"} path={"/"} />

      <MyContainer>
        <CommonSetupAcc />
      </MyContainer>
    </div>
  );
};

export default AccountSetUppage;
