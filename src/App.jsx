import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryBar from './components/CategoryBar'
import About from './components/About'
import Projects from './components/Projects'
import Internship from './components/Internship'
import SchoolProjects from './components/SchoolProjects'
import Socials from './components/Socials'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <CategoryBar />
        <About />
        <Projects />
        <Internship />
        <SchoolProjects />
        <Socials />
      </main>
    </div>
  )
}

export default App
