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
  };
  button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: default;
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
`;