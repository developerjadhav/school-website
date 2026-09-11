import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Brain,
  Apple,
  Accessibility,
} from "lucide-react";

const wellbeingFeatures = [
  {
    icon: HeartHandshake,
    title: "Emotional Support",
    description:
      "We encourage students to express themselves, build confidence, and develop positive relationships in a caring environment.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    description:
      "Student safety is a priority, with a secure and supportive campus environment for children to learn with confidence.",
  },
  {
    icon: Users,
    title: "Positive Relationships",
    description:
      "We promote respect, kindness, teamwork, and healthy relationships among students and teachers.",
  },
  {
    icon: Brain,
    title: "Mental Well-being",
    description:
      "Students are encouraged to maintain a healthy balance between academics, activities, friendships, and personal development.",
  },
  {
    icon: Apple,
    title: "Healthy Lifestyle",
    description:
      "We encourage healthy habits and awareness about nutrition, physical activity, cleanliness, and personal well-being.",
  },
  {
    icon: Accessibility,
    title: "Inclusive Environment",
    description:
      "We strive to create an inclusive learning environment where every student feels respected, valued, and supported.",
  },
];

const StudentWellbeing = () => {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#2A2076]">
            Student Well-being
          </p>

          <h2 className="mb-5 text-3xl font-normal leading-tight text-[#2A2076] md:text-4xl">
            A Safe Place to Learn, Grow & Belong
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600">
            At JADHAV Public School, we believe that students thrive when they
            feel safe, respected, supported, and valued. Our approach focuses
            on the overall well-being of every child alongside academic growth.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wellbeingFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076] hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#2A2076]/10 transition-all duration-300 group-hover:bg-[#2A2076]">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-normal text-[#2A2076]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 rounded-3xl px-8 py-10 text-center md:px-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(217, 33, 87, 0.20) 0%, rgba(41, 31, 117, 0.20) 100%), #FFFFFF",
          }}>
          <h3 className="mb-3 text-2xl font-normal text-[#2A2076] md:text-3xl">
            Every Child Deserves to Feel Supported
          </h3>

          <p className="mx-auto max-w-3xl text-sm leading-6 text-[#2A2076]/80 md:text-base">
            We work towards creating a school environment where students can
            confidently discover their strengths, overcome challenges, and
            become responsible and compassionate individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentWellbeing;