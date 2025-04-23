import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Shop from "../icons/Shop";
import { addToCart } from "@/store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "./Products";
import { like } from "@/store/slices/like.slice copy";

function Tavsiya() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/products?page=1&limit=10`)
      .then((res) => setProducts(res.data.items))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const CartQoshish = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const Liked = (product: ProductType) => {
    dispatch(like(product));
  };

  if (products.length === 0) {
    return (
      <div className="cssload-container">
        <ul className="cssload-flex-container">
          <li>
            <span className="cssload-loading cssload-one"></span>
            <span className="cssload-loading cssload-two"></span>
            <span className="cssload-loading-center"></span>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-auto gap-4 container w-full mx-auto px-6 py-4">
      {products.slice(1, 10).map((item) => {

        return (
          <div
            key={item.id}
            className="w-full max-w-5xl flex items-center gap-5 border justify-between relative p-6 cursor-pointer bg-white hover:shadow-lg rounded-2xl mx-auto"
          >
            <Link href={`/product/${item.id}`} className="flex items-center gap-5">
              <Image width={80} height={80} src={item.imageUrl} alt="rasm" />
              <div>
                <h2 className="my-1 text-2xl">{item.name}</h2>
                <p className="opacity-90 text-sm">{item.description}</p>
              </div>
            </Link>

            <div className="flex items-center justify-between">
              <div className="pr-10 flex flex-col gap-2 text-end">
                <p>
                  <span className="font-bold text-2xl">
                    {item.price.toLocaleString("ru")}
                  </span>{" "}
                  so'm
                </p>
                <div
                  onClick={() => CartQoshish(item)}
                  className="border-2 flex items-center gap-2 bg-blue-500 text-white border-blue-500 p-2 rounded-xl cursor-pointer"
                >
                  Savatga Qoshish <Shop />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tavsiya;
