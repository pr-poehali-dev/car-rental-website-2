import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarCatalog from "@/components/CarCatalog";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-rubik">
      <Header />
      <Hero />
      <CarCatalog />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
