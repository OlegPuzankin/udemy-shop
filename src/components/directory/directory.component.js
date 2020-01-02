import React from 'react'
import {MenuItem} from "../menu-item/menu-item.component";
import './directory.style.scss'
import SECTIONS_DATA from "./sections.data";
import {useSelector} from "react-redux";
import {selectDirectorySections} from "../../redux/selectors/directory-selectors";


function Directory() {

    const sections = useSelector(selectDirectorySections)

    return (
        <div className="directory-menu">
            {sections.map(({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>))}
        </div>

    )

}

export default Directory;