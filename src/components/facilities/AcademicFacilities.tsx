import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  Library,
} from "lucide-react";

import classroomImage from "../../assets/facilities/classroom.jpeg";

const academicFacilities = [
  {
    title: "Modern Classrooms",
    description:
      "Comfortable and thoughtfully arranged classrooms designed to encourage focused and interactive learning.",
    icon: GraduationCap,
  },
  {
    title: "Library & Reading",
    description:
      "A learning space that encourages students to read, explore new ideas, and develop a habit of independent learning.",
    icon: Library,
  },
  {
    title: "Science Learning",
    description:
      "Practical learning opportunities that help students understand scientific concepts through exploration and observation.",
    icon: FlaskConical,
  },
  {
    title: "Learning Resources",
    description:
      "Educational resources that complement classroom teaching and support students in their academic development.",
    icon: BookOpen,
  },
];

const AcademicFacilities = () => {
  return (
    <section className="bg-[#f8f7fc] px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] p-[4px]">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={classroomImage}
                  alt="Classroom at JADHAV Public School"
                  className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[440px] lg:h-[540px]"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-5 -left-5 -z-0 h-24 w-24 rounded-full bg-[#D60D47]/10" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
              Academic Environment
            </p>

            <h2 className="font-[Cinzel] text-3xl font-semibold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              Spaces That Make
              <br className="hidden sm:block" />
              Learning Meaningful
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Our academic spaces are designed to provide students with a
              comfortable and engaging environment where they can focus,
              participate, ask questions, and develop a genuine interest in
              learning.
            </p>

            {/* Facility List */}
            <div className="mt-8 space-y-5">
              {academicFacilities.map((facility) => {
                const Icon = facility.icon;

                return (
                  <div
                    key={facility.title}
                    className="group flex gap-4"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2A2076]/10 text-[#2A2076] transition-all duration-300 group-hover:bg-[#2A2076] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-[Cinzel] text-lg font-semibold text-[#2A2076]">
                        {facility.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Accent */}
            <div className="mt-8 h-[3px] w-16 rounded-full bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicFacilities;