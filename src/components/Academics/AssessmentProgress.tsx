import {
  BarChart3,
  CheckCircle2,
  MessageSquareText,
  TrendingUp,
} from "lucide-react";

const assessmentPoints = [
  {
    icon: CheckCircle2,
    title: "Understanding & Application",
    description:
      "Students are encouraged to demonstrate their understanding of concepts and apply their learning in meaningful situations.",
  },
  {
    icon: MessageSquareText,
    title: "Feedback & Guidance",
    description:
      "Regular feedback helps students recognise their strengths, understand areas for improvement, and move forward with confidence.",
  },
  {
    icon: BarChart3,
    title: "Continuous Progress",
    description:
      "Student development is viewed as an ongoing journey, with attention given to academic learning as well as participation and overall growth.",
  },
  {
    icon: TrendingUp,
    title: "Encouraging Improvement",
    description:
      "We help students set meaningful learning goals and develop the confidence to keep improving through effort and practice.",
  },
];

const AssessmentProgress = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D92157]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
              Assessment & Progress
            </span>

            <span className="h-px w-10 bg-[#D92157]" />
          </div>

          <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
            Measuring Growth,{" "}
            <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
              Encouraging Progress
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Assessment is an important part of the learning journey. We aim to
            use assessment and feedback to understand student progress,
            strengthen learning, and encourage continuous improvement.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          {/* Left Visual */}
          <div
            className="relative overflow-hidden rounded-3xl p-[2px] shadow-lg"
            style={{
              background:
                "linear-gradient(90deg, #D92157 0%, #291F75 100%)",
            }}
          >
            <div
              className="relative flex min-h-[440px] h-full flex-col justify-between overflow-hidden rounded-[1.4rem] p-7 sm:p-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(217, 33, 87, 0.2) 0%, rgba(41, 31, 117, 0.2) 100%), rgb(255, 255, 255)",
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#2A2076]/10" />

              <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full border border-[#D92157]/10" />

              <div className="absolute right-10 top-28 h-16 w-16 rotate-12 rounded-2xl border border-[#2A2076]/10" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A2076]/10">
                  <BarChart3 size={32} className="text-[#2A2076]" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                  Student Growth
                </p>

                <h3 className="mt-3 max-w-md font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl">
                  Every Step Forward Matters
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                  We believe meaningful progress comes from understanding
                  where a student is today and supporting them in taking the
                  next step.
                </p>
              </div>

              {/* Progress Flow */}
              <div className="relative z-10 mt-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2A2076]">
                    Learn
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-[#D92157] to-[#291F75]" />

                  <span className="px-3 text-xs font-semibold uppercase tracking-wider text-[#2A2076]">
                    Reflect
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-[#D92157] to-[#291F75]" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2A2076]">
                    Improve
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid gap-5 sm:grid-cols-2">
            {assessmentPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-[#f8f7fc] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:bg-[#2A2076]">
                    <Icon
                      size={24}
                      className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2A2076]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 rounded-2xl border border-[#2A2076]/10 bg-[#f8f7fc] px-6 py-7 text-center sm:px-10 lg:mt-14">
          <p className="mx-auto max-w-4xl text-base font-medium leading-7 text-[#2A2076] sm:text-lg">
            Assessment should not only measure what students know — it should
            help them understand how they can learn, grow, and improve.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AssessmentProgress;