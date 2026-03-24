import { useState } from "react";

function Rates({ lang }) {

  const [commodity, setcommodity] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost/dcp-app/api.php?crop=${commodity}`)
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err));
  };

  const text = {
    en: {
      title: "Check Mandi Prices",
      btn: "Search",
      nodata: "No Data Found",
    },
    hi: {
      title: "मंडी भाव देखें",
      btn: "खोजें",
      nodata: "कोई डेटा नहीं मिला",
    },
    pa: {
      title: "ਮੰਡੀ ਭਾਵ ਵੇਖੋ",
      btn: "ਖੋਜੋ",
      nodata: "ਕੋਈ ਡਾਟਾ ਨਹੀਂ ਮਿਲਿਆ",
    },
  };

  return (
    <div id="prices" className="p-8 bg-gray-100 min-h-80">

      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        {text[lang].title}
      </h2>

      <div className="flex gap-4 justify-center">

        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-amber-300 font-bold">
          {text[lang].btn}
        </button>
      </div>

      <div className="mt-8">
        <table className="w-full bg-white shadow rounded">

          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-2">Crop</th>
              <th className="p-2">Price</th>
              <th className="p-2">Market</th>
              <th className="p-2">State</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="p-2">{item.crop}</td>
                  <td className="p-2">₹{item.price}</td>
                  <td className="p-2">{item.market}</td>
                  <td className="p-2">{item.state}</td>
                  <td className="p-2">{item.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  {text[lang].nodata}
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Rates;