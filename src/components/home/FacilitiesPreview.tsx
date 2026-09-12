import {
  ArrowRight,
  Dumbbell,
  Monitor,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const facilities = [
  {
    icon: Monitor,
    title: "Technology & Learning",
    description:
      "Technology-enabled learning spaces that make lessons more engaging, interactive, and meaningful.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Activities",
    description:
      "Opportunities for students to stay active, develop teamwork, and discover their interests beyond academics.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    description:
      "A caring and secure environment where students can learn, participate, and grow with confidence.",
  },
  {
    icon: Sparkles,
    title: "Student Wellbeing",
    description:
      "A supportive atmosphere that gives importance to students' emotional, social, and overall wellbeing.",
  },
];

const FacilitiesPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7fc] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* Decorative Background */}
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#D92157]/5 blur-3xl" />
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#2A2076]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D92157]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                Our Facilities
              </span>
            </div>

            <h2 className="max-w-3xl font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              Spaces Designed for{" "}
              <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
                Learning & Growth
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              From learning spaces to activities that support physical and
              personal development, we aim to provide an environment where
              students can explore their abilities and grow with confidence.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/facilities"
            className="group hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#2A2076] transition-colors hover:text-[#D92157] lg:inline-flex"
          >
            View All Facilities

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Facility Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-bold text-[#2A2076]/5 transition-colors duration-300 group-hover:text-[#D92157]/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#2A2076]/10 transition-all duration-300 group-hover:bg-[#2A2076]">
                  <Icon
                    size={27}
                    className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-xl font-bold text-[#2A2076]">
                  {facility.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-gray-600">
                  {facility.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-8 rounded-full bg-gradient-to-r from-[#D92157] to-[#2A2076] transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 lg:hidden">
          <Link
            to="/facilities"
            className="group inline-flex items-center gap-2 rounded-md bg-[#2A2076] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#191155] hover:shadow-lg sm:text-base"
          >
            View All Facilities

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

export default FacilitiesPreview;