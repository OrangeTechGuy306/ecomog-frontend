import AboutSection from '@/components/home/about-section'
import CarEngineAdvertSection from '@/components/home/car-engine-section'
import CarInteriorSection from '@/components/home/car-interior-section'
import CarVideoSection from '@/components/home/car-video'
import HeroSection from '@/components/home/hero-section'
import LogoSection from '@/components/home/logo-section'



const Homepage = () => {



  return (
    <section>
       <HeroSection />   
       <AboutSection />
       <CarEngineAdvertSection />
       <CarInteriorSection />
       <CarVideoSection />
       <LogoSection />
    </section>
  )
}

export default Homepage