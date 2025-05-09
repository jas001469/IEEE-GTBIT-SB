import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import JoinUs from "./components/JoinUs";
import ChaptersSection from "./components/ChaptersSection";
import ExecomMembers from "./components/Execom";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Gallery from "./pages/gallery"; // Import Gallery Page
import AimSig from "./pages/AimSig"; // Import AimSig Page
import WieSig from "./pages/WieSig"; // Import WieSig Page
import PolarisSig from "./pages/PolarisSig"; // Import PolarisSig Page
import Csig from "./pages/Csig"; // Import Csig Page
import CsChapter from "./pages/CsChapter"; // Import CsChapter Page
import RnDSig from "./pages/RndSig"; // Import RndSig Page
import HackGTBIT from "./pages/HackGtbit";
import Newsletter from "./pages/newsletter"; 
import Magazine from "./pages/magazine"; 
import Achievement from "./pages/Achievement";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <JoinUs />
      <ChaptersSection />
      <Event />
      <ContactUs />
      <Footer/>
     
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/achievements" element={<Achievement />} />
          <Route path="/execom" element={<ExecomMembers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aimsig" element={<AimSig />} />
          <Route path="/wiesig" element={<WieSig/>} />
          <Route path="/polarissig" element={<PolarisSig />} />
          <Route path="/csig" element={<Csig/>} /> 
          <Route path="/cschapter" element={<CsChapter/>} />
          <Route path="/rndsig" element={<RnDSig/>} />
          <Route path="/hackgtbit" element={<HackGTBIT/>} />
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;

