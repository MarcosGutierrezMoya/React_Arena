import { createContext, useEffect, useState } from "react";
import personaje from "../../personaje.json";

export const StatsContext = createContext();

export default function StatsContextProvider({ children }) {

    const [charaSave, setCharaSave] = useState(false);
    const [logs, setLogs] = useState([]);
    const [numEnemies, setNumEnemies] = useState(0);
    const [turns, setTurns] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("save") === true) {
            setCharaSave(localStorage.getItem("save"));
        }
        setNumEnemies(1);
        localStorage.setItem(`numEnemies`, JSON.stringify(numEnemies));
        console.log(numEnemies);
    }, []);

    //#region Armor

    const [gauntletNum, setGauntletNum] = useState(0);
    const [bootsNum, setBootsNum] = useState(0);
    const [helmetNum, setHelmetNum] = useState(0);
    const [bodyNum, setBodyNum] = useState(0);

    //#endregion
    //#region Weapons

    const [sword1hNum, setSword1hNum] = useState(0);
    const [sword2hNum, setSword2hNum] = useState(0);
    const [shieldNum, setShieldNum] = useState(0);
    const [bowNum, setBowNum] = useState(0);
    const [rodNum, setRodNum] = useState(0);

    //#endregion

    const [magicUsed, setMagicUsed] = useState({
        health: -1,
        demonarm: -1,
        ironbody: -1,
        fireball: -1,
        leech: -1,
        corrosive: -1
    });
    const [info, setInfo] = useState({
        name: "",
        HP: 0,
        MP: 0,
        STR: 0,
        DEF: 0,
        race: "",
        subRace: "",
        class: ""
    });
    const [enemy, setEnemy] = useState({
        name: "",
        HP: 0,
        MP: 0,
        STR: 0,
        DEF: 0,
        race: "",
        subRace: "",
        class: ""
    });

    function changeClass(event) {
        setInfo(prev => ({
            ...prev,
            class: event.target.value
        }));
    }
    function changeSubRace(event) {
        let myRace = "";

        switch (event.target.value) {
            case "plains":
                myRace = "Human";
                break;
            case "north":
                myRace = "Human";
                break;
            case "mountain":
                myRace = "Human";
                break;
            case "forest":
                myRace = "Human";
                break;
            case "grove":
                myRace = "Elf";
                break;
            case "dark":
                myRace = "Elf";
                break;
            case "niveous":
                myRace = "Elf";
                break;
            case "ancients":
                myRace = "Elf";
                break;
            case "rockskin":
                myRace = "Dwarf";
                break;
            case "snowy":
                myRace = "Dwarf";
                break;
            case "sand":
                myRace = "Dwarf";
                break;
            case "insignes":
                myRace = "Dwarf";
                break;
            case "depths":
                myRace = "Merman";
                break;
            case "coasts":
                myRace = "Merman";
                break;
            case "river":
                myRace = "Merman";
                break;
            case "volcanics":
                myRace = "Merman";
                break;
            case "losts":
                myRace = "Ayleid";
                break;
            case "unknowns":
                myRace = "Ayleid";
                break;
            case "blazers":
                myRace = "Ayleid";
                break;
            case "perfidious":
                myRace = "Ayleid";
                break;
            default:
                break;
        }
        setInfo(prev => ({ ...prev, subRace: event.target.value, race: myRace }));
    }

    function charaAttack(event) {
        let selectAbilities = document.getElementById("abilitySelect");
        let charaAttackButton = document.getElementsByClassName("atkButton")[0];
        selectAbilities.disabled = true;

        switch (info.class) {
            case "warrior":
                info.MP += 7;
                break;
            case "berserker":
                info.MP += 5;
                break;
            case "mage":
                info.MP += 20;
                break;
            case "archer":
                info.MP += 10;
                break;

            default:

                break;
        }

        enemy.HP -= (info.STR - enemy.DEF);
        setLogs(prev => [...prev, "-------------", `${numEnemies % 5 !== 0 ? enemy.name : enemy.name.toString().replace(",", "/")}: ${enemy.HP}HP`, `${info.name} hace ${info.STR - enemy.DEF} de daño`]);
        if (enemy.HP <= 0) {
            alert("ganaste este combate, preparate para el siguiente");
            setNumEnemies(numEnemies + 1);
            localStorage.setItem(`numEnemies`, JSON.stringify(numEnemies));
            setTimeout(() => {
                console.log(numEnemies,"muertos");
                selectAbilities.disabled = false;
                charaAttackButton.disabled = false;
            }, 500);
        } else {
            enemyAttack(event.target, selectAbilities);
        }
        event.target.disabled = true;
    }

    function enemyAttack(button, select) {
        setTimeout(() => {
            info.HP -= (enemy.STR - info.DEF);
            setTurns(turns + 1);
            setLogs(prev => [...prev, "-------------", `${info.name}: ${info.HP}HP`, `${enemy.name} hace ${enemy.STR - info.DEF} de daño`]);
            if (info.HP <= 0) {
                alert("Perdiste");
            }
            button.disabled = false;
            select.disabled = false;
            console.log(turns, "fire", magicUsed.fireball);
            magicsUsed(select);
            localStorage.setItem("character", JSON.stringify(info))
        }, 1000);
    }

    function magicsUsed(select) {
        let magics = personaje.magics;
        switch (true) {
            case magicUsed.health + 3 === turns:
                select.getElementsByClassName("health")[0].disabled = false;
                break;
            case magicUsed.demonarm + 2 === turns:
                if (select.getElementsByClassName("demonarm")[0].disabled) {
                    info.STR -= magics["demonarm"].STR;
                }
                select.getElementsByClassName("demonarm")[0].disabled = false;
                break;
            case magicUsed.ironbody + 2 === turns:
                if (select.getElementsByClassName("demonarm")[0].disabled) {
                    info.DEF -= magics["ironbody"].DEF;
                }
                select.getElementsByClassName("ironbody")[0].disabled = false;
                break;
            case magicUsed.leech + 5 === turns:
                select.getElementsByClassName("leech")[0].disabled = false;
                break;
            case magicUsed.fireball + 2 === turns:
                console.log("fire");
                select.getElementsByClassName("fireball")[0].disabled = false;
                break;
            case magicUsed.corrosive + 6 === turns:
                select.getElementsByClassName("corrosive")[0].disabled = false;
                break;

            default:
                break;
        }
        localStorage.setItem("character", JSON.stringify(info))

    }

    function abilityEffect(ability) {
        let charaAttackButton = document.getElementsByClassName("atkButton")[0];
        let selectAbilities = document.getElementById("abilitySelect");
        selectAbilities.disabled = true;
        charaAttackButton.disabled = true;
        let magics = personaje.magics;
        if (info.MP - magics[ability].MP >= 0) {
            switch (ability) {
                case "health":
                    info.HP += magics[ability].HP;
                    info.MP -= magics[ability].MP;
                    setMagicUsed(prev => ({
                        ...prev,
                        health: turns
                    }));
                    const hp = selectAbilities.getElementsByClassName("health")[0];
                    hp.disabled = true;
                    break;
                case "demonarm":
                    info.STR += magics[ability].STR;
                    info.MP -= magics[ability].MP;
                    setMagicUsed(prev => ({
                        ...prev,
                        demonarm: turns
                    }));
                    const demon = selectAbilities.getElementsByClassName("demonarm")[0];
                    demon.disabled = true;
                    break;
                case "ironbody":
                    info.DEF += magics[ability].DEF;
                    info.MP -= magics[ability].MP;
                    setMagicUsed(prev => ({
                        ...prev,
                        ironbody: turns
                    }));
                    const ironbody = selectAbilities.getElementsByClassName("ironbody")[0];
                    ironbody.disabled = true;
                    break;
                case "fireball":
                    enemy.HP -= magics[ability].HP;
                    info.MP -= magics[ability].MP;
                    setMagicUsed(prev => ({
                        ...prev,
                        fireball: turns
                    }));
                    const fireball = selectAbilities.getElementsByClassName("fireball")[0];
                    fireball.disabled = true;
                    break;
                case "leech":
                    info.HP += magics[ability].HP;
                    info.MP -= magics[ability].MP;
                    setEnemy(prev => ({
                        ...prev,
                        HP: enemy.HP - magics[ability].HP
                    }));
                    setMagicUsed(prev => ({
                        ...prev,
                        leech: turns
                    }));
                    const leech = selectAbilities.getElementsByClassName("leech")[0];
                    leech.disabled = true;
                    break;
                case "corrosive":
                    info.MP -= magics[ability].MP;
                    setEnemy(prev => ({
                        ...prev,
                        DEF: enemy.DEF - magics[ability].DEF
                    }));
                    setMagicUsed(prev => ({
                        ...prev,
                        corrosive: turns
                    }));
                    const corrosive = selectAbilities.getElementsByClassName("corrosive")[0];
                    corrosive.disabled = true;
                    break;

                default:
                    break;
            }
        }
        else {
            alert("No tienes magia suficiente");
            setTimeout(() => {
                selectAbilities.disabled = false;
                charaAttackButton.disabled = false;
            }, 500);
        }
        selectAbilities.selectedIndex = 0;
        localStorage.setItem("character", JSON.stringify(info))
        if (enemy.HP <= 0) {
            alert("ganaste este combate, preparate para el siguiente");
        } else {
            enemyAttack(charaAttackButton, selectAbilities);
        }
    }


    useEffect(() => {

        let weapon = "swords1h";
        let num = 0;

        switch (info.class) {
            case "warrior":
                weapon = "swords1h";
                num = sword1hNum;
                break;
            case "berserker":
                weapon = "swords2h";
                num = sword2hNum;
                break;
            case "mage":
                weapon = "shields";
                break;
            case "archer":
                weapon = "bows";
                num = bodyNum;
                break;

            default:

                break;
        }
        if (localStorage.getItem("save") !== "true") {
            setInfo(prev => ({
                ...prev,
                DEF: (info.class !== "" ? personaje.class[info.class].DEF + personaje.weapons[weapon][num].DEF : 0)
                    + (info.class === "warrior" ? personaje.weapons["shields"][shieldNum].DEF : 0)
                    + (info.subRace !== "" && info.race !== "" ? personaje.raza[info.race][info.subRace].DEF : 0)
                    + (personaje.Armor.gauntlets[gauntletNum].DEF + personaje.Armor.boots[bootsNum].DEF + personaje.Armor.body[bodyNum].DEF + personaje.Armor.helmet[helmetNum].DEF),

                HP: (info.class !== "" ? personaje.class[info.class].HP : 0)
                    + (info.subRace !== "" && info.race !== "" ? personaje.raza[info.race][info.subRace].HP : 0),

                MP: (info.class !== "" ? personaje.class[info.class].MP : 0)
                    + (info.subRace !== "" && info.race !== "" ? personaje.raza[info.race][info.subRace].MP : 0)
                    + (info.class === "mage" ? personaje.weapons.rods[rodNum].MP : 0),

                STR: (info.class !== "" ? personaje.class[info.class].STR + personaje.weapons[weapon][num].STR : 0)
                    + (info.class === "warrior" ? personaje.weapons["shields"][shieldNum].STR : 0)
                    + (info.subRace !== "" && info.race !== "" ? personaje.raza[info.race][info.subRace].STR : 0),

                name: info.name
            }));
        }

        if (localStorage.getItem("save") === "true") {
            setTimeout(() => {
                setInfo(JSON.parse(localStorage.getItem("character")));
                setNumEnemies(+localStorage.getItem(`numEnemies`));
            }, 1000);
            setGauntletNum(+localStorage.getItem(`gauntletNum`));
            setBootsNum(+localStorage.getItem(`bootsNum`));
            setHelmetNum(+localStorage.getItem(`helmetNum`));
            setBodyNum(+localStorage.getItem(`bodyNum`));
            setSword1hNum(+localStorage.getItem(`sword1hNum`));
            setSword2hNum(+localStorage.getItem(`sword2hNum`));
            setShieldNum(+localStorage.getItem(`shieldNum`));
            setBowNum(+localStorage.getItem(`bowNum`));
        } else {
            localStorage.setItem("character", JSON.stringify({
                name: info.name,
                HP: info.HP,
                MP: info.MP,
                STR: info.STR,
                DEF: info.DEF,
                race: info.race,
                subRace: info.subRace,
                class: info.class

            }));
            localStorage.setItem(`gauntletNum`, JSON.stringify(gauntletNum));
            localStorage.setItem(`bootsNum`, JSON.stringify(bootsNum));
            localStorage.setItem(`helmetNum`, JSON.stringify(helmetNum));
            localStorage.setItem(`bodyNum`, JSON.stringify(bodyNum));
            localStorage.setItem(`sword1hNum`, JSON.stringify(sword1hNum));
            localStorage.setItem(`sword2hNum`, JSON.stringify(sword2hNum));
            localStorage.setItem(`shieldNum`, JSON.stringify(shieldNum));
            localStorage.setItem(`bowNum`, JSON.stringify(bowNum));
            localStorage.setItem(`numEnemies`, JSON.stringify(numEnemies));
        }

    }, [gauntletNum, bootsNum, helmetNum, bodyNum, sword1hNum, sword2hNum, bowNum, shieldNum, rodNum, info.class, info.race, info.subRace, info.name, info.HP, info.MP, info.STR, info.DEF, numEnemies]);


    return (
        <StatsContext.Provider value={{ info, setInfo, gauntletNum, setGauntletNum, bootsNum, setBootsNum, helmetNum, setHelmetNum, bodyNum, setBodyNum, changeSubRace, changeClass, sword1hNum, setSword1hNum, sword2hNum, setSword2hNum, shieldNum, setShieldNum, bowNum, setBowNum, setCharaSave, enemy, setEnemy, charaAttack, logs, abilityEffect, numEnemies, setRodNum, rodNum, charaSave, setTurns }}>
            {children}
        </StatsContext.Provider>
    )
}