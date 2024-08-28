import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <footer className={styles.Footer}>
        
        <div className={styles.container}>
            <div className={styles.footerContent}>
                <p>&copy; 2024 Aditya Ralhan. All rights reserved.</p>
                <ul className={styles.socialLinks}>
                    <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
                    <li><a href="https://twitter.com/yourusername" target="_blank">Twitter</a></li>
                    <li><a href="adityarlhn@gmail.com">Email</a></li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
