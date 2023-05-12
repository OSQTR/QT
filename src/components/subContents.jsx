import styled from "styled-components";

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

const SubContentWrap = styled.div`
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

const SubContent = styled.div`
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

const SubContents = () => {
  return (
    <SubContentWrap>
      <SubContent>
        <MainTitle>지난 아티클</MainTitle>
        <MainText>역시 약간의 설명입니다.</MainText>
      </SubContent>
      <SubContent>
        <MainTitle>Title</MainTitle>
        <MainText>sub Title</MainText>
      </SubContent>
    </SubContentWrap>
  );
};

export default SubContents;
