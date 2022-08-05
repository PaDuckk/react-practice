import { useEffect, useState } from "react";
import styled from "styled-components";
import CommentBox from "../components/CommentBox";
import CommentInput from "../components/CommentInput";
import Header from "../components/Header";
import { COMMENT_DELETE_DURATION, USER_NAME } from "../config/const";
import useRefresh from "../hooks/useRefresh";
import { Comment } from "../model/interface";

type Props = {};

const Main = (props: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const { tick } = useRefresh();

  const handleConfirmComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    const cachedUserName = localStorage.getItem(USER_NAME);

    if (cachedUserName) {
      setUserName(cachedUserName);
    }
  }, []);

  useEffect(() => {
    const filtered = comments.filter(
      (c) => c.createdAt + COMMENT_DELETE_DURATION > Date.now()
    );

    setComments(filtered);
  }, [tick]);

  const handleLogin = (userName: string) => {
    setUserName(userName);
    localStorage.setItem(USER_NAME, userName);
  };

  return (
    <Layout>
      <Header userName={userName} onLogin={handleLogin} />
      <div>
        <CommentInput userName={userName} onConfirm={handleConfirmComment} />
      </div>
      <div className="comments">
        {comments.length === 0 ? (
          <div className="empty">
            <p>😅 Empty</p>
          </div>
        ) : (
          comments.map((comment, i) => {
            return (
              <CommentBox
                key={i}
                comment={comment}
                isOwned={comment.userName === userName}
              />
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Main;

const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  .comments {
    min-height: 300px;

    width: 600px;
    padding: 24px 32px;
    background-color: #add1ff;
    border-radius: 15px;
    display: flex;
    gap: 12px;
    flex-direction: column;

    .empty {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 32px;
      height: 300px;
    }
  }
`;
