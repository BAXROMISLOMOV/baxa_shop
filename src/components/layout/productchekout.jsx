import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const router = useRouter();

  const handleConfirmOrder = () => {
    alert("Buyurtma qabul qilindi!");
    router.push("/profile");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Rasmiylashtirish</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Savatchangiz bo'sh. <a href="/" className="text-blue-600 underline">Do‘kon</a>ga qayting.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 relative bg-white rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.jpg"}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 text-sm">
                      Narxi: {(item.price || 0).toLocaleString()} so'm × {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 font-bold">{((item.price || 0) * (item.quantity || 1)).toLocaleString()} so'm</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Umumiy: {totalPrice.toLocaleString()} so'm
            </p>
            <button
              onClick={handleConfirmOrder}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              Buyurtmani tasdiqlash
            </button>
          </div>
        </>
      )}
    </div>
  );
}
