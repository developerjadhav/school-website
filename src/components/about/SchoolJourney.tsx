import {
  Building2,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "The Beginning",
    description:
      "JADHAV Public School was established with a vision to provide quality education in a nurturing, disciplined, and student-focused environment.",
    icon: Building2,
  },
  {
    year: "2024",
    title: "Growing Together",
    description:
      "The school continued to grow by strengthening its academic approach, developing a supportive learning environment, and encouraging students to participate beyond the classroom.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Learning & Excellence",
    description:
      "With a growing community of students and educators, the school focused on academic development, creativity, discipline, and the overall growth of every learner.",
    icon: GraduationCap,
  },
  {
    year: "2026",
    title: "Looking Ahead",
    description:
      "JADHAV Public School continues to move forward with a commitment to innovation, holistic development, and preparing students for a confident and successful future.",
    icon: Sparkles,
  },
];

const SchoolJourney = () => {
  return (
    <section className="bg-[#f8f7fc] px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
            Our Journey
          </p>

          <h2 className="font-[Cinzel] text-3xl font-semibold text-[#2A2076] sm:text-4xl">
            Growing With Purpose
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            From our beginning to our vision for the future, every step of
            our journey is shaped by our commitment to students and education.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line - Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#D60D47] to-[#291F75] md:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className="relative md:grid md:min-h-[220px] md:grid-cols-2"
                >

                  {/* Content */}
                  <div
                    className={`flex ${
                      isLeft
                        ? "md:justify-end md:pr-16"
                        : "md:col-start-2 md:justify-start md:pl-16"
                    }`}
                  >
                    <div
                      className={`w-full max-w-xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076]/20 hover:shadow-lg md:p-8 ${
                        isLeft ? "" : ""
                      }`}
                    >
                      {/* Year */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="font-[Cinzel] text-2xl font-semibold text-[#D60D47]">
                          {milestone.year}
                        </span>

                        <div className="h-px flex-1 bg-gray-200" />
                      </div>

                      <h3 className="mb-3 font-[Cinzel] text-xl font-semibold text-[#2A2076] sm:text-2xl">
                        {milestone.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#f8f7fc] bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] text-white shadow-md">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="mb-4 flex items-center gap-4 md:hidden">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] text-white shadow-md">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-[#D60D47] to-[#291F75]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)]" />

          <p className="font-[Cinzel] text-xl font-medium leading-8 text-[#2A2076] sm:text-2xl">
            "The journey has just begun, and the future is full of
            possibilities."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SchoolJourney;