import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 2rem;


.logo {
  height: 4rem;
  fill: ${(props) => props.theme.colors.text};
  cursor: pointer;
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
