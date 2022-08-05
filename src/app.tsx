import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./page/Main";

const GlobalStyle = createGlobalStyle`
  ${reset}


  * {
    outline: none;
    box-sizing: border-box;
  }

  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Main />
      </div>
    </>
  );
}

export default App;
