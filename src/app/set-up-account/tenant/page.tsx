import CreateTenantForm from "@/components/modules/setupAccount/CreateForm/CreateTenantForm";
import MyContainer from "@/components/shared/MyContainer";
import PageHeader from "@/components/shared/PageHeader";

const TenantPage = () => {
  return (
    <div>
      <PageHeader title={"Tenant Account"} path="/set-up-account" />
      <MyContainer>
        <CreateTenantForm />
      </MyContainer>
    </div>
  );
};

export default TenantPage;
