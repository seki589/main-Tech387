import React from 'react'


const Form = () => {

   return(
       <div className="hireUsForm">
           <form>
               <input
               type="text"
               name="name"
               required
               placeholder="Name"
               ></input>
               <input
               type="text"
               name="email"
               required
               placeholder="Email"
               ></input>
               <input
               type="text"
               name="details"
               placeholder="Project Details (optional)"
               ></input>
               <button className="send">Send</button>
           </form>
       </div>
   )


}



export default Form