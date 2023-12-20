import React from 'react'
import Image from 'next/image'

 const MostSold = ({name}) => {
  return (
    <div className='flex items-center justify-center w-[360px] h-[96px] rounded-lg bg-[#B3BAC5]'>
                      <div>
                        <svg width="66" height="66" viewBox="0 0 66 66" className='rounded-lg' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="Rectangle" width="66" height="66" rx="8" fill="#FC5A5A"/>
                        </svg>
                      </div>
                      <div className='text-[#183B56] text-[14px] w-[179px] px-3 font-semibold font-[400]'>
                        <p className='pb-3'>{name}</p>
                        <div className='flex justify-between items-center font-[400] text-[12px]'>
                            <span className='flex justify-center items-center'>
                                <Image src="/gold.png" alt="image" width={14} height={14}/>
                                <span className='ml-1'>4.8</span>
                            </span>
                            <div className='flex justify-center items-center'>
                                <span><Image src="/car.png" alt="image" width={18} height={18}/></span>
                                <span>2.1k Unit Sold</span>
                            </div>
                        </div>
                      </div>
                    </div>
  )
}
export default MostSold