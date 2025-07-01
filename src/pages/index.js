import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '../components/HeroSection';
import Journey from '../components/Journey';
import Logo from '../components/Logos';
import ThreeCards from '../components/ThreeCards';
import Scraping from '../components/WebScraping';
import Solution from '../components/Solution';
import Products from '../components/Products';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen bg-white ">
     <HeroSection />
     <Journey />
     <Logo />
     <ThreeCards />
     <Scraping />
     <Solution />
     <Products />
    </main>
  )
}