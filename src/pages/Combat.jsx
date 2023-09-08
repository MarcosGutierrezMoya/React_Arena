import { StatsContext } from "./context/statsContext";
import { useContext, useEffect, useState } from "react";

import Helmet from "./components/ArmorComponents/Helmet";
import Gauntlet from "./components/ArmorComponents/Gauntlet";
import Body from "./components/ArmorComponents/Body";
import Boots from "./components/ArmorComponents/Boots";
import Sword2h from "./components/weaponComponents/Sword2h";
import Sword1h from "./components/weaponComponents/Sword1h";
import Shield from "./components/weaponComponents/Shield";
import Bow from "./components/weaponComponents/Bow";

import Enemy from "./components/Enemy";
import Stats from "./components/creationComponents/Stats";
import { Link } from "react-router-dom";
import Abilities from "./components/Abilities/Abilities";
import Boss from "./components/Boss";

export default function Combat() {

    const { info, numEnemies, logs, charaAttack } = useContext(StatsContext);

    const [wallPaper, setWallPaper] = useState([]);

    async function dbJuego() {
        const response = await fetch("https://webfight-618a4-default-rtdb.europe-west1.firebasedatabase.app/coloseum.json");
        const result = await response.json();
        setWallPaper(result[Math.floor(Math.random() * result.length)]);
        // setInterval(() => {
        //     setWallPaper(result[Math.floor(Math.random() * result.length)]);
        //     console.log(wallPaper);
        // }, 10000);
        return result;
    }
    useEffect(() => {
        dbJuego();
    }, [numEnemies]);

    return (
        <div className="fight" style={{backgroundImage:`url(${wallPaper})`}}>
            <section className="logSection">
                <h4>{numEnemies}</h4>
                <div className="logCombat">{
                    logs?.map((log,i)=>{
                        return(
                            <p key={i} style={{fontSize:"0.8em"}}>{log}</p>
                        )
                    }).reverse()
                }</div>
                <Stats />
                <Link to={"/Creation"} className="linkBack">Back</Link>
                
            </section>
            <section className="equipment">
                <h1>{info.name}</h1>
                <div className="hpBar" style={{width:`${info.HP * 10 / 100}em`}}></div>
                <div className="attacks">
                    <button onClick={charaAttack} className="atkButton" >Attack</button>
                    <Abilities />
                </div>
                <div className="upperEquipmentZone">
                    {info.class === "berserker" ? <Sword2h creation={false} /> :
                    info.class === "warrior" ? <Sword1h creation={false} /> :
                    info.class === "archer" ? <Bow creation={false} /> : null}
                    <Helmet creation={false} />
                    {info.class === "berserker" ? <Sword2h creation={false} /> :
                    info.class === "warrior" ? <Shield creation={false} /> :
                    info.class === "archer" ? <Bow creation={false} /> : null}
                </div>
                <div className="centralEquipmentZone">
                    <Gauntlet creation={false} />
                    <Body creation={false} />
                    <Gauntlet creation={false} />
                </div>
                <div className="lowerEquipmentZone">
                    <Boots creation={false} />
                </div>
            </section>
            {numEnemies%5===0 && numEnemies!==0?
                <Boss />
                :
                <Enemy />
            }
        </div>
    )
}