import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/page";
import Home from "./Home";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
