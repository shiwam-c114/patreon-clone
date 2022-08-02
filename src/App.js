import { Route, Routes } from "react-router-dom";
import CreatorHome from "./pages/dashboard/Creator/CreatorHome";
import Home from "./pages/main/Home";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/creatorhome" element={<CreatorHome />} />
   </Routes>
   </>
  );
}

export default App;
