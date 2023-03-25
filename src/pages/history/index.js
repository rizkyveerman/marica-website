import Fallback from "@/components/user-responses/Fallback";
import MainLayout from "@/layout/MainLayout";

const History = () => {
  return <Fallback />;
};

History.getLayout = function getLayout(page) {
  return <MainLayout title="Riwayat tontonan">{page}</MainLayout>;
};

export default History;
