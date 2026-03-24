import { useState } from "react";
import logo from "./dcplogo.png";

function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  // 🔥 SCROLL FUNCTION
const scrollTo = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("Element not found:", id);
  }

  setOpen(false);
};

  const translations = {
    en: {
      title: "Daily Crop Prices",
      home: "Home",
      about: "About",
      prices: "Prices",
      contact: "Contact",
      feedback: "feedback",
    },
    hi: {
      title: "दैनिक फसल मूल्य",
      home: "होम",
      about: "हमारे बारे में",
      prices: "कीमतें",
      contact: "संपर्क",
      feedback: "प्रतिक्रिया",
    },
    pa: {
      title: "ਰੋਜ਼ਾਨਾ ਫਸਲ ਕੀਮਤਾਂ",
      home: "ਘਰ",
      about: "ਸਾਡੇ ਬਾਰੇ",
      prices: "ਕੀਮਤਾਂ",
      contact: "ਸੰਪਰਕ",
      feedback: "ਫੀਡਬੈਕ",
    },
  };

  const t = translations[lang];

  return (
    <nav id="home" className="bg-green-600 text-white px-8 py-4 flex items-center relative fixed w-full top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-11 w-20 rounded" />
        <h1 className="text-lg font-semibold tracking-wide">
          {t.title}
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 ml-auto text-sm font-medium uppercase tracking-wide">
        <li onClick={() => scrollTo("home")} className="cursor-pointer">{t.home}</li>
        <li onClick={() => scrollTo("about")} className="cursor-pointer">{t.about}</li>
        <li onClick={() => scrollTo("prices")} className="cursor-pointer">{t.prices}</li>
        <li onClick={() => scrollTo("contact")} className="cursor-pointer">{t.contact}</li>
        <li onClick={() => scrollTo("feedback")} className="cursor-pointer">{t.feedback}</li>
      </ul>

      {/* Language */}
      <div className="hidden md:flex gap-2 ml-4 ">
        <button onClick={() => setLang("en")} className="px-2 py-1 bg-green-700 rounded hover:bg-amber-300">EN</button>
        <button onClick={() => setLang("hi")} className="px-2 py-1 bg-green-700 rounded hover:bg-amber-300">हिंदी</button>
        <button onClick={() => setLang("pa")} className="px-2 py-1 bg-green-700 rounded hover:bg-amber-300">ਪੰਜਾਬੀ</button>
      </div>

      {/* Mobile */}
      <button className="ml-auto md:hidden text-2xl" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-green-700 transform transition-transform duration-300 z-50 
        ${open ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex justify-between p-4 ">
          <div className="flex gap-2 hover:bg-amber-300">
            <button onClick={() => setLang("en")}>EN</button>
            <button onClick={() => setLang("hi")}>हिंदी</button>
            <button onClick={() => setLang("pa")}>ਪੰਜਾਬੀ</button>
          </div>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <ul className="flex flex-col gap-6 px-6">
          <li onClick={() => scrollTo("home")}>{t.home}</li>
          <li onClick={() => scrollTo("about")}>{t.about}</li>
          <li onClick={() => scrollTo("prices")}>{t.prices}</li>
          <li onClick={() => scrollTo("contact")}>{t.contact}</li>
          <li onClick={() => scrollTo("feedback")}>{t.feedback}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;