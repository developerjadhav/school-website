import schoolImage from "../../assets/about/school-campus.jpg";

const OurStory = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] p-[4px]">
              <div className="overflow-hidden rounded-[13px]">
                <img
                  src={schoolImage}
                  alt="JADHAV Public School campus"
                  className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[380px] md:h-[420px]"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-0 h-20 w-20 rounded-full bg-[#2A2076]/10" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
              Our Story
            </p>

            <h2 className="mb-6 font-[Cinzel] text-3xl font-semibold leading-tight text-[#2A2076] sm:text-4xl">
              Nurturing Minds.
              <br />
              Building Futures.
            </h2>

            <div className="space-y-4 text-base leading-7 text-gray-600">
              <p>
                JADHAV Public School is committed to creating a learning
                environment where every student is encouraged to discover,
                explore, and reach their full potential.
              </p>

              <p>
                We believe that education goes beyond textbooks and
                examinations. True education is about developing knowledge,
                confidence, character, creativity, and a strong sense of
                responsibility.
              </p>

              <p>
                Through a balanced approach to academics, activities,
                technology, and values, we strive to prepare our students to
                face the opportunities and challenges of tomorrow with
                confidence.
              </p>
            </div>

            {/* Highlight */}
            <div className="mt-8 border-l-4 border-[#2A2076] pl-5">
              <p className="text-lg font-medium italic text-[#2A2076]">
                "Every child has the potential to shine. Our role is to help
                them discover it."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;