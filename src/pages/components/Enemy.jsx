import { useContext, useEffect, useState } from "react";
import { StatsContext } from "../context/statsContext";
import personaje from "../../personaje.json"


export default function Enemy() {

    const { enemy, setEnemy, info, numEnemies } = useContext(StatsContext);
    const [name, setName] = useState("");
    const [rdnNum, setRdnNum] = useState(0);

    useEffect(() => {
        const race = Object.keys(personaje.raza);
        const rdnRace = race[Math.floor(Math.random() * race.length)];
        const subRace = Object.keys(personaje.raza[rdnRace]);
        const rdnSubRace = subRace[Math.floor(Math.random() * subRace.length)];
        
        setRdnNum(Math.floor(Math.random()*personaje.enemigos[rdnRace].length));

        const enemyClass = Object.keys(personaje.class);
        const rdnEnemyClass = enemyClass[Math.floor(Math.random() * enemyClass.length)];

        setName(`${rdnRace} / ${rdnSubRace} / ${rdnEnemyClass}`);
        setEnemy(prev => ({
            ...prev,
            DEF: (personaje.raza[rdnRace][rdnSubRace].DEF + personaje.class[rdnEnemyClass].DEF)*2,

            HP: personaje.raza[rdnRace][rdnSubRace].HP + personaje.class[rdnEnemyClass].HP,

            MP: personaje.raza[rdnRace][rdnSubRace].MP + personaje.class[rdnEnemyClass].MP,

            STR: info.DEF + Math.floor(Math.random() * (personaje.raza[rdnRace][rdnSubRace].STR + personaje.class[rdnEnemyClass].STR) + 5),

            name: rdnSubRace,

            race:rdnRace
        }));
    }, [numEnemies]);

    if (enemy.race !== "") {

    return (
            <section className="enemy">
                <h1>{name}</h1>
                <div className="hpBar" style={{width:`${enemy.HP>0?enemy.HP * 10 / 100:0}em`}} ></div>
                {/* <button onClick={() => attack(info,enemy)} className="atkButton" >Attack</button> */}
                <div className="enemyStats">
                    <img src={personaje.enemigos[name!==""?name.split(" / ")[0]:"Human"][rdnNum]} alt="Enemigo" className="enemyImg" />
                    <section className="stats">
                            <p>HP: {enemy.HP}</p>
                            <p>MP: {enemy.MP}</p>
                            <p>STR: {enemy.STR}</p>
                            <p>DEF: {enemy.DEF}</p>
                    </section>
                </div>
            </section>
        )
    }else{<></>}

}