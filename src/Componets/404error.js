import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="center">
      <h1>404</h1>
      <h1>Notfound</h1>
      <button onClick={() => navigate("/")}>back to home page</button>
    </div>
  );
};

export default Notfound;
