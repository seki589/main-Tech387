
import React from 'react'
import {useState} from 'react'



const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState('');

    const handleSent = (e) => {
        e.preventDefault();
        const mail = {name, email, project}
        fetch('https://us-central1-tech-387-main.cloudfunctions.net/tech387-website-contact', {
        method: 'POST',
       
        body: JSON.stringify(mail)
        }).then(function(response) {
            console.log(response)
           // return response.json();
        });

    
        setTimeout(() => {
            setMessage("Your message has been sent")
        },300);
        setTimeout(() => {
            setMessage('')
          }, 4000);
        setName('');
        setEmail('');
        setProject('');
               
    }

        return (
            <div className="hireUsForm">
                <form onSubmit={handleSent}>
                    <input
                            type="text"
                            name="name"
                            required
                            pattern='^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name*"
                    ></input>
                    <input
                            type="text"
                            name="email"
                            required
                            value={email}
                            pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email*"
                    ></input>
                    <input
                            type="text"
                            name="project"
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                            placeholder="Project Details (optional)"
                    ></input>
                    <div className="subBtn"><p>{message}</p><button className="send">Send</button></div>
                </form>
            </div>
        )


}



export default Form