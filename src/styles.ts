import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Header = styled.header`
  display: flex;
  padding: 0 40px;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 12%;

  background-color: #ec7000;

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

  @media (max-width: 789px) {
    padding: 0 25px;
    height: 90px;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }

    button {
      width: 25px;
      height: 25px;
      margin-right: 10px;

      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  @media (max-width: 620px) {
    height: 90px;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 15px;
    }

    button {
      width: 20px;
      height: 20px;
      margin-right: 10px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 490px) {
    height: 90px;

    img {
      width: 35px;
      height: 35px;
    }

    h1 {
      display: none;
    }

    h2 {
      margin-left: 15px;
      font-size: 18px;
    }

    button {
      width: 20px;
      height: 20px;
      margin-right: 10px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`

export const HeaderButtons = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 77%;

  align-items: center;
  overflow: hidden;
  overflow-y: scroll;

  @media (max-width: 789px) {
    height: auto;
    margin: 18px 0;
  }
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #efe9e5;

  @media (max-width: 789px) {
    height: 100%;
  }
`

export const SectionForm = styled.section`
  display: flex;

  align-items: center;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  height: 450px;

  gap: 100px;

  @media (max-width: 1036px) {
    gap: 15px;
    max-width: 300px;
  }

  @media (max-width: 789px) {
    flex-direction: column;
    max-width: 300px;
    height: 100%;
    margin-bottom: 15px;
  }
`

export const Steps = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  width: 100%;
  height: 350px;

  border-radius: 5px;
  padding: 20px 20px;
  background-color: white;
  box-shadow: 0 0 15px rgb(112, 106, 102, 0.5);

  h1 {
    margin: 10px 0;
  }

  h3 {
    color: #ec7000;
  }

  p {
    font-size: 12px;
    color: #706a66;
    margin-top: 5px;
  }

  @media (max-width: 910px) {
    max-width: 250px;

    padding: 20px 15px;

    h1 {
      margin: 5px 0;
      font-size: 20px;
    }

    h3 {
      color: #ec7000;
      font-size: 18px;
    }

    p {
      font-size: 10px;
      color: #706a66;
      margin-top: 5px;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const CustomInput = styled(InputMask)`
  height: 40px;
  padding: 0 5px;
`

export const FeedbackArea = styled.div`
  display: hidden;

  width: 100%;
  height: 90px;
`

export const CheckSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgb(112, 106, 102, 0.4);
  background-color: #bcd9a8;
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
`

export const UncheckSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgb(112, 106, 102, 0.4);
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
`

export const NextButton = styled.button`
  display: flex;
  margin-top: 50px;
  align-self: flex-end;
  border: none;
  background-color: #ec7000;
  color: white;
  border-radius: 5px;
  width: 110px;
  height: 40px;
  font-weight: bold;
`

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
    background-color: #ec7000;
    color: white;
    border-radius: 5px;
    width: 110px;
    height: 40px;
    font-weight: bold;
  }

  @media (max-width: 910px) {
    margin-top: 160px;
  }
`

export const FirstStep = styled.section`
  display: flex;

  margin-top: 50px;

  width: 100%;
  height: auto;
  align-self: flex-end;
  justify-content: center;
  gap: 30px;

  button {
    border: none;
    background-color: #ec7000;
    color: white;
    border-radius: 5px;
    width: 110px;
    height: 40px;
    font-weight: bold;
  }

  @media (max-width: 910px) {
    margin-top: 70px;
  }
`

export const ResultSection = styled.section`
  display: flex;

  max-width: 1100px;
  width: 100%;
  height: 200px;

  border-radius: 5px;
  box-shadow: 0 0 15px rgb(112, 106, 102, 0.5);
  padding: 12px 30px;
  background-color: white;
  align-items: center;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;

    img {
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
      margin-top: 12px;
    }

    p {
      align-self: center;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }

    span {
      color: #ec7000;
      font-weight: bold;
    }

    ul {
      text-align: left;
      font-size: 20px;
      margin-top: 30px;
      height: 50px;
    }

    h1 {
      color: #ec7000;
      font-size: 25px;
      margin-top: 40px;
    }

    button {
      border: none;
      background-color: #ec7000;
      color: white;
      border-radius: 5px;
      width: 150px;
      height: 60px;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }

  @media (max-width: 910px) {
    max-width: 780px;
    padding: 12px 15px;

    section {
      img {
        width: 55px;
        height: 55px;
      }

      p {
        font-size: 16px;
      }

      ul {
        font-size: 18px;
      }

      h1 {
        font-size: 20px;
      }

      button {
        width: 130px;
        height: 50px;
        margin-bottom: 15px;
        margin-top: 15px;
      }
    }

    @media (max-width: 789px) {
      max-width: 250px;
      height: 100%;
      padding: 10px 10px;
      flex-direction: column;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 60px;
          height: 60px;
          margin-bottom: 15px;
          margin-top: 12px;
        }

        p {
          align-self: center;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
        }

        span {
          color: #ec7000;
          font-weight: bold;
        }

        ul {
          text-align: center;
          align-items: center;
          font-size: 19px;
          margin-top: 30px;
          height: 100%;
          width: 100%;
          list-style-position: inside;
          list-style-type: none;
        }

        li {
          margin-bottom: 10px;
        }

        h1 {
          text-align: center;
          font-size: 22px;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        button {
          border: none;
          background-color: #ec7000;
          color: white;
          border-radius: 5px;
          width: 150px;
          height: 60px;
          font-weight: bold;
          margin-bottom: 10px;
          margin-top: 2px;
        }
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding: 20px 50px 0;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 11%;

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

  @media (max-width: 490px) {
    padding: 20px 10px 0;

    p {
    font-size: 12px;
    margin-right: 30px;
  }
  img {
    width: 150px;
    height: 80px;
  }
   }
`
