import React, {useCallback, useRef, useState} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {

    const createBulkTodos = () => {
        const array = [];
        for (let i = 1; i <= 2500; i++) {
            array.push({
                id: i,
                text: `할일 ${i}`,
                checked : false
            });
        }
        return array;
    };



    const [todos, setTodos] = useState(createBulkTodos
    //     [
    //     {
    //         id: 1,
    //         text: '리액트 기초 알아보기',
    //         checked: true
    //     },
    //     {
    //         id: 2,
    //         text: '컴포넌트 스타일링 해보기',
    //         checked: true
    //     },
    //     {
    //         id: 3,
    //         text: '일정 관리 앱 만들어 보기',
    //         checked: false
    //     }
    // ]
    );

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);

    const onRemove = useCallback(id => {
        setTodos(todos => todos.filter(todo => id !== todo.id));
    },[]);

    const onToggle = useCallback(id => {
        setTodos(todos =>
            todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)
        )
    },[]);

  return (
      <div>
          <TodoTemplate>
              <TodoInsert onInsert={onInsert}/>
              <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </TodoTemplate>

      </div>
  )
};

export default App;
