import { useState } from 'react'
import './App.css'
import { CreateTask, Task, Typography } from './components'
import { LayoutIndex } from './layouts'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Comprar víveres', completed: false },
    { id: 2, name: 'Hacer ejercicio', completed: true },
    { id: 3, name: 'Llamar al doctor', completed: false },
    { id: 4, name: 'Terminar el informe', completed: false },
    { id: 5, name: 'Limpiar la casa', completed: true },
  ])

  const [newtask, setNewtask] = useState({
    id: 6,
    name: '',
    completed: false,
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewtask({ ...newtask, name: e.target.value })
  }

  const taskSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTasks([...tasks, newtask])
    setNewtask({ id: newtask.id + 1, name: '', completed: false })
  }

  const changeCompleted = (id: number) => {
    setTasks([
      ...tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }
        } else {
          return task
        }
      }),
    ])
  }

  const [search, setSearch] = useState('')
  const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const tasksFiltered = () => {
    let results = tasks.sort((a, b) => (a.id < b.id ? 1 : -1))
    results = tasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()))
    return results
  }

  const deleteAll = () => {
    setTasks([...tasks.filter(list => list.completed === false)])
  }

  const deleteTask = (id: number) => {
    setTasks([...tasks.filter(task => task.id !== id)])
  }

  return (
    <LayoutIndex>
      <section className='p-8 bg-white'>
        <input className='px-3 py-2 w-full border border-gray-400' type='text' placeholder='Search' value={search} onChange={searcher} />

        <div className='mt-5 '>
          {tasksFiltered().map(task => (
            <Task key={task.id} task={task} changeCompleted={changeCompleted} deleteTask={deleteTask} />
          ))}
        </div>
        <Typography type='title'>Luis</Typography>
        <Typography type='subtitle'>Luis</Typography>
        <Typography type='caption'>Luis</Typography>
        <Typography type='title'>Luis</Typography>
        <Typography type='subtitle'>Luis</Typography>
        <Typography type='caption'>Luis</Typography>
        <Typography type='title'>Luis</Typography>
        <Typography type='subtitle'>Luis</Typography>
        <Typography type='caption'>Luis</Typography>
        <Typography type='title'>Luis</Typography>
        <Typography type='subtitle'>Luis</Typography>
        <Typography type='caption'>Luis</Typography>

        <button onClick={() => deleteAll()} className='mt-5 bg-slate-900 text-white font-semibold px-4 py-2 rounded'>
          Clear Completed
        </button>
      </section>
      <CreateTask handleInput={handleInput} newtask={newtask} taskSave={taskSave} />
    </LayoutIndex>
  )
}

export default App
