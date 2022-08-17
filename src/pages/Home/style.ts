import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 928px;
  padding: 0 2rem;
  margin: 0 auto;

  @media ${(props) => props.theme.mobile} {
    padding: 0 1rem;
  }
`;

export const TitlePublicationsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1rem;

  strong {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-200']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['blue-100']};
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: 0;

    strong {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const PublicationsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2.5rem 0;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['blue-300']};
  background-color: ${(props) => props.theme['blue-950']};
  color: ${(props) => props.theme['blue-200']};
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 85%;
    height: 100%;
    padding-left: 1rem;
    outline: 0;
    background-color: ${(props) => props.theme['blue-950']};
    border-radius: 6px 0 0 6px;
    border: 0;
    color: ${(props) => props.theme['blue-200']};

    &:focus {
      border: none;
    }
  }

  button {
    cursor: pointer;
    flex: 1;
    height: 100%;
    border: 0;
    border-radius: 0 6px 6px 0;
    background-color: ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme['gray-100']};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s;
    }

    svg {
      font-size: 1.25rem;
    }
  }
`;
