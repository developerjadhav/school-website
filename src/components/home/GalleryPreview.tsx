import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

// Reuse your existing gallery data here.
// Replace these paths with the same images used by your Gallery page.
const galleryImages = [
  {
    src: "/src/assets/gallery/school2.jpg",
    alt: "Students at JADHAV Public School",
  },
  {
    src: "/src/assets/gallery/school4.jpg",
    alt: "School learning activities",
  },
  {
    src: "/src/assets/gallery/school7.webp",
    alt: "Students participating in activities",
  },
  {
    src: "/src/assets/gallery/school6.jpeg",
    alt: "School campus",
  },
  {
    src: "/src/assets/gallery/school5.jpeg",
    alt: "Students enjoying school activities",
  },
];

const GalleryPreview = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D92157]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
                Life at JADHAV
              </span>
            </div>

            <h2 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-3xl font-bold leading-tight text-[#2A2076] sm:text-4xl lg:text-5xl">
              Moments That Make{" "}
              <span className="bg-gradient-to-r from-[#D92157] to-[#2A2076] bg-clip-text text-transparent">
                School Special
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              From classroom learning to activities and special moments,
              every experience contributes to a memorable school journey.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/gallery"
            className="group hidden items-center gap-2 whitespace-nowrap rounded-md bg-[#2A2076] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#191155] hover:shadow-lg md:inline-flex"
          >
            View Gallery

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:grid-rows-2">

          {/* Featured Image */}
          <Link
            to="/gallery"
            className="group relative min-h-[300px] overflow-hidden rounded-2xl md:min-h-[360px] lg:col-span-2 lg:row-span-2"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                <Images size={20} />
              </div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Explore Life at JADHAV
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                Discover the experiences, activities, and memories that shape
                our students' school journey.
              </p>
            </div>
          </Link>

          {/* Smaller Images */}
          {galleryImages.slice(1).map((image) => (
            <Link
              key={image.src}
              to="/gallery"
              className="group relative min-h-[220px] overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />

              <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2A2076] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                <ArrowRight size={17} />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-md bg-[#2A2076] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#191155] hover:shadow-lg"
          >
            View Gallery

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;