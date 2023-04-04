import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MainLayout from "@/layout/MainLayout";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import woman from "@/icons/woman.png";
import boy from "@/icons/boy.png";
import girl from "@/icons/girl.png";
import Button from "@/components/buttons/Button";
import {
  faEdit,
  faIdCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

//protected
const MyProfile = (props) => {
  const { isLoading, error, userInfo } = useSelector((state) => state.user);

  return (
    <article>
      <section className="px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-4">
          <Image
            src={woman}
            alt="user profile"
            title="username"
            width={150}
            height={150}
            className="bg-sky-300 rounded-full"
          />
          <div>
            <div className="flex w-full justify-center items-center md:justify-start md:items-start gap-4">
              <h3>{userInfo.data.nama}</h3>
              <Button className="text-xs">Edit profile</Button>
            </div>
            <p className="max-w-sm text-center md:text-left text-slate-500 mt-4">
              Lorem ipsum dolor sit amet consectetur. Lorem vitae tincidunt
              scelerisque purus dui integer.
            </p>
            <div className="flex justify-center items-center md:justify-start gap-4">
              <p className="text-slate-500 flex gap-2 text-sm">
                <FontAwesomeIcon icon={faIdCard} width={14} />
                Guru
              </p>
              <p className="text-slate-500 flex gap-2 text-sm">
                <FontAwesomeIcon icon={faLocationDot} width={12} />
                Sleman, Yogyakarta
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8">
        <Tab.Group>
          <Tab.List className="flex">
            <Tab className="px-5 py-2 rounded-xl outline-none text-slate-600 ui-selected:text-white ui-selected:bg-gradient-to-t from-sky-600 to-sky-400">
              Data anak
            </Tab>
            <Tab className="px-5 py-2 rounded-xl outline-none text-slate-600 ui-selected:text-white ui-selected:bg-gradient-to-t from-sky-600 to-sky-400">
              Statistik anak
            </Tab>
          </Tab.List>
          <Tab.Panels className="py-4 md:p-4">
            <Tab.Panel className="grid md:grid-cols-2 gap-4">
              {/* children */}
              <div
                className={`bg-white p-4 rounded-xl flex gap-4 cursor-pointer`}
              >
                <Image
                  src={boy}
                  width={100}
                  height={100}
                  alt="username"
                  title="username"
                  className="bg-sky-300 p-2 pb-0 rounded-lg h-[100px] w-[100px]"
                />
                <div className="text-slate-600 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl">Dion W</p>
                    <p className="flex gap-1 items-center">
                      <span className="text-amber-800">
                        <FontAwesomeIcon icon={faMedal} width={20} />
                      </span>
                      65
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">
                      Tertarik dengan menggambar perspektif. Bercita-cita
                      menjadi product designer.
                    </p>
                    <Link
                      href="/:id"
                      className="underline text-slate-500 hover:text-sky-600"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={`bg-white p-4 rounded-xl flex gap-4 cursor-pointer`}
              >
                <Image
                  src={boy}
                  width={100}
                  height={100}
                  alt="username"
                  title="username"
                  className="bg-sky-300 p-2 pb-0 rounded-lg h-[100px] w-[100px]"
                />
                <div className="text-slate-600 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl">Ed Sheeran</p>
                    <p className="flex gap-1 items-center">
                      <span className="text-amber-500">
                        <FontAwesomeIcon icon={faMedal} width={20} />
                      </span>
                      1150
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">
                      Tertarik dengan menggambar perspektif. Bercita-cita
                      menjadi product designer.
                    </p>
                    <Link
                      href="/:id"
                      className="underline text-slate-500 hover:text-sky-600"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={`bg-white p-4 rounded-xl flex gap-4 cursor-pointer`}
              >
                <Image
                  src={girl}
                  width={100}
                  height={100}
                  alt="username"
                  title="username"
                  className="bg-sky-300 p-2 pb-0 rounded-lg h-[100px] w-[100px]"
                />
                <div className="text-slate-600 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl">Taylor Swift</p>
                    <p className="flex gap-1 items-center">
                      <span className="text-slate-500">
                        <FontAwesomeIcon icon={faMedal} width={20} />
                      </span>
                      430
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">
                      Tertarik dengan menggambar perspektif. Bercita-cita
                      menjadi product designer.
                    </p>
                    <Link
                      href="/:id"
                      className="underline text-slate-500 hover:text-sky-600"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
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
