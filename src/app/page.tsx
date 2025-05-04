import { CallToAction } from "@/sections/CallToAction";
import { Experience } from "@/sections/Experience";
import FaqSection from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Services from "@/sections/Services";


export default function Home() {
  return <>

  <Header></Header>
  <Hero></Hero>
  <LogoTicker></LogoTicker>
  <Experience></Experience>
  <Services />
  <FaqSection />
  <CallToAction></CallToAction>
  <Footer/>
 
  </>;
}
