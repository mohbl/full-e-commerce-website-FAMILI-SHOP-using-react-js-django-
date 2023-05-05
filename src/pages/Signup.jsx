import React, { useState } from 'react'
import Logo from '../component/assets/logo.png'
export const Login = () => {
const [login , setlogin]=useState(false)

  
  return (
    <div name='Login' className='PageContainer'>
      <div className='flex items-center justify-center '>
        <img src={Logo} alt="" className='w-[100px] h-[50px] my-2  ' />
      </div>
      <div className= 'flex items-center justify-center gap-10 pt-3' >
        <h1 className={ login ?'border-b-2 cursor-pointer border-purple-900 transition-all duration-300 ease-in-out ': 'cursor-pointer'  }  onClick={()=>setlogin(true)}>Se connecter</h1>
        <h1 className= {!login ? 'border-b-2 cursor-pointer border-purple-900 transition-all duration-200 ease-in-out ' :'cursor-pointer' }onClick={()=>setlogin(false)} >S’inscrire</h1>
      </div>
     
     
     <div className='relative flex items-center justify-center '>
      
       {/* S’inscrire */}
      <form className={ login ? ' hidden absolute right-[-100%]': 'flex  justify-center items-center  '  }>
        <ul className= 'mt-4' >
          <li className='mt-5 border-2 '> <input type="text" className='h-[53px] w-[402px] p-2' placeholder='Nom'/></li>
          <li className='mt-5 border-2 '> <input type="text" className='h-[53px] w-[402px] p-2' placeholder='Prenom'/></li>
          <li className='mt-5 border-2 '> <input type="text" className='h-[53px] w-[402px] p-2' placeholder='Adresse e-mail ou numéro de téléphone portable'/></li>
          <li className='mt-5 border-2 '> <input type="password" className='h-[53px] w-[402px] p-2' placeholder='Mot de pass'/></li>
        </ul>
      </form>
       {/* Se connecter */}
      <form className= { login ?  ' flex justify-center items-center  duration-500 ease-in-out ' :' hidden absolute left-[-100%]' }>
        <ul className='mt-4'>
          <li className='mt-5 border-2 '> <input type="text" className='h-[53px] w-[402px] p-2' placeholder='Adresse e-mail ou numéro de téléphone portable'/></li>
          <li className='mt-5 border-2 '> <input type="password" className='h-[53px] w-[402px] p-2' placeholder='Mot de pass'/></li>
        </ul>
      </form>
  
      </div>
      <div className='flex items-center justify-center p-4 '>
         <button className='h-[46px] w-[402px] bg-purple-700 text-white ' type='submit'>
          connexion
         </button>
      </div>
      <div class="inline-flex items-center justify-center w-full">
    <hr class="w-[402px] h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
    <h1 class="absolute px-2  text-gray-900 -translate-x-1/2 bg-white left-1/2 ">continue avec</h1>
    
</div>
    </div>
  )
}

export default Login