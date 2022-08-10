import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PublicationCardContainer = styled(NavLink)`
  width: 416px;
  border-radius: 10px;
  padding: 2rem;
  background-color: ${(props) => props.theme['blue-700']};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  div {
    display: flex;
    justify-content: space-between;

    h4 {
      max-width: 280px;
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-100']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['blue-100']};
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['gray-300']};
  }

  @media ${(props) => props.theme.mobile} {
    padding: 1rem;

    div {
      flex-direction: column;
      gap: 0.125rem;

      h4 {
        max-width: 100%;
        font-size: 1rem;
      }

      span {
        font-size: 0.75rem;
      }
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
    }
  }
`;
