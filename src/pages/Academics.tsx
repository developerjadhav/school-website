import PageHero from "../components/common/PageHero";
import AcademicPhilosophy from "../components/Academics/AcademicPhilosophy";
import LearningApproach from "../components/Academics/LearningApproach";
import CurriculumSubjects from "../components/Academics/CurriculumSubjects";
import BeyondTheClassroom from "../components/Academics/BeyondTheClassroom";
import AssessmentProgress from "../components/Academics/AssessmentProgress";
import FutureSkills from "../components/Academics/FutureSkills";
import AcademicsCTA from "../components/Academics/AcademicsCTA";

const Academics = () => {
  return (
    <>
      <PageHero
        title="Academics"
        description="Explore an engaging academic environment designed to build strong foundations, encourage curiosity, and prepare students for the future."
      />
      <AcademicPhilosophy />
      <LearningApproach />
      <CurriculumSubjects />
      <BeyondTheClassroom />
      <AssessmentProgress />
      <FutureSkills />
      <AcademicsCTA />
    </>
  );
};

export default Academics;