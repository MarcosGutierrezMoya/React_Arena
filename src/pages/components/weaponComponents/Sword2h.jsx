import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Sword2h({creation}) {
    
    const {sword2hNum,setSword2hNum} = useContext(StatsContext);

    function changeSword2h(plus) {
        if (plus) {
            if (sword2hNum === personaje.weapons.swords2h.length-1) {
                setSword2hNum(0);   
            }
            else{
                setSword2hNum(sword2hNum+1);   
            }
        }
        else{
            if (sword2hNum === 0) {
                setSword2hNum(personaje.weapons.swords2h.length-1);
            }else{
                setSword2hNum(sword2hNum-1);
            }
        }
    }

    const sword2hImgUrl = personaje.weapons.swords2h[sword2hNum].url;

    if (creation) {
        return(
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeSword2h(false)} >Prev</button>
                <img src={sword2hImgUrl} alt="sword2h" className="img" />
                <button className="imgButton" onClick={() => changeSword2h(true)} >Next</button>
            </div>
        )       
    }else{
        return(
            <div className="slotSection">
                <img src={sword2hImgUrl} alt="sword2h" className="img combatMc" />
            </div>
        )
    }
}