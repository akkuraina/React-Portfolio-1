import React from 'react'
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <section>
        <div className={styles.aboutContainer}>
            <h2 >About Me</h2>
            <div className = {styles.myPicContainer}><img src="/my-pic.jpg" alt="" /></div> 
            <ul className={styles.pointsContainer}>
                <div className={styles.pointBox}>
                        <h3>Why Coding?</h3>
                    <div className={styles.logoAndPara}>
                        <img src="/mouse.png" alt="" />
                        <p> I have a genuine passion and interest in coding and the limitless possibilities that come with it.
                        I've always been enthusiastic about building stuff and that's what attracted me to coding. </p>
                    </div>
                </div>
                <div className={styles.pointBox}>
                        <h3>Teamwork</h3>
                    <div className={styles.logoAndPara}>
                        <img src="/teamwork.png" alt="" />
                
                        <p>I love working as a team, I enjoy learning from my peers and picking up on points to improve myself.</p>
                    </div>
                </div>
                <div className={styles.pointBox}>
                    
                        <h3>Curious about Finance and Business</h3>
                    <div className={styles.logoAndPara}>
                        <img src="/finance.png" alt="" />
                        <p>I've always been intrigued by the financial side and I always take out time to learn more about Investing be it in shares, funds, etc.</p>
                    </div>
                </div>
            </ul>
        </div>
    </section>
  )
}

export default AboutMe
