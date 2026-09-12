import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div>
            {/* Small Label */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-10 bg-[#D92157]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                Welcome to JADHAV Public School
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              Building Strong Foundations for a{" "}
              <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
                Bright Future
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              At JADHAV Public School, we believe that education is more than
              academic learning. It is about nurturing curiosity, confidence,
              creativity, values, and a lifelong love for learning.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              Our aim is to provide a supportive and engaging environment where
              every child is encouraged to discover their potential and grow
              into a responsible, confident, and compassionate individual.
            </p>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 rounded-md bg-[#2A2076] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#191155] hover:shadow-lg sm:text-base"
            >
              Discover Our School

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Visual Card */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Decorative background */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border-2 border-[#D92157]/20 sm:-right-5 sm:-top-5" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2A2076] to-[#D92157] p-1 shadow-xl">
              <div className="rounded-xl bg-white p-8 sm:p-10">

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2A2076]/10">
                  <GraduationCap
                    size={30}
                    className="text-[#2A2076]"
                  />
                </div>

                <h3 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-2xl font-bold text-[#2A2076] sm:text-3xl">
                  Learning Beyond Classrooms
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  We encourage students to learn, explore, question, create,
                  and experience the world around them. Every learning
                  opportunity is designed to help students become confident
                  thinkers and lifelong learners.
                </p>

                {/* Bottom highlight */}
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#D92157]" />

                    <span className="text-sm font-medium text-gray-700">
                      Learn • Explore • Grow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;