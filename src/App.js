import React from 'react';
import './App.css';
import SearchBar from "./component/search-bar";
import PersonnageTable from "./component/personnage-table";
//import PersonnageCard from "./component/personnage-card"
// import { Router, Route, Switch } from "react-router";
// import {Link} from "react-router-dom"

// + ETAPE 2
// Faire en sorte que lorsqu’on clique sur un personnage,
// on arrive sur sa page avec les informations
// suivantes: le nom, la couleur des yeux, l’année de naissance,
// le genre, le nom des vaisseaux
// spatiaux piloté (starships), la date de création
// et d’édition de la ressource.
const swapiSiteUrl = "https://swapi.co/";
const apiUrl = "https://swapi.co/api/people/";
const apiSearchUrlFragment = "?search=";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: []
        };
        this.onSearchBarChange = this.onSearchBarChange.bind(this);
    }

    onSearchBarChange(event) {
        this.getPeopleSearch(event.currentTarget.value)
    }

    fetchPeoples(urlQuery) {
        fetch(urlQuery)
            .then(response => response.json())
            .then(data => {
                this.setState({peoples: data.results})
            });
    }


    getPeopleSearch(textInputBar) {
        this.fetchPeoples(apiUrl +
            apiSearchUrlFragment +
            textInputBar)
    }

    componentDidMount() {
        this.fetchPeoples(apiUrl)
    }

    render() {
        const {peoples} = this.state;
        return (
            <div>
                <u>{swapiSiteUrl}</u><br/><br/>
                <SearchBar onSearchBarChange={this.onSearchBarChange.bind(this)}/>
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
    }
}

