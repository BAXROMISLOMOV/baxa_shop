import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Products from "@/components/layout/Products";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart.slice";

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

type Props = {
  product: Product;
};

function ProductPage({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increment = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuy = () => {
    dispatch(addToCart({
      ...product,
      image: "",
      quantity: undefined
    }));
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>

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
            <p className="text-lg mb-4">
              <span className="font-semibold text-gray-700">Qoldiq:</span>{" "}
              <span className="text-red-500 font-semibold">{product.stock}</span>
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <button
                onClick={decrement}
                className="px-4 py-2 bg-gray-200 text-xl rounded-lg"
              >
                −
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={increment}
                className="px-4 py-2 bg-gray-200 text-xl rounded-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={handleBuy}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Sotib olish
            </button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left">
            O‘xshash Mahsulotlar
          </h2>
          <Products />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://nt.softly.uz/api/front/products/${id}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
