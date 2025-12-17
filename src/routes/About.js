import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Hero
        className="hero"
        heroImg="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg"
        title="About "
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
