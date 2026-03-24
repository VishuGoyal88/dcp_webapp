function About({ lang }) {

  const text = {
    en: {
      title: "About Us",
      desc: `Daily Crop Prices is a simple platform designed to provide real-time mandi rates
      to farmers and traders. Our goal is to make price information transparent and
      easily accessible. This system helps farmers make better selling decisions by checking updated
      crop prices directly from mandi markets. We aim to digitize mandi information and make agriculture more connected and efficient.`,
    },
    hi: {
      title: "हमारे बारे में",
      desc: `डेली क्रॉप प्राइस एक सरल प्लेटफॉर्म है जो किसानों और व्यापारियों को मंडी के ताज़ा भाव प्रदान करता है। 
      हमारा उद्देश्य मूल्य जानकारी को पारदर्शी और आसानी से उपलब्ध बनाना है। 
      यह सिस्टम किसानों को बेहतर निर्णय लेने में मदद करता है।`,
    },
    pa: {
      title: "ਸਾਡੇ ਬਾਰੇ",
      desc: `ਡੇਲੀ ਕਰਾਪ ਪ੍ਰਾਈਸ ਇੱਕ ਸਧਾਰਣ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਕਿਸਾਨਾਂ ਅਤੇ ਵਪਾਰੀਆਂ ਨੂੰ ਮੰਡੀ ਦੇ ਰੇਟ ਦਿੰਦਾ ਹੈ। 
      ਸਾਡਾ ਮਕਸਦ ਜਾਣਕਾਰੀ ਨੂੰ ਸੌਖਾ ਅਤੇ ਸਪਸ਼ਟ ਬਣਾਉਣਾ ਹੈ।`,
    },
  };

  return (
    <div id="about" className="py-20 bg-gray-100 text-center px-6">

      <h2 className="text-3xl font-bold mb-6 text-green-700">
        {text[lang].title}
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 mb-4 text-lg">
        {text[lang].desc}
      </p>

    </div>
  );
}

export default About;