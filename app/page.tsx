import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Banner from './components/Banner'

export default function Home() {
  return (
    <main >
      <section>
        <Banner />
      </section>
     <section>
      <HeroSection  />
     </section>
    </main>
  )
}
