import Categories from "./Categories";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="bg-black text-sm">
        <header className="container w-full mx-auto p-1 px-16 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-7">
             <a href="https://www.google.com/maps/@41.320296,69.2996732,15z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D">
              <div className="flex items-center gap-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#currentColor"
                  fill="none"
                  
                >
                  <path
                    d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Toshkent
              </div>
              </a>
              <div className="flex items-center gap-5 ">
                <p className="cursor-pointer hover:bg-gray-700 rounded-xl px-2 py-1 ">
                  Bizning dokonlarimiz
                </p>
                <p className="cursor-pointer hover:bg-gray-700 rounded-xl px-2 py-1 ">
                  Yuridik shaxslar uchun
                </p>
                <p className="cursor-pointer hover:bg-gray-700 rounded-xl px-2 py-1 ">
                  Tolov usullari
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <h2 className="cursor-pointer">Aloqa markazi :</h2>
                <a className="cursor-pointer text-xl" href="tel:+998944085444">
                  +998938744025
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Navbar />
      <Categories />
    </>
  );
}
