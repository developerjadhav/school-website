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
      {/* Existing Academics Hero */}

      <AcademicPhilosophy />
      <LearningApproach />
      <CurriculumSubjects />
      <BeyondTheClassroom />
      <AssessmentProgress />
      <FutureSkills />
      <AcademicsCTA />

      {/* Existing Footer */}
    </>
  );
};

export default Academics;