import styled from "styled-components";
import { COMMENT_DELETE_DURATION } from "../config/const";
import { Comment } from "../model/interface";

type Props = {
  comment: Comment;
  isOwned: boolean;
  onDeleteClick: (createdAt: number) => void;
};

const CommentBox = ({ comment, isOwned, onDeleteClick }: Props) => {
  const date = new Date(comment.createdAt);
  const expiredAt = new Date(comment.createdAt + COMMENT_DELETE_DURATION);
  const countdown = parseInt("" + (+expiredAt - Date.now()) / 1000);

  return (
    <Wrapper>
      <div className="top">
        <div className="user">{comment.userName}</div>
        {isOwned && (
          <div
            className="delete"
            onClick={() => onDeleteClick(comment.createdAt)}
          >
            ❌
          </div>
        )}
      </div>
      <div className="text">{comment.text}</div>
      <div className="bottom">
        <div className="created-at">
          {`${date.toLocaleDateString()} ${[
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
          ].join(":")}`}
        </div>
        <div className="count-down">{countdown}</div>
      </div>
    </Wrapper>
  );
};

export default CommentBox;

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 15px;
  background-color: #fff;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user {
      font-size: 24px;
      font-weight: bold;
    }

    button {
      padding: 2px 12px;
    }

    .delete {
      cursor: pointer;
    }
  }

  .text {
    font-size: 16px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    .created-at {
      font-size: 12px;
      color: dimgray;
    }

    .count-down {
      font-size: 12px;
      color: red;
    }
  }
`;
