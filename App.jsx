import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Rates from "./Rates";
import About from "./About";
import Contact from "./Contact";
import Feedback from "./Feedback";
function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
<div className=""> {/* IMPORTANT */}
        <Hero lang={lang} />
        <About lang={lang}/>
        <Rates lang={lang} />
        <Contact lang={lang}/>
        <Feedback lang={lang}/>
      </div>
    </>
  );
}

export default App;