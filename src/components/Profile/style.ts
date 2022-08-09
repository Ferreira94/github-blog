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
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme['blue-500']};

    svg {
      font-size: 1.25rem;
    }
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.25rem;
      color: ${(props) => props.theme['blue-200']};
    }
  }
`;
