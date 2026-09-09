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