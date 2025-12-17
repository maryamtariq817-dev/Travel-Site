import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Services() {
  return (
    <>
      <Hero
        className="hero"
        heroImg="https://images.pexels.com/photos/8425051/pexels-photo-8425051.jpeg"
        title="Services"
      />

      <Trip />
      <Footer />
    </>
  );
}
export default Services;
