import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Nav";
import TaskBar from "./components/taskBar";
import BibleBody from "./components/bibleBody";
import Stems from "./components/stemsBody";
import ModalBasic from "./components/modalBasic";
import CoList from "./components/commentList";
import NotFound from "./components/notFound";
import Home from "./components/home";

const BgImg = styled.img`
  position: fixed;
  top: 0;
  width: 150vw;
  height: auto;
  left: 50%;
  transform: translate(-50%);
  filter: blur(2.5rem) brightness(50%);
  z-index: -1;
  -webkit-user-drag: none;
  @media (orientation: portrait) {
    width: auto;
    height: 100vh;
  }
`;

function App() {
  //본문데이터
  const [data, setData] = useState([]);
  const [Image, setImage] = useState({});
  const [comments, setComments] = useState([]);
  const [bgurl, setBgurl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataResult = await axios.get(
        "http://125.129.235.167:1337/api/days/3"
      );
      const imageResult = await axios.get(
        "http://125.129.235.167:1337/api/upload/files/1"
      );
      const commentResult = await axios.get(
        "http://125.129.235.167:1337/api/comments"
      );

      const comments = commentResult.data;
      setComments(comments.data);
      setData(dataResult.data.data);
      setImage(imageResult.data.formats.medium.url);
      setBgurl(imageResult.data.formats.thumbnail.url);
    };
    fetchData();
  }, []);

  function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear;
  }

  //모달
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const bg = bgurl ? "http://125.129.235.167:1337" + bgurl : "";

  return (
    <>
      <BrowserRouter>
        <Navbar showModal={showModal} />
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        <TaskBar data={data} />
        <Routes>
          <Route
            path="/"
            element={<BibleBody data={data} imageUrl={Image} />}
          ></Route>
          <Route path="/Home" element={<Home />}>
            <Route></Route>
          </Route>
          <Route path="/stems" element={<Stems data={data} />}></Route>
          <Route path="/etc" element={<CoList comments={comments} />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <BgImg src={bg}></BgImg>
    </>
  );
}

export default App;
