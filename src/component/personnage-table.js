import * as React from "react";

export default function PersonnageTable(props) {
    const {peoples} = props;
    return (
        // <div>
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
                    return (
                        <tr key={i}>
                            <td>{people.name}</td>
                            <td>{people.gender}</td>
                            {/*<td><Link>lien vers la fiche</Link></td>*/}
                        </tr>)
                })}
                </tbody>
            </table>
        // </div>
    );
}