import { removeCart } from "@/store/slices/cart.slice";
import { RootState } from "@/store/types";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export type Savat = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Savatcha: React.FC<Savat> = ({ modal, setModal }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const remove = (id: number) => {
    dispatch(removeCart(id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex justify-center items-center"
      onClick={() => setModal(false)}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-5xl mx-4 md:mx-0 max-h-[90vh] overflow-y-auto p-6 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Savatcha</h2>
          <button
            className="text-3xl font-bold text-gray-500 hover:text-red-500 transition"
            onClick={() => setModal(false)}
          >
            &times;
          </button>
        </div>

        {cartItems.length > 0 ? (
          <>
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center justify-between bg-gray-100 hover:bg-gray-200 transition rounded-xl p-4"
                >
                  <div className="flex items-center gap-5">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-white">
                      <Image
                        src={item.image || "/placeholder.jpg"}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-gray-800">
                      <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.price?.toLocaleString()} so'm
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => remove(item.id)}
                    className="mt-3 md:mt-0 text-red-600 text-xl hover:text-red-800 transition font-bold"
                  >
                    &#10005;
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t pt-4 flex justify-end">
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-800">
                  Jami: {totalPrice.toLocaleString()} so'm
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-bold text-gray-700">Savatcha bo‘sh</h2>
            <Link href="/">
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition text-lg font-semibold">
                Xarid qilish
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Savatcha;
