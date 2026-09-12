import PageHero from "../components/common/PageHero";
import OurStory from "../components/about/OurStory";
import VisionMission from "../components/about/VisionMission";
import CoreValues from "../components/about/CoreValues";
import WhyChooseUs from "../components/about/WhyChooseUs";
import PrincipalMessage from "../components/about/PrincipalMessage";
import SchoolJourney from "../components/about/SchoolJourney";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <>
      <PageHero
        title="About Us"
        description="Discover our vision, values, and commitment to creating a meaningful learning experience for every student."
      />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <WhyChooseUs />
      <PrincipalMessage />
      <SchoolJourney />
      <AboutCTA />
    </>
  );
};

export default About;