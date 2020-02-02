import React from 'react'
import './directory.style.scss'
import {useSelector} from "react-redux";
import {selectDirectorySections} from "../../redux/selectors/directory-selectors";
import {MenuItem2} from "../menu-item/_menu-item.component";


function Directory() {

    const sections = useSelector(selectDirectorySections)

    return (
        <div className="directory-menu">
            {sections.map(({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem2 title={title} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>))}
        </div>

    )

}

export default Directory;