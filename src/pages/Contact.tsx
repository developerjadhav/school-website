import ContactIntro from "../components/contact/ContactIntro";
import ContactSection from "../components/contact/ContactSection";
import LocationMap from "../components/contact/LocationMap";
import AdmissionEnquiryCTA from "../components/AdmissionEnquiryCTA";

const ContactPage = () => {
  return (
    <>
      <ContactIntro />
      <ContactSection />
      <AdmissionEnquiryCTA />
      <LocationMap />
    </>
  );
};

export default ContactPage;