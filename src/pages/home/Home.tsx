import Navbar from "../../components/nav/Navbar";
import TopHeader from "../../components/TopHeader";
import Hero from "../../components/hero/Hero";
import FlashSales from "../../components/FlashSales/FlashSales";
import Category from "../../components/BrowseCategories/Category";
import Product from "../../components/BestSellingProducts/Product";
import BuyNow from "../../components/BuyNow/BuyNow";
import Explore from "../../components/exploreProducts/Explore";
import NewArrival from "../../components/NewArrival/NewArrival";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero />
      <FlashSales />
      <Category />
      <Product/>
      <BuyNow/>
      <Explore/>
      <NewArrival/>
      <Info/>
      <Footer/>
    </>
  );
}

export default Home;
