import {
  Brain,
  Lightbulb,
  MessageCircle,
  Monitor,
  Puzzle,
  Users,
} from "lucide-react";

const futureSkills = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "Encouraging students to analyse information, ask meaningful questions, and develop independent thinking.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Helping students explore ideas, experiment with possibilities, and find creative ways to approach challenges.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Building confidence in expressing ideas clearly through speaking, writing, discussions, and presentations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Developing teamwork and cooperation through group activities, projects, and shared learning experiences.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description:
      "Helping students approach challenges logically, consider different possibilities, and work towards practical solutions.",
  },
  {
    icon: Monitor,
    title: "Digital Awareness",
    description:
      "Encouraging responsible and meaningful engagement with technology as part of modern learning.",
  },
];

const FutureSkills = () => {
  return (
    <section className="bg-[#f8f7fc] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D92157]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
              Future-Ready Learning
            </span>

            <span className="h-px w-10 bg-[#D92157]" />
          </div>

          <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
            Skills That Prepare Students{" "}
            <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
              for Tomorrow
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Academic knowledge provides the foundation. We also aim to develop
            the thinking, communication, creativity, and collaborative skills
            students need to confidently navigate an evolving world.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* Skills Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {futureSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8f7fc] transition-all duration-300 group-hover:bg-[#2A2076]">
                      <Icon
                        size={24}
                        className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <span className="text-xs font-bold tracking-wider text-[#D92157]/40">
                      SKILL
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2A2076] sm:text-xl">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {skill.description}
                  </p>

                  {/* Hover Accent */}
                  <div className="mt-5 h-1 w-8 rounded-full bg-gradient-to-r from-[#D92157] to-[#291F75] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>

          {/* Right Visual */}
          <div
            className="relative overflow-hidden rounded-3xl p-[2px] shadow-xl"
            style={{
              background:
                "linear-gradient(90deg, #D92157 0%, #291F75 100%)",
            }}
          >
            <div
              className="relative flex min-h-[500px] h-full flex-col justify-between overflow-hidden rounded-[1.4rem] p-7 sm:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(217, 33, 87, 0.2) 0%, rgba(41, 31, 117, 0.2) 100%), rgb(255, 255, 255)",
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#2A2076]/10" />

              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-[#D92157]/10" />

              <div className="absolute right-14 top-32 h-16 w-16 rotate-45 rounded-2xl border border-[#D92157]/10" />

              <div className="absolute bottom-32 right-20 h-10 w-10 rounded-full bg-[#2A2076]/5" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A2076]/10">
                  <Brain size={32} className="text-[#2A2076]" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                  Beyond Academics
                </p>

                <h3 className="mt-3 max-w-md font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl">
                  Building Thinkers, Creators & Confident Learners
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                  Our aim is to give students more than information. We want
                  them to develop the confidence and skills to think
                  independently, work with others, and approach new challenges
                  with curiosity.
                </p>
              </div>

              {/* Bottom Skill Flow */}
              <div className="relative z-10 mt-10">
                <div className="grid grid-cols-3 gap-3 border-t border-[#2A2076]/10 pt-6">
                  <div>
                    <p className="font-[Cinzel,Palatino_Linotype,sans-serif] text-xl font-bold text-[#2A2076] sm:text-2xl">
                      Think
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Independently
                    </p>
                  </div>

                  <div>
                    <p className="font-[Cinzel,Palatino_Linotype,sans-serif] text-xl font-bold text-[#2A2076] sm:text-2xl">
                      Create
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Confidently
                    </p>
                  </div>

                  <div>
                    <p className="font-[Cinzel,Palatino_Linotype,sans-serif] text-xl font-bold text-[#2A2076] sm:text-2xl">
                      Grow
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Continuously
                    </p>
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

export default FutureSkills;