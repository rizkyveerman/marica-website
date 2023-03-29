import Image from "next/image";
import Link from "next/link";
import woman from "@/icons/woman.png";
import styles from "./ChildCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const ChildCard = () => {
  return (
    <div
      className={`${styles.card} bg-white p-4 rounded-xl flex gap-4 cursor-pointer`}
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
        <div className="flex justify-between items-center">
          <p className="text-xl">Taylor Swift</p>
          <p className="flex gap-1 items-center">
            <span className="text-amber-800">
              <FontAwesomeIcon icon={faMedal} width={20} />
            </span>
            430
          </p>
        </div>
        <div>
          <p className="text-slate-400">
            Tertarik dengan menggambar perspektif. Bercita-cita menjadi product
            designer.
          </p>
          <Link
            href="/:id"
            className="underline text-slate-500 hover:text-pink-600"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;
