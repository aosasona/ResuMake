import Features from "../../components/Homepage/Features";
import Footer from "../../components/Homepage/Footer";
import HeroSection from "../../components/Homepage/HeroSection";
import Nav from "../../components/Nav";

const Home = () => {
  return (
	<>
	  <Nav/>
	  <main className="">
		<HeroSection/>
		<Features/>
		<Footer/>
	  </main>
	</>
  );
}


export default Home;