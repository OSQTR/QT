import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Book } from "../img/book.svg";
import { ReactComponent as Stem } from "../img/stems.svg";
import { ReactComponent as Share } from "../img/share.svg";
import { ReactComponent as Comm } from "../img/comment.svg";
import { ReactComponent as Home } from "../img/home.svg";

const IcoBook = styled(Book)`
  stroke: white;
`;

const IcoStems = styled(Stem)`
  stroke: white;
`;

const IcoShare = styled(Share)`
  stroke: white;
`;

const IcoComm = styled(Comm)`
  stroke: white;
`;

const IcoHome = styled(Home)`
  stroke: white;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: #0000003b;
  width: 100%;
  height: 83px;
  border-top: solid 0.25px #909090;
  position: fixed;
  bottom: 0px;
  z-index: 2;
  backdrop-filter: blur(15px);

  @media (orientation: landscape) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  padding: 10px;
  margin: 6px 2px;
  height: 25px;
  border-radius: 13px;
  text-decoration: none;
  line-height: 1.5em;
  color: white;

  @media (orientation: landscape) {
    border-radius: 30px;
  }

  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    .st0 {
      stroke: black;
    }
  }
  &.active {
    text-decoration: none;
    background-color: white;
    color: black;
    .st0 {
      stroke: black;
    }
  }
`;

const NavBtn = styled.div`
  padding: 10px;
  margin: 6px 2px;
  height: 25px;
  border-radius: 13px;
  text-decoration: none;
  line-height: 1.5em;
  color: white;

  @media (orientation: landscape) {
    border-radius: 30px;
  }

  &:hover {
    cursor: pointer;
    background-color: white;
    .st0 {
      stroke: black;
    }
  }
`;

const FloatNavWrap = styled.div`
  position: fixed;
  display: flex;
  /* display: ${(props) => (props.isHomePath ? "none" : "flex")}; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 50vw;
  transform: translateX(+310px);
  top: 80px;
  width: 65px;
  height: 300px;
  border-radius: 31px;
  background-color: #0000003b;
  z-index: 2;
  backdrop-filter: blur(15px);
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 5px 3px;

  @media (orientation: portrait) {
    display: none;
  }
`;

const navItem = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    sym: <IcoHome />,
  },
  {
    id: 2,
    title: "Book",
    path: "/",
    sym: <IcoBook />,
  },
  {
    id: 3,
    title: "stems",
    path: "/stems",
    sym: <IcoStems />,
  },
  {
    id: 4,
    title: "etc",
    path: "/etc",
    sym: <IcoComm />,
  },
];

const Navbar = ({ showModal }) => {
  const location = useLocation();
  const isPathHome = location.pathname === "/home";

  return (
    <>
      <NavWrapper>
        {navItem.map((item) => (
          <NavItem key={item.id} to={item.path}>
            {item.sym}
          </NavItem>
        ))}
        <NavBtn onClick={showModal}>
          <IcoShare />
        </NavBtn>
      </NavWrapper>

      <FloatNavWrap style={{ display: isPathHome ? "none" : "flex" }}>
        {navItem.map((item) => (
          <NavItem key={item.id} to={item.path}>
            {item.sym}
          </NavItem>
        ))}
        <NavBtn onClick={showModal}>
          <IcoShare />
        </NavBtn>
      </FloatNavWrap>
    </>
  );
};

export default Navbar;
