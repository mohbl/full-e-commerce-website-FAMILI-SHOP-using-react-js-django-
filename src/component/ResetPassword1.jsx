import React from 'react'
import key from './assets/Group 396.svg'
const ResetPassword1 = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <div className='PageContainer bg-white mt-3'>
        <div className='flex flex-col items-center pt-10 pb-[400px]'>
   <img src={key} alt="" className='' />
   <h1 className='font-semibold text-2xl mt-6 tracking-widest'>Récupérez votre mot de passe</h1>
   <p className='text-xl mt-4 font-normal'>Entrez l'e-mail associé à votre compte et nous vous <br /> enverrons un lien de réinitialisation du mot de passe</p>
   <input type="text" className='h-[53px] w-[402px] p-2 border-2 shadow mt-20' placeholder='Adresse e-mail' pattern={emailPattern}/>
   <button
      className="h-[46px] w-[402px] bg-[#800B8D] text-white hover:bg-[#bf33cf] hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] mt-10"
      type="submit"
    >
     Demander la réinitialisation  du mot passe 
    </button>
        </div>

    </div>
  )
}

export default ResetPassword1