import styled from "styled-components";

export const ReviewDiv = styled.div`
max-height: 10vh;

span {
    position: inline-block;
}

`
export const Card = styled.div`
border: 2px solid #ccc;
  background-color: #eee;
  box-shadow: #422800 4px 4px 0 0;
  border-radius: 5px;
  padding: 1px;
  margin: 10px 0;
  


  h3, span {
      display: inline-block;
      margin: 10px;
  }

  p {
      margin-top: 5px;
      text-align: center;
  }
`

export const ReviewBtn = styled.button`

  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  margin-top: 15px;
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