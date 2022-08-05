import { useState } from "react";
import styled from "styled-components";

type Props = {
  userName: string;
  onLogin: (name: string) => void;
};

const Header = ({ userName, onLogin }: Props) => {
  const [name, setName] = useState("");

  return (
    <Wrapper>
      <div></div>
      <div className="info">
        {userName === "" ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={() => {
                onLogin(name);
                setName("");
              }}
            >
              login
            </button>
          </>
        ) : (
          <>
            <span>{userName}</span>
            <button onClick={() => onLogin("")}>logout</button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 32px;

  display: flex;
  justify-content: end;

  .info {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
