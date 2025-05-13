import React, { use, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: false,
    }));
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: false,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      emailRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
      return;
    }

    onLogin();

    navigate("/library");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <p className="text-lg mb-8">Please enter your credentials to log in.</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-2 rounded w-64"
          onChange={handleChangeEmail}
          value={email}
          ref={emailRef}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded w-64"
          onChange={handleChangePassword}
          value={password}
          ref={passwordRef}
        ></input>
        <button className="bg-blue-700 text-white font-extrabold p-3 rounded hover:bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
