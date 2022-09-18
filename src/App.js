import { Home } from "@material-ui/icons";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
