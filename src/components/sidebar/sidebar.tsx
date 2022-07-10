import { BriefcaseMetal, GithubLogo, LinkedinLogo, MapPin } from "phosphor-react"

export const Sidebar = () => {
  return (
    <div className=' min-h-screen w-[340px] flex-1 flex flex-col gap-4 m-10 '>
      <div className='bg-gray-500 rounded justify-center flex flex-col items-center  gap-2 p-5 shadow-md shadow-black'>
        <img src='https://github.com/nathangoncalvesleon.png' alt=''
          className='h-20 w-20  rounded-full border-2 border-red-500'
        />
        <strong>Nathan Gonçalves</strong>
        <p>Engenheiro de Software</p>
      </div>
      <div className='bg-gray-500  gap-3 p-2 rounded-xl flex flex-col shadow-md shadow-black h-[330px] '>
        <label className="flex items-center gap-3 font-bold text-md text-purple-400 mx-10 py-5"><MapPin size={20} /> Campina Grande - PB</label>
        <label className="flex items-center gap-3 font-bold text-md text-purple-400 mx-10 py-5"><BriefcaseMetal size={20} />Engenheiro de Software</label>
        <label className="flex items-center gap-3 font-bold text-md text-purple-400 mx-10 py-5"><GithubLogo size={20} />@nathangoncalvesleon</label>
        <label className="flex items-center gap-3 font-bold text-md text-purple-400 mx-10 py-5"><LinkedinLogo size={20} />@nathangoncalvesleon</label>
      </div>
      <div className='bg-gray-500 rounded-md flex-col gap-2 flex w-auto shadow-md shadow-black p-6'>
        <strong className='font-bold ml-5 mb-5'>Tecnologias</strong>
        <div className=' grid grid-cols-3  gap-5 w-[100%]'>
          <label className="bg-purple-800 flex justify-center items-center p-2 rounded-xl font-bold ">REACT</label>
          <label className="bg-purple-800 flex justify-center items-center p-2 rounded-xl font-bold ">JAVA</label>
          <label className="bg-purple-800 flex justify-center items-center p-2 rounded-xl font-bold ">PYTHON</label>
          <label className="bg-purple-800 flex justify-center items-center p-2 rounded-xl font-bold ">REACT NATIVE</label>
          <label className="bg-purple-800 flex justify-center items-center p-2 rounded-xl font-bold ">SQL</label>
          <label className="bg-purple-800 flex justify-center items-center p-2 rounded-xl font-bold ">C</label>
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
