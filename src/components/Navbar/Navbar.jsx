import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (<>
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}> &lt; Portfolio /&gt;</a>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li><a href="#about"> About </a></li>
                    <li><a href="#experience"> Experience </a></li>
                    <li><a href="#projects"> Projects </a></li>
                    <li><a href="#contact"> Contact </a></li>
                    
                </ul>
                
            </div>
            <form action="/search" >
                <input type="search" placeholder='Type...' />
                <button  type='submit' className = {styles.navButton}> Search </button>
            </form>
            
        </nav>
        </>
    )
}

export default Navbar
