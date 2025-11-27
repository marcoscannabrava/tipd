import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/page";
import Home from "./Home/Home";
import Footer from "./footer/Footer";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-[#FBF9F4]">
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
