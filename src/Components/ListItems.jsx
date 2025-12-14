import React from 'react'

const ListItems = ({children, className, onClick}) => {
  return (
    <li className={`font-pub font-normal pl-4 py-2 text-[14px] hover:font-medium hover:bg-[#F2F4F5] leading-5 text-[#5F6C72] hover:text-[#191C1F] transition-all duration-300 cursor-pointer ${className}`} onClick={onClick}>{children}</li>
  )
}

export default ListItems
