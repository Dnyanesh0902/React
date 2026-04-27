import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h4 className="text-white">Employee App</h4>

      <div>
        <Link to="/" className="btn btn-outline-light me-2">Home</Link>
        <Link to="/profile" className="btn btn-outline-light me-2">Profile</Link>
      </div>

      <span className="text-white">👤 {user}</span>
    </nav>
  );
}

export default Navbar;