import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Commande = () => {
    
    const [commands, setCommands] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/commands')
      .then(response => setCommands(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    
    <div className="flex flex-col PageContainer my-[21px] pl-16 pr-16 ">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white border-b border-gray-200 shadow sm:rounded-lg">
            <div className='h-[62px] font-bold text-xl border-b border-gray-200'>
             <h1 className='p-5'>Mes commandes</h1>
            </div>
       
          <table className="min-w-full mx-6 divide-y divide-gray-200 ">
            <thead className="h-[59px] font-semibold">
              <tr>
                <th scope="col" className="px-6 py-3 text-xs tracking-wider text-left uppercase">
                  Numero
                </th>
                <th scope="col" className="px-6 py-3 text-xs tracking-wider text-left uppercase">
                  Date commande
                </th>
                <th scope="col" className="px-6 py-3 text-xs tracking-wider text-left uppercase">
                  Date livraison
                </th>
                <th scope="col" className="px-6 py-3 text-xs tracking-wider text-left uppercase">
                  Montant
                </th>
              </tr>
            </thead>
            <tbody className="font-medium bg-white divide-y divide-gray-200 ">
              {commands.map(command => (
                <tr key={command.id}>
                  <td className="px-6 py-4 text-sm text-[#800B8D] whitespace-nowrap">
                    {command.numero}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    {command.date_commande}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    {command.date_livraison}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    {command.montant} DA 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Commande
