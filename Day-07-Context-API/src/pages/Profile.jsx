import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="container mt-4">
      <h2>Profile Page</h2>
      <p>User Name: {user}</p>
    </div>
  );
}

export default Profile;