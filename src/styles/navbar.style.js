import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    background-color: yellow;
    width: 100vw;
`

export const Li = styled.ul`
    text-decoration: none;
    margin: 15px;
    font-size: 16px;
    color: black;
`

export const NavBtn = styled.button`
    width: 200px;
    height: 35px;
    border: 5px solid black;
    cursor: pointer;
    border-radius: 15px;
    background-color: none;
    margin: 15px;
    font-size: 16px;

    &:hover {
        opacity: 0.9;
        transform: scale(0.95);
    }
   
`

export const Logo = styled.img``