
import { useContext } from "react";
import { StatsContext } from "../../context/statsContext";


export default function Stats() {

    const { info,changeSubRace,changeClass } = useContext(StatsContext);

    return (
        <article className="stats">
            <p>HP: {info.HP}</p>
            <p>MP: {info.MP}</p>
            <p>STR: {info.STR}</p>
            <p>DEF: {info.DEF}</p>
        </article>
    )
}