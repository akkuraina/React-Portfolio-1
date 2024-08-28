import React from 'react'
import styles from './Intro.module.css'
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x:-500, opacity:0,
    },
    animate: {
        x:0, opacity:1,
        transition:{
            duration : 1,
            staggerChildren : 0.1,
        }
    },
}

const sliderVariants = {
    initial :{
        x: 0,
    },
    animate :{
        x: "-220%",
        transition:{
            repeat : Infinity,
            duration: 20,
            repeatType : "mirror"

        }
    }
}

const Intro = () => {
  return (
    
    <div className={styles.Intro}>
        <motion.div className={styles.textContainer} variants ={textVariants} initial="initial" animate="animate">
            <motion.h2 variants ={textVariants}> 
                ADITYA RALHAN
            </motion.h2>
            <motion.h1 variants ={textVariants}>
                    Web Developement and <br />  
                    Machine Learning Enthusiast
            </motion.h1>
            <motion.div variants ={textVariants} className={styles.introButton}>
                <motion.button variants ={textVariants}>
                    Know more about me
                </motion.button>
            </motion.div>
            
             
        </motion.div>
        <motion.div className={styles.slidingTextContainer} variants={sliderVariants} initial = "initial" animate = "animate"> 
                Coding Sports Gaming Fitness 
        </motion.div>
        <div className={styles.imageContainer}> 
             <img src="/Intro-img.png" alt="" />
        </div>
    </div>
  )
}

export default Intro

