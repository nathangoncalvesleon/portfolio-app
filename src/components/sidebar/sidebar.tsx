import React from 'react'

export const Sidebar = () => {
  return (
    <div className=' min-h-screen w-[340px] flex-1 flex flex-col gap-4 m-10 '>
      <div className='bg-gray-500 rounded justify-center p-5 shadow-md shadow-black'>
        <img src='' alt='' className='' />
        <strong>Nathan Gonçalves</strong>
        <p>Engenheiro de Software</p>
      </div>
      <div className='bg-gray-500  rounded-md flex flex-col items-start pl-5 shadow-md shadow-black'>
        <label>teste</label>
        <label>teste</label>
        <label>teste</label>
        <label>teste</label>
      </div>
      <div className='bg-gray-500 rounded-md flex-col gap-2 flex w-auto shadow-md shadow-black'>
        <strong className='font-bold ml-5'>Tecnologias</strong>
        <div className='items-center   justify-center flex gap-5 w-[100%]'>
          <label className='bg-purple-900 p-2 font-bold rounded-lg'>react</label>
          <label>react</label>
          <label>react</label>
          <label>react</label>
          <label>react</label>
        </div>
      </div>

      <div className='bg-gray-500 rounded-md shadow-md shadow-black'>
        <strong className='ml-5'>Experiências</strong>
        <div className='items-start ml-11 flex-col flex  w-[100%]'>
          <label className='font-bold rounded-lg'>react</label>
          <label>react</label>
          <label>react</label>
          <label>react</label>
          <label>react</label>
        </div>
      </div>

    </div>
  )
}
