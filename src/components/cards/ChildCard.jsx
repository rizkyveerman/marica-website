import Image from "next/image";
import Button from "../buttons/Button";
import woman from "@/icons/woman.png";
import styles from "./ChildCard.module.css";

const ChildCard = () => {
  return (
    <div
      className={`${styles.card} hover:bg-white p-4 rounded-xl flex gap-4 cursor-pointer`}
    >
      <Image
        src={woman}
        width={100}
        height={100}
        alt="username"
        title="username"
        className="bg-blue-300 p-2 pb-0 rounded-lg h-[100px] w-[100px]"
      />
      <div className="text-slate-600 flex flex-col gap-4">
        <p className="text-xl">Taylor Swift</p>
        <div>
          <p className="text-slate-400">
            Tertarik dengan menggambar perspektif. Bercita-cita menjadi product
            designer.
          </p>
          <Button>Detail</Button>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;
