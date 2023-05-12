import styled from "styled-components";
import { marked } from "marked";

const MainContent = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 600px;
  border-radius: 23px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  cursor: pointer;
  &:hover {
    background-color: #ffffffc4;
  }
`;

const TextWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
`;

const MainBg = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  background-size: cover;
  filter: saturate(95%) brightness(120%) contrast(85%);
`;

const MainTitle = styled.div`
  position: relative;
  margin: 10px 20px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  font-weight: bold;
  filter: none;
  @media (orientation: landscape) {
    font-size: 2.5em;
  }
`;

const MainText = styled.div`
  position: relative;
  margin: 0px 25px 20px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  font-weight: normal;
  @media (orientation: landscape) {
    font-size: 1.2em;
  }
`;

const MainContents = ({ postData }) => {
  const Title = postData.attributes?.Title;
  const BodyText = postData.attributes?.BodyText;
  // 이미지 파일 경로 추출
  const regex = /\!\[(.*?)\]\((.*?)\)/g;
  const matches = BodyText && [...BodyText.matchAll(regex)];
  const imagePath = matches && matches.length > 0 && matches[0][2];
  const imgUrl = "http://125.129.235.167:1337";
  const bgImg = imagePath && `${imgUrl}${imagePath}`;

  const fixedText =
    BodyText && BodyText.replace(/\((\/uploads.*?)\)/g, `(${imgUrl}$1)`);
  const html = fixedText ? marked(fixedText) : "";
  const subHtml = fixedText?.substr(0, 15) + "...";

  return (
    <MainContent>
      <MainBg style={{ backgroundImage: `url(${bgImg})` }} />
      <TextWrap>
        <MainTitle>{Title}</MainTitle>
        <MainText dangerouslySetInnerHTML={{ __html: subHtml }} />
      </TextWrap>
    </MainContent>
  );
};

export default MainContents;
