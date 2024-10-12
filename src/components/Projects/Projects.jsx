import React, { useRef } from 'react'
import styles from './Projects.module.css'
import {motion, useScroll, useTransform, } from 'framer-motion'

const items = [
    {
        id : 1,
        title : "Tour website clone using HTML CSS",
        img: "/Touring-website-clone.png",
        description : "Clone of the homepage of a touring website made using HTML CSS"
    },
    {
        id : 2,
        title : "Wordle In Python",
        img: "/wordle.jpeg",
        description : "This is the famous Wordle game but in Python"
    },

    {
        id : 3,
        title : "Maze Finder in Python",
        img: "/maze-in-py.png",
        description : "An advanced AI project I took up to experience AI being used in Python"
    },

    {
        id : 4,
        title : "Expense manager using Python",
        img: "/expense-manager.jpeg",
        description : "Python code that helps you keep a track of your expenses and budget"
    },

    {
        id : 5,
        title : "File Segregator using Python",
        img: "file-segregator.png",
        description : "Segregates files based on their extension"
    }
    

]

const Single = ({item}) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300])

    
    return (
        <section >
            <div className={styles.container}>
                <div className={styles.Wrapper}>
                    <div className={styles.imageContainer} ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className={styles.textContainer} style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.description}</p>
                        <button className={styles.projectButton}> View Project</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

  return (
    <div className={styles.Projects}>  
    <div className={styles.progress}>
        <h1>Featured Works</h1>
        <div className={styles.progressBar}></div>
    </div>
    {items.map(item => (
        <Single item={item} key={item.id} />
    ))}
    </div>

  )
}

export default Projects
