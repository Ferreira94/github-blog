import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: 0;
  padding-left: 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['blue-300']};
  background-color: ${(props) => props.theme['blue-950']};
  color: ${(props) => props.theme['blue-200']};
  margin-top: 0.75rem;
`;
