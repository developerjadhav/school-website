import { BookOpen, Lightbulb, Target } from "lucide-react";

const philosophyPoints = [
  {
    icon: Lightbulb,
    title: "Learn with Curiosity",
    description:
      "We encourage students to ask questions, explore ideas, and develop a genuine interest in learning.",
  },
  {
    icon: BookOpen,
    title: "Understand, Don't Memorise",
    description:
      "Our approach focuses on conceptual understanding so students can apply their knowledge beyond the classroom.",
  },
  {
    icon: Target,
    title: "Grow with Purpose",
    description:
      "Students are guided to build strong academic foundations while developing confidence, discipline, and responsibility.",
  },
];

const AcademicPhilosophy = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D92157]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
              Our Academic Philosophy
            </span>

            <span className="h-px w-10 bg-[#D92157]" />
          </div>

          <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
            Building a{" "}
            <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
              Strong Foundation
            </span>{" "}
            for Lifelong Learning
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            At JADHAV Public School, education is more than completing a
            syllabus. We strive to create meaningful learning experiences that
            help students understand concepts, develop confidence, and become
            enthusiastic lifelong learners.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {philosophyPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-[#f8f7fc] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:bg-[#2A2076]">
                  <Icon
                    size={27}
                    className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#2A2076]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 rounded-2xl border border-[#2A2076]/10 bg-gradient-to-r from-[#D92157]/5 to-[#291F75]/5 p-6 text-center sm:p-8 lg:mt-16">
          <p className="mx-auto max-w-4xl text-base font-medium leading-7 text-[#2A2076] sm:text-lg">
            "Our goal is to help every student discover the joy of learning
            while developing the knowledge, skills, and character needed for
            the future."
          </p>
        </div>

      </div>
    </section>
  );
};

export default AcademicPhilosophy;