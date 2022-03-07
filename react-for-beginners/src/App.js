import {Button} from "./Button";
import styled from "./App.module.css";
import {useState, useEffect} from "react";
import {func} from "prop-types";

function App() {
    const [showing, setShowing] = useState(false);
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    const onClick = () => {
        setValue((prev) => prev + 1);
    }
    const onClickBtn = () => {
        setShowing(prev => !prev)
    }
    console.log("i run all the time");
    useEffect(() => {
        console.log("i run once the time");
    }, [])
    useEffect(() => {
        if(keyword !== "" && keyword.length > 5) {
            console.log("search : ", keyword)
        }
    }, [keyword])
  return (
    <div>
        <input value={keyword}
               type="text"
               placeholder="search here.."
               onChange={onChange}/>
      <h1 className={styled.title}>Welcome back! {counter}</h1>
        <Button onClick={onClick} text={'Continue'}/>
        {
            showing ? <Hello /> : null
        }
        <button onClick={onClickBtn}> {showing ? "Hide" : "Show"} </button>
    </div>
  );
}

function Hello() {
    function effectFn () {
        console.log("I'm here created");
        return destroyFn;
    }
    function destroyFn () {
        console.log("I'm here Bye");
    }
    useEffect(effectFn, [])

    return <h1>Hello</h1>
}

export default App;
