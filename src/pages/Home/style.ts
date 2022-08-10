import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 928px;
  padding: 0 2rem;
  margin: 0 auto;
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
