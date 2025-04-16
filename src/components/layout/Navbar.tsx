import Link from "next/link";
import Katalog from "./Katalog";
import UserIcon from "../icons/User";
import Like from "../icons/Like";
import Shop from "../icons/Shop";
import { useState } from "react";
import Savatcha from "../Modal/Cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import rasm from "../icons/mylogo.png"
import LikeModal from "../Modal/Like";

function Navbar() {
  const [modal, setModal] = useState(false);
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  const [likeModal, setLikeModal] = useState(false);


  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 to-amber-100 shadow-md">
        <Savatcha modal={modal} setModal={setModal} />
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <LikeModal modal={likeModal} setModal={setLikeModal} />

          <Link href={"/"} className="flex items-center gap-2">
            <Image src={rasm} alt="BAHA SHOP" width={45} height={45} />
            <span className="text-2xl font-bold text-gray-800 tracking-wide">BAHA.SHOP</span>
          </Link>

          <div className="flex items-center gap-5 flex-1 justify-center">
            <Katalog />
            <input
              className="w-full max-w-md p-2 px-4 rounded-xl border-2 border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              type="text"
              placeholder="Qidirish..."
            />
          </div>

          <div className="flex gap-6 items-center text-gray-700">
            <div className="flex flex-col items-center text-sm hover:text-blue-600 transition">
              <UserIcon />
              <p>Kirish</p>
            </div>
            <div
              onClick={() => setLikeModal(true)}
              className="flex flex-col items-center text-sm hover:text-blue-600 transition cursor-pointer"
            >
              <Like />
              <p>Sevimlilar</p>
            </div>
            <div
              onClick={() => setModal(true)}
              className="relative cursor-pointer flex flex-col items-center text-sm hover:text-blue-600 transition"
            >
              <Shop />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
              <p>Savatcha</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
