import { useContext } from "react";
import { StatsContext } from "../../context/statsContext";
import personaje from "../../../personaje.json";

export default function Abilities() {
    
    const { abilityEffect } = useContext(StatsContext);
    
    return(
        <select onChange={(event)=>abilityEffect(event.target.value)} id="abilitySelect">
            <option value="">Abilities</option>
            <optgroup label="Own">
                <option value="health" className="health">Health - MP:{personaje.magics.health.MP}</option>
                <option value="demonarm" className="demonarm">Demon arm - MP:{personaje.magics.demonarm.MP}</option>
                <option value="ironbody" className="ironbody">Iron body - MP:{personaje.magics.ironbody.MP}</option>
            </optgroup>
            <optgroup label="Enemy">
                <option value="fireball" className="fireball">Fireball - MP:{personaje.magics.fireball.MP}</option>
                <option value="leech" className="leech">Leech - MP:{personaje.magics.leech.MP}</option>
                <option value="corrosive" className="corrosive">Corrosive - MP:{personaje.magics.corrosive.MP}</option>
            </optgroup>
        </select>
    )
}