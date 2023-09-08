import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Bow({creation}) {
    
    const {bowNum,setBowNum} = useContext(StatsContext);

    function changeBow(plus) {
        if (plus) {
            if (bowNum === personaje.weapons.bows.length-1) {
                setBowNum(0);   
            }
            else{
                setBowNum(bowNum+1);   
            }
        }
        else{
            if (bowNum === 0) {
                setBowNum(personaje.weapons.bows.length-1);
            }else{
                setBowNum(bowNum-1);
            }
        }
    }

    const BowImgUrl = personaje.weapons.bows[bowNum].url;

    if (creation) {
        return(
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeBow(false)} >Prev</button>
                <img src={BowImgUrl} alt="gauntlet" className="img" />
                <button className="imgButton" onClick={() => changeBow(true)} >Next</button>
            </div>
        )
    }else{
        return(
            <div className="slotSection">
                <img src={BowImgUrl} alt="gauntlet" className="img combatMc" />
            </div>
        )
    }
}