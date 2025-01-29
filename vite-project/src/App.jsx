import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </nav>
      <header className="header">
        <h1>Nandhini S</h1>
        <p>A Student</p>
      </header>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a student with passion in building full-stack applications and solving real-world problems.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>C++</li>
          <li>Java</li>
          <li>HTML/CSS</li>
          <li>Git/GitHub</li>
        </ul>
      </section>

      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>
            <h3>Introduction to HTML</h3>
            <p>A course offered by infosys springboard to start from scratch.</p>
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              View Course
            </a>
          </li>
          <li>
            <h3>Wiring harness</h3>
            <p>The working and communication of electronic parts of a car.</p>
            <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
              View Course
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>Created using React</p>
      </footer>
    </>
  )
}

export default App