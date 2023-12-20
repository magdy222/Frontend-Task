"use client";
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'


const Recommendations = () => {

    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(new Date('2023-12-21T23:59:59').getTime()));

    useEffect(() => {
      const timer = setInterval(() => {
        setRemainingTime(calculateRemainingTime(new Date('2023-12-21T23:59:59').getTime()));
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    function calculateRemainingTime(expiryTime) {
        const currentTime = new Date().getTime();
        const remainingMilliseconds = Math.max(0, expiryTime - currentTime);
        const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((remainingMilliseconds / (1000 * 60)) % 60);
        const seconds = Math.floor((remainingMilliseconds / 1000) % 60);
        return { hours, minutes, seconds };
      }

  return (
    <div className='container mx-auto w-[1440px] bg-white'>
        <Script src="https://cdn.jsdelivr.net/npm/next/dist/client/next-script.js" strategy="beforeInteractive" />
        <div className='flex justify-center items-center flex-col pt-14 '>
            <div className='flex justify-between items-center gap-8 flex-col'>
                <h2 className='text-[#183B56] text-5xl font-semibold'>Product Recommendation</h2>
                <p className='text-[#5A7184] text-[16px] font-[400]'>You can choose what our recommendation product here</p>
            </div>
            <div className='grid grid-cols-4 justify-between items-center wrap mx-auto gap-5 mt-10'>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-white rounded-lg'>
                    <div className='relative bg-[#B3BAC5] w-[36px] h-[36px] rounded-full left-[80px]  '>
                        <Image src="/path.png" alt="image" width={18} height={18} className='relative top-[10px] left-[9px]'/>
                    </div>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Modena Juice & Vege Blender Silver</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>$1,500.00</span>
                            <del className='text-[#5A7184] text-[12px] font-[300]'>$2,000.00</del>
                        </div>
                        
                        <div className='pt-3 w-[206px] h-[48px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400]  text-center '>Buy Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-[#B3BAC5] rounded-lg'>
                    <div className='relative bg-white w-[36px] h-[36px] rounded-full left-[80px]  '>
                        <Image src="/path.png" alt="image" width={18} height={18} className='relative top-[10px] left-[9px]'/>
                    </div>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Leica M3 with APO-Summicron 50mm 1:2</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>$1,500.00</span>
                            <del className='text-[#5A7184] text-[12px] font-[300]'>$2,000.00</del>
                        </div>
                        <div className='pt-3 w-[206px] h-[48px] bg-[#36B37E] rounded-lg pb-5'>
                            <button className='text-white text-[16px] font-[400]  text-center '>Buy Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-white rounded-lg'>
                    <div className='relative bg-[#B3BAC5] w-[36px] h-[36px] rounded-full left-[80px]  '>
                        <Image src="/path.png" alt="image" width={18} height={18} className='relative top-[10px] left-[9px]'/>
                    </div>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Asus Zenbook Pro 13”UX-430 US 2018</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>$1,500.00</span>
                            <del className='text-[#5A7184] text-[12px] font-[300]'>$2,000.00</del>
                        </div>
                        <div className='pt-3 w-[206px] h-[48px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400]  text-center '>Buy Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-[#E95432] rounded-lg'>
                        <p className='text-white text-[16px] font-semibold font-[400]'>Apple Watch 4 2020</p>
                        <div className='text-white text-[12px] font-semibold font-[300] pt-5'>
                            <span className='bg-[#B3BAC5]  p-2 mx-1 rounded-lg'>{remainingTime.hours}</span>
                             :
                             <span className='bg-[#B3BAC5] mx-1 p-2 rounded-lg'>{remainingTime.minutes}</span>
                             :
                             <span className='bg-[#B3BAC5] mx-1 p-2  rounded-lg'>{remainingTime.seconds}</span>
                             
                        </div>
                
                    <div className='pt-16'>
                        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 5" width="140" height="140" rx="8" fill="white"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-16'>

                        <div className='pt-3 w-[226px] h-[48px]  bg-white rounded-lg font-semibold text-[14px] font-[400] '>
                            <button className='text-[#E95432] '>Buy Now</button>
                            <span className='text-[#E95432] px-1'>$1,500.00</span>
                        </div>
                        
                    </div>
                </div>
                
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-white rounded-lg'>
                    <div className='relative bg-[#B3BAC5] w-[36px] h-[36px] rounded-full left-[80px]  '>
                        <Image src="/path.png" alt="image" width={18} height={18} className='relative top-[10px] left-[9px]'/>
                    </div>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Asus Zenbook Pro 13”UX-430 US 2018</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>$1,500.00</span>
                            <del className='text-[#5A7184] text-[12px] font-[300]'>$2,000.00</del>
                        </div>
                        <div className='pt-3 w-[206px] h-[48px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400]  text-center '>Buy Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-white rounded-lg'>
                    <div className='relative bg-[#B3BAC5] w-[36px] h-[36px] rounded-full left-[80px]  '>
                        <Image src="/path.png" alt="image" width={18} height={18} className='relative top-[10px] left-[9px]'/>
                    </div>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Modena Juice & Vege Blender Silver</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>$1,500.00</span>
                            <del className='text-[#5A7184] text-[12px] font-[300]'>$2,000.00</del>
                        </div>
                        <div className='pt-3 w-[206px] h-[48px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400]  text-center '>Buy Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-white rounded-lg'>
                    <div className='relative bg-[#B3BAC5] w-[36px] h-[36px] rounded-full left-[80px]  '>
                        <Image src="/path.png" alt="image" width={18} height={18} className='relative top-[10px] left-[9px]'/>
                    </div>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Leica M3 with APO-Summicron 50mm 1:2</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>$1,500.00</span>
                            <del className='text-[#5A7184] text-[12px] font-[300]'>$2,000.00</del>
                        </div>
                        <div className='pt-3 w-[206px] h-[48px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400]  text-center '>Buy Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[420px] bg-white rounded-lg'>
                    <div className='relative bg-[#B3BAC5] w-[36px] h-[36px] rounded-full left-[80px]  '>
                        <Image src="/path.png" alt="image" width={18} height={18} className='relative top-[10px] left-[9px]'/>
                    </div>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>iPad Pro 2018 with 256GB - Black</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[00] px-5'>$1,500.00</span>
                            <del className='text-[#5A7184] text-[12px] font-[300]'>$2,000.00</del>
                        </div>
                        <div className='pt-3 w-[206px] h-[48px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400]  text-center '>Buy Now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommendations