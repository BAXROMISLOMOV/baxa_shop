import { RootState } from "@/store/types";
import axios from "axios";
import { useSelector } from "react-redux";

function Orders() {
  const CartItem = useSelector((state: RootState) => state.cart.items);

  const AxiosOrders = (values: any) => {
    axios
      .post("https://nt.softly.uz/api/front/orders", {
        address: values.address,
        items: CartItem.map((item) => ({
          productId: item.id,
          quantity: item.count,
        })),
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  console.log(AxiosOrders);

  return (
    <>
      <button
        onClick={() => AxiosOrders({ address: "Toshkent, Yunusobod" })}
        className="cursor-pointer bg-blue-500 text-white rounded-2xl p-3 text-2xl mt-5"
      >
        Rasmiylashtirish
      </button>
    </>
  );
}

export default Orders;
