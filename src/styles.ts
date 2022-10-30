import styled from "styled-components";
import InputMask from "react-input-mask";

export const Header = styled.header`
  display: flex;
  
  padding: 0 40px;


  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 110px;

  background-color: #EC7000;

  img {
    width: 50px;
    height: 50px;
  }
  
  h1 {
    color: white;
    margin-right: 10px;
    align-self: center;
    margin-left: 20px;
    font-size: 32px;
    font-weight: bold;
  }

  h2 {
    color: white;
    align-self: center;
    padding-top: 7px;
  }

  button {
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
    margin-right: 20px;
    align-items: center;
    

    img {
      width: 30px;
      height: 30px;
    }

  }

  div {
    display: flex;

    align-items: center;

  }
`;

export const HeaderButtons = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #EFE9E5;
`;

export const SectionForm = styled.section`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 450px;

  gap: 100px;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 350px;

  border-radius: 5px;
  padding: 20px 20px;
  background-color: white;
  box-shadow: 0 0 15px rgb(112,106,102, 0.5);
  
  h1 {
    margin: 10px 0;
  }

  h3 {
    color: #EC7000;
  }

  p {
    font-size: 12px;
    color: #706A66;
    margin-top: 5px;
  }
  `;

  export const CustomInput = styled(InputMask)`
    height: 40px;
    padding: 0 5px;
  `;

  export const FeedbackArea = styled.div`
    display: hidden;

    width: 100%;
    height: 90px;
  `;

  export const CheckSection = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    border-radius: 5px;
    box-shadow: 0 0 15px rgb(112,106,102, 0.4);
    background-color: #BCD9A8;
    margin-top: 15px;
    padding: 12px 15px;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
    }

    p {
      margin: 0 10px;
    }
  `;

export const UncheckSection = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: 80px;
border-radius: 5px;
box-shadow: 0 0 15px rgb(112,106,102, 0.4);
background-color: #ffbbba;
margin-top: 15px;
padding: 12px 15px;
align-items: center;

img {
  width: 16px;
  height: 16px;
}

p {
  margin: 0 10px;
}
`;

  export const NextButton = styled.button`
    margin-top: 50px;
    align-self: flex-end;
    border: none;
    background-color: #EC7000;
    color: white;
    border-radius: 5px;
    width: 110px;
    height: 40px;
    font-weight: bold;
  `;

  export const StepButtons = styled.section`
    display: flex;

    margin-top: 138px;
    
    width: 100%;
    height: auto;
    align-self: flex-end;
    justify-content: center;
    gap: 30px;

    button {
    border: none;
    background-color: #EC7000;
    color: white;
    border-radius: 5px;
    width: 110px;
    height: 40px;
    font-weight: bold;
    }
  `

  export const ResultSection = styled.section`
    display: flex;

    width: 58%;
    height: 200px;

    border-radius: 5px;
    box-shadow: 0 0 15px rgb(112,106,102, 0.5);
    padding: 12px 30px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    
    section{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 90%;
      

      p {
        align-self: center;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }

      img {
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
        margin-top: 12px;
      }

      ul {
        text-align: left;
        font-size: 20px;
        margin-top: 30px;
        height: 50px;
      }

      h1 {
        color: #EC7000;
        font-size: 25px;
        margin-top: 40px;
      }

      span {
        color: #EC7000;
        font-weight: bold;
      }

      button {
      border: none;
      background-color: #EC7000;
      color: white;
      border-radius: 5px;
      width: 150px;
      height: 60px;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 10px;
      }
    }

  `;


export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  position: absolute;
  padding-top: 20px;
  bottom: 0;
  gap: 1400px;

  align-items: center;
  justify-content: center;


  width: 100%;
  height: 100px;

  background-color: #003767;

  p {
    color: white;
    align-self: center;
    margin-bottom: 20px;
    margin-right: 50px;

  }
  img {
    width: 180px;
    height: 90px;
    align-self: center;
    margin-bottom: 15px;
  }
`;