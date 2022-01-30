import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 97vh;
  padding: 1rem;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
//   border-radius: 2rem;
  `

  export const LeftBar = styled.div`
  width: 20%;
  height: 50%;
  margin-top: 15px;
  margin: 10px;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px; 
    margin-right: 10px;
}`

  export const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

export const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

export const Links = styled.ul`
  list-style-type: none;
  display: flex;
//   flex-direction: column;
  padding-top: 2rem;
  height: 10%;
  cursor: pointer;

  &:hover {
      color: blue;
  }
`;

export const LinksContainer = styled.div`
//   background-color: #4974a5;
  color: white;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

export const Ul = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
// height: 10%;
margin-top: -25px;

`
export const Greeting = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 10%;
margin-left: 300px;
`;

export const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
 
  
`;
//////////////////////////////////////////////////////////

export const AccForm = styled.form`

width: 550px;
height: 55%;
margin: 25px;
color: white;
margin-left: 100px;
 background-color: #091322;
 padding: 1rem;
 border-radius: 1rem;

 div {
     margin-bottom: 5px;
     
 }

 button {
     margin: 10px;
     border-radius: 5px;
 }

 label {
     font-size: 18px;
     
 }
`

export const InputDiv = styled.div`
    background-color: transparent;
    border: 1px solid #bebcc1;
    // border-bottom-color: #bebcc1;
    box-shadow:none;
    font-size: bolder;
    margin-left: 10px;
    margin: 10px;
    padding: 10px;
    width: 95%;
}`
export const Input = styled.input`
    background-color: transparent;
    border: 1px solid #bebcc1;
    color: white;
    // border-bottom-color: #bebcc1;
    box-shadow:none;
    margin: 10px;
    margin-left: 10px;
    padding: 8px;
    width: 95%;
}`

export const DashCard = styled.div`
border: 2px solid #ccc;
  background-color: #091322;
  box-shadow: grey 4px 4px 0 0;
  border-radius: 5px;
  padding: 1px;
  margin: 10px 0;
  color: white;
  margin-left: 100px;
  


  h3, span {
      display: inline-block;
      margin: 10px;
  }

  p {
      margin-top: 5px;
      text-align: center;
  }
`

