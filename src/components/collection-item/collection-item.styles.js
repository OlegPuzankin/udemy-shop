import styled, {css} from 'styled-components'
import {UserButton} from "../user-button/user-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 15px;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button{
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(UserButton)`
    position: absolute;
    top: 250px;
    opacity: 0.7;
    width: 80%;
    display: none;
`;

export const CollectionItemImage=styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({imageUrl})=>`url(${imageUrl})`};
    
`
export const CollectionItemFooter=styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const CollectionItemName=styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const CollectionItemPrice=styled.span`
  width: 10%;
  text-align: right;
`
