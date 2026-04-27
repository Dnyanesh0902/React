import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h4 className="text-white">My App</h4>

      <div>
        <Link to="/" className="btn btn-outline-light me-2">Home</Link>
        <Link to="/about" className="btn btn-outline-light me-2">About</Link>
        <Link to="/contact" className="btn btn-outline-light">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;