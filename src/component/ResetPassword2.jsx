import React from 'react'
import snaailmail from './assets/Group 397.svg'
const ResetPassword2 = () => {
  return (
    <div className='PageContainer bg-white mt-3'>
    <div className='flex flex-col items-center pt-10 pb-[400px]'>
<img src={snaailmail} alt="" className='' />
<h1 className='font-semibold text-2xl mt-6 tracking-widest'>Vérifier votre email</h1>
<p className='text-xl mt-4 font-normal'>Nous avons envoyé un lien de réinitialisation du mot de passe à  votre email </p>
<button
  className="h-[46px] w-[402px] bg-[#800B8D] text-white hover:bg-[#bf33cf] hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] mt-20"
  type="submit"
>
Ouvrir email
</button>
<h1 className='mt-10 cursor-pointer' >N'a pas reçu l'e-mail ? cliquez pour renvoyer</h1>
    </div>

</div>
  )
}

export default ResetPassword2