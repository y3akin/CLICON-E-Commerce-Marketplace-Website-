import React from 'react'

const CartNotf = ({ notification }) => {
  return (
      <div className="fixed bottom-6 right-6 z-50">
    <div
  className={`
    bg-[#343131] border
    px-5 py-3.5 rounded-2xl shadow-2xl shadow-black/10
    flex flex-col items-center gap-2
    animate-in zoom-in-75 fade-in duration-400
    slide-in-from-bottom-6
    origin-bottom-right
  `}
>
<div className="flex items-center gap-3.5">
    <div className="rounded-full bg-emerald-100 p-1.5">
    <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>
  <span className="text-sm font-medium text-white pr-1">
    {notification}
  </span>
</div>
  <div className="h-1.5 bg-emerald-500 rounded-full w-full origin-left animate-[progress_3s_linear_forwards]">
</div>
</div>
  </div>
  )
}

export default CartNotf
