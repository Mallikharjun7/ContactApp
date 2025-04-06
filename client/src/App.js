import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Homepage from "./pages/Homepage";
import View from "./pages/View";
import SingleContact from "./pages/SingleContact";
import Update from "./pages/Update";
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/View" element={<View />} />
        <Route path="/View/:id" element={<SingleContact />} />
        <Route path="/update/:id" element={<Update />} /> {/* Fixed Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
