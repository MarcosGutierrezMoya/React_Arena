import { useContext } from "react";
import { StatsContext } from "../../context/statsContext";


export default function Class({ changeClass }) {

    const { info } = useContext(StatsContext);

    return (
        <select name="class" id="" onChange={changeClass} value={info.class!==""?info.class:""}>
            <option value="">Class</option>
            <option value="warrior">Warrior</option>
            <option value="berserker">Berserker</option>
            <option value="mage">Mage</option>
            <option value="archer">Archer</option>
        </select>
    )
}