import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item todos-center" key={todo.id}>
          <span>{todo.content}</span>
          <button
            className="btn btn-small red"
            type="button"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            remove
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
