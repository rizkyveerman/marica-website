import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import woman from "@/icons/woman.png";
import Button from "@/components/buttons/Button";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyProfile = () => {
  return (
    <article>
      <section className="px-4 py-16">
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
        <div className="">
          <ul>
            <li></li>
          </ul>
        </div>
      </section>
    </article>
  );
};

MyProfile.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default MyProfile;
