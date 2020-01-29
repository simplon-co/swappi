import * as React from "react";

export default class PersonnageCard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: "",
            eyeColor: "",
            yearOfBirth: 2020,
            gender: "",
            starships: [],
            creationDate: Date.now(),
            lastEditDate: Date.now()
        }
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th colSpan="2">Star Wars Fiche Personnage</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Nom</td>
                    <td>Couleur des yeux</td>
                    <td>Année de naissance</td>
                    <td>Genre</td>
                    <td>Vaisseaux piloté</td>
                    <td>Date de création</td>
                    <td>Dernière date d'édition</td>
                </tr>
                </tbody>
            </table>
        );
    }
}