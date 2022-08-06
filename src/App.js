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
import { EditPage } from "./pages/creators/edit/EditPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PostPage } from "./pages/creators/postsEdit/PostPage";
import { FeedCard } from "./components/patron/feed/FeedCard";
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<FeedCard/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/products/lite" element={<Lite/>}/>
    <Route path="/products/premium" element={<Premium/>}/>
    <Route path="/products/pro" element={<Pro/>}/>
    <Route path="/creatorEditPage" element={<EditPage/>}/>
    <Route path="/creatorhome" element={<CreatorHome />} />
   </Routes>
   {/* <Footer /> */}
   </>
  );
}

export default App;
