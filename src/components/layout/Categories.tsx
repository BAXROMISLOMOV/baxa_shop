import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export type CategoriesType = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
};

function Categories() {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  if (categories.length === 0) {
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
    <div className="bg-slate-200">
      <div className="flex items-center py-2 text-lg gap-2 transition-all duration-300 justify-between container mx-auto px-16">
        {categories.map((item) => {
          return (
            <Link key={item.id} href={`/category/${item.id}`}>
              <div>
                <p className="cursor-pointer hover:opacity-60">{item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
