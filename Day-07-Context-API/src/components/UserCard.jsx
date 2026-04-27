import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserCard() {
  const { user } = useContext(UserContext);

  return (
    <div className="card p-4 shadow">
      <h3>User Info</h3>
      <p>Name: {user}</p>
    </div>
  );
}

export default UserCard;