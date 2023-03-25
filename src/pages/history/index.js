import MainLayout from "@/layout/MainLayout";

const History = () => {
  return (
    <article>
      <section className="p-4">History</section>
    </article>
  );
};

History.getLayout = function getLayout(page) {
  return <MainLayout title="Riwayat tontonan">{page}</MainLayout>;
};

export default History;
