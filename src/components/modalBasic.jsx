import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8080803a;
  backdrop-filter: blur(15px);
  @keyframes pop {
    0% {
      backdrop-filter: blur(0px);
    }
    100% {
      backdrop-filter: blur(15px);
    }
  }
  animation-delay: 0;
  animation-duration: 0.2s;
  animation-name: pop;

  transition: flex 0.2s;
`;

const Close = styled.button`
  width: 60px;
  height: 60px;
  background-color: #ff3964;
  position: absolute;
  border-radius: 18px;
  border: 0px;
  top: 10%;
  font-size: 20px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #ff6183;
  }
`;

const Btn = styled.div`
  margin: 4px;
  width: 300px;
  height: 40px;
  background-color: #dedede;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5em;
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 5px 3px;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  //왓츠앱 공유하기
  function WhatsAppOpen() {
    window.location.href = "whatsapp://send?text=http://125.129.235.167/";
    window.dataAction = "share/whatsapp/share";
    window.target = "_blank";
  }

  //현재주소 복사
  function CopyLocation() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then((res) => {
      alert("Copy to Clipboard");
    });
  }

  return (
    <Container onClick={closeModal}>
      <Btn onClick={WhatsAppOpen}>Share to WhatsApp</Btn>
      <Btn onClick={CopyLocation}>Copy URL</Btn>
      <Close onClick={closeModal}>X</Close>
    </Container>
  );
}
export default ModalBasic;
