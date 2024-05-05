import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (todo) =>{
    const newTodo = {
        id: Math.random () ,
        todo: todo,
    }

    setList([...list, newTodo])

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }
  return (
    <div>
      <div className="list">
        <ul>
            
        </ul>
      </div>
      <div className="input-box">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) =>(
            <li key={todo.id}>
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoList;