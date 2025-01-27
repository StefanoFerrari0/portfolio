import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

const Home: React.FC = () => {
  return (
    <main className="mx-auto px-10 sm:container sm:px-0">
      <AboutMe />
      <Experience />
      <Skills />
    </main>
  )
}

export default Home
