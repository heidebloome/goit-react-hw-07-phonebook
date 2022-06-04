import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 35px;

  font-size: 15px;
  font-weight: bold;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.buttonBackgroundColor};

  border: 1px solid ${props => props.theme.colors.buttonBackgroundColor};
  border-radius: 4px;

  cursor: pointer;

  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out,
    transform 250ms ease-in-out;

  &:hover,
  &:focus-visible {
    border-color: ${props => props.theme.colors.buttonHoverBackgroundColor};
    background-color: ${props => props.theme.colors.buttonHoverBackgroundColor};
  }

  &:active {
    transform: scale(0.9);
  }
`;
