import { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  let [todoList, setTodoList] = useState(() => {
    let saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  let [text, setText] = useState("");
  let [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  let saveTodoList = (event) => {
    event.preventDefault();
    if (text.trim() === "") return;
    if (!todoList.includes(text)) {
      setTodoList([...todoList, text]);
      setText("");
    } else {
      alert("Already Exist");
    }
  };

  let deleteRows = (indexNumber) => {
    let finalData = todoList.filter((v, i) => i !== indexNumber);
    setTodoList(finalData);
    setEditIndex(null);
    setText("");
  };
  let editRow = (indexNumber) => {
    setEditIndex(indexNumber);
    setText(todoList[indexNumber]);
  };

  let updateTodoList = (event) => {
    event.preventDefault();
    if (text.trim() === "") return;
    let updated = todoList.map((v, i) => (i === editIndex ? text : v));
    setTodoList(updated);
    setEditIndex(null);
    setText("");
  };

  let list = todoList.map((value, index) => {
    return (
      <div key={index} className="showData">
        {index + 1} {value}
        <div className="spanclass">
          <span onClick={() => editRow(index)}>Edit</span>{" "}
          <span onClick={() => deleteRows(index)}>&times;</span>
        </div>
      </div>
    );
  });

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <form onSubmit={editIndex !== null ? updateTodoList : saveTodoList}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Your Task"
        />
        <button>{editIndex !== null ? "Update" : "Submit"}</button>
      </form>
      {list}
      <footer className="atul">
        <p>
          Made with <span aria-label="love">❤️</span> by{" "}
          <strong>Atul Aditya</strong>
        </p>
      </footer>
    </div>
  );
};

export default Todo;
