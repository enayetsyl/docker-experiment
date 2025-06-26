import { useState } from 'react';

export default function App() {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState(null);

  const load = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await res.json();
    setTodo(data);
  };

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold ">
        Todo Fetcher
      </h1>

      <label className="block">
        <span>Todo ID (1-200): </span>
        <input
          className="border p-1 w-20"
          type="number"
          value={id}
          min="1"
          max="200"
          onChange={(e) => setId(e.target.value)}
        />
      </label>

      <button
        className="px-3 py-1 bg-sky-600 text-white rounded cursor-pointer"
        onClick={load}
      >
        Fetch
      </button>

      {todo && (
        <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(todo, null, 2)}</pre>
      )}
    </main>
  );
}
