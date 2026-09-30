import siteData from './data/site-data.json'
import type { SiteData } from './types'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const data = siteData as SiteData

function App() {
  return (
    <>
      <Header profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} skills={data.skills} />
        <Services services={data.services} profile={data.profile} />
        <Projects projects={data.projects} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </>
  )
}

export default App
