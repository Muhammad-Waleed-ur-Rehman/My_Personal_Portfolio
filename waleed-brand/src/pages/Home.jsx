import HeroSpade from "../sections/HeroSpade";
import ServicesSpade from "../sections/ServicesSpade";
import Projects from "../sections/Projects";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSpade />
      <ServicesSpade />
      <div id="projects"><Projects /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}
