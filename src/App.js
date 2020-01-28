import React from 'react';
import './App.css';

const swapiSiteUrl = "https://swapi.co/";
const apiUrl = "https://swapi.co/api/people/";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: []
        };
        this.onSearchBarChange = this.onSearchBarChange.bind(this);
    }

    onSearchBarChange(event) {
        this.setState({value: event.target.value});
    }



    componentDidMount() {
        console.log("componentDidMount render peoples:" + this.state.peoples);
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({peoples: data.results})
            });
    }

    render() {
        const {peoples} = this.state;
        console.log("render peoples:" + peoples);
        return (
            <div>
                <u>{swapiSiteUrl}</u><br/><br/>
                <div>
                    <input type="text" placeholder="Search.."
                           onChange={this.onSearchBarChange()}/>
                </div>
                <ul>
                    {peoples && peoples.map((people, i) => {
                        return (
                            <li key={i}>
                                nom : {people.name}, genre : {people.gender}
                            </li>)
                    })}
                </ul>
            </div>)
    }
}







// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             peoples: []
//         }
//     }
//
//     componentDidMount() {
//         console.log("componentDidMount render peoples:" + this.state.peoples);
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 this.setState({peoples: data.results})
//             });
//     }
//
//     render() {
//         const {peoples} = this.state;
//         console.log("render peoples:" + peoples);
//         return (
//             <div>
//                 <u>{swapiSiteUrl}</u><br/><br/>
//                 <div>
//                     <input type="text" placeholder="Search.."/>
//                 </div>
//                 <ul>
//                     {peoples && peoples.map((people, i) => {
//                         return (
//                             <li key={i}>
//                                 nom : {people.name}, genre : {people.gender}
//                             </li>)
//                     })}
//                 </ul>
//             </div>)
//     }
// }

export default App;
