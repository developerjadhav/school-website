import {
  Palette,
  Trophy,
  FlaskConical,
  Users,
  ArrowUpRight,
} from "lucide-react";

const activities = [
  {
    number: "01",
    icon: Trophy,
    title: "Sports & Physical Activities",
    description:
      "Encouraging teamwork, discipline, fitness, confidence, and a healthy competitive spirit through sports and physical activities.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Arts & Creative Expression",
    description:
      "Providing opportunities for students to express their creativity through art, music, cultural activities, and creative projects.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Projects & Exploration",
    description:
      "Students get opportunities to explore ideas, work on projects, experiment, and connect classroom learning with practical experiences.",
  },
  {
    number: "04",
    icon: Users,
    title: "Collaborative Activities",
    description:
      "Group activities and school events help students develop communication, leadership, cooperation, and interpersonal skills.",
  },
];

const BeyondTheClassroom = () => {
  return (
    <section className="overflow-hidden bg-[#f8f7fc] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D92157]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                Beyond the Classroom
              </span>
            </div>

            <h2 className="max-w-3xl font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              Learning Happens{" "}
              <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
                Everywhere
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Education extends beyond the classroom. Through activities,
            projects, sports, creativity, and collaboration, students discover
            new interests and develop skills that complement their academic
            learning.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* Left Visual Panel */}
          <div
            className="relative overflow-hidden rounded-3xl p-[2px] shadow-lg"
            style={{
              background:
                "linear-gradient(90deg, #D92157 0%, #291F75 100%)",
            }}
          >
            <div
              className="relative flex min-h-[520px] h-full flex-col justify-between overflow-hidden rounded-[1.4rem] p-7 sm:p-10"
              style={{
                background:
                  "linear-gradient(145deg, rgba(217, 33, 87, 0.16) 0%, rgba(41, 31, 117, 0.16) 100%), rgb(255, 255, 255)",
              }}
            >
              {/* Decorative Circle */}
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#2A2076]/10" />

              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-[#D92157]/10" />

              {/* Decorative Shapes */}
              <div className="absolute right-12 top-32 h-14 w-14 rotate-45 rounded-xl border border-[#D92157]/10" />

              <div className="absolute bottom-28 right-20 h-8 w-8 rounded-full bg-[#2A2076]/5" />

              {/* Top Label */}
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A2076]/10">
                  <Trophy size={32} className="text-[#2A2076]" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                  Holistic Development
                </p>

                <h3 className="mt-3 max-w-md font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl">
                  Discover. Participate. Grow.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                  We encourage students to participate in experiences that help
                  them discover their strengths, develop confidence, and enjoy
                  learning beyond traditional academics.
                </p>
              </div>

              {/* Bottom Statement */}
              <div className="relative z-10 mt-10 border-t border-[#2A2076]/10 pt-6">
                <p className="text-sm font-semibold text-[#2A2076]">
                  Academic growth is only one part of a student's journey.
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Every experience can become an opportunity to learn something
                  new.
                </p>
              </div>
            </div>
          </div>

          {/* Right Activity List */}
          <div className="divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white px-6 sm:px-8">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.number}
                  className="group py-7 first:pt-8 last:pb-8"
                >
                  <div className="flex gap-5">

                    {/* Number */}
                    <div className="shrink-0">
                      <span className="font-[Cinzel,Palatino_Linotype,sans-serif] text-sm font-bold text-[#D92157]">
                        {activity.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f8f7fc] transition-all duration-300 group-hover:bg-[#2A2076]">
                            <Icon
                              size={20}
                              className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                            />
                          </div>

                          <h3 className="text-lg font-bold text-[#2A2076] sm:text-xl">
                            {activity.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          size={20}
                          className="mt-1 shrink-0 text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D92157]"
                        />
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheClassroom;