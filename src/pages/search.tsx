import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

function SearchPage() {
  const router = useRouter();
  const { query, page } = router.query;

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://nt.softly.uz/api/front/products/search`, {
          params: {
            q: query,
            page: page || 1,
          },
        })
        .then((res) => {
          setProducts(res.data.products);
          setTotalPages(res.data.totalPages); 
        });
    }
  }, [query, page]);

  const goToPage = (pageNumber: number) => {
    router.push(`/search?query=${query}&page=${pageNumber}`);
  };

  return (
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-xl font-semibold mb-4">Qidiruv: "{query}"</h1>
      {products.length === 0 ? (
        <p>Hech narsa topilmadi.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product: any) => (
            <div key={product.id} className="bg-white shadow p-3 rounded">
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 border rounded ${
              Number(page) === i + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
