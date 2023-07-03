import React from 'react'

type LayoutIndexProps = {
  children: React.ReactNode
}
const LayoutIndex: React.FC<LayoutIndexProps> = ({ children }) => {
  return (
    <div className='w-full flex justify-center h-screen items-center bg-slate-100 shadow-md'>
      <div className='w-[300px] bg-white rounded-md'>
        <div className='bg-blue-800 rounded-t-md p-3'>
          <h1 className='text-3xl text-white tex'>Todo List</h1>
        </div>
        {children}
      </div>
    </div>
  )
}

export default LayoutIndex
