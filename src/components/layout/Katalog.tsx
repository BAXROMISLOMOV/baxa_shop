import { useState } from "react";
import Menu from "../icons/Menu";
import Ochirish from "./cross";

export default function Katalog() {
  const [katalog, setKatalog] = useState(false);
  return (
    <button
      onClick={() => {
        setKatalog(katalog === false ? true : false);
      }}
      className="p-2 cursor-pointer bg-yellow-500 rounded-xl flex items-center gap-2 w-32 justify-center"
    >
      {katalog === true ? <Ochirish /> : <Menu />}
      Katalog
    </button>
  );
}
