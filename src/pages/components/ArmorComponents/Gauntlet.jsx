import { useContext } from "react";
import personaje from "../../../personaje.json";
import { StatsContext } from "../../context/statsContext";

export default function Gauntlet({creation}) {

    const {gauntletNum,setGauntletNum} = useContext(StatsContext);

    function changeGauntlet(plus) {
        if (plus) {
            if (gauntletNum === personaje.Armor.gauntlets.length-1) {
                setGauntletNum(0);   
            }
            else{
                setGauntletNum(gauntletNum+1);   
            }
        }
        else{
            if (gauntletNum === 0) {
                setGauntletNum(personaje.Armor.gauntlets.length-1);
            }else{
                setGauntletNum(gauntletNum-1);
            }
        }
    }

    const gauntletImgUrl = personaje.Armor.gauntlets[gauntletNum].url;

    if (creation) {
        return (
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeGauntlet(false)} >Prev</button>
                <img src={gauntletImgUrl} alt="gauntlet" className="img" />
                <button className="imgButton" onClick={() => changeGauntlet(true)} >Next</button>
            </div>
        )
    }
    else{
        return (
            <div className="slotSection">
                <img src={gauntletImgUrl} alt="gauntlet" className="img combatMc" />
            </div>
        )
    }
}