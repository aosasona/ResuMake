import HeroSection from "../../components/HeroSection";
import Nav from "../../components/Nav";

const Home = () => {
  return (
	<>
	  <Nav/>
	  <main className="">
		<HeroSection/>
		<section className="w-[86vw] lg:w-5/6 2xl:w-4/5 mx-auto text-dark py-12">
		  <h1>HI</h1>
		</section>
	  </main>
	</>
  );
}


export default Home;