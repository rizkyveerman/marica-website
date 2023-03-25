import Fallback from "@/components/user-responses/Fallback";
import MainLayout from "@/layout/MainLayout";

const Trendings = () => {
  return <Fallback />;
};

Trendings.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Trendings;
