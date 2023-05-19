import React from 'react'
import Familishop from '../component/assets/Rectangle132.png' 
import Typed from 'react-typed';
const Horaire = () => {
 const days =[ { id:0 , name : 'dimanche' , heure :'09:00 - 21:00' , etat:' ouvert   '  } ,
, { id:1 , name : 'Lundi' , heure :'09:00 - 21:00' , etat:' ouvert   '  } 
 ,{ id:2 , name : 'Mardi' , heure :'09:00 - 21:00' , etat:' ouvert '  } 
 ,{ id:3 , name : 'Mercredi' , heure :'09:00 - 21:00' , etat:' ouvert   '  } 
 ,{ id:4 , name : 'Jeudi' , heure :'09:00 - 21:00' , etat:' ouvert  '  } 
 ,{ id:5 , name : 'Vendredi' , heure :'09:00 - 21:00' , etat:' ouvert   '  } 
 ,{ id:6 , name : 'Samedi' , heure :'09:00 - 21:00' , etat:' ouvert   '  }  ]
 
 const date =new Date()
 const start = new Date()
 const end = new Date()
start.setHours(9,0,0,0 );
end.setHours(21,0,0,0 );

 console.log(date)


 return (
    <div className='PageContainer'>
       
        
         <div className='relative'>
           <img src={Familishop} alt="" className='' />
           

           
          
         
           <Typed className='absolute top-[43%] right-[35%] left-[35%]  text-3xl font-bold text-center text-white'
                strings={[
                    "Horaires d'ouverture de Famili Shop",
                   ]}
                    typeSpeed={130}
                    backSpeed={130}
                    
                    loop >
                    
                </Typed>
          
          
          </div>
        <div  className='p-3 shadow-md m-7'>
          
          <div className='text-center m-4'>
          <h1 className='font-bold'> Nous espérons que cette extension de nos heures d'ouverture vous sera bénéfique et nous sommes impatients de vous accueillir dans notre supermarché, à tout moment.</h1>
          </div>
            <div className='p-5'>     
               
               
            <table  className='w-[50%] m-auto '>
             <thead>
             <tr> 
                <th className='py-1 bg-[#800B8D]/90 border-x border-white  text-white'>jour</th>
                <th className='py-1 bg-[#800B8D]/90 border-x border-white text-white '>Heur</th>
                <th className='py-1  bg-[#800B8D]/90 border-x border-white text-white '>État courant</th>
                 </tr>
                 </thead>
            
            <tbody className='shadow-md '> 
            {days.map((day)=>(
                <tr  className=' p-2  '  >
                     <td  className={  day.id===1 || day.id===3 || day.id===5 ? 'text-center bg-[#D8D8D8] ' : ' text-center ' }> {day.name}  </td>
                     <td className={  day.id===1 || day.id===3 || day.id===5 ? 'text-center bg-[#D8D8D8] ' : ' text-center ' }> {day.heure}  </td>
                     <td className={  day.id===1 || day.id===3 || day.id===5 ? 'text-center bg-[#D8D8D8] ' : ' text-center ' }>  { day.id==date.getDay()  ?  <span className= { date.getTime() > start.getTime() && date.getTime() < end.getTime()   ? 'text-green-400 ' :  'text-red-500' }> 
                    {date.getTime() > start.getTime() && date.getTime() < end.getTime() ?  <span> {day.etat} <span className='text-black pl-1'> , ferme à 21:00</span> </span>  : ' ferme '  }
                       </span>   :    '' }  </td>
                </tr>
            
            ))
                
            } </tbody>
           
      
          </table>
          </div>

          </div>
    </div>
  )
}

export default Horaire
