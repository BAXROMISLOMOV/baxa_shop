function Footer() {
  return (
    <footer className="bg-slate-100 text-gray-800 font-sans">
      <div className="container mx-auto px-6 md:px-12 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        <div className="flex flex-col gap-4">
          <p className="text-base font-medium">Savolingiz bormi? Bizga qo‘ng‘iroq qiling:</p>
          <a
            href="tel:+998944085444"
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition"
          >
            +99838744025
          </a>
          <div className="flex gap-3 mt-2">
            <span className="text-sm text-gray-500">Ijtimoiy tarmoqlar</span>
          </div>
          <p className="underline font-semibold cursor-pointer hover:text-blue-700 transition">
           <a href="https://www.google.com/maps/@41.320296,69.2996732,15z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"> Do‘kon manzillari </a>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl mb-2">Bizning kompaniya</h3>
          <p className="hover:text-blue-600 cursor-pointer">Yuridik shaxslar uchun</p>
          <p className="hover:text-blue-600 cursor-pointer">Kompaniya haqida</p>
          <p className="hover:text-blue-600 cursor-pointer">Yangiliklar</p>
          <p className="hover:text-blue-600 cursor-pointer">IMEI raqamini tekshirish</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl mb-2">Foydali ma'lumotlar</h3>
          <p className="hover:text-blue-600 cursor-pointer">Bepul yetkazib berish</p>
          <p className="hover:text-blue-600 cursor-pointer">Ishga joylashish</p>
          <p className="hover:text-blue-600 cursor-pointer">Shaxsiy kabinet</p>
          <p className="hover:text-blue-600 cursor-pointer">Bog‘lanish</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl mb-2">Xaridorlarga yordam</h3>
          <p className="hover:text-blue-600 cursor-pointer">Mahsulotni qaytarish</p>
          <p className="hover:text-blue-600 cursor-pointer">Mahsulot kafolati</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-xl mb-2">Mobil ilova</h3>
          <span className="text-sm text-gray-500">Yuklab olish havolalari tez orada...</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
