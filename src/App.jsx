import { Route, Routes } from "react-router-dom";
import Home from "./pages/main/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Payments } from "./components/Payments";
import { PostPage } from "./pages/creators/postsEdit/PostPage";
function App() {
  return (
    <>
    <PostPage/>

      {/* {
          //This Will Not show Navbar at payment page as we have sidebar on payment page 
          location.pathname !== '/payment' && <Navbar />
      } */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/payment" element={<Payments />}/>
      </Routes>
    </>
  );
}

export default App;

/*



// m={2} refers to the value of `theme.space[2]`
<Box m={2}>Tomato</Box>

// You can also use custom values
<Box maxW="960px" mx="auto" />

// sets margin `8px` on all viewports and `12px` from the first breakpoint and up
<Box m={[2, 3]} />
*/
