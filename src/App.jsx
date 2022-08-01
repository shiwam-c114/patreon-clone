import { Route, Routes } from "react-router-dom";
import Home from "./pages/main/Home";
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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