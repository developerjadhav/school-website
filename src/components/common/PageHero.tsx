import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: string;
  eyebrow?: string;
  parentBreadcrumb?: string;
  parentBreadcrumbPath?: string;
}

const PageHero = ({
  title,
  description,
  breadcrumb,
  eyebrow = "JADHAV Public School",
  parentBreadcrumb,
  parentBreadcrumbPath,
}: PageHeroProps) => {
  return (
    <section
      className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8 lg:pb-16 lg:pt-24"
      style={{
        background:
          "linear-gradient(90deg, rgba(217, 33, 87, 0.2) 0%, rgba(41, 31, 117, 0.2) 100%), rgb(255, 255, 255)",
      }}
    >
      {/* Bubble Design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large bubbles */}
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#D92157]/15 bg-white/30" />

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#2A2076]/15 bg-white/25" />

        <div className="absolute -bottom-32 left-[28%] h-72 w-72 rounded-full border border-[#D92157]/15 bg-white/25" />

        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full border border-[#2A2076]/15 bg-white/30" />

        {/* Medium bubbles */}
        <div className="absolute left-[18%] top-8 h-20 w-20 rounded-full border border-white/60 bg-white/25" />

        <div className="absolute right-[20%] top-14 h-28 w-28 rounded-full border border-white/60 bg-white/20" />

        <div className="absolute bottom-12 left-[8%] h-12 w-12 rounded-full border border-white/70 bg-white/30" />

        <div className="absolute bottom-16 right-[30%] h-16 w-16 rounded-full border border-white/60 bg-white/25" />

        {/* Small bubbles */}
        <div className="absolute left-[35%] top-12 h-6 w-6 rounded-full bg-white/40" />

        <div className="absolute bottom-10 left-[48%] h-4 w-4 rounded-full bg-white/50" />

        <div className="absolute bottom-14 right-[8%] h-8 w-8 rounded-full bg-white/40" />

        <div className="absolute right-[38%] top-10 h-5 w-5 rounded-full bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {/* Home */}
          <Link
            to="/"
            className="rounded-md px-2 py-1 font-medium text-[#2A2076]/65 transition-all duration-300 hover:bg-white/70 hover:text-[#2A2076]"
          >
            Home
          </Link>

          {/* Parent breadcrumb */}
          {parentBreadcrumb && (
            <>
              <ChevronRight
                size={15}
                className="text-[#D92157]"
              />

              {parentBreadcrumbPath ? (
                <Link
                  to={parentBreadcrumbPath}
                  className="rounded-md px-2 py-1 font-medium text-[#2A2076]/65 transition-all duration-300 hover:bg-white/70 hover:text-[#2A2076]"
                >
                  {parentBreadcrumb}
                </Link>
              ) : (
                <span className="rounded-md px-2 py-1 font-medium text-[#2A2076]/65">
                  {parentBreadcrumb}
                </span>
              )}
            </>
          )}

          {/* Current page */}
          <ChevronRight
            size={15}
            className="text-[#D92157]"
          />

          <span className="rounded-md bg-white/55 px-2 py-1 font-semibold text-[#2A2076]">
            {breadcrumb || title}
          </span>
        </div>

        {/* Hero Content */}
        <div className="mt-6 max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D92157]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D92157]">
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-[Cinzel,Palatino_Linotype,sans-serif] text-4xl font-bold leading-tight text-[#2A2076] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Accent */}
          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#D92157] to-[#291F75]" />

          {/* Description */}
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;