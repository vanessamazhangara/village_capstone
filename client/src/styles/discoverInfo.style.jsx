import styled from "styled-components";

export const Header = styled.div`
background-color: #1A2D71;
width: 100%;
height: 35vh;`

export const Left = styled.div`
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
margin-left: 65px

`

export const ProfilePic = styled.div`
width: 200px;
height: 200px;
margin-top: -120px;
border-radius: 100px;
border: 4px solid #fff;


img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
`

export const Social = styled.div`
display: flex;

i {
    margin: 10px;
    font-size: 2rem;
    cursor: pointer;
}

.fa-facebook-square {
    color: #85B6FF;
}

.fa-instagram {
    color: #A43499;
}
`

export const Info = styled.div`
align-items: center;

h4 {
    font-size: 2rem;
}
p {
    font-size: 18px;
}`

export const MessageBtn = styled.button`
width: 200px;
    height: 35px;
    border: 5px solid black;
    cursor: pointer;
    border-radius: 15px;
    background-color: none;
    margin: 15px;
    font-size: 16px;
    font-weight: 700;

    &:hover {
        opacity: 0.9;
        transform: scale(0.95);
    }
`

export const Right = styled.div`
padding: 0 25px 0 25px 
!important;
`
export const Section = styled.main`
display: flex;`

export const Nav = styled.nav`
    display: inline-flex;
    text-decoration: none;
  
  li {
    margin: 40px 30px 0 10px;
    cursor: pointer;
    font-size: 13pt;
    text-transform: uppercase;
    font-weight: 500;
    color: #888;
    list-style: none;
   
  }
  
   li:hover, li:nth-child(1)  { 
    color: #999;
    border-bottom: 2px solid #999;
  }`