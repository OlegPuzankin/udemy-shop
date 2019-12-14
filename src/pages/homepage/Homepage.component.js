import React from 'react';
import './homepage.style.scss'
import Directory from "../../components/directory/directory.component";

export const HomePage = (props) => {
    return (
        <div className="homepage">
           <Directory/>
        </div>
    );
};

export default HomePage