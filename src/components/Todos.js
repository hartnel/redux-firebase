import React from "react";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useTodoProvider } from "../hooks";

export default function Todos() {
  //const firebase = useFirebase();

  const todoProvider = useTodoProvider([
    { path: "todos" }, // { path: '/todos' } // object notation
  ]);

  const todos = todoProvider.data;

  console.log(todoProvider);

  function addSampleTodo() {
    todoProvider
      .addTodo()
      .then((res) => {
        console.log("added", res);
      })
      .catch((err) => console.log("errors"));
  }

  return (
    <div>
      <h1>New Sample Todo</h1>
      {!isLoaded(todos) && <div>Loading...</div>}
      {isEmpty(todos) && <div>Todos List Is Empty</div>}
      {isLoaded(todos) && !isEmpty(todos) && (
        <ul style={{ marginBottom: 10 }}>
          {Object.keys(todos).map((key) => (
            <li key={key}>{todos[key].value.text}</li>
          ))}
        </ul>
      )}

      <button onClick={addSampleTodo}>Add</button>
    </div>
  );
}
