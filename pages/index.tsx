import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>My Portfolio</title>
      </Head>

    <Header />

    <section id="hero" className='snap-start'>
      <Hero />
    </section>

    <section id="about" className='snap-center'>
      <About />
    </section>

    {/* EXPERIENCE */}
    <section id="experience" className='snap-center'>
      <WorkExperience />
    </section>

    {/* SKILLS */}
    <section id="skills" className='snap-start'>
      <Skills />
    </section>

    {/* PROJECTS */}
    <section id="projects" className='snap-start'>
      <Projects />
    </section>

    {/* CONTACT ME */}
    <section id="contact" className='snap-end'>
      <ContactMe />
    </section>

    </div>
  )
}

export default Home
