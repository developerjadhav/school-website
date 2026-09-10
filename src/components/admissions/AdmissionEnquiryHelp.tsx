import { Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdmissionEnquiryHelp = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F7F6FC] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm tracking-widest text-[#D92157]">
            NEED HELP?
          </p>

          <h2 className="mb-3 text-2xl text-[#2A2076] md:text-3xl">
            We're Here to Help
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-600">
            Have questions about admissions? Our school team is happy to
            assist you with the admission process.
          </p>
        </div>

        {/* Help Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Phone Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10">
              <Phone size={22} className="text-[#2A2076]" />
            </div>

            <h3 className="mb-2 text-lg text-[#2A2076]">
              Prefer to speak with us?
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-600">
              Contact our admissions team directly for assistance with your
              enquiry or admission process.
            </p>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="text-sm text-[#D92157] transition-colors duration-300 hover:text-[#2A2076]"
            >
              Contact Admissions →
            </button>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D92157]/10">
              <Mail size={22} className="text-[#D92157]" />
            </div>

            <h3 className="mb-2 text-lg text-[#2A2076]">
              Have a specific question?
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-600">
              Reach out to our school team and we'll be happy to guide you
              through the admission process.
            </p>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="text-sm text-[#D92157] transition-colors duration-300 hover:text-[#2A2076]"
            >
              Contact Our Team →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionEnquiryHelp;