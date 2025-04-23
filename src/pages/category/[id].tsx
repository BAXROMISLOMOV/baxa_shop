"use client";
import Like from "@/components/icons/Like";
import Shop from "@/components/icons/Shop";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationPrevious
} from "@/components/ui/pagination";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type CategoriesPage = {
  items: [
    {
      id: number;
      name: string;
      description: string;
      price: number;
      stock: number;
      categoryId: number;
      createdAt: string;
      imageUrl: string;
    }
  ];
  page: number;
  limit: number;
  totalItems: number;
};
function CategorieProduct() {
  const [categoriaPage, setCategoriaPage] = useState<CategoriesPage>();
  const [page, setPage] = useState<number>(1);

  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    if (!id) return;
    axios

      .get(
        `https://nt.softly.uz/api/front/products?categoryId=${id}&page=${page}&limit=4`
      )
      .then((res) => {
        console.log(res.data);
        setCategoriaPage(res.data);
      });
  }, [id, page]);
  if (!id) return <div>ID topilmadi</div>;

  if (!categoriaPage) {
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
  if (categoriaPage.totalItems === 0) {
    return (
      <div className="mx-auto container text-center mt-20 text-4xl ">
        Malumot Yoq
      </div>
    );
  }
  const total = Math.ceil(categoriaPage.totalItems / 4);

  return (
    <div className="flex flex-wrap justify-around gap-10 container w-full mx-auto px-16 py-4">
      {categoriaPage.items.map((item) => {
        return (
          <div
            key={item.id}
            className="w-64 h-[400px] flex flex-col justify-between relative mb-5 p-6 cursor-pointer bg-white hover:shadow-lg rounded-2xl"
          >
            <Link href={`/product/${item.id}`}>
              <Image width={200} height={250} src={item.imageUrl} alt="rasm" />

              <h2 className="my-2 text-2xl font-bold cursor-pointer">
                {item.name}
              </h2>
              <p className="j opacity-90 ">{item.description}</p>
            </Link>
            <div className="flex items-center justify-between">
              <p className="cursor-pointer">
                <span className="font-bold text-lg">
                  {item.price.toLocaleString("ru")}
                </span>{" "}
                som
              </p>
              <div className="border-2 cursor-pointer border-amber-500 p-1 rounded-xl">
                <button>
                  <Shop />
                </button>
                <button className="absolute right-3 top-1">
                  <Like />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination>
        <PaginationContent>
          {page > 1 && (
            <PaginationItem onClick={() => setPage(page - 1)}> 
              <PaginationPrevious  />
              {/* <a href="#">
              <Strelka />
            </a> */}
            </PaginationItem>
          )}
          {page > 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
          {page < total && (
            <PaginationItem onClick={() => setPage(page + 1)}>
              <PaginationPrevious href="#" />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default CategorieProduct;
