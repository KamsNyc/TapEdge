import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main >
      {/* BANNER */}
      <section>
        <Banner />
      </section>

      {/* HERO SECTION */}
     <section>
      <HeroSection  />
     </section>

     {/* STATS SECTION */}
     <section>
      <Stats />
     </section>

     <section>
      <ProductCard  />
     </section>
    </main>
  )
}
