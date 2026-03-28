import { useState } from "react";
import { registerUser } from "./authService";
import "../index.css";

type Props = {
  setPage: (page: string) => void;
};

const Register = ({ setPage }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    registerUser({ email, password });
    alert("Registered!");
    setPage("login");
  };

  return (
    <div className="container">
      <h1 className="title">Create account</h1>
      <p className="subtitle">Join our secure system</p>

      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button" onClick={handleRegister}>
        Sign Up
      </button>

      <span className="link" onClick={() => setPage("login")}>
        Back to Login
      </span>
    </div>
  );
};

export default Register;