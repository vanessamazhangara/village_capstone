import styled from "styled-components";

export const ModalStyle = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
min-height: 100vh;
background-color: rgba(0, 0, 0, 0.5)
`

export const Form = styled.form`
width: 40%;
height: 60%;
background-color: white;
padding: 10px;

div {
    display: flex;
    flex-direction: column;
    margin: 2em auto;
}

label {
    color: #1e293b;
    font-weight: bold;
}
    
   
    };
    
    

`

export const Btn = styled.button`

  background-color: #fff;
  width: 40vw;
  border: 0 solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #0d172a;
  cursor: pointer;
  display: inline-block;
  font-family: "Basier circle",-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
  padding: 1rem 1.6rem;
  text-align: center;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

&:hover {
  background-color: #1e293b;
  color: #fff;
}
}`