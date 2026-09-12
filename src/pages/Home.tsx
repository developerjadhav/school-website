import Hero from "../components/Hero";
import WelcomeSection from "../components/home/WelcomeSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AcademicSection from "../components/home/AcademicSection";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import HomeCTA from "../components/home/HomeCTA";

const home = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <WhyChooseUs />
      <AcademicSection />
      <FacilitiesPreview />
      <GalleryPreview />
      <HomeCTA />
    </>
  );
};

export default home;