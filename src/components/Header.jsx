import React from "react";



const estiloHeader = {
    color: "white",
    backgroundColor: "black",
    fontSize: "40px",
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Jersey 10', sans-serif",
    textShadow: "2px 2px 4px #000000",
  };
const Header = () => {
    return (
        <header>
        <h1 style={estiloHeader}>ESCRIBE UNA NOTA :3</h1>
        </header>
    );
    };

export default Header;