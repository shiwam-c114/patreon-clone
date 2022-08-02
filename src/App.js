import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import Home from "./pages/main/Home";
import { AllPlansComponents } from "./pages/products/AllPlansComponents";
import Pricing from "./pages/pricing/Pricing"
import Lite from "./pages/products/Lite";
import Premium from "./pages/products/Premium";
import Pro from "./pages/products/Pro";
function App() {
  return (
   <>
   <Pro/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
   </Routes>
   </>
  );
}

export default App;
