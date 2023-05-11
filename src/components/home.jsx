import styled from "styled-components";

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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const MainContents = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  height: 100%;
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  border-radius: 16px;
  background-color: bisque;
`;

const SubContents = styled.div`
  grid-column: 1/3;
  grid-row: 3/4;
  height: 100%;
  width: 100%;
  max-width: 600px;
  max-height: 300px;
  border-radius: 16px;
  background-color: #c4e0ff;
  @media (orientation: landscape) {
    grid-column: 3/5;
    grid-row: 1/3;
  }
`;

function Home() {
  return (
    <>
      <HomeBody>
        <MainContents>1</MainContents>
        <SubContents>2</SubContents>
      </HomeBody>
    </>
  );
}

export default Home;
