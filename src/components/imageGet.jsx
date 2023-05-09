import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function ImageGet() {
  const [Image, setImage] = useState({});

  useEffect(() => {
    const imageData = async () => {
      const result = await axios.get(
        "http://125.129.235.167:1337/api/upload/files/1"
      );
      setImage(result.data.formats);
    };
    imageData();
  }, []);

  const url = "http://125.129.235.167:1337" + `${Image.medium?.url}`;

  const TopImg = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 24px;
  `;

  return (
    <>
      <TopImg src={url} />
    </>
  );
}

export default ImageGet;
