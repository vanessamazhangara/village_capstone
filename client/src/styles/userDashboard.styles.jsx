import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 97vh;
//   background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
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
//////////////////////////////////////////////////////////

// export const DashContainer = styled.div`
//   width: 80%;
//   background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
//   border-bottom-right-radius: 2rem;
//   border-top-right-radius: 2rem;
//   margin: 1rem 8rem 1rem 4rem;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     margin: 1rem 0 0 0;
//   }
// `;

// export const SubContainer = styled.div`
// margin: 0.5rem 0;
// height: 80%;
// width: 100%;
// display: flex;
// flex-direction: column;
// gap: 4rem;
// @media screen and (min-width: 320px) and (max-width: 1080px) {
//   height: 100%;
// }
// `;

// export const Section1 = styled.div`
// display: flex;
// justify-content: space-between;
// height: 40%;
// ;`