import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import HotDeals from "@/components/home/HotDeals";
import ExploreByService from "@/components/home/ExploreByService";
import WhyBlackey from "@/components/home/WhyBlackey";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularDestinations />
        <HotDeals />
        <ExploreByService />
        <WhyBlackey />
        <FeaturedExperiences />
      </main>
      <Footer />
    </>
  );
}
