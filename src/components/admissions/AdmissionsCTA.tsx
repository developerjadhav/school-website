import { useNavigate } from "react-router-dom";

import { ArrowRight, Mail, Phone } from "lucide-react";

const AdmissionsCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#2A2076] px-7 py-14 text-center md:px-12 md:py-16">
          {/* Decorative Shapes */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D92157]/30 blur-2xl" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute right-[20%] top-8 h-3 w-3 rounded-full bg-white/30" />

          <div className="absolute bottom-10 left-[18%] h-4 w-4 rounded-full bg-[#D92157]/50" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-4 text-base text-white/70">
              Your Child's Journey Starts Here
            </p>

            <h2 className="mb-6 text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              Give Your Child
              <span className="block text-[#D92157]">
                A Strong Start
              </span>
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              Take the first step towards an enriching educational journey.
              Connect with JADHAV Public School and discover a learning
              environment where every child is encouraged to learn, grow,
              and achieve.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
              onClick={() => navigate("/admissions/enquiry")}
                type="button"
                className="group flex items-center justify-center gap-2 rounded-full
                  bg-white px-7 py-3.5 text-sm text-[#2A2076]
                  transition-all duration-300
                  hover:bg-[#D92157] hover:text-white"
              >
                Start Admission Enquiry

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
              onClick={() => navigate("/contact")}
                type="button"
                className="flex items-center justify-center gap-2 rounded-full
                  border border-white/50 px-7 py-3.5
                  text-sm text-white
                  transition-all duration-300
                  hover:border-white hover:bg-white/10"
              >
                <Phone size={17} />
                Contact Us
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-7 text-sm text-white/60 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>Admissions Office</span>
              </div>

              <div className="hidden h-4 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>Admissions Enquiry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;