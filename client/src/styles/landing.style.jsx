import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #1A2D71;
    padding: 50px;
    
`

export const Container = styled.div`
    width: 600px;
    height: 600px;
    background-image: url(https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60);
    background-size: 100%;
    margin-right: 50px;
    margin-top: 50px;
`

export const ContainerTwo = styled.div`
width: 600px;
height: 600px; 
margin-top: 50px;
// background-color: grey;

h1, p, button {
    color: white;
    margin: 25px;
}

h1 {
    font-size: 3.3rem;
    margin-bottom: 50px;
}

p {
    font-size: 18px;
}

button {
    border-radius: 10px;
    border: 5px solid #DBAD62;
    cursor: pointer;
    width: 200px;
    heigth: 25px;
    font-size: 18px;
    background: none;
    color: #DBAD62;
   

}

button:hover {
    transform: scale(0.98);
}
`