import React from 'react'

const Footer = () => {
  return (
    <div className='bg-stone-800 shadow-inner text-xs pb-4 sm:text-base text-white w-auto'>
        <div className='w-10/12 mx-auto h-auto flex-wrap items-center flex justify-around'>
        <div className=' w-[40%] md:w-[20%] p-1'>
            <div className='flex justify-start'>
                <span className='font-semibold text-center p-2'>CineUniverse</span>
            </div>
            <p className='break-words w-full'>Copyright @2023. MovieMonk By Kanav</p>     
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2 '>
                    Company
                </li>
                <li className='m-2'>
                    About Us
                </li>
                <li className='m-2'>
                    Movies
                </li>
                <li className='m-2'>
                    Career
                </li>
            </ul>
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Legal
                </li>
                <li className='m-2'>
                    Terms & Conditions
                </li>
                <li className='m-2'>
                    Privacy Policy
                </li>
                <li className='m-2'>
                    Cookie Policy
                </li>
            </ul>
        </div>
        <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Contact Us
                </li>
                <li className='m-2'>
                    Vijay Nagar,Delhi-110009
                </li>
                <li className='m-2'>
                    9096473197
                </li>
                <li className='m-2 break-words'>
                    kanavdahat55@gmail.com
                </li>
            </ul>
        </div>
    </div>


    </div>
      )
}

export default Footer
