import styled from "styled-components";

const TextBody = styled.div`
  padding: 80px 20px 120px 20px;
  color: white;
  max-width: 600px;
  margin: auto;
`;

const DivBar = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 10px;
    font-size: 2em;
  }
`;

function Stems({ data }) {
  const stemsText =
    data.attributes?.Stems.replace(/\\r\\n/gi, "<br/><br/>") || "";
  const stems = stemsText.replace(/\d+/g, "<span>$&</span>");

  const medText =
    data.attributes?.Reference.replace(/\\r\\n/gi, "<br/><br/>") || "";
  const med = medText.replace(/\d+/g, "<span>$&</span>");

  return (
    <TextBody>
      {
        <div key={data.id}>
          <h2>Stems</h2>
          <p dangerouslySetInnerHTML={{ __html: stems }}></p>
          <DivBar>
            ◆<span>❖</span>◆
          </DivBar>
          <h2>People for your Meditation</h2>
          <p dangerouslySetInnerHTML={{ __html: med }}></p>
        </div>
      }
    </TextBody>
  );
}

export default Stems;
