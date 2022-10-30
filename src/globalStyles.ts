import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  };
  button {
    cursor: pointer;
  }
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
`;