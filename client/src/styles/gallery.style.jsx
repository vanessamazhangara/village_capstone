import styled from "styled-components";

export const Grid = styled.div`
    margin-top: 15px;
    width: 500px;
    display: flex;
    flex-wrap: wrap;
  
  
  div {
    margin-bottom: 10px;
    flex: 1 150px;
    margin-right: 15px
  }
  
 img {
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10);
    width: 200px; 
    height: 200px;
    cursor: pointer;
    max-width: 100%;
  }`