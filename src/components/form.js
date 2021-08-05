import React from 'react'


const Form = () => {

   return(
       <div className="hireUsForm">
           <form>
               <input
               type="text"
               required
               placeholder="Name"
               ></input>
               <input
               type="text"
               required
               placeholder="Email"
               ></input>
               <input
               type="text"
               placeholder="Project Details (optional)"
               ></input>
               <button className="send">Send</button>
           </form>
       </div>
   )


}



export default Form