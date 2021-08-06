
import React from 'react'
import {useState} from 'react'


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');

    const handleSent = (e) => {
        e.preventDefault();
        const mail = {name, email, project}
        console.log(mail);
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                    ></input>
                    <input
                            type="text"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                    ></input>
                    <input
                            type="text"
                            name="project"
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                            placeholder="Project Details (optional)"
                    ></input>
                    <button className="send">Send</button>
                </form>
            </div>
        )


}



export default Form