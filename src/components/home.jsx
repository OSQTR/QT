import styled from "styled-components";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const HomeBody = styled.div`
  padding: 75px 20px 120px 20px;
  color: white;
  max-width: 600px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(8, 1fr);
  gap: 5px;

  @media (orientation: landscape) {
    max-width: 1024px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

const MainContents = styled.div`
  grid-column: 1/3;
  height: 45vw;
  max-width: 600px;
  max-height: 300px;
  border-radius: 16px;
  background-color: bisque;
`;

function Home() {
  return (
    <>
      <HomeBody>
        <MainContents>1</MainContents>
      </HomeBody>
    </>
  );
}

export default Home;
