const LocationMap = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-[#2A2076]">
            Find Us
          </h2>

          <p className="text-gray-600">
            Visit our school at our location.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl">
          <iframe
            // src="YOUR_GOOGLE_MAP_EMBED_URL"

            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8823304672264!2d73.90634187552864!3d18.579342982525624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c134e6c4ff8f%3A0xa810745cf9310798!2sPune%20International%20Airport!5e0!3m2!1sen!2sin!4v1788966743302!5m2!1sen!2sin"

            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location"
          />
        </div>

      </div>
    </section>
  );
};

export default LocationMap;