import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const AdmissionEnquiryCTA = () => {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-12 text-center md:px-12 md:py-16"
        style={{
          background:
            "linear-gradient(90deg, rgba(217, 33, 87, 0.20) 0%, rgba(41, 31, 117, 0.20) 100%), #FFFFFF",
        }}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2A2076]/10">
          <GraduationCap className="h-7 w-7 text-[#2A2076]" />
        </div>

        <h2 className="mt-6 text-3xl text-[#2A2076] md:text-4xl">
          Planning to Join JADHAV Public School?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#2A2076]/80 md:text-lg">
          Have questions about admissions, eligibility or the admission
          process? Submit an enquiry and our team will be happy to assist you.
        </p>

        <Link
          to="/admissions/enquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2A2076] px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-[#D92157]"
        >
          Submit Admission Enquiry
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default AdmissionEnquiryCTA;