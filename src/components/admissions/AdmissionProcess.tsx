import {
  ClipboardList,
  FileCheck,
  MessageCircle,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

const admissionSteps = [
  {
    step: "01",
    title: "Enquiry",
    description:
      "Connect with our admissions team to learn about the school, programs, and available classes.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Application",
    description:
      "Complete the admission application form with the required student and parent information.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Interaction",
    description:
      "Attend a student and parent interaction to help us understand the child's learning needs.",
    icon: UserCheck,
  },
  {
    step: "04",
    title: "Documentation",
    description:
      "Submit the required documents for verification and complete the admission formalities.",
    icon: FileCheck,
  },
  {
    step: "05",
    title: "Confirmation",
    description:
      "Receive admission confirmation and complete the fee and enrollment process.",
    icon: CheckCircle2,
  },
];

const AdmissionProcess = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-base text-[#D92157]">
            Simple & Transparent
          </p>

          <h2 className="mb-5 text-3xl text-[#2A2076] md:text-4xl lg:text-5xl">
            Our Admission Process
          </h2>

          <p className="leading-7 text-gray-600">
            We have designed a simple and transparent admission process to
            make your child's journey into our school smooth and comfortable.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden md:block">
          {/* Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-10 h-px bg-[#2A2076]/20" />

          <div className="grid grid-cols-5 gap-6">
            {admissionSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#2A2076]/20 bg-white shadow-sm transition-all duration-300 group-hover:border-[#D92157] group-hover:shadow-md">
                    <Icon
                      size={28}
                      className="text-[#2A2076] transition-colors duration-300 group-hover:text-[#D92157]"
                    />
                  </div>

                  {/* Step Number */}
                  <p className="mb-2 text-sm text-[#D92157]">
                    STEP {item.step}
                  </p>

                  <h3 className="mb-3 text-lg text-[#2A2076]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="relative md:hidden">
          {/* Vertical Line */}
          <div className="absolute bottom-8 left-6 top-8 w-px bg-[#2A2076]/20" />

          <div className="space-y-10">
            {admissionSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="relative flex gap-5"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2A2076]/20 bg-white shadow-sm">
                    <Icon size={20} className="text-[#2A2076]" />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <p className="mb-1 text-xs text-[#D92157]">
                      STEP {item.step}
                    </p>

                    <h3 className="mb-2 text-lg text-[#2A2076]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-14 rounded-2xl border border-[#2A2076]/10 bg-[#F7F6FC] px-6 py-5 text-center">
          <p className="text-sm leading-6 text-gray-600">
            <span className="text-[#2A2076]">Need help?</span>{" "}
            Our admissions team is available to guide you through every step
            of the process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;