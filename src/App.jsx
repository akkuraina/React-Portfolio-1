import Navbar from "./components/Navbar/Navbar.jsx";
import styles from "./App.module.css"
import Intro from "./components/Intro/Intro.jsx";
import AboutMe from "./components/About Me/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx";



function App() {
  

  return (
    <>
    <div className={styles.App}>
    <Navbar></Navbar>
    <Intro></Intro>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Experience></Experience>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
