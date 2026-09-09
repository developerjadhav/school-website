import {
  BookOpen,
  FlaskConical,
  Monitor,
  Dumbbell,
  Bus,
  ShieldCheck,
  Utensils,
  Trees,
} from "lucide-react";

const facilities = [
  {
    icon: BookOpen,
    title: "Modern Library",
    description:
      "A well-equipped library with a wide collection of books, reference materials, and resources to encourage reading and learning.",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description:
      "Well-equipped laboratories that provide students with practical exposure and encourage scientific thinking.",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description:
      "Technology-enabled classrooms designed to make learning interactive, engaging, and easier to understand.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Fitness",
    description:
      "Dedicated spaces and facilities that encourage students to participate in sports, fitness activities, and teamwork.",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    description:
      "Safe and reliable transportation facilities designed to provide convenient travel for students.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description:
      "A secure campus environment with appropriate safety measures to ensure the well-being of every student.",
  },
  {
    icon: Utensils,
    title: "Cafeteria",
    description:
      "A clean and comfortable cafeteria providing students with a pleasant space for refreshments and meals.",
  },
  {
    icon: Trees,
    title: "Green Campus",
    description:
      "A spacious and green campus that provides students with a peaceful and refreshing environment for learning.",
  },
];

const FacilitiesGrid = () => {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#2A2076]">
            Our Facilities
          </p>

          <h2 className="mb-4 text-3xl font-normal text-[#2A2076] md:text-4xl">
            Everything Students Need to Thrive
          </h2>

          <p className="text-base leading-7 text-gray-600">
            We provide a supportive and well-equipped environment where
            students can learn, explore their interests, stay active, and
            develop essential life skills.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076] hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2A2076]/10 transition-colors duration-300 group-hover:bg-[#2A2076]">
                  <Icon
                    size={27}
                    strokeWidth={1.7}
                    className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-normal text-[#2A2076]">
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

export default FacilitiesGrid;