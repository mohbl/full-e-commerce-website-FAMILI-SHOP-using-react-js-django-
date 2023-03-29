import React from 'react'
import Group199 from '../component/assets/Group199.png'
import Group196 from '../component/assets/Group196.png'
import Group202 from '../component/assets/Group202.png'
import Group203 from '../component/assets/Group203.png'
import Group205 from '../component/assets/Group205.png'
import Group206 from '../component/assets/Group206.png'

const CategoriesGuide = () => {
  return (
    <div className='PageContainer pt-[32px]'>
  <div className='grid grid-cols-2 justify-items-center gap-x-4 px-10 my-8 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-[596px] '>
    <img src={Group199} alt="" className='shadow-md cursor-pointer opacity-90 hover:shadow-slate-400 hover:opacity-100 hover:border-2 hover:border-teal-200' /> 
    <img src={Group196} alt="" className='shadow-md cursor-pointer opacity-90 hover:shadow-slate-400 hover:opacity-100 hover:border-2 hover:border-teal-200' />
    <img src={Group202} alt="" className='shadow-md cursor-pointer opacity-90 hover:shadow-slate-400 hover:opacity-100 hover:border-2 hover:border-teal-200' />
    <img src={Group203} alt="" className='shadow-md cursor-pointer opacity-90 hover:shadow-slate-400 hover:opacity-100 hover:border-2 hover:border-teal-200' />
    <img src={Group205} alt="" className='shadow-md cursor-pointer opacity-90 hover:shadow-slate-400 hover:opacity-100 hover:border-2 hover:border-teal-200' />
    <img src={Group206} alt="" className='shadow-md cursor-pointer opacity-90 hover:shadow-slate-400 hover:opacity-100 hover:border-2 hover:border-teal-200' />
  </div>
   </div>

  )
}

export default CategoriesGuide