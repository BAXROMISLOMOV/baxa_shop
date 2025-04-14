import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";

export type BannerType = {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
};

const Banner = () => {
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("https://nt.softly.uz/api/front/banners");
        setBanners(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex, banners]);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); 
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNext = () => {
    stopAutoplay();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    stopAutoplay();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="mx-auto px-4">
      <div
        className="relative w-full max-w-[1400px] mx-auto mt-6 h-[250px] md:h-[400px] overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 ease-in-out"
        aria-live="polite"
      >
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 z-20 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-black rounded-full shadow-md transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 z-20 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-black rounded-full shadow-md transition"
        >
          →
        </button>
        {loading ? (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xl rounded-2xl animate-pulse">
            <svg
              className="w-12 h-12 text-white animate-spin"
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
        ) : banners.length > 0 ? (
          <div className="w-full h-full relative transition-all duration-700 ease-in-out">
            <Image
              src={banners[currentIndex].imageUrl}
              alt={banners[currentIndex].title}
              layout="fill"
              className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-2xl flex items-end px-6 pb-6">
              <h2 className="text-white text-xl md:text-3xl font-bold drop-shadow-md">
                {banners[currentIndex].title}
              </h2>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-white bg-gray-800 rounded-2xl">
            <p>No banners found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
