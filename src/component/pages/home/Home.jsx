import React from 'react'
import bnrimg from '../../../assets/images/bnr-bg.png'
import bnrcard from '../../../assets/images/bnr-card.png'
import Calculator from '../calculator/Calculator'
import protection from '../../../assets/images/protection.png'
import money from '../../../assets/images/money.png'
import growth from '../../../assets/images/growth.png'
import choose from '../../../assets/images/choose-img.png'
import menimg from '../../../assets/images/man-smile.png'
import check from '../../../assets/images/check.png'
import Cartswipe from '../swiper/Cartswipe'
import computer from '../../../assets/images/computer.png'
import FAQ from '../FAQ/FAQ'
import Getinfo from '../getinfo/Getinfo'
import link from '../../../assets/images/link.png'

const Home = () => {
  return (
    <>
      <div>
        <div
          className="section bg-cover bg-center   flex "
          style={{ backgroundImage: `url(${bnrimg})`, height: '805px', }}>
          <div className=' lg:container mx-auto p-4 lg:ml-12 items-center grid grid-cols-1 lg:grid-cols-2'>
            <div className='text-white ' >
              <h1 className='text-5xl max-w-xl w-[393px] lg:w-[545px] text-white leading-tight font-outfit   mb-6'>Secure Your Retirement with Financial Peace of Mind</h1>
              <p className='max-w-[550px]  font-normal leading-8 text-lg font-inter  py-4'>Kai-Zen® offers you up to an additional 3 times more money to fund a unique cash accumulating life insurance policy using leverage.</p>
              <div className='text-white mt-6 '>
                <a href="/"><span className=' bg-blue-600 font-semibold rounded-[50px] font-inter text-lg leading-8 p-3 px-4 '>Learn More On  Kai-Zen®</span></a>
              </div>
            </div>
            <div className=' lg:w-[611px]'>
              <a href="/" >
                <img src={bnrcard} alt="{bnrcard}" />
              </a>
            </div>
          </div>
        </div>
        <Calculator />

        <div className='section-benefits lg:container   mx-auto lg:mt-7 my-9'>
          <div>
            <div className='flex items-center justify-center flex-col'>
              <h2 className=' text-[30px] lg:text-5xl font-outfit font-semibold'>Benefits of Kai-Zen®</h2>
              <p className='max-w-[667px] font-normal px-4 lg:px-0 font-inter text-lg text-center  mt-6'>We have all used leverage to purchase a nicer home, or to buy a better car. Kai-Zen® uses leverage for the potential to accumulate cash, providing up to 60 - 100% more benefits, than using your money alone.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3  '>
              <div className='max-w-[378px] p-5 my-3 rounded-2xl bg-gray-50  border-2 border-transparent hover:border-black transition-all'>
                <img src={protection} alt={protection} />
                <h2 className='font-semibold  font-outfit transition text-2xl my-2'>Protection for Life</h2>
                <p className='text-lg font-normal  font-inter max-w-[310px] leading-8'>Kai-Zen provides death benefit protection, as well as living benefits in the case of critical or chronic illness.</p>
              </div>
              <div className='max-w-[378px] p-5 my-3 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-black transition-all'>
                <img src={money} alt={money} />
                <h2 className='font-semibold text-2xl font-outfit my-2 max-w-[310px]'>Accumulate more wealth and maintain your current lifestyle</h2>
                <p className='text-lg font-normal max-w-[310px]  font-inter  leading-8'>Kai-Zen is broken down into 5 easy payments. The lender adds up to 3x your money, allowing for additional capital without putting a strain on your bank account.</p>
              </div>
              <div className='max-w-[378px] p-5 my-3 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-black transition-all '>
                <img src={growth} alt={growth} />
                <h2 className='font-semibold text-2xl font-outfit my-2'>Results at your fingertips</h2>
                <p className='text-lg font-normal max-w-[310px]  font-inter leading-8'>With the MyILIA Servicing Portal, you can access your annual review, policy details, and change or add beneficiaries... Right from the palm of your hand.</p>
              </div>
            </div>
          </div>
          <div className='buton flex justify-center my-12'>
            <a href="/"><span className='  bg-blue-600 font-semibold rounded-[50px] text-lg leading-8 p-3 px-4 font-inter  text-white '>Learn With FREE Course</span></a>

          </div>
        </div>

        <div className='section-choose py-4 mt-10'>
          <div className=' p-4 lg:container grid grid-cols-1  items-center lg:grid-cols-2   '>
            <div>
              <h2 className='font-semibold  font-outfit text-4xl'>Why Choose Kai-Zen®?</h2>
              <p className='max-w-[513px] font-normal text-lg leading-8  font-inter  my-4'>We have all used leverage to purchase a nicer house or to buy a better car. Kai-Zen® uses leverage for the potential to accumulate more growth & obtain more protection, while providing the ability to maintain your current standard of living. That’s the smart way to use leverage.</p>
              <div className='my-8'> 
              <a href="/"><span className='  bg-blue-600 font-semibold font-inter rounded-[50px] text-lg leading-8 p-3 px-4  text-white '>Learn With FREE Course</span></a>
             </div>

            </div>
            <div className=''>
              <div className='relative mt-5'>
                <img src={choose} alt={choose} />
                <div className='absolute  top-[100px] right-[160px]   lg:top-[170px] lg:right-[270px]'>
                  <a href="/"><img src={link} alt={link} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' section-more-money p-4  lg:container my-9 mt-12 '>
          <div className=' grid grid-cols-1 lg:grid-cols-2 lg:items-start'>
            <div>
              <div>
                <img src={menimg} alt={menimg} className='  ' />

              </div>
            </div>
            <div>
              <h1 className='text-[40px] max-w-[574px] mt-4 lg:mt-0 font-semibold  font-outfit leading-[50px]'>More Money. More Protection. More Confidence.</h1>
              <p className='max-w-[574px] text-lg font-normal font-inter my-4 '>This isn't just a slogan, it's how we do business. Kai-Zen provides the opportunity to add capital to your plan, without the typical risks associated with borrowing.</p>
              <h2 className='text-[25px] font-semibold leading-[31px] font-outfit my-8'>Benefits of Smart Leverage</h2>
              <div>
                <ul className='grid grid-cols-2 gap-6'>
                  <li className='flex items-center  font-inter gap-2'>
                    <img src={check} alt="" />
                    No credit checks.
                  </li>
                  <li className='flex items-center font-inter gap-2'>
                    <img src={check} alt="" />
                    No credit checks.
                  </li>
                  <li className='flex items-center font-inter gap-2'>
                    <img src={check} alt="" />
                    No personal guarantees.                  </li>
                  <li className='flex items-center font-inter gap-2'>
                    <img src={check} alt="" />
                    No interest payments.                  </li>
                </ul>

                <h2 className='text-[25px] font-semibold leading-[31px] font-outfit my-8 '>Benefits of More Protection</h2>
                <ul>
                  <li className='flex items-center font-inter gap-2 my-6'>
                    <img src={check} alt="" />
                    Death benefit with living benefit riders.                  </li>
                </ul>
                <ul className='grid grid-cols-2  gap-4 my-6' >
                  <li className='flex items-center font-inter gap-2'>
                    <img src={check} alt="" />
                    No personal guarantees.                  </li>
                  <li className='flex items-center font-inter  gap-2'>
                    <img src={check} alt="" />
                    No interest payments.                  </li>
                </ul>
                <h2 className='text-[25px] font-semibold font-outfit  leading-[31px] my-8 '>Benefits of More Growth</h2>
                <ul>
                  <li className='flex items-center font-inter gap-2 my-6'>
                    <img src={check} alt="" />
                    Upside crediting (subject to cap)                  </li>
                  <li className='flex items-center font-inter gap-2 my-6'>
                    <img src={check} alt="" />
                    No negative returns due to market decline.                  </li>
                  <li className='flex items-center font-inter gap-2 my-6'>
                    <img src={check} alt="" />
                    Tax-free distributions with potential to access cash value using tax-free policy loans.
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <Cartswipe />



        <div className='bg-[#151837] lg:rounded-[50px] py-9 pb-11 mt-7'>
          <div className=' p-4 lg:container  m-auto gap-28 grid grid-cols-1   lg:grid-cols-2 items-center'>
            <div>
              <h1 className='max-w-[547px] font-semibold  text-[35px] lg:text-5xl font-outfit leading-[63px] text-white'>Give Kai-Zen® a Try with the FREE Course</h1>
              <div className='mt-10 flex justify-center lg:justify-start'>
                <a href="/"><span className='  bg-blue-600 font-semibold font-inter rounded-[50px] mt-4 text-lg leading-8 p-4 px-4 text-white '>Learn With FREE Course</span></a>
              </div>
            </div>
            <div className='lg:ml-36'>
              <img src={computer} alt="" />
            </div>
          </div>
        </div>
        <FAQ />
        <Getinfo />
      </div>
    </>
  )
}

export default Home
