import { useEffect, useState } from "react";

function Hero({ lang }) {
  const images = [
    "/Grain1.jpg",
    "/grain2.jpg",
    "/grain3.jpg",
    "/grain4.jpg",
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const text = {
    en: {
      title: "Welcome to Daily Crop Prices",
      subtitle: "Get real-time mandi rates",
    },
    hi: {
      title: "दैनिक फसल मूल्य में आपका स्वागत है",
      subtitle: "मंडी के ताज़ा भाव देखें",
    },
    pa: {
      title: "ਰੋਜ਼ਾਨਾ ਫਸਲ ਕੀਮਤਾਂ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
      subtitle: "ਮੰਡੀ ਰੇਟਸ ਵੇਖੋ",
    },
  };

  return (
    <div className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <img
        src={images[index]}
        className="absolute w-full h-full object-cover object-top transition-all duration-1000 ease-in-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Box */}
      <div className="relative text-center text-white px-6 py-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          {text[lang].title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-lg text-gray-200 mb-4">
          {text[lang].subtitle}
        </p>

        {/* Button */}
        <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition">
         <a href="http://localhost/dcp-app/login.php"target="_blank">Admin</a> 
        </button>

      </div>

    </div>
  );
}

export default Hero;