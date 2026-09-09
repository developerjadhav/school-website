import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-2xl bg-white p-8 shadow-sm md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">

        <ContactInfo />

        <ContactForm />

      </div>
    </section>
  );
};

export default ContactSection;