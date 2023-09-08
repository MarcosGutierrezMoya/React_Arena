import { useContext, useEffect, useState } from "react";
import { StatsContext } from "../context/statsContext";
import personaje from "../../personaje.json"


export default function Boss() {

    const { enemy, setEnemy, info, numEnemies } = useContext(StatsContext);
    const name = ["Ángel","Marcos"];

    useEffect(() => {
        const race = Object.keys(personaje.raza);
        const rdnRace = race[Math.floor(Math.random() * race.length)];
        const subRace = Object.keys(personaje.raza[rdnRace]);
        const rdnSubRace = subRace[Math.floor(Math.random() * subRace.length)];

        const enemyClass = Object.keys(personaje.class);
        const rdnEnemyClass = enemyClass[Math.floor(Math.random() * enemyClass.length)];

        setEnemy(prev => ({
            ...prev,
            DEF: (personaje.raza[rdnRace][rdnSubRace].DEF + personaje.class[rdnEnemyClass].DEF) * 3,

            HP: (personaje.raza[rdnRace][rdnSubRace].HP + personaje.class[rdnEnemyClass].HP) * 1.5,

            MP: (personaje.raza[rdnRace][rdnSubRace].MP + personaje.class[rdnEnemyClass].MP) * 1.5,

            STR: info.DEF + Math.floor(Math.random() * (personaje.raza[rdnRace][rdnSubRace].STR + personaje.class[rdnEnemyClass].STR) + 5),

            name: name
        }));
    }, [numEnemies]);

    return (
        <section className="enemy">
            <h1>{name}</h1>
            <div className="hpBar" style={{ width: `${enemy.HP > 0 ? enemy.HP * 10 / 100 : 0}em` }} ></div>
            <div className="enemyStats">
                <img src="https://w0.peakpx.com/wallpaper/155/667/HD-wallpaper-overlord-ainz-anime.jpg" alt="Enemigo" className="enemyImg" />
                <section className="stats">
                    <p>HP: {enemy.HP}</p>
                    <p>MP: {enemy.MP}</p>
                    <p>STR: {enemy.STR}</p>
                    <p>DEF: {enemy.DEF}</p>
                </section>
            </div>
        </section>
    )
}