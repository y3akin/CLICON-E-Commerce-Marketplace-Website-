import React from 'react'

const FootTag = ({tag, className}) => {
  return (

      <h2 className={`max-w-[120px] text-center font-pub font-medium text-[14px] leading-5 text-[#FFFFFF] px-3 py-1.5 border border-[#303639] rounded-xs inline hover:bg-[#303639] hover:border-[#FFFFFF] transition-all duration-300 cursor-pointer ${className}`}>{tag}</h2>

  )
}

export default FootTag
