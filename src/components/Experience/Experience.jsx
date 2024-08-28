import React from 'react'
import styles from './Experience.module.css'

const Experience = () => {

    const experienceContent = [
        {
            id : "0",
            title : "Internship at Appable tech pvt.ltd",
            text : "- Product testing and learning about developement of fully functional company websites "
        },
        {
            id : "1",
            title: "Coding team of DJS Phoenix",
            text : "- joined in May 2024, learning about Drone components and Linux"
        },
        {
            id: "2",
            title: "Tech team of ECell of DJS ",
            text : "- joined Feb 2024, learning about Web Dev"
        }

    ]


    const skillApps = [
        {
            id : "0",
            title: "HTML",
            icon : "/html-5.png",
            width : 26,
            height: 36,
        },
        {
            id : "1",
            title: "CSS",
            icon : "/css-3.png",
            width : 26,
            height: 36,
        },
        {
            id : "2",
            title: "JS",
            icon : "/js.png",
            width : 26,
            height: 36,
        },
        {
            id : "3",
            title: "REACT",
            icon : "/react.png",
            width : 26,
            height: 36,
        },
        {
            id : "4",
            title: "PYTHON",
            icon : "/python.png",
            width : 26,
            height: 36,
        },
        {
            id : "5",
            title: "CPP",
            icon : "/CPP.png",
            width : 26,
            height: 36,
        },
        {
            id : "6",
            title: "JAVA",
            icon : ".java.png",
            width : 26,
            height: 36,
        },
    ]

  return (
    
        <section>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2> My Experience</h2>
                    <ul className={styles.experienceUl}>
                        {experienceContent.map((item) => 
                        <li className={styles.experienceList} key={item.id}>
                            <img src="/tick.png" alt="" />
                            <div className={styles.experienceListContainer}>
                                
                                <h6>{item.title}</h6>
                                <p> {item.text} </p>
                                    
                            </div>
                        </li>
                        
                        )}

                    </ul>
                </div>
                <div className={styles.experienceCircle}>
                    <img src="/skills.png" alt="" />
                </div>
                {/* <div className={styles.skillIconContainer}>{skillApps.map((app, index) => (
                    <li className={styles.skillList} key={app.id}>
                        <div className={styles.images}><img src={app.icon} alt="" /></div>
                    </li>
                    ))}
                </div> */}
            </div>
        </section>
    
    
  )
}

export default Experience
