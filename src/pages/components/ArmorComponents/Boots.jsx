import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Boots({creation}) {

    const {bootsNum,setBootsNum} = useContext(StatsContext);

    function changeBoots(plus) {
        if (plus) {
            if (bootsNum === personaje.Armor.boots.length-1) {
                setBootsNum(0);   
            }
            else{
                setBootsNum(bootsNum+1);   
            }
        }
        else{
            if (bootsNum === 0) {
                setBootsNum(personaje.Armor.boots.length-1);
            }else{
                setBootsNum(bootsNum-1);
            }
        }
    }

    const bootsImgUrl = personaje.Armor.boots[bootsNum].url;

    if (creation) {
        return (
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeBoots(false)} >Prev</button>
                <img src={bootsImgUrl} alt="boots" className="img" />
                <button className="imgButton" onClick={() => changeBoots(true)} >Next</button>
            </div>
        )
    }else{
        return (
            <div className="slotSection">
                <img src={bootsImgUrl} alt="boots" className="img combatMc" />
            </div>
        )
    }
}