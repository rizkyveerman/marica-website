import { useSelector } from "react-redux";
import ChildCard from "@/components/cards/ChildCard";
import MainLayout from "@/layout/MainLayout";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import woman from "@/icons/woman.png";
import Button from "@/components/buttons/Button";
import {
  faEdit,
  faIdCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//protected
const MyProfile = (props) => {
  console.log("props", props);
  return (
    <article>
      <section className="px-4 pt-16 pb-8">
        <div className="flex justify-start items-start gap-4">
          <Image
            src={woman}
            alt="user profile"
            title="username"
            width={150}
            height={150}
            className="bg-pink-300 rounded-full"
          />
          <div>
            <div className="flex gap-4">
              <h3>Maria V.</h3>
              <Button className="text-xs">Edit profile</Button>
            </div>
            <p className="max-w-sm text-slate-500 mt-4">
              Lorem ipsum dolor sit amet consectetur. Lorem vitae tincidunt
              scelerisque purus dui integer.
            </p>
            <p className="text-slate-500 flex gap-2 text-sm">
              <FontAwesomeIcon icon={faIdCard} width={14} />
              Guru
            </p>
            <p className="text-slate-500 flex gap-2 text-sm">
              <FontAwesomeIcon icon={faLocationDot} width={14} />
              Sleman, Yogyakarta
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8">
        <Tab.Group>
          <Tab.List className="flex">
            <Tab className="px-5 py-2 rounded-xl outline-none text-slate-600 ui-selected:text-white ui-selected:bg-gradient-to-t from-pink-600 to-pink-400">
              Data anak
            </Tab>
            <Tab className="px-5 py-2 rounded-xl outline-none text-slate-600 ui-selected:text-white ui-selected:bg-gradient-to-t from-pink-600 to-pink-400">
              Statistik anak
            </Tab>
          </Tab.List>
          <Tab.Panels className="max-w-2xl p-4">
            <Tab.Panel className="grid gap-4">
              {[1, 2, 3].map((index) => (
                <ChildCard key={index} />
              ))}
            </Tab.Panel>
            <Tab.Panel>statistik</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </article>
  );
};

MyProfile.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  // const { data } = await axios.get(
  //   "https://marica-backend.vercel.app/api/v1/user/login"
  // );

  return {
    props: {
      data: {
        name: "Maria Vania",
      },
    },
  };
}

export default MyProfile;
