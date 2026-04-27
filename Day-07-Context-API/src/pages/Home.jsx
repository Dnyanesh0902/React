import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="container mt-4">
      <h2>Welcome {user} 👋</h2>

      <button
        className="btn btn-primary mt-3"
        onClick={() => setUser("Admin")}
      >
        Change User
      </button>

      <div className="mt-4">
        <UserCard />
      </div>
    </div>
  );
}

export default Home;