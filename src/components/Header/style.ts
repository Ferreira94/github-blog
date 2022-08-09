import styled from 'styled-components';

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
    max-width: 33.3%;
  }
`;
