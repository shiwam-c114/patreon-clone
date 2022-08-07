import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import CreatorHome from "./pages/dashboard/Creator/CreatorHome";
import Home from "./pages/main/Home";
import { AllPlansComponents } from "./pages/products/AllPlansComponents";
import Pricing from "./pages/pricing/Pricing"
import Lite from "./pages/products/Lite";
import Premium from "./pages/products/Premium";
import Pro from "./pages/products/Pro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Video from "./pages/creators/Video";
import Podcast from "./pages/creators/Podcast";
import Music from "./pages/creators/Music";
import VisualArtist from "./pages/creators/VisualArtist";
import Community from "./pages/creators/Community";
import Writing from "./pages/creators/Writing";
import Gaming from "./pages/creators/Gaming";
import Nonprofits from "./pages/creators/Nonprofits";
import Toturial from "./pages/creators/Toturial";
import LocalBisnesses from "./pages/creators/LocalBisnesses";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products/lite" element={<Lite />} />
        <Route path="/products/premium" element={<Premium />} />
        <Route path="/products/pro" element={<Pro />} />
        <Route path="/creatorhome" element={<CreatorHome />} />
        <Route path="Podcast" element={<Podcast />} />
        <Route path="Music" element={<Music />} />
        <Route path="Video" element={<Video />} />
        <Route path="VisualArtist" element={<VisualArtist />} />
        <Route path="Community" element={<Community />} />
        <Route path="Writing" element={<Writing />} />
        <Route path="Gaming" element={<Gaming />} />
        <Route path="Nonprofits" element={<Nonprofits />} />
        <Route path="Toturial" element={<Toturial />} />
        <Route path="LocalBisnesses" element={<LocalBisnesses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
