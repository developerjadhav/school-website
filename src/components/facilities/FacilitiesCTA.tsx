import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FacilitiesCTA = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-center md:px-16 md:py-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(217, 33, 87, 0.20) 0%, rgba(41, 31, 117, 0.20) 100%), #FFFFFF",
          }}
        >
          {/* Decorative Circles */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2A2076]/10" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#D92157]/10" />

          <div className="relative mx-auto max-w-3xl">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#2A2076]/10">
              <MessageCircle
                size={27}
                strokeWidth={1.7}
                className="text-[#2A2076]"
              />
            </div>

            {/* Heading */}
            <h2 className="mb-5 text-3xl font-normal leading-tight text-[#2A2076] md:text-4xl">
              Come and Experience Our Learning Environment
            </h2>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-[#2A2076]/80">
              Discover a school environment designed to support academic
              learning, creativity, physical development, and the overall
              well-being of every student.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#2A2076] px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-[#D92157]"
              >
                Contact Us

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/admissions"
                className="inline-flex items-center justify-center rounded-lg border border-[#2A2076] px-6 py-3 text-sm text-[#2A2076] transition-all duration-300 hover:bg-[#2A2076] hover:text-white"
              >
                Explore Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesCTA;