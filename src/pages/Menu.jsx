import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    const [wallPaper, setWallPaper] = useState([]);

    async function dbJuego() {
        const response = await fetch("https://webfight-618a4-default-rtdb.europe-west1.firebasedatabase.app/fondos.json");
        const result = await response.json();
        setWallPaper(result[Math.floor(Math.random() * result.length)]);
        setInterval(() => {
            setWallPaper(result[Math.floor(Math.random() * result.length)]);
            console.log(wallPaper);
        }, 10000);
        return result;
    }
    useEffect(() => {
        dbJuego();
    }, []);

    return (
        <div id="inicio" style={{ backgroundImage: `url(${wallPaper})` }}>
            <Link to={"/Creation"} className="button"><p>Start</p></Link>
            {/* <Link to={"/"} className="link">Portfolio</Link> */}
            {/* <a href="https://github.com/MarcosGutierrezMoya" target="_blank" rel="noopener noreferrer" className="link">Portfolio</a> */}
        </div>
    )
}
