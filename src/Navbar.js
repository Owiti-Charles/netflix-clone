import React, {useEffect, useState} from "react";
import "./Navbar.css"

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {

        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100 ){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav_user"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="user"
      />
    </div>
  );
}

export default Navbar;
