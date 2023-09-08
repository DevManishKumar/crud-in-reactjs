import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
   
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to={"/"}> UserList </Link>
        </div>
      
        <div className="nav-links">
          <Link to={"/create"}>Create New User</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
