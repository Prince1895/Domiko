import React from 'react'
import logo from '../assets/logo_light.png';

import { footer_data } from '../assets/assets';


const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-purple-600/20'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500 text-gray-900'>
        <div>
             <img src={logo} alt="logo" className='w-32 sw:w-44 scale-150 cursor-pointer'/>
            <p className='max-w-[410px] mt-6'>Domiko is a minimal blog platform where ideas flow freely and distractions fade. Share reflections, stories, or insights in a clean, focused space built to spotlight your words.</p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
            {
                footer_data.map((section,index)=>(
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link,i)=>(
                                <li key={i}>
                                    <a href='#' className='hover:underline transition'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            )
            }

        </div>

        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-900'>Copyright 2025 &copy; Domiko - All Right reserved</p>

    </div>
  )
}

export default Footer