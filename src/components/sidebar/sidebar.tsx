import { BriefcaseMetal, GithubLogo, LinkedinLogo, MapPin } from "phosphor-react"

export const Sidebar = () => {
  return (
    <div className='flex-1 flex flex-col gap-4 m-10 '>
      <div className='bg-gray-500 rounded justify-center flex flex-col items-center  gap-2 p-5 shadow-md shadow-black'>
        <img src='https://github.com/nathangoncalvesleon.png' alt=''
          className='h-20 w-20  rounded-full border-2 border-red-500'
        />
        <strong className="font-extrabold leading-relaxed">Nathan Gonçalves</strong>
        <p>Engenheiro de Software</p>
      </div>
      <div className='bg-gray-500  gap-2 rounded-xl flex flex-col shadow-md shadow-black h-full w-full '>
        <div className="w-full flex items-center justify-center ">
          <img className="w-14 flex" src="https://img.icons8.com/nolan/64/address.png" />

        </div>
        <label className="flex items-center leading-relaxed gap-3 font-bold text-md text-purple-500 mx-10 py-5"><MapPin size={25} color={"#FFFF"} /> Campina Grande - PB</label>
        <label className="flex items-center leading-relaxed gap-3 font-bold text-md  text-purple-500 mx-10 py-5"><BriefcaseMetal size={25} color={"#FFFF"} />Engenheiro de Software</label>
        <label className="flex items-center leading-relaxed gap-3 font-bold text-md  text-purple-500 mx-10 py-5"><GithubLogo size={25} color={"#FFFF"} />@nathangoncalvesleon</label>
        <label className="flex items-center leading-relaxed gap-3 font-bold text-md  text-purple-500 mx-10 py-5"><LinkedinLogo size={25} color={"#FFFF"} />@nathangoncalvesleon</label>
      </div>
      <div className='bg-gray-500 rounded-md flex-col gap-2 flex w-full shadow-md shadow-black p-6'>
        <strong className='font-bold ml-5 mb-5'>Tecnologias Principais <img className='flex flex-row relative float-right' src="https://img.icons8.com/nolan/64/programming.png" /></strong>
        <div className=' grid grid-cols-3  gap-5 w-[100%]'>
          <label className="bg-purple-800 flex text-center items-center justify-center p-2 rounded-xl font-bold flex-col hover:bg-yellow-400 hover:text-purple-800"><img src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" />ReactJS</label>
          <label className="bg-purple-800 flex text-center items-center justify-center p-2 rounded-xl font-bold flex-col hover:bg-yellow-400 hover:text-purple-800"><img src="https://img.icons8.com/external-others-amoghdesign/48/000000/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png" />React Native</label>
          <label className="bg-purple-800 flex text-center items-center justify-center p-2 rounded-xl font-bold flex-col hover:bg-yellow-400 hover:text-purple-800"><img src="https://img.icons8.com/nolan/64/java-coffee-cup-logo.png" />Java</label>
          <label className="bg-purple-800 flex text-center p-2 rounded-xl font-bold flex-col hover:bg-yellow-400 hover:text-purple-800"><img src="https://img.icons8.com/nolan/64/python.png" />Python</label>
          <label className="bg-purple-800 flex text-center items-center justify-center p-2 rounded-xl font-bold flex-col hover:bg-yellow-400 hover:text-purple-800"><img src="https://img.icons8.com/nolan/64/angularjs.png" />Angular</label>
          <label className="bg-purple-800 flex text-center items-center justify-center p-2 rounded-xl font-bold flex-col hover:bg-yellow-400 hover:text-purple-800"><img src="https://img.icons8.com/color/48/000000/nodejs.png" />NodeJS</label>
        </div>
      </div>

      {/* <div className='bg-gray-500 p-6 rounded-md shadow-md shadow-black'>
        <strong className='ml-5'>Experiências</strong>
        <div className='items-start ml-11 flex-col flex  w-[100%]'>
          <label className='font-bold'>REACT JS</label>
          <label>react</label>
          <label>react</label>
          <label>react</label>
          <label>react</label>
        </div>
      </div> */}

    </div>
  )
}
