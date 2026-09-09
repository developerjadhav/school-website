import {
  BookOpen,
  GraduationCap,
  Heart,
  Lightbulb,
} from "lucide-react";

const reasons = [
  {
    title: "Student-Centered Learning",
    description:
      "We focus on understanding every student's strengths, interests, and learning needs to help them grow with confidence.",
    icon: GraduationCap,
  },
  {
    title: "Holistic Development",
    description:
      "Our approach goes beyond academics by encouraging creativity, communication, sports, and essential life skills.",
    icon: Heart,
  },
  {
    title: "Strong Academic Foundation",
    description:
      "We aim to build strong fundamentals while encouraging curiosity, critical thinking, and a genuine love for learning.",
    icon: BookOpen,
  },
  {
    title: "Future-Ready Education",
    description:
      "Students are encouraged to think creatively, adapt to change, and develop the skills needed for tomorrow's world.",
    icon: Lightbulb,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f8f7fc] px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Left Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
              Why JADHAV Public School
            </p>

            <h2 className="font-[Cinzel] text-3xl font-semibold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              A Place Where
              <br />
              Every Child
              <br />
              Can Grow
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
              We strive to create an environment where students feel
              encouraged to learn, confident to express themselves, and
              inspired to achieve their goals.
            </p>

            <div className="mt-8 h-[4px] w-20 rounded-full bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)]" />
          </div>

          {/* Right Features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076]/20 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10 text-[#2A2076] transition-all duration-300 group-hover:bg-[#2A2076] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 font-[Cinzel] text-lg font-semibold text-[#2A2076]">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-600">
                    {reason.description}
                  </p>

                  {/* Hover Accent */}
                  <div className="mt-5 h-[2px] w-0 rounded-full bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;