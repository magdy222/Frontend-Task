"use client" ;

import React, { useState} from 'react'
import Image from 'next/image'

function Header() {
 
  return (
    <div className='container mx-auto w-[1440px] h-[880px] bg-[#B3BAC5]'>
    <div className='flex justify-between items-center w-[1140px] h-[100px]'>
      <div className='px-32'>
        <Image src="/Logo.png" alt="logo" width={90} height={28} />
      </div>
      <div className='flex items-center space-x-5'>
      <ul className='flex items-center space-x-5 text-[#183B56] text-md font-medium'>
        <li>Home</li>
        <li>Landing</li>
        <li>Pages</li>
        <li>Docs</li>
        <li>Help</li>
      </ul>
      <button className='text-[#1565D8] border-2 border-[#1565D8] rounded px-4 py-2'>Get it now</button>
    </div>
    </div>
    <div className='pt-14 px-32'>
      <svg width="118" height="17" viewBox="0 0 118 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect id="Rectangle" width="118" height="17" rx="2" fill="#FC5A5A"/>
      </svg>
    </div>

    <div className='grid grid-cols-2 gap-[440px] w-[1140px] px-32 justify-between items-center'>

      <div>

        <div className='w-[476px] h-[136px] pt-10'>
          <h2 className='text-[#183B56] text-5xl font-semibold font-700'>Get Special Watch with Special Prices</h2>
        </div>

        <div className='w-[534px] h-[84px] pt-10'>
            <ul className='grid grid-cols-2 gap-5 text-[#5A7184] text-[16px] font-[400] '>
                <div className='flex items-center space-x-3'>
                    <Image src="/Shape (2).png" alt="check" width={8} height={8} />
                    <li>Newest Os Support</li>
                </div>
                <div className='flex items-center space-x-3'>
                    <Image src="/Shape (2).png" alt="check" width={8} height={8} />
                    <li>Water and Dust Resistant</li>
                </div>
                <div className='flex items-center space-x-3'>
                    <Image src="/Shape (2).png" alt="check" width={8} height={8} />
                    <li>Long Lasting Battery Life</li>
                </div>
                <div className='flex items-center space-x-3'>
                    <Image src="/Shape (2).png" alt="check" width={8} height={8} />
                    <li>Get a 20% Cashback right now</li>
                </div>
            </ul>
          </div>

          <div className='flex items-center justify-between w-[576px] h-[68px] bg-white mt-24 rounded-lg px-5 '>
            <input type="text" placeholder='insert your email '/>
              <button className='text-white text-[16px] font-[400] bg-[#36B37E] w-[144px] h-[32px] rounded-lg '>Join Pre-order</button>
          </div>

      </div>
        <div className='flex items-center  w-[393px] h-[421px] mx-auto '>
          <div className='absolute rounded-full z-10'>
            <svg width="329" height="421" viewBox="0 0 160 160" className='rounded-lg' fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle" width="329" height="421" rx="8" className='rounded-lg'  fill="#FC5A5A"/>
            </svg>
          </div>
          <div className='relative top-[90px] left-[-30px] '>
              <Image src="/Pattern.png" alt="watch" width={122} height={142}/>
          </div>
          <div className='relative top-[-142px] z-20 left-[-145px] rounded-full'>
            <Image src="/Shape (1).png" alt="watch" width={48} height={48}/>
          </div>
          <div className='relative z-0 left-[35px]  bottom-[-135px] rounded-full'>
            <Image src="/Shape.png" alt="watch" width={150} height={150}/>
          </div>
          
        </div>
    </div>

    <div className='grid grid-cols-3 items-center justify-start w-[1140px] h-[147px] py-20 px-32 gap-28 rounded-lg'>

      <div className='flex items-center justify-center w-[360px] h-[130px] pt-8 rounded-lg bg-white'>
          <div>
            <svg width="110" height="110" viewBox="0 0 160 160" className='rounded-lg' fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle" width="110" height="110" rx="8" fill="#FC5A5A"/>
            </svg>
          </div>
          <div className='text-[#183B56] text-[16px] w-[179px] h-[100px] font-[400]'>
            <p >Beats by Dre C 3450. Active Noise Cancelling</p>
            <p>$1,750.00</p>
          </div>
      </div>
      <div className='flex items-center justify-center w-[360px] h-[130px] pt-8 rounded-lg bg-white'>
          <div>
            <svg width="110" height="110" viewBox="0 0 160 160" className='rounded-lg' fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle" width="110" height="110" rx="8" fill="#FC5A5A"/>
            </svg>
          </div>
          <div className='text-[#183B56] text-[16px] w-[179px] h-[100px] font-[400]'>
            <p >Samsung Galaxy Watch 3.Black Metalic Newest</p>
            <p>$1,750.00</p>
          </div>
      </div>
      <div className='flex items-center justify-center w-[360px] h-[130px] pt-8 rounded-lg bg-white'>
          <div>
            <svg width="110" height="110" viewBox="0 0 160 160" className='rounded-lg' fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle" width="110" height="110" rx="8" fill="#FC5A5A"/>
            </svg>
          </div>
          <div className='text-[#183B56] text-[16px] w-[179px] h-[95px] font-[400]'>
            <p >Apple Watch 4 2020.Silver - Special</p>
            <p>$1,750.00</p>
          </div>
      </div>

      
    </div>
    </div>
  )
}

export default Header