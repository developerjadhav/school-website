import {
  BadgeCheck,
  CalendarDays,
  FileText,
  Image,
  MapPin,
  School,
} from "lucide-react";

const documents = [
  {
    icon: CalendarDays,
    title: "Birth Certificate",
    description: "Copy of the student's official birth certificate.",
  },
  {
    icon: School,
    title: "Previous School Records",
    description:
      "Latest report card or academic record from the previous school.",
  },
  {
    icon: FileText,
    title: "Transfer Certificate",
    description:
      "Transfer certificate, wherever applicable, for students joining from another school.",
  },
  {
    icon: Image,
    title: "Passport-Size Photographs",
    description:
      "Recent passport-size photographs of the student as required.",
  },
  {
    icon: MapPin,
    title: "Address Proof",
    description:
      "Valid proof of residential address of the parent or guardian.",
  },
  {
    icon: BadgeCheck,
    title: "Other Required Documents",
    description:
      "Additional documents may be requested depending on the student's class and admission requirements.",
  },
];

const RequiredDocuments = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-base text-[#D92157]">
            Keep These Ready
          </p>

          <h2 className="mb-5 text-3xl text-[#2A2076] md:text-4xl lg:text-5xl">
            Required Documents
          </h2>

          <p className="leading-7 text-gray-600">
            Having the necessary documents ready can make the admission process
            quicker and more convenient for parents and students.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((document, index) => {
            const Icon = document.icon;

            return (
              <div
                key={document.title}
                className="group relative rounded-2xl border border-gray-100 bg-[#F7F6FC] p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#2A2076]/20
                  hover:bg-white
                  hover:shadow-lg"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 text-sm text-[#2A2076]/20 transition-colors duration-300 group-hover:text-[#D92157]/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:bg-[#2A2076]">
                  <Icon
                    size={23}
                    className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-2 text-lg text-[#2A2076]">
                  {document.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {document.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Important Note */}
        <div className="mt-10 rounded-2xl border border-[#D92157]/15 bg-[#D92157]/5 px-6 py-5">
          <div className="flex gap-4">
            <div className="mt-0.5 shrink-0">
              <BadgeCheck size={22} className="text-[#D92157]" />
            </div>

            <div>
              <h3 className="mb-1 text-base text-[#2A2076]">
                Important Note
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Please carry original documents for verification along with
                the required copies. The final document list may vary
                depending on the class and admission requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;