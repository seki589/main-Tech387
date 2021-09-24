import React, {useState,useRef, useEffect} from 'react'


import { StaticImage } from "gatsby-plugin-image"
import { motion} from "framer-motion"
import useMousePosition from "../hooks/useMousePosition"
import data from "../data/services.json"


import '../styles/service.css'


const Services = () => {
    
    let { x, y} = useMousePosition();
    
    

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
    const [close, setClose] = useState(true);
    const [hoverState, setHoverState] = useState(false)
    const [listPosition, setListPosition] = useState({
        top: y,
        left: x,
    })
    // console.log(close);
    let list = useRef()

    useEffect(() => {
         setListPosition({
             top: list.current.getBoundingClientRect().top,
             left: list.current.getBoundingClientRect().left,
         })
    },[hoverState]);

    useEffect(() => {
        function setDefoult(){
            let dD = close? "block" : "none";
            let dO = close? 1  : 0 ;
            document.documentElement.style.setProperty('--defaultD', `${dD}`);
            document.documentElement.style.setProperty('--defaultO', `${dO}`);
        }
        setDefoult();
    },[close]);
    return(
        <div className="hover-tab">
             <motion.div ref={list}
            //  onClick={() => { setListPosition(true);setHoverState(true);}}
             onHoverStart={() => setHoverState(true)}
             onMouseLeave={() => setHoverState(false)}
            //  onHoverEnd={() => {setHoverState(false);}}
            //  x= {x} y={y}
             className="left-tab">
                 <img src={icon} className="icon" alt="icon" />
                <h5 className="title-hover">{title}</h5>
                <h5 className="title-click" onClick={() => setClose(false)}>{title}</h5>
             </motion.div>
             <motion.div 
             initial={{
                y:  y,
                x:  x,
                display: 'none',
                opacity: 0,
            }}
             animate={{
                x:  x - listPosition.left,
                y: y - listPosition.top,
                 display: hoverState? 'block' : 'none',
                 opacity: hoverState? [0.3,1] : [0.3,0],
             }}
             exit={{
                display: 'none',
                opacity: 0,
             }}
            transition={{duration: 0.05, ease: 'linear'}}
             className="tab-wraper">
             <img src={img} alt="service" className="serviceImg4"/>
             <div className="tab-head">
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