import styled from "styled-components";

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  max-width: 600px;
  touch-action: pan-y;
  padding: 75px 20px 120px 20px;
`;

const CommentTop = styled.div`
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
`;

const CommentName = styled.div`
  color: black;
`;

const CommentTime = styled.div`
  color: #565656;
  font-size: 12px;
`;

const CommentAera = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: white;
  margin-top: 10px;
  padding: 18px;
`;

function CoList({ comments }) {
  return (
    <>
      <CommentWrap>
        {comments.map((comment) => (
          <CommentAera key={comment.id}>
            <CommentTop>
              <CommentName>{comment.attributes.Name}</CommentName>
              <CommentTime>
                {new Date(comment.attributes.createdAt)
                  .toISOString()
                  .slice(0, 10)}
              </CommentTime>
            </CommentTop>
            {comment.attributes.TextField}
          </CommentAera>
        ))}
      </CommentWrap>
    </>
  );
}

export default CoList;
