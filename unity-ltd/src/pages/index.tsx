
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Services from "../../components/sections/Services";
import Membership from "../../components/sections/Membership";
import Properties from "../../components/sections/Properties";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
const Home = () => {

  return(
    <main >
      <Hero/>
      <About/>
      <Services/>
      <Membership/>
      <Properties/>
      <WhyChooseUs/>
    </main>
  )
}

export default Home;