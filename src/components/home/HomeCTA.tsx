import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2A2076] to-[#D92157] px-6 py-12 shadow-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Decorative Circles */}
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="absolute right-24 top-10 h-16 w-16 rotate-12 rounded-2xl border border-white/10" />
          <div className="absolute bottom-10 left-1/3 h-10 w-10 rounded-full bg-white/5" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">

            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
              <GraduationCap size={32} />
            </div>

            {/* Label */}
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Begin the Journey
            </p>

            {/* Heading */}
            <h2 className="mt-3 font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Give Your Child a Strong Start
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Discover an environment where learning, values, creativity, and
              confidence come together to help every child grow and thrive.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/admissions/enquiry"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#2A2076] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Admission Enquiry

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;