import { TrashIcon } from '@heroicons/react/24/solid'

type TaskProps = {
  task: {
    id: number
    name: string
    completed: boolean
  }
  changeCompleted: (id: number) => void
  deleteTask: (id: number) => void
}

const Task: React.FC<TaskProps> = ({ task, changeCompleted, deleteTask }) => {
  return (
    <div key={task.id} className='border border-gray-400 flex justify-between items-center p-3'>
      <div className='flex items-center'>
        <input className='mr-4' type='checkbox' name='' id='' checked={task.completed} onChange={() => changeCompleted(task.id)} />
        <p className='font-bold'>{task.name}</p>
      </div>
      <button onClick={() => deleteTask(task.id)} className='w-6 flex justify-end'>
        <TrashIcon className='w-4 h-4 text-red-600' />
      </button>
    </div>
  )
}

export default Task
