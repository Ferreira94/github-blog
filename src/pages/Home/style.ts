import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 870px;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const TitlePublicationsContainer = styled.div`
  width: 100%;
  display: flex;
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
`;
