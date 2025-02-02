import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props)=> props.theme.colors.secondary};
  color: ${(props)=> props.theme.colors.primary};
  border: none;
  border-radius: 10px;
  font-size: 3rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.gray};
  height: 10rem;
  width: 10rem;
  cursor: pointer;
`