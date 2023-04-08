import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const { login } = useAuth();
  const [name, setname] = useState("");
  const navigate = useNavigate();

  return (
    <div className="center">
      <h1>Login</h1>

      <label>Username</label>

      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="enter username"
      />
      <button
        onClick={() => {
          login(name);
          navigate("/About", { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
