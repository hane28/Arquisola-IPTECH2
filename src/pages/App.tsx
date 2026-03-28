import { useState } from "react";
import Login from "../auth/login";
import Register from "../auth/Register";
import Home from "./Home";

const App = () => {
  const [page, setPage] = useState<string>("login");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (isLoggedIn && page === "home") {
    return <Home setIsLoggedIn={setIsLoggedIn} setPage={setPage} />;
  }

  if (page === "register") {
    return <Register setPage={setPage} />;
  }

  return (
    <Login setPage={setPage} setIsLoggedIn={setIsLoggedIn} />
  );
};

export default App;