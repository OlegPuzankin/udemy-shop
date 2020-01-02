import React from 'react';
import './preview-collection.style.scss'
import {CollectionItem} from "../collection-item/collection-item.component";
import {Link} from "react-router-dom";

export const PreviewCollection = ({title, items,routeName}) => {

    //console.log('route name', routeName)
 return (
  <div className='collection-preview'>
      <Link to={`shop/${routeName}`}>
          <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>

      <div className='preview'>
          {
              items.filter((item, index)=>index<4)
                  .map((item)=>(
                  <CollectionItem key={item.id} item={item}/>
              ))
          }
      </div>

  </div>
 );
};