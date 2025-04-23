import { removeCart } from "@/store/slices/cart.slice";
import { RootState } from "@/store/types";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Remove from "../icons/remove";
import Tavsiya from "../layout/Tavsiya";

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

  if (!modal) return null;

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price);
    const count = Number(item.count);
    if (isNaN(price) || isNaN(count)) return sum;
    return sum + price * count;
  }, 0);

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex flex-col py-5 items-center overflow-y-auto"
      onClick={() => setModal(false)}
    >
      <div
        className="bg-white p-8 rounded-lg w-[1500px] mb-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Savatcha</h2>
          <p
            className="text-3xl font-bold cursor-pointer"
            onClick={() => setModal(false)}
          >
            &times;
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex gap-10">
            <div className="w-[1100px] h-[330px] overflow-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border rounded-2xl px-5 py-3 mb-3"
                >
                  <div className="flex gap-4 items-center">
                    <Image src={item.imageUrl} width={70} height={70} alt="img" />
                    <p className="text-xl w-44">{item.name}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold font-mono text-end">
                      {(item.count * item.price).toLocaleString("ru")} so'm
                    </p>
                    <button
                      onClick={() => remove(item.id)}
                      className="text-red-500 text-xl border p-2 rounded-2xl"
                    >
                      <Remove />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <div className="border border-gray-300 rounded-xl p-4 w-96">
                <div className="bg-gray-100 p-2 rounded-xl flex gap-2 mb-4">
                  <button className="w-full bg-white rounded-xl py-2">
                    Hoziroq Tanlash
                  </button>
                  <button className="w-full bg-gray-300 rounded-xl py-2">
                    Muddatli To'lov
                  </button>
                </div>

                <div className="flex justify-between text-lg mb-2">
                  <p>{cartItems.length} ta mahsulot narxi:</p>
                  <p className="font-bold">
                    {totalPrice.toLocaleString("ru")} so'm
                  </p>
                </div>

                <div className="flex justify-between text-xl font-bold">
                  <p>Jami:</p>
                  <p>{totalPrice.toLocaleString("ru")} so'm</p>
                </div>
              </div>

              <button
                onClick={() => setModal(false)}
                className="bg-blue-500 text-white text-2xl py-3 rounded-2xl"
              >
                Rasmiylashtirish
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Savatchada hech nima yo'q</h2>
            <button
              onClick={() => setModal(false)}
              className="text-2xl border-2 border-blue-400 px-6 py-2 rounded-2xl"
            >
              Xarid qilish
            </button>
          </div>
        )}
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-8 rounded-lg w-[1500px] flex flex-col"
      >
        <h2 className="text-2xl font-bold mb-4">Tavsiya etamiz</h2>
        <div className="h-[220px] overflow-y-auto">
          <Tavsiya />
        </div>
      </div>
    </div>
  );
};

export default Savatcha;
