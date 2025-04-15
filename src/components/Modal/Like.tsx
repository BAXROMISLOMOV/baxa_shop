import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/types";
import { removeLike } from "@/store/slices/like.slice";
import Image from "next/image";
import { ProductType } from "../layout/Products";
type Props = {
  open: boolean;
  onClose: () => void;
};

const LikeModal: React.FC<Props> = ({ open, onClose }) => {
  const likedItems = useSelector((state: RootState) => state.like.items);
  const dispatch = useDispatch();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold">Yoqtirganlar</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-red-500"
          >
            &times;
          </button>
        </div>

        {likedItems.length > 0 ? (
          <ul className="space-y-4">
            {likedItems.map((item: ProductType) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-100 rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.imageUrl || "/placeholder.jpg"}
                      alt={item.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.price.toLocaleString()} so'm
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeLike(item.id))}
                  className="text-red-600 text-lg font-bold hover:text-red-800"
                >
                  &#10005;
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Hech narsa yoqmayapti hali 🙃</p>
        )}
      </div>
    </div>
  );
};

export default LikeModal;
