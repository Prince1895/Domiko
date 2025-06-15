import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../components/admin/SideBar';
import { useAppContext } from '../../context/AppContext';


const Layout = () => {
    const {axios,setToken,navigate}=useAppContext();
    const logout = () => {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization']=null
        setToken(null);
        navigate('/')
    }
   
    return (
        <>
            <div className='flex justify-between items-center py-2 mx-8 sm:mx-20 xl:mx-32'>
                <img onClick={() => navigate('/')} src={assets.logo_light} alt="logo" className='w-32 sw:w-44 scale-150 cursor-pointer' />
                <button onClick={logout} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-purple-600 text-white px-10 py-2.5'>
                    Logout
                </button>

            </div>
            <div className='flex h-[calc(100vh-70px)]'>
                <SideBar/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout