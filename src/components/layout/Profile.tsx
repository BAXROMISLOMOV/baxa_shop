import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface UserData {
  name: string;
  phone: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/");
    }
  }, []);

  if (!user) return <p>Yuklanmoqda...</p>;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Profil Sahifasi</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Ism:</span> {user.name}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Telefon:</span> {user.phone}
      </p>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/");
        }}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Chiqish
      </button>
    </div>
  );
};

export default ProfilePage;
