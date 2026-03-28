import { useState } from "react";
import { loginUser } from "./authService";
import "../index.css";

type Props = {
  setPage: (page: string) => void;
  setIsLoggedIn: (value: boolean) => void;
};

const Login = ({ setPage, setIsLoggedIn }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = loginUser(email, password);

    if (user) {
      setIsLoggedIn(true);
      setPage("home");
    } else {
      alert("Invalid account");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Welcome sadsbacky</h1>
      <p className="subtitle">Enter your credentials</p>

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

      <button className="button" onClick={handleLogin}>
        Login
      </button>

      <span className="link" onClick={() => setPage("register")}>
        Create Account
      </span>
    </div>
  );
};

export default Login;