import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <Link to="/admin">Admin</Link>
            </li>

            <li>
              <button onClick={logout}>
                Log Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Log In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;