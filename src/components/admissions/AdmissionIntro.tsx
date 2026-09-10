import { HeartHandshake, Lightbulb, Users } from "lucide-react";

const AdmissionIntro = () => {
  return (
    <section className="bg-[#F7F6FC] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-base text-[#D92157]">
              Why Choose JADHAV Public School?
            </p>

            <h2 className="mb-6 text-3xl leading-tight text-[#2A2076] md:text-4xl lg:text-5xl">
              More Than Just
              <span className="block bg-gradient-to-r from-[#2A2076] to-[#D92157] bg-clip-text text-transparent">
                An Admission
              </span>
            </h2>

            <p className="mb-5 leading-7 text-gray-600">
              Choosing a school is one of the most important decisions a
              family makes. At JADHAV Public School, our admission process is
              designed to help families understand our educational approach
              while allowing us to understand every child's unique needs.
            </p>

            <p className="leading-7 text-gray-600">
              We aim to create a welcoming environment where students feel
              valued, supported, and encouraged to discover their strengths
              from the very beginning.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10">
                <HeartHandshake className="text-[#2A2076]" size={24} />
              </div>

              <h3 className="mb-2 text-lg text-[#2A2076]">
                Welcoming Environment
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                A warm and supportive atmosphere where every child feels
                comfortable and valued.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D92157]/10">
                <Lightbulb className="text-[#D92157]" size={24} />
              </div>

              <h3 className="mb-2 text-lg text-[#2A2076]">
                Child-Centred Learning
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Learning experiences that encourage curiosity, creativity,
                confidence, and independent thinking.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2076]/10">
                <Users className="text-[#2A2076]" size={24} />
              </div>

              <h3 className="mb-2 text-lg text-[#2A2076]">
                Strong Parent Partnership
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                We believe meaningful collaboration between parents, teachers,
                and students creates stronger learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionIntro;