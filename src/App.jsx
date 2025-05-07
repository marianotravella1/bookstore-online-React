import Dashboard from "./components/dashcboard/Dashboard";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import Login from "./components/login/Login";
const App = () => {
  <BrowserRouter>
    <Routes path="/" element={<Navigate to="login" />} />
    <Routes path="login" element={<Login />} />
    <Routes path="library" element={<Dashboard />} />
  </BrowserRouter>;
 
};

export default App;
