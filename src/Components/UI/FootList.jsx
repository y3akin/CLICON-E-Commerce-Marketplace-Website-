import React from 'react'
import { Link } from 'react-router'

const FootList = ({list}) => {
  return (
    <Link className="font-pub font-medium hover:text-[#FFFFFF] text-[14px] leading-5 text-[#929FA5] relative transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5  after:bg-[#FA8232] after:w-0 after:content-['']  not-visited:hover:after:w-full hover:after:transition-all hover:after:duration-600 cursor-pointer">{list}</Link>
  )
}

export default FootList
