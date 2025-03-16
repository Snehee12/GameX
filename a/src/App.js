import "./styles/styling.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import {HomePage} from "./pages/home";
import {Form} from "./pages/login";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <Router>
      <Navbar username={username} />
      <Routes>
        <Route path="/" element={<HomePage username={username} />} />
        <Route path="/login" element={<Form setUsername={setUsername} />} />
      </Routes>
    </Router>
  );
}

export default App;
