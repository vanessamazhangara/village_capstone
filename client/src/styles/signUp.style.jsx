import styled from "styled-components";

export const Register = styled.div`
    margin-left: 45px;
    margin-bottom: 50px;
  
`

export const Form = styled.div`
  background: #fbeee0;
  padding: 3em 3em 1em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 10px;

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    margin:0;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    background: #fff;
    border: 1px solid #422800;
    font-size: 1.6em;
    padding: .8em .5em;
    border-radius: 2px;
  }

  label {
    
    left: 8px;
    top: 12px;
    color: #422800;
    font-size: 16px;
    display: inline-block;
    padding: 4px 10px;
    font-weight: 400;
    background-color: rgba(255,255,255,0);
    @include transition(color .3s, top .3s, background-color .8s);
    &.floatLabel{
      top: -11px;
      background-color: rgba(255,255,255,0.8);
      font-size: 14px;
    }

  
  `

  export const Button = styled.div`
  
  
    background: #678B50;
    border-radius: 50px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 2em;
    // line-height: 1.6em;
    margin: 1rem;
    outline: none;
    padding: .8em 0;
    text-align: center;
    
    &:hover {
        background: #422800;
        text-shadow:0 1px 3px darken($button, 30%);
      }
    
  }`

  export const Main = styled.main`

  background-image: url("https://images.unsplash.com/photo-1554080353-321e452ccf19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
  display: flex;
  background-size: cover;
  position: relative;
  padding: 25px;
  width: 100%;
  height: 55%;
  `
  export const Left = styled.div`
//   img {
//       height: 75%;
//   }`
  export const Right = styled.div`
    margin: 0 auto;`