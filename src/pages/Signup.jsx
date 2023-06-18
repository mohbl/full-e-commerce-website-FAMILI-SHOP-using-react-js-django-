import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from '../component/assets/Group 1.svg'
import facebook from '../component/assets/facebook.png'
import google from '../component/assets/google.png'
import AuthContext from '../context/AuthContext'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

export const Login = () => {
  const { loginUser, registerUser } = useContext(AuthContext)
const [login , setlogin]=useState(false)
const [loading , setLoading]=useState(false)
const [first_name, setFirst_name] = useState("")
const [last_name, setLast_name] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [phone, setPhone] = useState("")
const [username, setUsername] = useState("")
const [isChecked, setIsChecked] = useState(false);



useEffect(() => {
  setFirst_name("")
  setLast_name("")
  setEmail("")
  setPassword("")
  setPhone("")
  setUsername("")
}, [login])

const handleLogin = async () => {
  if(email==="" || password==="") {
    toast.error("Certains champs sont manquants !", {
      position: toast.POSITION.TOP_CENTER,
    });
        return
  }
  setLoading(true)
  const res = await loginUser(email, password)
  setLoading(false)
}
const handleRegister = async () => {
  if(email==="" || password==="" || first_name==="" || last_name===""|| phone==="" || username==="" ||isChecked) {
    toast.error('Certains champs sont manquants ou les conditions ne sont pas acceptées !', {
      position: toast.POSITION.TOP_CENTER,
    });
    return
  }
  setLoading(true)
  const res = await registerUser(first_name, password, last_name, email, phone ,username)
  setLoading(false);
  setlogin(true);
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(login) handleLogin()
  else handleRegister()
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(05|06|07)\d{8}$/;

  return (
    <div name='Login' className={ login ? 'PageContainer bg-white  rounded-sm mt-[30px]' :' PageContainer bg-white rounded-sm mt-[30px]'}>
            <ToastContainer />
      <div className='flex items-center justify-center '>
        <img src={Logo} alt="" className='w-[100px] h-[50px] my-2' />
      </div>
      <div className= 'flex items-center justify-center gap-10 pt-3' >
        <h1 className={ login ?'border-b-2 cursor-pointer border-[#800B8D] transition duration-300 ease-in-out ': 'cursor-pointer'  }  onClick={()=>setlogin(true)}>Se connecter</h1>
        <h1 className= {!login ? 'border-b-2 cursor-pointer border-[#800B8D] transition duration-300 ease-in-out ' :'cursor-pointer' } onClick={()=>setlogin(false)} >S’inscrire</h1>
      </div>
     
     
     <div className='relative flex items-center justify-center '>
      
       {/* S’inscrire */}
      <form className={ login ? ' hidden absolute right-[-100%]': 'flex  justify-center items-center  '  }>
        <ul className= 'mt-4' >
          <li className='mt-5 border-2 '> <input onChange={(e) => setFirst_name(e.target.value)} value={first_name} type="text" className='h-[53px] w-[402px] p-2 ' placeholder='Nom'/></li>
          <li className='mt-5 border-2 '> <input onChange={(e) => setLast_name(e.target.value)} value={last_name} type="text" className='h-[53px] w-[402px] p-2' placeholder='Prenom'/></li>
          <li className='mt-5 border-2 '> <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className='h-[53px] w-[402px] p-2' placeholder="nom d'étulisateur"/></li>
          <li className='mt-5 border-2 '> <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className='h-[53px] w-[402px] p-2' placeholder='Adresse e-mail'  pattern={emailPattern}/></li>
          <li className='mt-5 border-2 '> <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className='h-[53px] w-[402px] p-2' placeholder='Numero telephone' pattern={phonePattern}/></li>
          <li className='mt-5 border-2 '> <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='h-[53px] w-[402px] p-2' placeholder='Mot de pass' /></li>
        </ul>
      </form>
       {/* Se connecter */}
      <form onSubmit={handleLogin} className= { login ?  ' flex justify-center items-center  duration-500 ease-in-out h-[580px]' :' hidden absolute left-[-100%]' }>
        <ul className='mt-[30px]'>
          <li className='border-2 '> <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className='h-[53px] w-[402px] p-2' placeholder='Adresse e-mail' pattern={emailPattern}/></li>
          <li className='mt-5 border-2 '> <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='h-[53px] w-[402px] p-2 ' placeholder='Mot de pass' /></li>
        </ul> 
      </form>
      </div>
      
      {loading ? (
  <div className="flex items-center justify-center">
    <div className="inline-block w-4 h-4 mr-2 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"></div>
    <span>Connecting...</span>
  </div>
) : (
  <div  className={login ? 'flex items-center justify-center absolute bottom-48 left-[235px]' : 'flex items-center justify-center p-4'}>
    <button
      className="h-[46px] w-[402px] bg-[#800B8D] text-white hover:bg-[#bf33cf] hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd]"
      type="submit"
      onClick={handleSubmit} 
    >
      Connexion
    </button>
  {login && (<h1 className='text-[#800B8D] text-center absolute top-16 cursor-pointer hover:text-[#bf33cf] '>mot de passe oublier ?</h1>)}  

  </div>
)}

     
     <div  className={ login ? ' hidden' :  'flex justify-center '}>
       <input type="checkbox"  className='mx-2'/>
       <h1 className='text-center '> J'ai lu et accepté les <span className='text-[#800B8D] underline cursor-pointer '> Termes et conditions </span> </h1>
     </div>
     
      <div class="inline-flex items-center justify-center w-full ">
    <hr class="w-[402px] h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
     
     </div>
    
    </div>
  )
}

export default Login