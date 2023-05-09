import styled from "styled-components";
import { useState, useEffect } from "react";

const TopImg = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  -webkit-user-drag: none;
`;

const TextBody = styled.div`
  padding: 75px 20px 120px 20px;
  color: white;
  max-width: 600px;
  margin: auto;

  span {
    color: #c0c0c0;
    font-size: 0.8em;
    font-weight: 700;
    vertical-align: top;
    margin: 0px 2px 0px 8px;
  }
`;

function BibleBody({ data, imageUrl }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      setImageLoaded(true);
    }
  }, [imageUrl]);
  const url = imageUrl ? "http://125.129.235.167:1337" + imageUrl : "";

  const htmlText =
    data.attributes?.BodyText.replace(/\\r\\n/gi, "<br/><br/>") || "";

  const text = htmlText.replace(/\d+/g, "<span>$&</span>");

  return (
    <TextBody>
      {
        <div key={data.id}>
          {imageLoaded && <TopImg src={url} />}
          <h2>{data.attributes?.Title}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: text }}
            // dangerouslySetInnerHTML={{
            //   __html: data.attributes?.BodyText.replace(
            //     /\\r\\n/gi,
            //     "<br/><br/>"
            //   ),
            // }}
          ></p>
        </div>
      }
    </TextBody>
  );
}

export default BibleBody;

// import React, { useEffect, useRef } from "react";

// function MyComponent() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     // 이전 스크롤 위치를 가져와 적용한다
//     const savedScrollPosition = localStorage.getItem("scrollPosition");
//     if (savedScrollPosition !== null) {
//       scrollRef.current.scrollTop = parseInt(savedScrollPosition);
//     }

//     // 컴포넌트가 언마운트될 때 스크롤 위치를 저장한다
//     return () => {
//       localStorage.setItem("scrollPosition", scrollRef.current.scrollTop);
//     };
//   }, []);

//   return (
//     <div ref={scrollRef}>
//       {/* 스크롤이 필요한 컨텐츠 */}
//     </div>
//   );
// }
