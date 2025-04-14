"use client";

import Products from "@/components/layout/Products";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  createdAt: string;
  imageUrl: string;
};

function Product() {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!id) return;
    axios.get(`https://nt.softly.uz/api/front/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!id) return <div className="text-center text-xl mt-10">ID topilmadi</div>;

  if (!product) {
    return (
      <div className="mx-auto container text-center mt-20 text-3xl font-medium text-gray-500">
        Ma'lumot topilmadi
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-full max-w-sm mx-auto">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl shadow-md object-contain w-full h-auto"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-blue-600 mb-2">
            {product.price.toLocaleString()} so'm
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Qoldiq:</span>{" "}
            <span className="text-red-500 font-semibold">{product.stock}</span>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left">
          O‘xshash Mahsulotlar
        </h2>
        <Products />
      </div>
    </div>
  );
}

export default Product;
