import React from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  return (
      <div>
          <TodoTemplate>
              <TodoInsert/>
              <TodoList/>
          </TodoTemplate>

      </div>
  )
};

export default App;
