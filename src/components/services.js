import React, {useState,useRef, useEffect} from 'react'


import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import useMousePosition from "../hooks/useMousePosition"
import data from "../data/services.json"


import '../styles/service.css'


const Services = () => {

    const { x, y} = useMousePosition()
    

    return(
        <div className="bot-head">
         <div className="left-tabs">
             {data.map( list => (
                <List 
                key={list.id} 
                title={list.title} 
                icon={list.icon} 
                img={list.src} 
                name={list.name}
                position={list.position}
                text={list.text}
                x={x}
                y={y}
                />
             ))}
         </div>
            <div className="right-tabs">
            <StaticImage src="../images/pointilism.png" alt="cover" className="cover"/>
            </div>
         </div>
    )

   
}

const List = ({ title,name,img,icon, position, text, x, y}) => {
    
    const [hoverState, setHoverState] = useState(false)

    const [listPosition, setListPosition] = useState({
        top: 0,
        left: 0,
    })
    let list = useRef()

    useEffect(() => {
         setListPosition({
             top: list.current.getBoundingClientRect().top,
             left: list.current.getBoundingClientRect().left,
         })
    },[hoverState]);


    return(
        <div >
             <motion.div ref={list}
             onHoverStart={() => setHoverState(true)}
             onHoverEnd={() => setHoverState(false)}
             x= {x} y={y}
             className="left-tab">
                 <img src={icon} className="icon" alt="icon" />
                <h5>{title}</h5>
             </motion.div>
             <motion.div 
             initial={{opacity: 0,
                x: 0,
                y: 0,
            }}
             animate={{
                 opacity: hoverState? [0, 1] : 0,
                 x:  x - listPosition.left * 0.7 ,
                 y:  y * 0.10 + listPosition.top * 0.1 ,
             }}
            transition={{ ease: 'linear'}}
             className="tab-wraper">
             <img src={img} alt="service" className="serviceImg4"/>
             <div className="tab-head">
                 <div className="head-img">
                     <StaticImage src="../images/user.png" alt="user" className="user"/>
                 </div>
                 <div className="head-name">
                     <h6>{name}</h6>
                    <p>{position}</p>
                 </div>  
             </div>
             <div className="tab-text">
                     <p>
                     {text}
                     </p>
             </div>
             </motion.div>            
         </div>  
    )
}




export default Services