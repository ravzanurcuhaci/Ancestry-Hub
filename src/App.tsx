import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import PersonDetailPage from "./pages/PersonDetailPage";
import FamilyTreePage from "./pages/FamilyTreePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/person/:id" element={<PersonDetailPage />} />
        <Route path="/tree" element={<FamilyTreePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;