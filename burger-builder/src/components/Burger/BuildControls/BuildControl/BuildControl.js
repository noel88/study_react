import React from "react";
import styled from "styled-components";

const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  
  &&:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }
  
  &&:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

const Less = styled.button`
    background-color: #D39952;
    color: white;
    
    &&:hover {
      background-color: #DAA972;
      color: white;
    }
    
    &&:active {
      background-color: #DAA972;
      color: white;
    }
`;
const More = styled.button`
    background-color: #8F5E1E;
    color: white;
    
    &&:hover {
      background-color: #99703F;
      color: white;
    }
    
    &&:active {
      background-color: #99703F;
      color: white;
    }
`;

const buildControl = (props) => {
    return (
        <BuildControl>
            <Label>{props.label}</Label>
            <Less>Less</Less>
            <More onClick={props.added}>More</More>
        </BuildControl>
    )
};


export default buildControl;
