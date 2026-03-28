import "../index.css";

type Props = {
  setIsLoggedIn: (value: boolean) => void;
  setPage: (page: string) => void;
};

const Home = ({ setIsLoggedIn, setPage }: Props) => {
  return (
    <div className="container">
      <h1 className="title">Welcome baby!</h1>

      <button
        className="button"
        onClick={() => {
          setIsLoggedIn(false);
          setPage("login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;