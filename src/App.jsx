import Home from "./components/pages/home.jsx"
import "./App.css"
import Header from "./components/headerandfooter/header.jsx"
import Footer from "./components/headerandfooter/footer.jsx"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/pages/about.jsx";
import Projects from "./components/pages/projects.jsx";
import Contactus from "./components/pages/contactus.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
