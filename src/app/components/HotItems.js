import Image from 'next/image'
import React from 'react'
import Carousel from './Slider'
import MostSold  from './MostSold'

function HotItems() {
  return (
    <div className='container mx-auto w-[1440px] bg-white'>
        <div className='flex justify-center items-center flex-col  '>
            <Image src="/Base (1).png" alt="image" width={1440} height={350}/>
            <div className=' relative top-[-250px] left-[-400px]  flex justify-center items-center gap-2'>
                <p className='text-3xl px-3'>🔥</p>
                <h2 className='text-[#183B56]  font-700 text-3xl font-semibold'>Hot Items</h2>
            </div>
            <div className=' relative top-[-300px] left-[380px] w-[185px] h-[56px] bg-[#36B37E]'>
                <button className='text-white text-[16px] font-[400] px-7 py-4'>See All Products</button>
            </div>
        </div>
        <div className='relative top-[-300px] '>
            <Carousel/>
            <button>
                    <Image src="/Icon.png" alt="image" width={50} height={50} 
                    className='bg-white rounded-full relative top-[-235px] left-[1190px] '  />
            </button>
        </div>
        <div className='relative top-[-250px] left-[70px] w-[1140px] h-[374px] g-white'>
            <div className='flex justify-center items-center gap-10 flex-wrap '>
                <Image src="/Item (2).png" alt="image" width={155} height={162}/>
                <Image src="/Item (1).png" alt="image" width={155} height={162}/>
                <Image src="/Item (3).png" alt="image" width={155} height={162}/>
                <Image src="/Item (4).png" alt="image" width={155} height={162}/>
                <Image src="/Item (5).png" alt="image" width={155} height={162}/>
                <Image src="/Item (6).png" alt="image" width={155} height={162}/>
                <Image src="/Item (7).png" alt="image" width={155} height={162}/>
                <Image src="/Item (8).png" alt="image" width={155} height={162}/>
                <Image src="/Item (9).png" alt="image" width={155} height={162}/>
                <Image src="/Item (10).png" alt="image" width={155} height={162}/>
                <Image src="/Item (11).png" alt="image" width={155} height={162}/>
                <Image src="/Item (12).png" alt="image" width={155} height={162}/>
            </div>
        </div>
        <div className='grid grid-cols-3 px-16 justify-center items-center relative top-[-100px] gap-8'>
            <div className=' w-[360px] h-[574px] '>
                <h3 className='pb-10 text-[#183B56] font-700 font-semibold text-2xl'>Most Sold Laptop</h3>
                <div className='flex justify-center items-center flex-col gap-3 '>
                    <MostSold name="Asus Zenbook Pro 13”"/>
                    <MostSold name="Asus Zenbook Pro 13”"/>
                    <MostSold name="Asus Zenbook Pro 13”"/>
                    <MostSold name="Asus Zenbook Pro 13”"/>
                </div>
            </div>
            <div className=' w-[360px] h-[574px] '>
                <h3 className='pb-10 text-[#183B56] font-700 font-semibold text-2xl'>Most Sold Camera </h3>
                <div className='flex justify-center items-center flex-col gap-3 '>
                    <MostSold name="Leica M3 1972"/>
                    <MostSold name="Leica M3 1972"/>
                    <MostSold name="Leica M3 1972"/>
                    <MostSold name="Leica M3 1972"/>
                </div>
            </div>
            <div className=' w-[360px] h-[574px]'>
                <h3 className='pb-10 text-[#183B56] font-700 font-semibold text-2xl'>Most Sold Headphone</h3>
                <div className='flex justify-center items-center flex-col gap-3 '>
                    <MostSold name="Beats by Dre C"/>
                    <MostSold name="Beats by Dre C"/>
                    <MostSold name="Beats by Dre C"/>
                    <MostSold name="Beats by Dre C"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotItems