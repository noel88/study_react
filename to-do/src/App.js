import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setToDo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("To Do: ", toDo);
        if (toDo === "") {
            return;
        }
        setToDos((prev) =>
            [toDo, ...toDos]
        )
        setToDo("");
    }
    console.log("Todos: ", toDos)
  return (
      <div>
          <h1>My ToDos {toDos.length}</h1>
          <form onSubmit={onSubmit}>
              <input value={toDo}
                     onChange={onChange}
                     type="text"
                     placeholder="Write your to do.." />
              <button>Add to Do</button>
          </form>
          <hr />
          <ul>
          {
              toDos.map((todo, index) => {
                 return <li key={index}>{todo}</li>
              })
          }
          </ul>
      </div>
  );
}

export default App;
