import styled from "styled-components";

const NotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background-color: #00000055;
  backdrop-filter: blur(15px);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Btn = styled.div`
  margin: 4px;
  width: 300px;
  height: 40px;
  background-color: #dedede;
  color: black;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5em;
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 5px 3px;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

function mainPage() {
  window.location.href = "/";
}

function NotFound() {
  return (
    <NotFoundPage>
      <div>404 Page not found</div>
      <Btn onClick={mainPage}>Main page</Btn>
    </NotFoundPage>
  );
}

export default NotFound;
