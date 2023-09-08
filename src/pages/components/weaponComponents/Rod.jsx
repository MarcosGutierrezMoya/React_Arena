import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Rod({creation}) {
    
    const {rodNum,setRodNum} = useContext(StatsContext);

    function changeRod(plus) {
        if (plus) {
            if (rodNum === personaje.weapons.rods.length-1) {
                setRodNum(0);   
            }
            else{
                setRodNum(rodNum+1);   
            }
        }
        else{
            if (rodNum === 0) {
                setRodNum(personaje.weapons.rods.length-1);
            }else{
                setRodNum(rodNum-1);
            }
        }
    }
    
    const RodImgUrl = personaje.weapons.rods[rodNum].url;

    if (creation) {
        return(
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeRod(false)} >Prev</button>
                <img src={RodImgUrl} alt="gauntlet" className="img" />
                <button className="imgButton" onClick={() => changeRod(true)} >Next</button>
            </div>
        )
    }else{
        return(
            <div className="slotSection">
                <img src={RodImgUrl} alt="gauntlet" className="img combatMc" />
            </div>
        )
    }
}