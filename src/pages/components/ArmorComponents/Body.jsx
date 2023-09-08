import { useContext } from "react";
import personaje from "../../../personaje.json"
import { StatsContext } from "../../context/statsContext";

export default function Body({creation}) {

    const {bodyNum,setBodyNum} = useContext(StatsContext);

    function changeBody(plus) {
        if (plus) {
            if (bodyNum === personaje.Armor.body.length-1) {
                setBodyNum(0);   
            }
            else{
                setBodyNum(bodyNum+1);   
            }
        }
        else{
            if (bodyNum === 0) {
                setBodyNum(personaje.Armor.body.length-1);
            }else{
                setBodyNum(bodyNum-1);
            }
        }
    }

    const bodyImgUrl = personaje.Armor.body[bodyNum].url;
    if (creation) {
        return (
            <div className="slotSection">
                <button className="imgButton" onClick={() => changeBody(false)} >Prev</button>
                <img src={bodyImgUrl} alt="body" className="img" />
                <button className="imgButton" onClick={() => changeBody(true)} >Next</button>
            </div>
        )  
    }
    else{
        return (
            <div className="slotSection">
                <img src={bodyImgUrl} alt="body" className="img combatMc" />
            </div>
        )  
    }
}