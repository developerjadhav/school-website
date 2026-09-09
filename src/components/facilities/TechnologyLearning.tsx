import {
  Monitor,
  Wifi,
  FlaskConical,
  Lightbulb,
  Code2,
  BookOpen,
} from "lucide-react";

const technologyFeatures = [
  {
    icon: Monitor,
    title: "Digital Classrooms",
    description:
      "Technology-enabled classrooms help make lessons more interactive, visual, and engaging.",
  },
  {
    icon: Wifi,
    title: "Digital Connectivity",
    description:
      "Access to digital resources helps students explore information beyond traditional textbooks.",
  },
  {
    icon: FlaskConical,
    title: "Practical Learning",
    description:
      "Laboratory and practical activities allow students to connect classroom concepts with real-world applications.",
  },
  {
    icon: Code2,
    title: "Technology Skills",
    description:
      "Students are encouraged to develop digital awareness and technology skills that support their future learning.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description:
      "We encourage students to think creatively, solve problems, experiment, and develop new ideas.",
  },
  {
    icon: BookOpen,
    title: "Digital Resources",
    description:
      "Modern learning resources complement classroom teaching and help students learn at their own pace.",
  },
];

const TechnologyLearning = () => {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Top Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#2A2076]">
              Technology & Learning
            </p>

            <h2 className="mb-6 text-3xl font-normal leading-tight text-[#2A2076] md:text-4xl">
              Preparing Students for a Digital Future
            </h2>

            <p className="mb-5 leading-7 text-gray-600">
              Technology has become an important part of modern education.
              At JADHAV Public School, we aim to introduce students to
              technology in a meaningful way while keeping learning engaging,
              practical, and student-focused.
            </p>

            <p className="leading-7 text-gray-600">
              From digital learning resources to practical activities, our
              approach encourages curiosity, creativity, problem-solving, and
              responsible use of technology.
            </p>
          </div>

          {/* Right Technology Visual */}
          <div className="relative overflow-hidden rounded-3xl bg-[#2A2076] p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10" />

            <div className="relative">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                <Monitor
                  size={32}
                  strokeWidth={1.6}
                  className="text-[#2A2076]"
                />
              </div>

              <h3 className="mb-4 text-2xl font-normal text-white md:text-3xl">
                Learning Beyond the Classroom
              </h3>

              <p className="mb-8 leading-7 text-white/80">
                We combine traditional teaching with modern tools and
                resources to create a learning experience that helps students
                understand concepts, explore ideas, and develop practical
                skills.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <p className="text-sm text-white/70">Focus</p>
                  <p className="mt-1 text-lg text-white">Innovation</p>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <p className="text-sm text-white/70">Approach</p>
                  <p className="mt-1 text-lg text-white">Interactive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-normal text-[#2A2076] md:text-3xl">
              Our Learning Approach
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076] hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10 transition-colors duration-300 group-hover:bg-[#2A2076]">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h4 className="mb-2 text-lg font-normal text-[#2A2076]">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-6 text-gray-600">
                    {feature.description}
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

export default TechnologyLearning;