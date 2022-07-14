import { useState } from "react";

export const Container = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className='flex m-10 flex-col gap-10 '>
      <div
        className='bg-gray-500 w-full p-9 rounded-md font-bold flex justify-between '>
        <h1 className="font-bold leading-relaxed">Meus projetos</h1>

        <a href='https://github.com/nathangoncalvesleon' className='hover:text-purple-500 transition-colors '>Veja todos</a>
      </div>


      <section className="flex flex-row gap-2">
        <div className="bg-gray-600 w-[50%] rounded-md h-[186px] hover:bg-yellow-400 hover:font-bold hover:text-purple-600">
          <label className="mt-5 mx-5 flex">PROJETO1</label>

          {/* <p className="mt-8 ml-5">lorem ipsum</p>

          <div className="flex gap-2 mt-10 ml-5">
            <h4>a</h4>
            <h4>a</h4>

            <h4 className="relative left-[50%]">ba</h4>
          </div> */}
        </div>

        <div className="bg-gray-600 w-[50%] rounded-md h-[186px] flex flex-col hover:bg-yellow-400 hover:font-bold hover:text-purple-600">
          <label className="mt-5 mx-5 flex">PROJETO2</label>

          {/* <p className="mt-8 ml-5">lorem ipsum</p>

          <div className="flex gap-2 mt-10 ml-5">
            <h4>a</h4>
            <h4>a</h4>

            <h4 className="relative left-[50%]">ba</h4>
          </div> */}
        </div>
        



      </section>

     

      <footer className='w-full'>

        <h2 className="flex w-full items-center justify-center gap-4 text-sm font-bold text-purple-400">Tecnologias usadas:
          <img src="https://img.icons8.com/offices/30/000000/react.png" />
          <img src="https://img.icons8.com/color/48/000000/tailwindcss.png"
          />

        </h2>

        <h2 className="text-white flex-row flex items-center justify-center">Feito com 
        <span className="text-purple-400 mx-1 font-bold"> ❤ </span>por <a href='#' className='hover:text-purple-500 transition-colors mx-1 font-bold' > Nathan</a></h2>
        <span className='flex items-center justify-center text-sm gap-1'>Versão: <strong>BETA</strong></span>

      </footer>

    </div>
  )
}
