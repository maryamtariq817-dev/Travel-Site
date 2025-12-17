import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero
        className="hero"
        heroImg="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg"
        title="Your Journey Your Story"
        text="Choose Your favourite Destination."
        btntext="Travel Plan"
        url="/"
        btnClass="btn-show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
