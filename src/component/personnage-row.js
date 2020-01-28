import {default as React} from "react";


export default ({people}) => (
    <div>
        <tr>
            <td>{people.name}</td>
            <td>{people.gender}</td>
            {/*<td><Link>lien vers la fiche</Link></td>*/}
        </tr>
    </div>
)