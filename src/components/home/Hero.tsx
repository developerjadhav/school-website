import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      {/* Inset gradient border */}
      <div className="p-[10px]">
        <div className="rounded-2xl bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)] p-[4px]">
          <div className="rounded-[11px] bg-white px-6 py-24 text-center">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-lg font-medium text-[#2A2076]">
                Welcome to
              </p>

              <h1 className="mb-6 bg-gradient-to-r from-[#D92157] to-[#291F75] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                JADHAV Public School
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg text-[#2A2076]">
                Empowering young minds through knowledge,
                discipline and excellence.
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => navigate("/admissions")}
                  className="rounded-lg border border-[#2A2076] bg-[#2A2076] px-6 py-3 text-white hover:bg-white hover:text-[#2A2076]"
                >
                  Admissions
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="rounded-lg border border-[#2A2076] px-6 py-3 text-[#2A2076] hover:bg-[#2A2076] hover:text-white"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actual bottom gradient border */}
      <div className="h-[1px] w-full bg-[linear-gradient(270deg,#291f75_-13.59%,#d60d47_100.48%)]" />
    </section>
  );
};

export default Hero;