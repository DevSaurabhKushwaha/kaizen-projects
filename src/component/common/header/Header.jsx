import React from 'react'
import logo from '../../../assets/images/logo-img.png'
const Header = () => {
  return (
    <>

      <div className=' bg-blue-950  '>
        <div className='container mx-auto  flex justify-between items-center p-3 md:container m:grid-cols-1 sm:container sm:mx-auto'>
          <div className='flex items-center gap-5'>
            <img src={logo} alt="" className='w-10' />
            <div className='text-lg leading-7  font-inter text-white'>Discover Benefits of Kai-Zen® with Jane  <a className='text-blue-700 font-bold underline underline-offset-1 ' href="/Learn More">Learn More</a></div>
          </div>
          <div className='text-white flex gap-5 font-poppins '>
            <div className='flex items-center gap-2'>
            <p  className='hidden lg:block'>
              <i className="fa-solid fa-phone w-[35px] h-[35px]  rounded-[50%]   flex  items-center bg-[#FFFFFF1A] justify-center "></i>
            </p>
            <span className=' text-lg hidden xl:block'>800-294-9940</span>
            </div>
            <div className='flex items-center gap-2'>
            <p className='hidden lg:block'><i className="fa-regular fa-envelope w-[35px] h-[35px]  rounded-[50%]   flex  items-center bg-[#FFFFFF1A] justify-center"></i></p>
            <span className=' text-lg hidden lg:block'>support@abc.com </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
