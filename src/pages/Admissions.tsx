import AdmissionIntro from "../components/admissions/AdmissionIntro";
import AdmissionProcess from "../components/admissions/AdmissionProcess";
import EligibilityCriteria from "../components/admissions/EligibilityCriteria";
import RequiredDocuments from "../components/admissions/RequiredDocuments";
import FeeStructure from "../components/admissions/FeeStructure";
import ImportantDates from "../components/admissions/ImportantDates";
import AdmissionFAQs from "../components/admissions/AdmissionFAQs";
import AdmissionsCTA from "../components/admissions/AdmissionsCTA";

const Admissions = () => {
  return (
    <>
      <AdmissionIntro />
      <AdmissionProcess />
      <EligibilityCriteria />
      <RequiredDocuments />
      <FeeStructure />
      <ImportantDates />
      <AdmissionFAQs />
      <AdmissionsCTA />
    </>
  );
};

export default Admissions;