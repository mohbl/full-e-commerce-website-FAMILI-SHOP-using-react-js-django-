import React from 'react'
import {SiBigbluebutton} from 'react-icons/si'

export const NotificationCard = () => {
  return (
    <div className='flex pl-2 pr-2 bg-white h-[54px] items-center hover:bg-[#E3E2E2] '>
  <SiBigbluebutton size={40}/>
  <h1 className='ml-2 text-left text-xs '><span className=' font-medium text-xs'>Flash Sale</span> à partir de demain n'oubliez pas de le vérifier</h1>
<h1 className='text-[13px] text-[#727272] font-medium pb-4 '>9:35AM </h1>

    </div>
  )
}
export default NotificationCard;
