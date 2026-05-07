import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

export default Login;