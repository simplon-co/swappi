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


const SearchBar = ({onSearchBarChange: onSearchBarChangeEvent}) => {
    return (
        <div>
            <input type="text" placeholder="Search.."
                   onChange={(e) =>
                       onSearchBarChangeEvent(e)}/>
        </div>
    );
};

SearchBar.propTypes = {onSearchBarChange: PropTypes.func};

export default SearchBar;