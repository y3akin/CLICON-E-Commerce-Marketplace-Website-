import React from 'react'

const FootTag2 = ({tag}) => {
  return (
    <h2 className={`max-w-[120px] text-center font-pub font-medium text-[14px] leading-5 text-[#191C1F] px-3 py-1.5 border border-[#E4E7E9] rounded-xs inline hover:bg-[#FFF3EB] hover:text-[#FA8232] hover:border-[#FA8232] transition-all duration-300 cursor-pointer`}>{tag}</h2>
  )
}

export default FootTag2
