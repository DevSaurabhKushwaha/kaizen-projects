import React from 'react'
import NIWLOGO from '../../../assets/images/niw-logo.png'

const Getinfo = () => {
    return (
        <>
            <div>
                <div className='lg:container'>
                    <div className=' text-center  lg:flex justify-between lg:text-start'>
                        <div className='    '>
                            <div className='flex justify-center  lg:justify-start'>

                            <img src={NIWLOGO} alt={NIWLOGO} />
                            </div>
                            <p className='lg:max-w-[322px] font-normal text-lg leading-7  font-inter  items-start py-6'>Lörem ipsum reaned rekle, banat. Jasminmöte betrese  Lörem ipsum reaned rekle, banat. Jasminmöte betrese Lörem ipsum reaned rekle, banat. Jasminmöte betrese Lörem</p>
                            <div className='flex gap-6 justify-center lg:justify-start text-blue-700'>
                                <a href="/"><i className="fa-brands fa-facebook-f  w-[35px] h-[35px]  rounded-[50%]   flex  items-center bg-[#FFFFFF1A] justify-center"></i>                                </a>
                                <a href="/"> <i className="fa-brands fa-twitter w-[35px] h-[35px]  rounded-[50%]   flex  items-center bg-[#FFFFFF1A] justify-center"></i></a>
                                <a href="/"> <i class="fa-brands fa-youtube w-[35px] h-[35px]  rounded-[50%]   flex  items-center bg-[#FFFFFF1A] justify-center"></i></a>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold leading-[31px] font-outfit'>Quick Links</h2>
                            <ul className='mt-3 font-inter'>
                                <li>Home </li>
                                <li className='my-3'>About Ilia® li</li>
                                <li>About NIW® </li>
                                <li className='my-3'>News</li>
                                <li>Contact Us</li>
                                <li className='mt-3'>Wire Instructions</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h2 className='text-2xl font-semibold leading-[31px] mt-4 lg:mt-0 font-outfit'>Strategies</h2>
                            <ul className=' lg:grid grid-cols-2   font-inter'>
                                <li className='my-2 lg:my-'>Kai-Zen®</li>
                                <li className='mt-2'>Tri-Zen®</li>
                                <li className='my-2 '>Leveraged Savings Plan</li>
                                <li className='my-2'>Enhanced Split Dollar</li>
                                <li className='my-2'>Cash Stream</li>
                                <li>Premium Finance Rescue</li>
                                <li className='my-2'>Life Strategies</li>
                                <li>Multi-Gen</li>
                                <li className='my-2'>Trust Revitalization</li>
                                <li className='my-2'>Find Your Strategy</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold leading-[31px] font-outfit'>Contact Us</h2>
                            <p className='my-3 font-poppins'> 
                                <i className="fa-solid fa-phone  text-blue-700"></i>
                                <span className='ml-2 text-lg'>800-294-9940</span>
                            </p>
                            <p><i class="fa-regular fa-envelope   text-blue-700"></i>
                                <span className='ml-2 text-lg font-inter'>support@abc.com </span></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Getinfo
