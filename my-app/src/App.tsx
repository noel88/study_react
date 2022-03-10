import React, {useState} from 'react';
import {Circle} from "./Circle";
import styled from "styled-components";


function App() {
  const [username, setUsername] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value}} = event;
    setUsername(value);
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello: ", username);
  }
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor}
  `;
  return (
   <Container>
     <H1>Hello</H1>
     {/*<Circle bgColor="tomato" borderColor="yellow" />*/}
     {/*<Circle bgColor="teal" text="hello"/>*/}
     {/*<form onSubmit={onSubmit}>*/}
     {/*  <input*/}
     {/*    value={username}*/}
     {/*    onChange={onChange}*/}
     {/*    type="text"*/}
     {/*    placeholder="username" />*/}
     {/*  <button>Log in</button>*/}
     {/*</form>*/}

   </Container>
  );
}

export default App;
