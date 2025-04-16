import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart } from "@/store/slices/cart.slice";
import { toggleLike } from "@/store/slices/like.slice";
import Like from "../icons/Like";
import Shop from "../icons/Shop";

export type ProductType = {
  quantity: ReactNode;
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

  const likedItems = useSelector((state: RootState) => state.like.items);

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/products?page=1&limit=10`)
      .then((res) => {
        setProducts(res.data.items);
      });
  }, []);

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const handleToggleLike = (product: ProductType) => {
    dispatch(toggleLike(product));
  };

  return (
    <>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto px-6 py-4">
        {products.map((item) => {
          const isLiked = likedItems.some((liked) => liked.id === item.id);

          return (
            <div key={item.id} className="w-full flex flex-col justify-between h-[420px] relative p-6 bg-white hover:shadow-lg rounded-2xl">
              <Link href={`/product/${item.id}`}>
                <Image
                  width={200}
                  height={250}
                  src={item.imageUrl}
                  alt={item.name}
                  className="mx-auto"
                />
                <h2 className="my-2 text-center font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </Link>

              <div className="flex items-center justify-between mt-6">
                <p>
                  <span className="font-bold text-lg">
                    {item.price.toLocaleString("ru")}
                  </span>{" "}
                  so'm
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="border-2 border-amber-500 p-1 rounded-xl"
                >
                  <Shop />
                </button>
              </div>

              <button
                onClick={() => handleToggleLike(item)}
                className="absolute top-4 right-4"
              >
                <Like color={isLiked ? "red" : "gray"} />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
