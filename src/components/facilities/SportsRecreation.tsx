import {
  Activity,
  Dumbbell,
  Trophy,
  Users,
} from "lucide-react";

import sportsImage from "../../assets/facilities/sports.jpeg";

const sportsFacilities = [
  {
    title: "Outdoor Activities",
    description:
      "Open spaces that encourage students to stay active, enjoy the outdoors, and develop healthy habits.",
    icon: Activity,
  },
  {
    title: "Sports & Fitness",
    description:
      "Opportunities for physical activity that help students develop strength, coordination, and fitness.",
    icon: Dumbbell,
  },
  {
    title: "Team Spirit",
    description:
      "Sports and group activities encourage teamwork, communication, cooperation, and mutual respect.",
    icon: Users,
  },
  {
    title: "Participation & Achievement",
    description:
      "Students are encouraged to participate actively, discover their interests, and develop a positive competitive spirit.",
    icon: Trophy,
  },
];

const SportsRecreation = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
              Sports & Recreation
            </p>

            <h2 className="font-[Cinzel] text-3xl font-semibold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              Learn, Play,
              <br className="hidden sm:block" />
              Grow Together
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We believe that physical activity plays an important role in
              the overall development of students. Sports and recreational
              activities provide opportunities to stay active, build
              friendships, and learn the importance of teamwork and
              perseverance.
            </p>

            {/* Facility List */}
            <div className="mt-8 space-y-5">
              {sportsFacilities.map((facility) => {
                const Icon = facility.icon;

                return (
                  <div
                    key={facility.title}
                    className="group flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D60D47]/10 text-[#D60D47] transition-all duration-300 group-hover:bg-[#D60D47] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

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

            <div className="mt-8 h-[3px] w-16 rounded-full bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)]" />
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-3xl bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] p-[4px]">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={sportsImage}
                  alt="Sports and recreation at JADHAV Public School"
                  className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[440px] lg:h-[540px]"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-5 -right-5 -z-0 h-24 w-24 rounded-full bg-[#2A2076]/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsRecreation;