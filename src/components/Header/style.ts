import { styled } from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: auto;
  margin-top: 5rem;
  background: ${(props) => props.theme["red-500"]};

  div {
    &:first-child {
      background: black;
      padding: 0.9rem 1.5rem;
      border-radius: 60px;
      font-weight: 700;
    }
  }
`
export const Button = styled.button`
  border: none;
  padding: 1rem 3rem;
  font-weight: 700;
  border-radius: 60px;
  background-color: ${(props) => props.theme["black-100"]};
  color: ${(props) => props.theme["white-100"]};
`
