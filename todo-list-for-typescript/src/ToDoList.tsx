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

interface IForm {
  email: string;
  firstname?: string;
  lastname?: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const { register, watch, handleSubmit, formState: {errors}, setError } = useForm<IForm>({
    defaultValues: {
      email: "@gmail.com"
    }
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError("password1", {message: "password are not the same."}, {shouldFocus: true})
    }
    // setError("extraError", {message: "Server offline"})
  }
  console.log(errors)
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column"}}
        onSubmit={handleSubmit(onValid)}>
        <input {...register("email", {
          required: "email required",
          pattern: {
           value: /^[A-Za-z0-9._%+-]+@gmail.com/,
           message: "Only Gmail emails allowed."
          }
        })} placeholder="Email"/>
        <span>
          {errors?.email?.message}
        </span>
        <input {...register("firstname", {
          validate: {
            noNico: (value) => value?.includes("nico") ? "no nicos allowed" : true,
            noNick: (value) => value?.includes("nick") ? "no nicks allowed" : true,
          }
        })} placeholder="first Name"/>
        <input {...register("lastname")} placeholder="last Name"/>
        <input {...register("username", {required: "username is required", minLength: {value: 5, message: "Your username is too short"}})} placeholder="Username"/>
        <span>
          {errors?.username?.message}
        </span>
        <input {...register("password", {required: "Password is required"})} placeholder="password"/>
        <span>
          {errors?.password?.message}
        </span>
        <input {...register("password1", {required: "Password1 is required"})} placeholder="password1"/>
        <span>
          {errors?.password1?.message}
        </span>
        <button>Add</button>
        <span>
          {errors?.extraError?.message}
        </span>
      </form>
    </div>
  );
}

export default ToDoList;
