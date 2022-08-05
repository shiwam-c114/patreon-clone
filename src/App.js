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
import { Payments } from "./components/Payments";
import Payouts from "./components/Dashboard/Payouts";
function App() {
  return (
   <>
   {
        //This Will Not show Navbar at payment page as we have sidebar on payment page 
        location.pathname !== '/payment' && <Navbar />
      }
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/products/lite" element={<Lite/>}/>
    <Route path="/products/premium" element={<Premium/>}/>
    <Route path="/products/pro" element={<Pro/>}/>
    <Route path="/creatorEditPage" element={<EditPage/>}/>
    <Route path="/creatorhome" element={<CreatorHome />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/payouts" element={<Payouts />}/>
    <Route path="/payment" element={<Payments />} />
   </Routes>
   <Footer />
   </>

  );
}

export default App;

