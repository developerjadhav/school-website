import {
  ArrowRight,
  BookOpen,
  Brain,
  FlaskConical,
  Languages,
} from "lucide-react";
import { Link } from "react-router-dom";

const academicHighlights = [
  {
    icon: Brain,
    title: "Concept-Based Learning",
    description: "Focus on understanding concepts rather than memorisation.",
  },
  {
    icon: BookOpen,
    title: "Strong Academic Foundation",
    description: "Building essential knowledge and skills for every stage.",
  },
  {
    icon: FlaskConical,
    title: "Learning Through Exploration",
    description: "Encouraging students to observe, experiment, and discover.",
  },
  {
    icon: Languages,
    title: "Communication Skills",
    description: "Developing confident communication and expression.",
  },
];

const AcademicSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 max-w-3xl lg:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D92157]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
              Academic Excellence
            </span>
          </div>

          <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
            Learning That Builds{" "}
            <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
              Confidence & Curiosity
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Our academic approach goes beyond textbooks. We create meaningful
            learning experiences that encourage students to understand,
            explore, question, and apply what they learn.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left - Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {academicHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-[#f8f7fc] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:bg-[#2A2076]">
                    <Icon
                      size={24}
                      className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold text-[#2A2076]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right - Academic Visual */}
          <div
            className="relative overflow-hidden rounded-3xl p-[2px] shadow-xl"
            style={{
              background:
                "linear-gradient(90deg, #D92157 0%, #291F75 100%)",
            }}
          >
            <div
              className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[1.4rem] p-7 text-[#2A2076] sm:p-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(217, 33, 87, 0.2) 0%, rgba(41, 31, 117, 0.2) 100%), rgb(255, 255, 255)",
              }}
            >
              {/* Decorative Circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#2A2076]/10" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-[#D92157]/10" />

              {/* Decorative Square */}
              <div className="absolute right-10 top-20 h-20 w-20 rotate-12 rounded-2xl border border-[#2A2076]/10" />

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A2076]/10">
                  <BookOpen size={32} className="text-[#2A2076]" />
                </div>

                {/* Label */}
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                  Our Approach
                </p>

                {/* Heading */}
                <h3 className="mt-3 max-w-md font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl">
                  Education for a Changing World
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                  We aim to equip students with the knowledge, skills,
                  confidence, and values they need to learn today and thrive
                  tomorrow.
                </p>
              </div>

              {/* Bottom Highlights */}
              <div className="relative z-10 mt-10 grid grid-cols-3 gap-3 border-t border-[#2A2076]/10 pt-6">

                <div>
                  <p className="text-2xl font-bold text-[#2A2076] sm:text-3xl">
                    01
                  </p>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Curiosity
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#2A2076] sm:text-3xl">
                    02
                  </p>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Creativity
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#2A2076] sm:text-3xl">
                    03
                  </p>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Confidence
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/academics"
            className="group inline-flex items-center gap-2 rounded-md bg-[#2A2076] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#191155] hover:shadow-lg sm:text-base"
          >
            Explore Academics

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AcademicSection;