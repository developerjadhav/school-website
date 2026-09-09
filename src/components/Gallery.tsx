import { useState } from "react";

const galleryImages = Object.values(
  import.meta.glob(
    "../assets/gallery/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  )
) as string[];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + 3);
  };

  const displayedImages = galleryImages.slice(0, visibleImages);

  return (
    <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="mb-5 text-4xl font-bold text-[#2A2076] md:text-5xl">
            Gallery
          </h1>

          <p className="text-base leading-7 text-gray-600 md:text-lg">
            Explore memorable moments from our school activities, events,
            celebrations, and everyday learning experiences. Take a glimpse
            into the vibrant life of our students and school community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedImages.map((image, index) => (
            <div
              key={image}
              className="group overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`School gallery ${index + 1}`}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 md:h-72"
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleImages < galleryImages.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="rounded-md border border-[#2A2076] px-8 py-3 font-medium text-[#2A2076] transition hover:bg-[#2A2076] hover:text-white"
            >
              Load More Images
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;