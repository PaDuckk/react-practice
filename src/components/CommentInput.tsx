import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Comment } from "../model/interface";

type Props = {
  userName: string;
  onConfirm: (comment: Comment) => void;
};

const CommentInput = ({ userName, onConfirm }: Props) => {
  const logined = userName !== "";
  const [text, setText] = useState<string>("");

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleConfirm = () => {
    onConfirm({
      userName: userName,
      text,
      createdAt: Date.now(),
    });
    setText("");
  };

  return (
    <Wrapper logined={logined}>
      <textarea
        value={text}
        disabled={!logined}
        onChange={handleTextArea}
      ></textarea>
      <button disabled={!logined} onClick={handleConfirm}>
        Tweet
      </button>
    </Wrapper>
  );
};

export default CommentInput;

const Wrapper = styled.div<{ logined: boolean }>`
  width: 600px;
  padding: 24px 32px;

  display: flex;
  gap: 12px;

  border-radius: 15px;
  background-color: gray;

  textarea {
    width: 80%;
    height: 50px;
    ${({ logined }) => !logined && "cursor: not-allowed"}
  }

  button {
    width: 20%;
    ${({ logined }) => !logined && "cursor: not-allowed"}
  }
`;
