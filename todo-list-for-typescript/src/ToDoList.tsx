import {useState} from "react";
import * as React from "react";
import {useForm} from "react-hook-form";

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const { currentTarget: {value}, } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={todo} onChange={onChange} placeholder="Write a to do"/>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data)
  }
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column"}}
        onSubmit={handleSubmit(onValid)}>
        <input {...register("email", {required: true})} placeholder="Email"/>
        <input {...register("first Name")} placeholder="first Name"/>
        <input {...register("last Name")} placeholder="last Name"/>
        <input {...register("username", {required: true, minLength: {value: 5, message: "Your username is too short"}})} placeholder="Username"/>
        <input {...register("password", {required: true})} placeholder="password"/>
        <input {...register("password 1", {required: "Password is required"})} placeholder="password1"/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
