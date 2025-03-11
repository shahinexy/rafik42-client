import CreateTenantForm from "@/components/modules/setupAccount/CreateForm/CreateTenantForm";
import CustomContainer from "@/components/shared/CustomContainer";
import PageHeader from "@/components/shared/PageHeader";

const TenantPage = () => {
  return (
    <div>
      <PageHeader title={"Tenant Account"} path="/set-up-account" />
      <CustomContainer>
        <CreateTenantForm />
      </CustomContainer>
    </div>
  );
};

export default TenantPage;
