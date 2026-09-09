import { ArrowRight, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] px-6 py-14 text-center sm:px-10 md:py-16 lg:px-16">

          {/* Decorative Circles */}
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute right-20 top-10 h-20 w-20 rounded-full bg-white/5" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Begin the Journey
            </p>

            <h2 className="font-[Cinzel] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's Build a Brighter
              <br className="hidden sm:block" />
              Future Together
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Discover an environment where learning, character, creativity,
              and confidence come together to help every child grow.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <button
                type="button"
                onClick={() => navigate("/admissions")}
                className="group flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 py-3 text-sm font-medium text-[#2A2076] transition-all duration-300 hover:bg-transparent hover:text-white sm:w-auto"
              >
                Explore Admissions

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group flex w-full items-center justify-center gap-2 rounded-lg border border-white/80 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#2A2076] sm:w-auto"
              >
                <Phone size={17} />

                Contact Us
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;