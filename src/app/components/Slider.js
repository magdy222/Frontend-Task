"use client";
import React from 'react';


function Carousel() {


  return (
    <div className='container mx-auto w-[1140px] h-[382px] bg-white '>
         <div className='grid grid-cols-4 justify-between items-center wrap mx-auto gap-5 mt-10 shadow-lg'>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[362px] bg-white rounded-lg'>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Asus Zenbook Pro 13”</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>The specification here</span>
                        </div>
                        <div className='px-16 w-[91px] h-[28px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400] '>$1500.00</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[362px] bg-white rounded-lg'>
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Modena Juice Blender</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>The specification here</span>
                        </div>
                        <div className='px-16 w-[91px] h-[28px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400] '>$1500.00</button>
                        </div>
                        
                    </div>
                </div>

                <div className=' flex justify-center items-center flex-col w-[262px] h-[362px] bg-white rounded-lg'>
                    
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>Leica M3 1972</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>The specification here </span>
                        </div>
                        <div className='px-16 w-[91px] h-[28px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400] '>$1500.00</button>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex justify-center items-center flex-col w-[262px] h-[362px] bg-white rounded-lg'>
                    
                    <div className='pt-12'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle Copy 4" width="120" height="120" rx="8" fill="#FC5A5A"/>
                        </svg>
                    </div>
                    <div className='text-center px-8 pt-10'>
                        <p className='text-[#183B56] text-[16px] font-[400]'>iPad Pro 2018</p>
                        <div className='text-center pt-3 pb-5 '>
                            <span className='text-[#183B56] text-[12px] font-[400] px-5'>The specification here</span>
                            
                        </div>
                        <div className='px-16 w-[91px] h-[28px] bg-white'>
                            <button className='text-[#36B37E] text-[16px] font-[400] '>$1500.00</button>
                        </div>
                        
                    </div>
                </div>

            </div>

    </div>
  );
}

export default Carousel;