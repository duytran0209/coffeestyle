import styled from "styled-components";

const Button = ({ children, text }) => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: max-content;
  cursor: pointer;
  border: none;
  outline: none;
  white-space: nowrap;
  &:hover {
    opacity: 0.9;
  }
`;
