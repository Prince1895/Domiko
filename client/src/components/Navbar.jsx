import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';



function Navbar(){
  const navigate=useNavigate();
  const { token } = useAppContext();
  return (
    <div className='flex justify-between items-center py-2 mx-8 sm:mx-20 xl:mx-32'>
        <img onClick={()=>navigate('/')} src={assets.logo_light} alt="logo" className='w-32 sw:w-44 scale-150 cursor-pointer'/>
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-purple-600 text-white px-10 py-2.5'>
            {token ?"Dashboard":"Login"} 
            <img src={assets.arrow} className='w-3' alt='arrow' />
        </button>

    </div>
  )
}

export default Navbar