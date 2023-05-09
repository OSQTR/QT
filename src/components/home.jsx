import styled from "styled-components";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const HomeBody = styled.div`
  width: 100%;
  height: 300px;
  background-color: azure;
`;

function Home() {
  return (
    <>
      <HomeBody></HomeBody>
    </>
  );
}

export default Home;
