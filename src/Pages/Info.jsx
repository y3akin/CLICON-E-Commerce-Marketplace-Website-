import React from 'react'

const Info = () => {
  return (
    <div className='w-[300px] mx-auto mt-10 text-center bg-[#ff8011] p-5 rounded-[5px]'>

        <h2 className='font-pub font-bold text-2xl leading-5 underline'>Log In Details</h2>

      <div className='mt-5 text-start'>
        <h3 className='font-pub font-semibold text-xl leading-5 text-[#222c2e]'>E-mail: <span className='font-medium underline text-black'>cilicon@gmail.com</span></h3>
        <h3 className='mt-3 font-pub font-semibold text-xl leading-5 text-[#222c2e]'>Password: <span className='font-medium  text-black'>123456</span></h3>
      </div>

    </div>
  )
}

export default Info
