import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    // width: 100vw;
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
    font-size: 3.2rem;
    margin-bottom: 50px;
}

p {
    font-size: 18px;
}

button {
//     border-radius: 10px;
//     border: 5px solid #DBAD62;
//     cursor: pointer;
//     width: 200px;
//     heigth: 25px;
//     font-size: 18px;
//     background: none;
//     color: #DBAD62;
   

// }


  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  width: 200px;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover {
  background-color: #fff;
  transform: scale(0.98);
}

button:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
`