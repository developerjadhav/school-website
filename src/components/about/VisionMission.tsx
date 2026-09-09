const VisionMission = () => {
  return (
    <section className="bg-[#f8f7fc] px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
            What We Believe
          </p>

          <h2 className="font-[Cinzel] text-3xl font-semibold text-[#2A2076] sm:text-4xl">
            Our Vision & Mission
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            We are committed to creating an environment where students can
            learn with curiosity, grow with confidence, and become responsible
            individuals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Vision */}
          <div className="group rounded-2xl border border-[#2A2076]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2A2076] text-2xl text-white transition-transform duration-300 group-hover:scale-110">
              👁
            </div>

            <h3 className="mb-4 font-[Cinzel] text-2xl font-semibold text-[#2A2076]">
              Our Vision
            </h3>

            <p className="text-base leading-7 text-gray-600">
              To nurture confident, compassionate, and responsible learners
              who possess the knowledge, skills, and values to make a
              meaningful contribution to society and build a better future.
            </p>
          </div>

          {/* Mission */}
          <div className="group rounded-2xl border border-[#D60D47]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] text-2xl text-white transition-transform duration-300 group-hover:scale-110">
              🎯
            </div>

            <h3 className="mb-4 font-[Cinzel] text-2xl font-semibold text-[#2A2076]">
              Our Mission
            </h3>

            <p className="text-base leading-7 text-gray-600">
              To provide a safe, inclusive, and engaging learning environment
              that promotes academic excellence, creativity, discipline,
              critical thinking, and holistic development in every student.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;