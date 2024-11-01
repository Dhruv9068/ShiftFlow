import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import Parallax from './components/Parallex';
import TryNow from './components/TryNow';
import Header from './Components/Header';


const Home = () => {
  return (
    <>
      <div className="pt-0 overflow-hidden">
        <Header />
        <Hero />
        <Parallax smallText="Features Of"
         backgroundImage="https://4kwallpapers.com/images/wallpapers/purple-light-geometric-glowing-lines-minimalist-5k-1920x1080-6724.jpg" />
        <section id="features">
          <Features />
        </section>
        <Parallax smallText="How to use?"
        backgroundImage="https://4kwallpapers.com/images/wallpapers/purple-light-geometric-glowing-lines-minimalist-5k-1920x1080-6724.jpg" />
         <section id="how-it-works">
          <HowItWorks/>
         </section>

         <Demo/>

        <section id="TryNow">
          <TryNow />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
