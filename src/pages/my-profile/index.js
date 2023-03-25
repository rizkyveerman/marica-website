import { useState } from "react";
import ChildCard from "@/components/cards/ChildCard";
import MainLayout from "@/layout/MainLayout";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import woman from "@/icons/woman.png";
import Button from "@/components/buttons/Button";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyProfile = () => {
  return (
    <article>
      <section className="px-4 pt-16 pb-8">
        <div className="flex justify-center items-center gap-4">
          <Image
            src={woman}
            alt="user profile"
            title="username"
            width={200}
            height={200}
            className="bg-pink-300 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <h3 className="text-slate-700 font-bold">Maria V.</h3>
              <p className="text-sm">Yogyakarta, ID</p>
            </div>
            <p>Mobile Design, UI / Visual Design, Web Design</p>
            <div>
              <Button
                type="secondary"
                icon={<FontAwesomeIcon icon={faEdit} height={14} />}
              >
                Edit profile
              </Button>
            </div>
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

export default MyProfile;
