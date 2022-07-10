import { useState } from "react";

export const Container = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className='flex-1 flex m-10 w-[800px]  flex-col gap-10'>
      <div
        className='bg-gray-500 w-full p-9 rounded-md font-bold flex justify-between '>
        <h1>Meus projetos</h1>

        <a href='#' className='hover:text-purple-500 transition-colors '>Veja todos</a>
      </div>


      <section className="flex flex-row gap-2">
        <div className="bg-red-600 w-[50%] rounded-md h-[186px]">
          <label className="mt-5 mx-5 flex">PROJETO1</label>

          <p className="mt-8 ml-5">lorem ipsum</p>

          <div className="flex gap-2 mt-10 ml-5">
            <h4>a</h4>
            <h4>a</h4>

            <h4 className="ml-[80%]">a</h4>
          </div>
        </div>

        <div className="bg-red-600 w-[50%] rounded-md h-[186px]">
          <h1>div 2</h1>
        </div>

      </section>

      <div
        className='bg-gray-500 w-full p-9 rounded-md font-bold flex justify-between '>
        <h1>My projects</h1>

        <a href='#' className='hover:text-purple-500 transition-colors '>Veja todos</a>
      </div>


    </div>
  )
}
