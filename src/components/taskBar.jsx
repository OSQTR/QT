import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ReactComponent as LogoImg } from "../img/logoImg.svg";

const Task = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(37, 35, 32);
  color: white;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  z-index: 2;
  backdrop-filter: blur(15px);
`;

const Logo = styled(LogoImg)`
  height: 100%;
  width: 100%;
`;

const WrapBc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Book = styled.div`
  color: #ffe8a9;
  font-weight: bolder;
  font-size: 20px;
  margin: 5px;
`;

const Chapter = styled.div`
  color: white;
  margin: 5px;
`;

const NavTitle = styled.div`
  color: white;
  font-size: 20px;
  margin: 5px;
`;

function TaskBar({ data }) {
  const location = useLocation();
  const isPathBook =
    location.pathname === "/" || location.pathname === "/stems";
  const isPathEtc = location.pathname === "/etc";
  const isPathHome = location.pathname === "/home";

  const sc = data.attributes?.StartChapter;
  const ec = data.attributes?.EndChapter;
  const sv = data.attributes?.StartVerse;
  const ev = data.attributes?.EndVerse;
  let chapters;

  // 한국어 버전
  if (sc === ec) {
    chapters = " " + sc + " 장 " + sv + " ~ " + ev + " 절";
  } else {
    chapters = " " + sc + " 장 " + sv + " 절 ~ " + ec + " 장 " + ev + " 절";
  }

  //영문
  // if (sc === ec) {
  //   chapters = " Chapter " + sc + " : " + sv + " ~ " + ev;
  // } else {
  //   chapters = " " + sc + "장 " + sv + "절 ~ " + ec + "장 " + ev + "절";
  // }

  return (
    <>
      <Task>
        <WrapBc style={{ display: isPathBook ? "flex" : "none" }}>
          <Book>{data.attributes?.Book}</Book>
          <Chapter>{chapters}</Chapter>
        </WrapBc>
        <NavTitle style={{ display: isPathEtc ? "block" : "none" }}>
          Minds
        </NavTitle>
        <Logo style={{ display: isPathHome ? "block" : "none" }}></Logo>
      </Task>
    </>
  );
}

export default TaskBar;
