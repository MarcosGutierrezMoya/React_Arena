import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Sword1h({creation}) {
    
    const {sword1hNum,setSword1hNum} = useContext(StatsContext);

    function changeSword1h(plus) {
        if (plus) {
            if (sword1hNum === personaje.weapons.swords1h.length-1) {
                setSword1hNum(0);   
            }
            else{
                setSword1hNum(sword1hNum+1);   
            }
        }
        else{
            if (sword1hNum === 0) {
                setSword1hNum(personaje.weapons.swords1h.length-1);
            }else{
                setSword1hNum(sword1hNum-1);
            }
        }
    }

    const sword1hImgUrl = personaje.weapons.swords1h[sword1hNum].url;

    if (creation) {
        return(
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeSword1h(false)} >Prev</button>
                <img src={sword1hImgUrl} alt="gauntlet" className="img" />
                <button className="imgButton" onClick={() => changeSword1h(true)} >Next</button>
            </div>
        )
    }else{
        return(
            <div className="slotSection">
                <img src={sword1hImgUrl} alt="gauntlet" className="img combatMc" />
            </div>
        )
    }
}