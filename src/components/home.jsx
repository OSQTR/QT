import styled from "styled-components";

const HomeBody = styled.div`
  padding: 75px 20px 120px 20px;
  max-width: 600px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(8, 1fr);
  gap: 16px;

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
  max-width: 100%;
  max-height: 600px;
  border-radius: 23px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  &:hover {
    background-color: #ffffffc4;
  }
`;

const MainTitle = styled.div`
  position: relative;
  margin: 0px 16px;
  color: #000000ad;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  font-weight: bold;
  @media (orientation: landscape) {
    font-size: 2.5em;
  }
`;

const MainText = styled.div`
  position: relative;
  margin: 4px 16px 16px 16px;
  color: #00000084;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  font-weight: normal;
  @media (orientation: landscape) {
    font-size: 1.2em;
  }
`;

const SubContentsWrap = styled.div`
  grid-column: 1/3;
  grid-row: 3/5;
  height: 80vw;
  width: 100%;
  max-width: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) {
    height: 512px;
    grid-column: 3/5;
    grid-row: 1/3;
  }
`;

const SubContents = styled.div`
  height: 40vw;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 23px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  &:hover {
    background-color: #ffffffc4;
  }
  @media (orientation: landscape) {
    margin: 8px 0px 8px 0px;
  }
`;

function Home() {
  return (
    <>
      <HomeBody>
        <MainContents>
          <MainTitle>메인 타이틀이 됩니다.</MainTitle>
          <MainText>설명이 들어가겠지요, OG에도 사용됨</MainText>
        </MainContents>
        <SubContentsWrap>
          <SubContents>
            <MainTitle>지난 아티클</MainTitle>
            <MainText>역시 약간의 설명입니다.</MainText>
          </SubContents>
          <SubContents>
            <MainTitle>Title</MainTitle>
            <MainText>sub Title</MainText>
          </SubContents>
        </SubContentsWrap>
      </HomeBody>
    </>
  );
}

export default Home;
