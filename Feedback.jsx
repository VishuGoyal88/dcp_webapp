import { useState } from "react";

function Feedback() {
  const [message, setMessage] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://localhost/dcp-app/save_feedback.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `message=${message}`
  })
    .then(res => res.text())
    .then(() => {
      alert("Feedback Saved ✅");
      setMessage("");
    });
};
  return (
    <div id="feedback" className="py-20 bg-gray-100 text-center px-6">

      <h2 className="text-3xl font-bold mb-6 text-green-700">
        Feedback
      </h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">

        <textarea
          className="w-full p-3 border rounded mb-4"
          placeholder="Write your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Feedback;