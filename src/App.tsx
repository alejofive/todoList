import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "./App.css";

function App() {
  let id = 6;
  const [tasks, setTasks] = useState([
    { id: 1, name: "Comprar víveres", completed: false },
    { id: 2, name: "Hacer ejercicio", completed: true },
    { id: 3, name: "Llamar al doctor", completed: false },
    { id: 4, name: "Terminar el informe", completed: false },
    { id: 5, name: "Limpiar la casa", completed: true },
  ]);

  const [newtask, setNewtask] = useState({
    id: id,
    name: "",
    completed: false,
  });

  const handleInput = (e) => {
    setNewtask({ ...newtask, name: e.target.value });
  };

  const taskSave = (e) => {
    e.preventDefault();

    setTasks([...tasks, newtask]);

    id++;

    setNewtask({ id: id, name: "", completed: false });
  };

  const changeComplet = (id) => {
    setTasks([
      ...tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    ]);
  };

  const [search, setSearch] = useState("");
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const tasksFiltered = () => {
    let results = tasks.sort((a, b) => (a.id < b.id ? 1 : -1));
    results = tasks.filter((task) =>
      task.name.toLowerCase().includes(search.toLowerCase())
    );
    return results;
  };

  const deleteAll = () => {
    setTasks([...tasks.filter((list) => list.completed === false)]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  return (
    <>
      <div className="w-full flex justify-center h-screen items-center bg-slate-100 shadow-md">
        <div className="w-[300px] bg-white rounded-md">
          <div className="bg-blue-800 rounded-t-md p-3">
            <h1 className="text-3xl text-white tex">Todo List</h1>
          </div>
          <section className="p-8 bg-white">
            <input
              className="px-3 py-2 w-full border border-gray-400"
              type="text"
              placeholder="Search"
              value={search}
              onChange={searcher}
            />

            <div className="mt-5 ">
              {tasksFiltered().map((task) => (
                <div
                  key={task.id}
                  className="border border-gray-400 flex justify-between items-center p-3"
                >
                  <div className="flex items-center">
                    <input
                      className="mr-4"
                      type="checkbox"
                      name=""
                      id=""
                      checked={task.completed}
                      onChange={() => changeComplet(task.id)}
                    />
                    <p className="font-bold">{task.name}</p>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="w-6 flex justify-end"
                  >
                    <TrashIcon className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => deleteAll()}
              className="mt-5 bg-slate-900 text-white font-semibold px-4 py-2 rounded"
            >
              Clear Completed
            </button>
          </section>

          <form
            onSubmit={taskSave}
            action=""
            className="bg-gray-200 rounded-b-md p-5"
          >
            <div className="bg-blue-800 flex items-center">
              <input
                className="px-3 py-1"
                type="text"
                placeholder="Add"
                onChange={handleInput}
                value={newtask.name}
                required
              />
              <button type="submit" className="flex items-center">
                <PlusIcon className="w-5 h-5 text-white font-semibold" />
                <p className="text-white">Add</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
