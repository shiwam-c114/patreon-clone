import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
=======
import CreatorHome from "./pages/dashboard/Creator/CreatorHome";
>>>>>>> master
import Home from "./pages/main/Home";
import { AllPlansComponents } from "./pages/products/AllPlansComponents";
import Pricing from "./pages/pricing/Pricing"
import Lite from "./pages/products/Lite";
import Premium from "./pages/products/Premium";
import Pro from "./pages/products/Pro";
import { EditPage } from "./pages/creators/edit/EditPage";
function App() {
  return (
   <>
   <EditPage/>
   <Routes>
    <Route path="/" element={<Home/>}/>
<<<<<<< HEAD
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/products/lite" element={<Lite/>}/>
    <Route path="/products/premium" element={<Premium/>}/>
    <Route path="/products/pro" element={<Pro/>}/>
<<<<<<< HEAD
    <Route path="/creatorEditPage" element={<EditPage/>}/>
=======
=======
    <Route path="/creatorhome" element={<CreatorHome />} />
>>>>>>> master
>>>>>>> 2b3595a5a03f40fd279b164bff407939f3db1369
   </Routes>
   </>
  );
}

export default App;
