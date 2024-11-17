import MainNavBar from "@/components/MainNavBar";
import TopBar from "@/components/TopBar";
import SubNavBar from "./components/SubNavBar";
import CategoryAndHero from "./components/CategoryAndHero";
import MainProvider from "./context/MainContext";
import FourColsServiceCards from "./components/FourColsServiceCards";
import SaleColsThree from "./components/SaleColsThree";
import ShopByTopCategory from "./components/ShopByTopCategory";
import OurFeaturedProduct from "./components/OurFeaturedProduct";
import SeperateCategory from "./components/SeperateCategory";
import OrganicFarm from "./components/OrganicFarm";
import ProfessionalMember from "./components/ProfessionalMember";
import WhatClientSay from "./components/WhatClientSay";
import Companies from "./components/Companies";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <MainProvider>
      <div className="main-container overflow-hidden max-w-[2500px]">
        <TopBar />
        <MainNavBar />
        <SubNavBar />
        <CategoryAndHero />
        <FourColsServiceCards />
        <SaleColsThree />
        <ShopByTopCategory />
        <OurFeaturedProduct />
        <SeperateCategory />
        <OrganicFarm />
        <ProfessionalMember />
        <WhatClientSay />
        <Companies />
        <SubscribeSection />
        <Footer />
        <Copyright />
      </div>
    </MainProvider>
  );
}

export default App;
