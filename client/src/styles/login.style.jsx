import styled from "styled-components";

export const Input = styled.input`
width: 30%;
color: rgb(38, 50, 56);
font-weight: 700;
font-size: 14px;
letter-spacing: 1px;
background: rgba(136, 126, 126, 0.04);
padding: 10px 20px;
border: none;
border-radius: 20px;
outline: none;
box-sizing: border-box;
border: 2px solid rgba(0, 0, 0, 0.02);
margin-bottom: 50px;
margin-left: 35%;
text-align: center;
margin-bottom: 27px;`

export const Form = styled.form`

    padding-top: 40px;
    display: flex;
    flex-direction: column;
    margin: 7em auto;
    

    p, h2 {
        padding-top: 10px;
        color: #7d7770;
        font-weight: bold;
        font-size: 23px;
        text-align: center;
    }
`
export const SubmitBtn = styled.button`

    cursor: pointer;
      border-radius: 5em;
      color: #fff;
      background: linear-gradient(to right, #7d7770, #c8beb3);
      border: 0;
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 10px;
      padding-top: 10px;
      margin-left: 43%;
      width: 150px;
      font-size: 13px;
      box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  }`

  export const Alert = styled.div`
  background-color: #ffb3b3;
  border-radius: .2rem;
    // border: 1px solid black;
    padding: 1rem;
    color: black;
    text-align: center;
    margin: 0 auto;
    margin-top: -10px;
    margin-bottom: 10px;
    width: 30%`
