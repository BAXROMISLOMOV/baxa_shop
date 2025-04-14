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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://nt.softly.uz/api/front/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 bg-slate-100">
        <svg
          className="animate-spin h-8 w-8 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-4">
      <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start container mx-auto px-6">
        {categories.map((item) => (
         <Link key={item.id} href={`/category/${item.id}`}>
            <div className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
               <p className="text-sm md:text-base font-medium">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
