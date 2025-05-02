import React, { useState } from "react";

const LoginModal = ({ modal, setModal }: { modal: boolean; setModal: (val: boolean) => void }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!modal) return null;

  const handleConfirm = () => {
    console.log("Name:", name, "Phone:", phone);
    setModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-center text-gray-800">Kirish</h2>
        
        <input
          type="text"
          placeholder="Ismingiz"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefon raqamingiz"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={handleConfirm}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Tasdiqlash
        </button>
        <button
          onClick={() => setModal(false)}
          className="text-sm text-gray-500 hover:underline block mx-auto"
        >
          Yopish
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
