import React from "react";
//import Logo from '../components/images/1.png'
import Logo from "../components/images/1.png";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={Logo} alt="ToDoList"></img>
        </div>
      </nav>
    </header>
  );
};

export default Header;
