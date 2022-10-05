import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import About from "./Pages/About/About";
import AboutTwo from "./Pages/About/AboutTwo";
import Blog from "./Pages/Blog/Blog";
import BlogTwo from "./Pages/Blog/BlogTwo";
import Contact from "./Pages/Contact/Contact";
import ContactTwo from "./Pages/Contact/ContactTwo";
import Home from "./Pages/Home/HomeTwo";
import HomePage from "./Pages/Home/HomePage";
import HomeTwo from "./Pages/Home/HomeTwo";
import Portfilo from "./Pages/Portfilo/Portfilo";
import PortfiloTwo from "./Pages/Portfilo/PortfiloTwo";
import Resume from "./Pages/Resume/Resume";
import ResumeTwo from "./Pages/Resume/ResumeTwo";
import NotFound from "./Share/NotFound";
import Preview from "./Share/Preview";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContextProvider>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={HomeTwo} />
              <Route path="/home" element={<HomeTwo />}>
              <Route index element={<AboutTwo />} />
              <Route path="homePage" element={<HomeTwo />} />
              <Route path="resume" element={<ResumeTwo />} />
              <Route path="about" element={<AboutTwo />} />
              <Route path="contact" element={<ContactTwo />} />
              <Route path="blogs" element={<BlogTwo />} />
              <Route path="works" element={<PortfiloTwo />} />
            </Route>
            <Route path="/homeTwo" element={<HomeTwo />}>
              <Route index element={<AboutTwo />} />
              <Route path="about" element={<AboutTwo />} />
              <Route path="resume" element={<ResumeTwo />} />
              <Route path="contact" element={<ContactTwo />} />
              <Route path="blogs" element={<BlogTwo />} />
              <Route path="works" element={<PortfiloTwo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </ContextProvider>
    </>
  );
}

export default App;
