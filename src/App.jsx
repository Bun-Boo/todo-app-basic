import "./App.css";
import { StoreContext, actions } from "./store";
import { useContext, useState, useRef, useEffect } from "react";
function App() {
  const [state, dispatch] = useContext(StoreContext);
  const { todoInput, todos } = state;
  const [isEdit, setIsEdit] = useState(false);
  const [todoCurrent, setTodoCurrent] = useState();
  const inputRef = useRef();

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Enter") {
        document.getElementById("btn-submit").click();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleAdd = () => {
    if (todoInput === "") {
      inputRef.current.focus();
      return;
    } else {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodo(""));
      inputRef.current.focus();
    }
  };
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index));
    inputRef.current.focus();
  };
  const handleEdit = (index) => {
    setTodoCurrent(index);
    dispatch(actions.setTodo(todos[index]));
    inputRef.current.focus();
    setIsEdit(true);
  };
  const handleUpdate = () => {
    dispatch(actions.editTodo(todoCurrent, todoInput));
    dispatch(actions.setTodo(""));
    inputRef.current.focus();

    setIsEdit(false);
  };

  return (
    <div className="todoApp">
      <div className="main-todoApp">
        <div className="title-todo">
          <h1>Enjoy your life...</h1>
        </div>
        <div className="input-todo">
          <input
            ref={inputRef}
            value={todoInput}
            placeholder="Enter your todo..."
            onChange={(e) => dispatch(actions.setTodo(e.target.value))}
          />
          {isEdit ? (
            <button id="btn-submit" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button id="btn-submit" onClick={handleAdd}>
              Add
            </button>
          )}
        </div>
        <div className="list-todo">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {index + 1} <span>.</span>
                <p>{todo}</p>
                <button
                  className="button btn-edit"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button className="button" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright">
          <p className="copyright-title">
            Made with 💖 Powered by
            <a
              href="https://www.facebook.com/profile.php?id=100009160407937"
              target="_bank"
            >
              <strong> Hair ^^</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
