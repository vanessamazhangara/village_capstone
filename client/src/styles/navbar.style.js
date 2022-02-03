import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw!important;
    height: 20vh;
    padding: 0px;
    background-color: #DBAD62;
    
`

export const Li = styled.ul`
    text-decoration: none;
    margin: 15px;
    font-size: 16px;
    color: black;
`

export const NavBtn = styled.button`

 
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  margin: 10px;
  width: 200px;
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
  }


   
`

export const Logo = styled.img`
width: 100px;
 height: 100px;
 margin-right: 300px;
`