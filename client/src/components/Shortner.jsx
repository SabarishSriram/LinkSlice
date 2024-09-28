import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Shortner() {
  return (
    <div className='flex mt-6 p-2 bg-[#181E29] items-center justify-center rounded-full border'>
        <input placeholder='Enter your link' className='w-96 md:w-96 bg-transparent text-white lg:w-96 focus:border-hidden border-none'/>
        <Button className='bg-[#793fff] text-white rounded-full font-bold'>Shorten</Button>

    </div>
  )
}

export default Shortner