import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./1.Navbar/Navbar";
import AnimatedPage from "./11.Framer/AnimatedPage";
import ScrollButton from "./8.Scroll-To-Top/ScrollButton";
import Footer from "./9.Footer/Footer";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <BrowserRouter>
      <ToastContainer autoClose={2000} className="toast-container" />
        <Navbar />
        <div
          className={`progress fixed-top  ${scrollTop === 0 ? "d-none" : ""}`}
          style={{ height: "2px" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${scrollTop}%`, background: "#01368a" }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <AnimatedPage></AnimatedPage>
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
