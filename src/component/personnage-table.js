import * as React from "react";
import PersonnageRow from "./personnage-row";

export default function PersonnageTable(props) {
    const {peoples} = props;
    return (
            <table>
                <thead>
                <tr>
                    <th colSpan="3">Star Wars Personnages</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Nom</td>
                    <td>Genre</td>
                    <td>fiche</td>
                </tr>
                {peoples && peoples.map((people, i) => {
                    return (<PersonnageRow people={peoples[i]}/>)
                })}
                </tbody>
            </table>
    );
}