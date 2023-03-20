import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import defaultAvatar from "@/images/profile.jpg";
import Button from "@/components/buttons/Button";

const MyProfile = () => {
  return (
    <article>
      <section>
        <div>
          <Image
            src={defaultAvatar}
            alt="username"
            title="username"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h3>User name</h3>
          <p>User biography</p>
          <div>
            <Button type="secondary">Edit profile</Button>
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
