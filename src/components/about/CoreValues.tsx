import {
  Award,
  Brain,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const coreValues = [
  {
    title: "Excellence",
    description:
      "Encouraging every student to strive for their best and develop a passion for continuous learning.",
    icon: Award,
  },
  {
    title: "Integrity",
    description:
      "Building strong character through honesty, responsibility, and ethical values.",
    icon: ShieldCheck,
  },
  {
    title: "Discipline",
    description:
      "Developing self-discipline, positive habits, and respect for rules and responsibilities.",
    icon: Brain,
  },
  {
    title: "Respect",
    description:
      "Creating a culture where every student, teacher, and member of the community is valued.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation",
    description:
      "Encouraging curiosity, creativity, critical thinking, and openness to new ideas.",
    icon: Lightbulb,
  },
  {
    title: "Responsibility",
    description:
      "Preparing students to become responsible individuals who contribute positively to society.",
    icon: Users,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
            What Guides Us
          </p>

          <h2 className="font-[Cinzel] text-3xl font-semibold text-[#2A2076] sm:text-4xl">
            Our Core Values
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            The values that shape our learning environment and guide our
            students towards becoming confident and responsible individuals.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2A2076]/20 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10 text-[#2A2076] transition-all duration-300 group-hover:bg-[#2A2076] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-[Cinzel] text-xl font-semibold text-[#2A2076]">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-gray-600">
                  {value.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-[2px] w-0 bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;