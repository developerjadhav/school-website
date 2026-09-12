import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
  Palette,
  Trophy,
} from "lucide-react";

const subjects = [
  {
    icon: BookOpen,
    title: "Languages",
    description:
      "Developing reading, writing, comprehension, vocabulary, and effective communication skills.",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description:
      "Building logical thinking, numerical understanding, problem-solving, and analytical skills.",
  },
  {
    icon: FlaskConical,
    title: "Science",
    description:
      "Encouraging observation, experimentation, questioning, and understanding of the world around us.",
  },
  {
    icon: Globe2,
    title: "Social Studies",
    description:
      "Helping students understand society, history, geography, culture, and their responsibilities as citizens.",
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description:
      "Providing opportunities for creative expression through art, craft, music, and other activities.",
  },
  {
    icon: Trophy,
    title: "Physical Education",
    description:
      "Promoting fitness, coordination, teamwork, discipline, and an active and healthy lifestyle.",
  },
];

const CurriculumSubjects = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D92157]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
              Curriculum
            </span>

            <span className="h-px w-10 bg-[#D92157]" />
          </div>

          <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
            A Well-Rounded{" "}
            <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
              Learning Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Our academic programme brings together core subjects, creative
            activities, physical education, and opportunities for exploration
            to support the overall development of every student.
          </p>
        </div>

        {/* Subject Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#f8f7fc] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                {/* Decorative Number */}
                <span className="absolute right-5 top-3 font-[Cinzel,Palatino_Linotype,sans-serif] text-6xl font-bold text-[#2A2076]/5 transition-colors duration-300 group-hover:text-[#D92157]/10">
                  {String(subjects.indexOf(subject) + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:bg-[#2A2076]">
                  <Icon
                    size={27}
                    className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mt-6 text-xl font-bold text-[#2A2076]">
                    {subject.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {subject.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#D92157] to-[#291F75] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#2A2076]/10 bg-[#f8f7fc] p-6 sm:flex-row sm:items-center sm:p-7 lg:mt-14">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
            <Languages size={24} className="text-[#D92157]" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#2A2076]">
              Learning Across Multiple Dimensions
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">
              The curriculum is designed to balance academic learning with
              creativity, physical development, communication, and essential
              life skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumSubjects;