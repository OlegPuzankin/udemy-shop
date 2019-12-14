import React from 'react'
import {MenuItem} from "../menu-item/menu-item.component";
import './directory.style.scss'
import SECTIONS_DATA from "./sections.data";


class Directory extends React.Component {
    constructor() {
        super();

        this.state={
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl,id, size})=>(
                    <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>))}
            </div>

        )
    }
}

export default Directory;