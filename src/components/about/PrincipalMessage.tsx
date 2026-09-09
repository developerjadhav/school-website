import { Quote } from "lucide-react";
import principalImage from "../../assets/about/principal.jpeg";

const PrincipalMessage = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D60D47]">
            From Our Leadership
          </p>

          <h2 className="font-[Cinzel] text-3xl font-semibold text-[#2A2076] sm:text-4xl">
            Principal's Message
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid overflow-hidden rounded-3xl bg-[#f8f7fc] md:grid-cols-[0.75fr_1.25fr]">

          {/* Principal Image */}
          <div className="relative min-h-[360px] md:min-h-[500px]">
            <img
              src={principalImage}
              alt="Principal of JADHAV Public School"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#291F75]/80 via-[#291F75]/10 to-transparent" />

            {/* Name */}
            <div className="absolute bottom-6 left-6 text-white md:bottom-8 md:left-8">
              <p className="text-xl font-semibold">
                Principal
              </p>

              <p className="mt-1 text-sm text-white/80">
                JADHAV Public School
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="relative flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16">

            {/* Quote Icon */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2076] text-white">
              <Quote size={22} />
            </div>

            <h3 className="mb-6 font-[Cinzel] text-2xl font-semibold leading-tight text-[#2A2076] sm:text-3xl">
              Education is the foundation
              <br className="hidden sm:block" />
              of a brighter tomorrow.
            </h3>

            <div className="space-y-4 text-base leading-7 text-gray-600">
              <p>
                At JADHAV Public School, we believe that every child is
                unique, capable, and full of possibilities. Our responsibility
                is to provide an environment where students feel encouraged to
                explore their potential and develop confidence in themselves.
              </p>

              <p>
                Education should not only prepare students for examinations,
                but also prepare them for life. We strive to nurture curiosity,
                creativity, discipline, compassion, and a strong sense of
                responsibility in every learner.
              </p>

              <p>
                Together with our dedicated teachers and supportive parents,
                we are committed to creating a learning community where every
                student has the opportunity to learn, grow, and succeed.
              </p>
            </div>

            {/* Signature / Designation */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="font-[Cinzel] text-lg font-semibold text-[#2A2076]">
                Principal
              </p>

              <p className="mt-1 text-sm text-gray-500">
                JADHAV Public School
              </p>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute right-0 top-0 h-full w-1 bg-[linear-gradient(180deg,#D60D47,#291F75)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;