import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
