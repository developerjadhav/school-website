import PageHero from "../components/common/PageHero";
import AdmissionEnquiryForm from "../components/admissions/AdmissionEnquiryForm";
import AdmissionEnquiryHelp from "../components/admissions/AdmissionEnquiryHelp";

const AdmissionsEnquiry = () => {
  return (
    <>
      <PageHero
        title="Admission Enquiry"
        parentBreadcrumb="Admissions"
        parentBreadcrumbPath="/admissions"
        description="Take the first step towards your child's journey at JADHAV Public School. Share your details and our team will contact you with admission information."
      />
      <AdmissionEnquiryForm />
      <AdmissionEnquiryHelp />
    </>
  );
};

export default AdmissionsEnquiry;