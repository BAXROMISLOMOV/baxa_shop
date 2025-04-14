import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Like from "../icons/Like";
import Shop from "../icons/Shop";
import { addToCart } from "@/store/slices/cart.slice";
import { useDispatch } from "react-redux";
export type ProductType = {
  image: string;
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
};
function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/products?page=1&limit=10`)
      .then((res) => {
        console.log(res.data.items);
        setProducts(res.data.items);
      });
  }, []);

  const CartQoshish = (product: ProductType) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="grid grid-cols-4 container w-full mx-auto px-6 py-4">
      {products.map((item) => {
        return (
          <div key={item.id}>
            <div className="w-64 flex flex-col justify-between h-[400px] relative mb-5 p-6 cursor-pointer bg-white hover:shadow-lg rounded-2xl">
              <Link href={`/product/${item.id}`}>
                <Image
                  width={200}
                  height={250}
                  src={item.imageUrl}
                  alt="rasm"
                />
                <h2 className="my-2 cursor-pointer">{item.name}</h2>
                <p className="j opacity-90 text-sm">{item.description}</p>
              </Link>
              <div className="flex items-center mt-10 justify-between">
                <p className="cursor-pointer">
                  <span className="font-bold text-lg">
                    {item.price.toLocaleString("ru")}
                  </span>{" "}
                  som
                </p>
                <div className="border-2 cursor-pointer border-amber-500 p-1 rounded-xl">
                  <button onClick={() => CartQoshish(item)}>
                    <Shop />
                  
                  </button>
                  <button className="absolute right-3 top-1">
                    <Like />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
