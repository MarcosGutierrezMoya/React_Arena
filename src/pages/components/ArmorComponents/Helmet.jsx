import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Helmet({creation}) {

    const {helmetNum,setHelmetNum} = useContext(StatsContext);

    function changeHelmet(plus) {
        if (plus) {
            if (helmetNum === personaje.Armor.helmet.length-1) {
                setHelmetNum(0);   
            }
            else{
                setHelmetNum(helmetNum+1);   
            }
        }
        else{
            if (helmetNum === 0) {
                setHelmetNum(personaje.Armor.helmet.length-1);
            }else{
                setHelmetNum(helmetNum-1);
            }
        }
    }

    const helmetImgUrl = personaje.Armor.helmet[helmetNum].url;

    if (creation) {
        return (
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeHelmet(false)} >Prev</button>
                <img src={helmetImgUrl} alt="helmet" className="img" />
                <button className="imgButton" onClick={() => changeHelmet(true)} >Next</button>
            </div>
        )
    }else{
        return (
            <div className="slotSection">
                <img src={helmetImgUrl} alt="helmet" className="img combatMc" />
            </div>
        )
    }
}