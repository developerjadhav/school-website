import PageHero from "../components/common/PageHero";
import ContactIntro from "../components/contact/ContactIntro";
import ContactSection from "../components/contact/ContactSection";
import LocationMap from "../components/contact/LocationMap";
import AdmissionEnquiryCTA from "../components/AdmissionEnquiryCTA";

const ContactPage = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We would be happy to hear from you. Get in touch with JADHAV Public School for admissions, enquiries, or any other information."
      />
      <ContactIntro />
      <ContactSection />
      <AdmissionEnquiryCTA />
      <LocationMap />
    </>
  );
};

export default ContactPage;