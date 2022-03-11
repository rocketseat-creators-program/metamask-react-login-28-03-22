import styled from "styled-components";

export const ConnectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  border: none;
  background-color: #48e280;
  font-weight: 700;
  color: #065e26;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background-color: #31f679;
  }
  &:active {
    background-color: #4dd27d;
  }
`;
