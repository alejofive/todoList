import { PlusIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

type CreateTaskProps = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  taskSave: (e: React.FormEvent<HTMLFormElement>) => void
  newtask: {
    id: number
    name: string
    completed: boolean
  }
}

const CreateTask: React.FC<CreateTaskProps> = ({ taskSave }) => {
  const [name, setName] = useState('')
  return (
    <form onSubmit={taskSave} action='' className='bg-gray-200 rounded-b-md p-5'>
      <div className='bg-blue-800 flex items-center'>
        <input className='px-3 py-1' type='text' placeholder='Add' onChange={e => setName(e.target.value)} value={name} required />
        <button type='submit' className='flex items-center'>
          <PlusIcon className='w-5 h-5 text-white font-semibold' />
          <p className='text-white'>Add</p>
        </button>
      </div>
    </form>
  )
}

export default CreateTask
