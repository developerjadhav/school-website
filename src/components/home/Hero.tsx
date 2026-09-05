const Hero = () => {
  return (
    <section className="bg-blue-700 px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-lg">
          Welcome to
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          JADHAV Public School
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Empowering young minds through knowledge,
          discipline and excellence.
        </p>

        <div className="flex justify-center gap-4">
          <button className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black">
            Admissions
          </button>

          <button className="rounded-lg border border-white px-6 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;