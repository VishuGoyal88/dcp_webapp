function Contact({ lang }) {

  const text = {
    en: {
      title: "Contact Us",
      address: "Address: Budhlada Mandi, Punjab",
      email: "Email: dailycropprices@gmail.com",
    },
    hi: {
      title: "संपर्क करें",
      address: "पता: बुढलाडा मंडी, पंजाब",
      email: "ईमेल: dailycropprices@gmail.com",
    },
    pa: {
      title: "ਸੰਪਰਕ ਕਰੋ",
      address: "ਪਤਾ: ਬੁੱਧਲਾਡਾ ਮੰਡੀ, ਪੰਜਾਬ",
      email: "ਈਮੇਲ: dailycropprices@gmail.com",
    },
  };

  return (
    <div id="contact" className="py-20 bg-white text-center px-6">

      <h2 className="text-3xl font-bold mb-6 text-green-700">
        {text[lang].title}
      </h2>

      <div className="max-w-xl mx-auto text-gray-600 space-y-3">
        <p>📍 {text[lang].address}</p>
        <p>📧 {text[lang].email}</p>
      </div>

    </div>
  );
}

export default Contact;