import styled from "styled-components";
import {useState} from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 2px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

export function Circle({ bgColor, borderColor , text = "default text" }: CircleProps) {
  const [counter, setCounter] = useState<number | string>(1);
  setCounter(23)
  setCounter("hello")
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  )
}
