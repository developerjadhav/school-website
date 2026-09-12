import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicsCTA = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl p-[2px] shadow-xl"
          style={{
            background:
              "linear-gradient(90deg, #D92157 0%, #291F75 100%)",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[1.4rem] px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-16"
            style={{
              background:
                "linear-gradient(90deg, rgba(217, 33, 87, 0.2) 0%, rgba(41, 31, 117, 0.2) 100%), rgb(255, 255, 255)",
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#D92157]/10" />

            <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full border border-[#2A2076]/10" />

            <div className="absolute right-16 top-12 h-12 w-12 rotate-12 rounded-xl border border-[#D92157]/10" />

            <div className="absolute bottom-12 left-16 h-8 w-8 rounded-full bg-[#2A2076]/5" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-3xl">

              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A2076]/10">
                <Sparkles size={27} className="text-[#2A2076]" />
              </div>

              {/* Label */}
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                Begin the Journey
              </p>

              {/* Heading */}
              <h2 className="mt-3 font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
                Give Your Child the{" "}
                <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
                  Opportunity to Grow
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Discover an academic environment where curiosity is encouraged,
                foundations are strengthened, and students are supported in
                becoming confident lifelong learners.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <Link
                  to="/admissions/enquiry"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#2A2076] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#191155] hover:shadow-lg sm:w-auto sm:text-base"
                >
                  Admission Enquiry

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#2A2076]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#2A2076] transition-all duration-300 hover:border-[#2A2076] hover:bg-[#2A2076] hover:text-white sm:w-auto sm:text-base"
                >
                  <MessageCircle size={18} />

                  Contact Us
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsCTA;