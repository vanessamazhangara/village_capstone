import styled from "styled-components";

export const Main = styled.div`
background-color: #1A2D71;
display: flex;
flex-direction: column;
// position: relative;
width: 100vw;
height: 100vh;
// border: 1px solid;


`
export const LeftBar = styled.div`
// background-color: yellow;
// // position: relative;
// width: 15%;
// height: 100vh;
// margin-top: -213px;

    width: 20%;
  height: 250px; ;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: -10px;


`

export const ProfilePic = styled.div`
// position: relative;
// display: flex;
// justify-content: space-between;
// width: 50px;
// height: 50px;
// border-radius: 50%;
// // border: 1px solid white;
// margin: 15px;

display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;



img {
    border-radius: 50%;
    width: 50px;
    height: 50px; 
    margin-right: 10px;
}

p {
    margin: 0;
    font-size: 16px;
   
    
    
}

div {
    margin-top: 10px;
}


`
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
height: 10%;
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

export const Account = styled.div`
margin-left: 350px;
margin-top: -460px;
display: flex;
flex-direction: column;
padding: 1rem;
width: 50%;
height: 275px;
background-color: #091322;
box-shadow: #422800 10px 10px 0 0;
border-radius: 1rem;`

export const Info = styled.div`
display: flex;
color: white;
border-bottom: 1px solid;

p {
     margin: 10px;
     font-size: 24px;
}`

export const UpdateBtn = styled.button`
background-color: #fbeee0;
border: 2px solid #422800;
border-radius: 30px;
margin: 10px;
width: 300px;
color: #422800;
cursor: pointer;
display: inline-block;
font-weight: 600;
font-size: 18px;
padding: 0 18px;
line-height: 50px;
text-align: center;
text-decoration: none;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;


&:hover {
  background-color: #fff;
  transform: scale(0.95);
}

&:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}`


