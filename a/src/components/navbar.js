import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";


export const Navbar = () => {
  // const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   navigate("/login");
  // };

  return (
    <nav className="navbar">
        <h2>Clover</h2>
        <div className="nav-buttons">
          <div className="single-button"><button><IoMdHome className="icons"/>Home</button></div>
          <div className="single-button"><button><FaSearch  className="icons"/>Explore</button></div>
          <div className="single-button"><button><BsBriefcaseFill  className="icons"/>Jobs</button></div>
          <div className="single-button"><button><AiFillMessage  className="icons"/>Messages</button></div>
          <div className="single-button"><button><BsPersonCircle  className="icons"/>Profile</button></div>
        </div>
      </nav>
  );
}
