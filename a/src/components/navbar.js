import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ username }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>GamerPro</h1>
      <div>
        {username ? (
          <span>Welcome, {username}</span>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </div>
    </nav>
  );
}
