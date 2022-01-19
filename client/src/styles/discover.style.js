import styled from "styled-components";

export const PortfolioCard = styled.div`

    margin: 50px;
img {
    position: relative;
    width: 300px;
    cursor: pointer;
    opacity: rgba(0, 0, 0, 0.6); 
    
}

`

export const PortfolioCardImage = styled.img`
    display: block;
    width: 100%;

    &:hover {
        background: rgba(0, 0, 0, 0.6); 
    }
`

export const Overlay = styled.div`
display: flex;
width: 300px;
margin: 10px;

h2 {
    font-size: 18px
}

img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
`