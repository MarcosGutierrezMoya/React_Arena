import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Helmet from "./components/ArmorComponents/Helmet";
import Gauntlet from "./components/ArmorComponents/Gauntlet";
import Body from "./components/ArmorComponents/Body";
import Boots from "./components/ArmorComponents/Boots";
import Sword2h from "./components/weaponComponents/Sword2h";
import Sword1h from "./components/weaponComponents/Sword1h";
import Shield from "./components/weaponComponents/Shield";
import Bow from "./components/weaponComponents/Bow";
import Race from "./components/creationComponents/Race";
import Class from "./components/creationComponents/Class";
import Stats from "./components/creationComponents/Stats";

import { StatsContext } from "./context/statsContext";
import Description from "./components/creationComponents/DescriptionPax";
import Rod from "./components/weaponComponents/Rod";

export default function PaxCreation() {

    const { info, setInfo, changeSubRace, changeClass, setTurns } = useContext(StatsContext);

    return (
        <div className="paxCreation">
            <form className="statistics">
                <h2> {info.name}</h2>
                <article className="statName">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" id="" maxLength={10} onChange={(event) => setInfo(prev => ({
                        ...prev,
                        name: /^[a-zA-Z]+$/.test(event.target.value) ? event.target.value : event.target.value === "" ? "" : info.name
                    }))} placeholder={info.name} />
                </article>
                <article className="statType">
                    <Race changeSubRace={changeSubRace} />
                    <Class changeClass={changeClass} />
                </article>
                <Description race={info.subRace} />
                <Stats />
                <Link to={"/Combat"} className="combatLink" onClick={() => { localStorage.setItem("save", true); localStorage.setItem(`numEnemies`, JSON.stringify(0)); setTurns(0)}}>Combate!</Link>
                <button className="deleteMcButton" onClick={() => { localStorage.clear(); localStorage.setItem("save", "false") }}>Delete character</button>
            </form>
            <section className="equipment" style={{ backgroundColor: "#89c0ff9d" }}>
                <div className="upperEquipmentZone">
                    {info.class === "berserker" ? <Sword2h creation={true} /> :
                        info.class === "warrior" ? <Sword1h creation={true} /> :
                            info.class === "archer" ? <Bow creation={true} /> :
                                info.class === "mage" ? <Rod creation={true} /> : null}
                    <Helmet creation={true} />
                    {info.class === "berserker" ? <Sword2h creation={true} /> :
                        info.class === "warrior" ? <Shield creation={true} /> :
                            info.class === "archer" ? <Bow creation={true} /> :
                                info.class === "mage" ? <Rod creation={true} /> : null}

                </div>
                <div className="centralEquipmentZone">
                    <Gauntlet creation={true} />
                    <Body creation={true} />
                    <Gauntlet creation={true} />
                </div>
                <div className="lowerEquipmentZone">
                    <Boots creation={true} />
                </div>
            </section>
        </div>
    )
}