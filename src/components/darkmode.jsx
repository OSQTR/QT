import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as dark } from "./img/dark.svg";
import { ReactComponent as light } from "./img/light.svg";

const Button = styled.div`
  /* background-color: ${(props) => props.theme.background}; */
  /* color: ${(props) => props.theme.color}; */
  background-image: ${(props) => props.theme.toggle};
  width: 32px;
  height: 32px;
  margin: 5px;
`;

function SetThemeMode() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    let newMode;
    switch (mode) {
      case "light":
        newMode = "dark";
        break;
      case "dark":
        newMode = "high-contrast";
        break;
      case "high-contrast":
        newMode = "light";
        break;
      default:
        newMode = "light";
    }
    setMode(newMode);
  };

  const getTheme = () => {
    switch (mode) {
      case "light":
        return {
          color: "#000",
          background: "#fff",
          toggle: dark,
        };
      case "dark":
        return {
          color: "#fff",
          background: "#000",
          toggle: light,
        };
      case "high-contrast":
        return {
          color: "#fff",
          background: "#f00",
          toggle: dark,
        };
      default:
        return {
          color: "#000",
          background: "#fff",
          toggle: light,
        };
    }
  };

  const theme = getTheme();

  return (
    <Button
      onClick={toggleMode}
      style={{ backgroundImage: `url(${theme.toggle})` }}
    ></Button>
  );
}

export default SetThemeMode;
