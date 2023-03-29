import React from 'react'
import { useState, useEffect } from 'react';
import {BsStarHalf , BsStarFill , BsStar} from 'react-icons/bs'

const FeedbackCard = ({ commentId }) => {
const [comment, setComment] = useState(null);
const { username, commentText, date, rate } = comment;

  
//fetch the comment from the db
useEffect(() => {
    fetch(`/api/comments/${commentId}`)
      .then(response => response.json())
      .then(data => setComment(data))
      .catch(error => console.log(error));
  }, [commentId]);

  if (!comment) {
    return <div>Loading comment...</div>;
  }

  
  return (
 <div className="bg-white border-b border-gray-300 ">
      <div className="flex justify-between mb-[12px] ">
            <div className="font-medium text-[14px]">
               <h1>{username}</h1> 
            </div>           
            <div className="flex">
             <div className="text-yellow-500 ">
             {rate >= 1 ? <BsStarFill/> : rate >= 0.5 ? <BsStarHalf/> : <BsStar/>}
             </div>
             <div className="text-yellow-500">
             {rate >= 2 ? <BsStarFill/> : rate >= 1.5 ? <BsStarHalf/> : <BsStar/>}
             </div>
            <div className="text-yellow-500">
            {rate >= 3 ? <BsStarFill/> : rate >= 2.5 ? <BsStarHalf/> : <BsStar/>}
            </div>
            <div className="text-yellow-500">
            {rate >= 4 ? <BsStarFill/> : rate >= 3.5 ? <BsStarHalf/> : <BsStar/>}
            </div>
            <div className="text-yellow-500">
            {rate >= 5 ? <BsStarFill/> : rate >= 4.5 ? <BsStarHalf/> : <BsStar/>}
            </div>
     </div>
       </div>
       
        <div className="text-[12px] mb-[6px]">
              <p>{commentText}</p> 
        </div>
    
        <div className=" text-[#8A8888] text-[10px] pb-[9px] ">
            <h2>{date}</h2>
        </div>
      
    </div>
   
  )
}
export default FeedbackCard

/*        


  useEffect(() => {
    fetch(`/api/comments/${commentId}`)
      .then(response => response.json())
      .then(data => setComment(data))
      .catch(error => console.log(error));
  }, [commentId]);

  if (!comment) {
    return <div>Loading comment...</div>;
  }
  */
