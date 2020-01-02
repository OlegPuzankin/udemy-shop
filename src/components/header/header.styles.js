import styled, {css} from 'styled-components'

import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  height: 100%;
  align-items: center;
`;

export const OptionLink=styled(Link)`
padding: 10px 15px;
cursor: pointer;
`;

export const OptionDiv=styled('div')`
padding: 10px 15px;
cursor: pointer;
`;
