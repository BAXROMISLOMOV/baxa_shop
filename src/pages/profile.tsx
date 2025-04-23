import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsed = JSON.parse(data);
      setName(parsed.name);
      setPhone(parsed.phone);
    }
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h1 className="text-2xl font-bold text-center">Foydalanuvchi Profili</h1>
      <div className="space-y-2">
        <p><strong>Ism:</strong> {name}</p>
        <p><strong>Telefon:</strong> {phone}</p>
      </div>
    </div>
  );
}
