import { useState } from "react";
export function TodoList({ list }) {
  const [todos, setTodos] = useState(list);
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector("input");
    let value = input.value;

    setTodos((todos) => [...todos, value]);

    setInputValue("")
  }

  function handleReset() {
    setTodos([]);
  }

  function handleRemove(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>list</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(index)} type="button">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <form action="" onSubmit={handleSubmit}>
        <input name="input" type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button disabled={inputValue === ""}>Premi</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
}