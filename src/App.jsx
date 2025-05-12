import Dashboard from "./components/dashcboard/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Protected from "./components/protected/Protected";
import { useState } from "react";
import NotFound from "./components/notFound/NotFound";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    setIsSignedIn(true);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/library"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard onLogout={handleLogout} />
            </Protected>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
