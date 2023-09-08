import { useContext } from "react";
import { StatsContext } from "../../context/statsContext";


export default function Race({ changeSubRace }) {

    const { info } = useContext(StatsContext);

    return (
        <select name="race" id="" onChange={changeSubRace} value={info.subRace!==""?info.subRace:""}>
            <option value="">Race</option>
            <optgroup label="Human">
                <option value="plains">From the plains</option>
                <option value="north">Northern</option>
                <option value="mountain">From the mountains</option>
                <option value="forest">Fron the forest</option>
            </optgroup>
            <optgroup label="Elf">
                <option value="grove">From the grove</option>
                <option value="dark">Dark</option>
                <option value="niveous">Niveous</option>
                <option value="ancients">Ancients</option>
            </optgroup>
            <optgroup label="Dwarf">
                <option value="rockskin">Rockskin</option>
                <option value="snowy">Snowy</option>
                <option value="sand">From the sand</option>
                <option value="insignes">Insignes</option>
            </optgroup>
            <optgroup label="Merman" >
                <option value="depths">From the depths</option>
                <option value="coasts">From the coasts</option>
                <option value="river">From the rivers</option>
                <option value="volcanics">Volcanics</option>
            </optgroup>
            <optgroup label="Ayleyd">
                <option value="losts">Losts</option>
                <option value="unknowns">Unknowns</option>
                <option value="blazers">Blazers</option>
                <option value="perfidious">Perfidious</option>
            </optgroup>
        </select>
    )
}