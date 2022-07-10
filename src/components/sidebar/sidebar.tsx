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
      <div className='bg-gray-500 p-4 rounded-md flex flex-col items-start pl-5 shadow-md shadow-black'>
        <label className="flex items-center gap-4"><MapPin size={20} /> teste</label>
        <label className="flex items-center gap-4"><BriefcaseMetal size={20} />teste</label>
        <label className="flex items-center gap-4"><GithubLogo size={20} />teste</label>
        <label className="flex items-center gap-4"><LinkedinLogo size={20} />teste</label>
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
