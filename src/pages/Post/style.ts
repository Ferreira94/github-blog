import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PostContainer = styled.main`
  max-width: 928px;
  padding: 0 2rem;
  margin: 0 auto;

  @media ${(props) => props.theme.mobile} {
    padding: 0 1rem;
  }
`;

export const InfoPostContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme['blue-800']};
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  top: -5.5rem;

  h4 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }

  svg {
    font-size: 1.125rem;
  }

  @media ${(props) => props.theme.laptop} {
    top: -3rem;
  }

  @media ${(props) => props.theme.mobile} {
    top: -1.5rem;
    padding: 1rem;

    h4 {
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div,
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['blue-500']};
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      transition: 0.2s;
    }
  }

  a {
    text-decoration: none;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 0.75rem;

    div,
    a {
      gap: 0.125rem;
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const InfoFooter = styled.div`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;

    p {
      color: ${(props) => props.theme['blue-100']};
    }

    svg {
      color: ${(props) => props.theme['blue-200']};
    }
  }

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.75rem;
  }
`;

export const ContentContainer = styled.section`
  margin-top: -3rem;
  padding: 0 2rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme['gray-300']};

  span {
    font-weight: 700;
  }

  strong {
    color: ${(props) => props.theme['blue-500']};
    margin-top: 2rem;
    display: block;
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: 0;
    padding: 0 1rem;
    font-size: 0.875rem;
  }
`;
