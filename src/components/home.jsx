import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MainContents from "./mainContents";
import SubContents from "./subContents";

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

function Home() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://125.129.235.167:1337/api/books/1");
      setPostData(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <HomeBody>
        <MainContents postData={postData} />
        <SubContents />
      </HomeBody>
    </>
  );
}

export default Home;
