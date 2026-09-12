import {
  Award,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Holistic Education",
    description:
      "We focus on academic growth along with communication, creativity, values, and essential life skills.",
  },
  {
    icon: Lightbulb,
    title: "Learning with Curiosity",
    description:
      "Students are encouraged to ask questions, explore ideas, think independently, and discover their potential.",
  },
  {
    icon: HeartHandshake,
    title: "Student Wellbeing",
    description:
      "We strive to create a safe, supportive, and welcoming environment where every child feels valued.",
  },
  {
    icon: Award,
    title: "Excellence & Values",
    description:
      "We nurture discipline, responsibility, confidence, integrity, and a commitment to achieving one's best.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7fc] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-20 h-48 w-48 rounded-full bg-[#D92157]/5 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-[#2A2076]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D92157]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
              Why Choose Us
            </span>

            <span className="h-px w-10 bg-[#D92157]" />
          </div>

          <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
            Where Every Child Gets the{" "}
            <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
              Opportunity to Grow
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We believe that every child is unique. Our approach combines
            meaningful learning, strong values, and a nurturing environment
            to help students become confident individuals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-[#D92157] to-[#2A2076] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2A2076]/10 transition-all duration-300 group-hover:bg-[#2A2076]">
                  <Icon
                    size={28}
                    className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-[#2A2076]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>

                {/* Small Arrow */}
                <div className="mt-6 flex items-center text-sm font-semibold text-[#D92157]">
                  <span className="mr-2 h-px w-6 bg-[#D92157] transition-all duration-300 group-hover:w-10" />

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2A2076] transition-colors hover:text-[#D92157] sm:text-base"
          >
            Discover What Makes Us Different

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

export default WhyChooseUs;