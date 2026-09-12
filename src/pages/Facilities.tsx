import PageHero from "../components/common/PageHero";
import FacilityHighlights from "../components/facilities/FacilityHighlights";
import AcademicFacilities from "../components/facilities/AcademicFacilities";
import SportsRecreation from "../components/facilities/SportsRecreation";
import StudentWellbeing from "../components/facilities/StudentWellbeing";
import TechnologyLearning from "../components/facilities/TechnologyLearning";
import FacilitiesCTA from "../components/facilities/FacilitiesCTA";

import FacilitiesGrid from "../components/facilities/FacilitiesGrid";

const Facilities = () => {
  return (
    <>
      <PageHero
        title="Facilities"
        description="Discover a safe, supportive, and engaging school environment designed to help students learn, explore, and grow."
      />
      <FacilitiesGrid />
      <FacilityHighlights />
      <AcademicFacilities />
      <SportsRecreation />
      <StudentWellbeing />
      <TechnologyLearning />
      <FacilitiesCTA />
    </>
  );
};

export default Facilities;