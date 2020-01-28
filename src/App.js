import React from 'react';
// import { Router, Route, Switch } from "react-router";
// import {Link} from "react-router-dom"
import './App.css';
import SearchBar from "./component/search-bar";
import PersonnageTable from "./component/personnage-table";

const swapiSiteUrl = "https://swapi.co/";
const apiUrl = "https://swapi.co/api/people/";

// + ETAPE 2
// Faire en sorte que lorsqu’on clique sur un personnage,
// on arrive sur sa page avec les informations
// suivantes: le nom, la couleur des yeux, l’année de naissance,
// le genre, le nom des vaisseaux
// spatiaux piloté (starships), la date de création
// et d’édition de la ressource.

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: []
        };
        this.onSearchBarChange = this.onSearchBarChange.bind(this);
    }

    onSearchBarChange = event => {
        this.getPeopleSearch(event.currentTarget.value)
    };

    getPeopleSearch = textInputBar => {
        let searchUrl = apiUrl + "?search=" + textInputBar;
        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({peoples: data.results})
            });
    };

    componentDidMount = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({peoples: data.results})
            });
    };

    render = () => {
        const {peoples} = this.state;
        return (
            <div>
                <u>{swapiSiteUrl}</u><br/><br/>

                <SearchBar onSearchBarChange={this.onSearchBarChange}/>


                <ul>
                    {peoples && peoples.map((people, i) => {
                        return (
                            <li key={i}>
                                nom : {people.name}, genre : {people.gender}
                            </li>)
                    })}
                </ul>

<PersonnageTable peoples={peoples}/>

            </div>)
    };
}

export default App;
