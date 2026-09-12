import {
  Beaker,
  Brain,
  MessageCircle,
  Users,
} from "lucide-react";

const learningApproaches = [
  {
    icon: Brain,
    title: "Concept-Based Learning",
    description:
      "Students are encouraged to understand the ideas behind what they learn, helping them build strong foundations instead of relying only on memorisation.",
  },
  {
    icon: Beaker,
    title: "Experiential Learning",
    description:
      "Activities, demonstrations, experiments, and real-world examples help students connect classroom concepts with practical experiences.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Group activities and peer interaction help students learn from one another while developing teamwork, cooperation, and respect for different perspectives.",
  },
  {
    icon: MessageCircle,
    title: "Communication & Expression",
    description:
      "Students are given opportunities to express their thoughts, ask questions, participate in discussions, and communicate with confidence.",
  },
];

const LearningApproach = () => {
  return (
    <section className="bg-[#f8f7fc] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D92157]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                How We Learn
              </span>
            </div>

            <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              Learning That Goes{" "}
              <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
                Beyond Textbooks
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We believe students learn best when they are actively involved in
            the learning process. Our approach combines strong academic
            foundations with exploration, interaction, practical experiences,
            and opportunities for self-expression.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* Left Visual */}
          <div
            className="relative overflow-hidden rounded-3xl p-[2px] shadow-lg"
            style={{
              background:
                "linear-gradient(90deg, #D92157 0%, #291F75 100%)",
            }}
          >
            <div
              className="relative flex min-h-[430px] h-full flex-col justify-between overflow-hidden rounded-[1.4rem] p-7 sm:p-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(217, 33, 87, 0.2) 0%, rgba(41, 31, 117, 0.2) 100%), rgb(255, 255, 255)",
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#2A2076]/10" />

              <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full border border-[#D92157]/10" />

              <div className="absolute right-12 top-24 h-16 w-16 rotate-12 rounded-xl border border-[#D92157]/10" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A2076]/10">
                  <Brain size={32} className="text-[#2A2076]" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                  Our Approach
                </p>

                <h3 className="mt-3 max-w-md font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl">
                  Encouraging Students to Think, Explore & Create
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                  Every classroom is an opportunity to develop knowledge,
                  curiosity, confidence, and the ability to think independently.
                </p>
              </div>

              {/* Bottom Stats */}
              <div className="relative z-10 mt-10 grid grid-cols-3 gap-3 border-t border-[#2A2076]/10 pt-6">
                <div>
                  <p className="text-2xl font-bold text-[#2A2076] sm:text-3xl">
                    01
                  </p>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Explore
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#2A2076] sm:text-3xl">
                    02
                  </p>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Understand
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#2A2076] sm:text-3xl">
                    03
                  </p>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Apply
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Learning Methods */}
          <div className="grid gap-5 sm:grid-cols-2">
            {learningApproaches.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076]/10 hover:shadow-xl sm:p-7"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10 transition-all duration-300 group-hover:bg-[#2A2076]">
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
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningApproach;