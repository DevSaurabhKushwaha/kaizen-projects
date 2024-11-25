import React, { useState } from 'react'
import calculatedimg from '../../../assets/images/calculated-img.png'
import vector from '../../../assets/images/Vector 1.png'
import vector1 from '../../../assets/images/Vector 2.png'


const Calculator = () => {

    const [age, setAge] = useState(55);
    const [contribution, setContribution] = useState(45000)


    const initialDeathBenefit = (contribution * (100 - age)) / 10;
    const taxFreeDistributions = ((contribution * 0.2) * (90 - age)).toFixed(0);
    const remainingDeathBenefit = (initialDeathBenefit * 0.4).toFixed(0);
    const totalTaxFreeDistributions = (taxFreeDistributions * 20).toLocaleString(0);
    return (
        <>
            <div className='p-4 lg:container mx-auto py-12  '>
                <div className='grid grid-cols-1 items-start gap-14 lg:grid-cols-2   '>
                    <div className=''>
                        <h2 className='text-lg font-outfit font-bold'>Estimate your Returns</h2>
                        <p className='font-inter max-w-[453px] py-4'>See if you qualify, discover your potential returns and see if Kai-Zen® is right for you.</p>
                        <div className='mb-6'>
                            <label className='font-bold block text-sm  font-inter' htmlFor="">Age:{age}</label>
                            <input type="range"
                                min='18'
                                max='100'
                                value={age}
                                onChange={(e) => setAge(Number(e.target.value))} className='w-full' />
                        </div>

                        <div>
                            <label className='block  font-inter' htmlFor="">Annual Contribution Amount:${contribution.toLocaleString()}</label>
                            <input type="range"
                                min='1000'
                                max='100000'
                                step='1000'
                                value={contribution}
                                onChange={(e) => setContribution(Number(e.target.value))} className='w-full' />
                        </div>
                        <div>
                            <h2 className='text-3xl  font-outfit font-medium  py-3 '>Your Results</h2>
                            <div className=' grid grid-cols-2 gap-3 my-3'>
                                <div className=' rounded-lg text-center p-4 bg-blue-50 ' >
                                    <h2 className='font-semibold font-inter text-sm'>Starting at Age 55</h2>
                                    <h3 className='text-blue-700  text-3xl  font-semibold  py-1'>${initialDeathBenefit.toLocaleString()}</h3>
                                    <p className='font-semibold  font-inter text-base leading-7'>Initial death benefit </p>
                                </div>
                                <div className=' rounded-lg text-center p-4 bg-blue-50'>
                                    <h2 className='font-semibold font-inter text-sm'>Age 65-80</h2>
                                    <h3 className='text-green-300  text-3xl  font-semibold py-1'>${taxFreeDistributions}</h3>
                                    <p className='font-semibold font-inter text-base leading-7'>Tax-free distributions </p>
                                </div>
                            </div>
                            <div className=' grid grid-flow-col'>
                                <div className=' rounded-lg text-center p-4 bg-blue-50'>
                                    <h3 className='text-blue-700  text-3xl  font-semibold py-1'>${remainingDeathBenefit.toLocaleString()}</h3>
                                    <p className='font-semibold font-inter text-base leading-7'>Remaining Death benefit  </p>
                                    <h5>Remaining Amount</h5>
                                </div>
                                <div className=' rounded-lg text-center p-4 bg-blue-50'>
                                    <h3 className='text-green-300  text-3xl  font-semibold py-1'>${totalTaxFreeDistributions}</h3>
                                    <p className='font-semibold font-inter text-base leading-7'> Tax-free distributions </p>
                                    <h5>From Age 70-90</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='items-center'>
                        <div>
                            <div className=' flex-1 relative bg-cover bg-center p-8 h-[520px] lg:h-[625px] rounded-[20px]' style={{backgroundImage : `url(${calculatedimg})`}}>
                                <div className='absolute top-[145px] left-[-60px] lg:top-[150px] lg:left-[50px] font-bold  text-[#FFE8B6]'>
                                    <div className='font-outfit font-semibold ml-[70px] text-[20px] lg:ml-0 lg:text-[48px]'>
                                    ${taxFreeDistributions}
                                    </div>
                                    <img src={vector1} alt=""  />
                                    <p className=' max-w-[116px] lg:max-w-[198px] text-[14px] lg:text-[18px] lg:text-base mt-[-110px] lg:mt-[-110px] ml-20 lg:ml-0'>Tax-free distributions (Age 70-90)</p>
                                     
                                </div>
                                <div className='absolute top-[46px] right-[-52px] font-light lg:top-[30px] lg:right-[76px] text-[#42E5AB] lg:font-bold '>
                                    <div className='font-outfit font-semibold text-[20px] lg:text-[48px]'>
                                    ${totalTaxFreeDistributions}
                                    </div>
                                    <img src= {vector} alt="" />
                                    <p className=' max-w-[116px] lg:max-w-[198px] mt-[-60px] ml-12 lg:ml-10'>Tax-free distributions (Age 70-90)</p>
                                </div>
                            </div>
                        </div>
                        <p className='items-center  lg:ml-7 font-inter my-4'>Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade. Setreligt deliga. </p>
                        <div className='flex  justify-center   my-8'>
                            <a href="/"><span className=' bg-blue-600 font-semibold font-inter text-lg leading-8 mt-3 p-3 px-4 rounded-[50px] text-white   '>Learn More With FREE Course</span></a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
