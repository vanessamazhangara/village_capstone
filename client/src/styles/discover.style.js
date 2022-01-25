import styled from "styled-components";

export const PortfolioCard = styled.div`

    margin: 10px;
    

img {
    position: relative;
    width: 300px;
    cursor: pointer;
    opacity: rgba(0, 0, 0, 0.9);
     
    
}
 


`

export const PortfolioCardImage = styled.img`
    display: block;
    width: 100%;

    img:hover {
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

export const Section = styled.section`
margin: 0 auto;
padding: 50px;
width: 1200px;
display: flex;
flex-wrap: wrap;


`

export const Input = styled.input`
border-radius: 15px;
border: 3px solid;
margin-left: 450px;
margin-top: 25px;
width: 300px;
`

export const H1 = styled.h1`

margin-left: 525px;
`