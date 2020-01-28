import React from 'react';
import * as PropTypes from "prop-types";

// export default class SearchBar extends React.Component {
//     render = () => {
//         console.log(this.props);
//         return (
//             <div>
//                 <input type="text" placeholder="Search.."
//                        onChange={e => this.props.onSearchBarChange(e)}/>
//             </div>
//         );
//     };
// }


const SearchBar = ({onSearchBarChange}) => {
    return (
        <div>
            <input type="text" placeholder="Search.."
                   onChange={(e) =>
                       onSearchBarChange(e)}/>
        </div>
    );
};

SearchBar.propTypes = {onSearchBarChange: PropTypes.any};

export default SearchBar;