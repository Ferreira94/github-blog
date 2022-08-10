import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme['blue-800']};
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  gap: 2rem;
  position: relative;
  top: -5.5rem;

  img {
    width: 148px;
    border-radius: 8px;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
  }

  svg {
    font-size: 1.25rem;
  }

  @media ${(props) => props.theme.laptop} {
    top: -3rem;
    flex-direction: column;
    gap: 1rem;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 1rem;
    gap: 0.5rem;
    top: -1.5rem;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.825rem;
    }

    strong {
      font-size: 0.825rem;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    cursor: pointer;
    color: ${(props) => props.theme['blue-500']};
    text-decoration: none;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }

  @media ${(props) => props.theme.mobile} {
    div {
      gap: 0.25rem;
    }
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['blue-200']};
    }
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 0;
    gap: 0.5rem;

    div {
      gap: 0.25rem;
    }
  }
`;
