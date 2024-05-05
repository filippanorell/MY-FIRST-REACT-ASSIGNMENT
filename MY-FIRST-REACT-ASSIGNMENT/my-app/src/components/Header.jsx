import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return <>
        <nav className="container"> 

         <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Todo">Todo</Link>
        </ul>
        </nav>

        <div className="Logo">
            <h1>To-Do App!</h1>
        </div>

    </>
    
  };

  export default Header;