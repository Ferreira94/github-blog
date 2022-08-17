import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url('src/assets/backgroundHeader.svg');
  background-size: cover;
  background-repeat: no-repeat;

  img {
    max-width: 100%;
  }

  @media ${(props) => props.theme.laptop} {
    height: 200px;
  }

  @media ${(props) => props.theme.mobile} {
    height: 120px;
  }
`;

export const LinkContainer = styled(NavLink)`
  max-width: 33.3%;
`;

export const Logo = styled.img`
  position: relative;
  top: -3rem;

  @media ${(props) => props.theme.laptop} {
    top: -1rem;
  }

  @media ${(props) => props.theme.laptop} {
    top: -0.5rem;
  }
`;
