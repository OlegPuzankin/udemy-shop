import React from 'react';
import {useHistory} from "react-router-dom";
import {BackgroundImageContainer, Content, MenuItemContainer, Subtitle, Title} from "./menu-item.style";

export const MenuItem2 = ({title, imageUrl, size, linkUrl}) => {

    //console.log(linkUrl)
    const history = useHistory();

    return (
        <MenuItemContainer size={size} onClick={()=>history.push(`/${linkUrl}`)}>
            <BackgroundImageContainer imageUrl={imageUrl}/>
            <Content>
                <Title>{title.toUpperCase()} </Title>
                <Subtitle >Order now</Subtitle>
            </Content>
        </MenuItemContainer>
    );
};