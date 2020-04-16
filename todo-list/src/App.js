import React, {Component} from 'react';
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/Form";

class App extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form/>}>
                템플릿 완성
            </TodoListTemplate>
        );
    }
}


export default App;
