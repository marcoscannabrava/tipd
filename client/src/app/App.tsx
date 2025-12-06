import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/page";
import Home from "./Home/Home";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-[#FBF9F4]">
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
