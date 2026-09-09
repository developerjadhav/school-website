import {
  BookOpen,
  Dumbbell,
  FlaskConical,
  Monitor,
  ShieldCheck,
  Users,
} from "lucide-react";

const facilities = [
  {
    title: "Modern Classrooms",
    description: "Comfortable spaces designed for focused and engaging learning.",
    icon: BookOpen,
  },
  {
    title: "Science Facilities",
    description: "Learning spaces that encourage practical exploration and discovery.",
    icon: FlaskConical,
  },
  {
    title: "Technology",
    description: "Technology-enabled learning to support modern education.",
    icon: Monitor,
  },
  {
    title: "Sports & Recreation",
    description: "Spaces that encourage physical activity, teamwork, and fitness.",
    icon: Dumbbell,
  },
  {
    title: "Student Wellbeing",
    description: "A safe and supportive environment where students can grow confidently.",
    icon: ShieldCheck,
  },
  {
    title: "Activity Spaces",
    description: "Dedicated opportunities for creativity, collaboration, and expression.",
    icon: Users,
  },
];

const FacilityHighlights = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
            At a Glance
          </p>

          <h2 className="font-[Cinzel] text-3xl font-semibold text-[#2A2076] sm:text-4xl">
            Facilities That Support Growth
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Every space at JADHAV Public School is intended to create a
            positive environment where students can learn, explore, and grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076]/20 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10 text-[#2A2076] transition-all duration-300 group-hover:bg-[#2A2076] group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mb-2 font-[Cinzel] text-lg font-semibold text-[#2A2076]">
                  {facility.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FacilityHighlights;