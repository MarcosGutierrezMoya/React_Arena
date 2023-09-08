import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Shield({creation}) {
    
    const {shieldNum,setShieldNum} = useContext(StatsContext);

    function changeShield(plus) {
        if (plus) {
            if (shieldNum === personaje.weapons.shields.length-1) {
                setShieldNum(0);   
            }
            else{
                setShieldNum(shieldNum+1);   
            }
        }
        else{
            if (shieldNum === 0) {
                setShieldNum(personaje.weapons.shields.length-1);
            }else{
                setShieldNum(shieldNum-1);
            }
        }
    }

    const ShieldImgUrl = personaje.weapons.shields[shieldNum].url;

    if (creation) {
        return(
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeShield(false)} >Prev</button>
                <img src={ShieldImgUrl} alt="gauntlet" className="img" />
                <button className="imgButton" onClick={() => changeShield(true)} >Next</button>
            </div>
        )
    }else{
        return(
            <div className="slotSection">
                <img src={ShieldImgUrl} alt="gauntlet" className="img combatMc" />
            </div>
        )
    }
}