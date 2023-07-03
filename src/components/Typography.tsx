import React from 'react'

type TypographyProps = {
  type: 'title' | 'subtitle' | 'caption'
  children: React.ReactNode
}
const Typography: React.FC<TypographyProps> = ({ type, children }) => {
  return (
    <>
      {type === 'title' && <h1 className='text-2xl'>{children}</h1>}
      {type === 'subtitle' && <h2 className='text-xl'>{children}</h2>}
      {type === 'caption' && <p className=''>{children}</p>}
    </>
  )
}

export default Typography
