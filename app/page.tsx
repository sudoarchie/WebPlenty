import Image from 'next/image'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Writting } from './components/writting'
import { Leadabout } from './components/leadabout'
import { Footer } from './components/footer'




export default function Home() {
  

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Writting></Writting>
    <Leadabout></Leadabout>
    <Footer></Footer>

    </>
  )
}
