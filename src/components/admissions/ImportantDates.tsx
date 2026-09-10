import {
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

const importantDates = [
  {
    month: "01",
    label: "Phase 01",
    title: "Admission Enquiry Opens",
    date: "To Be Announced",
    description:
      "Parents can begin their admission enquiry and learn more about the school and available classes.",
    icon: MessageCircle,
  },
  {
    month: "02",
    label: "Phase 02",
    title: "Application Period",
    date: "To Be Announced",
    description:
      "Submit the admission application form along with the required information and documents.",
    icon: ClipboardList,
  },
  {
    month: "03",
    label: "Phase 03",
    title: "Student Interaction",
    date: "To Be Announced",
    description:
      "Selected students and parents may be invited for an interaction or age-appropriate assessment.",
    icon: MessageCircle,
  },
  {
    month: "04",
    label: "Phase 04",
    title: "Admission Confirmation",
    date: "To Be Announced",
    description:
      "Complete the required formalities after receiving confirmation from the school.",
    icon: CheckCircle2,
  },
  {
    month: "05",
    label: "Phase 05",
    title: "Academic Session Begins",
    date: "To Be Announced",
    description:
      "Welcome to JADHAV Public School and the beginning of a new learning journey.",
    icon: GraduationCap,
  },
];

const ImportantDates = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A2076]/10">
            <CalendarDays size={27} className="text-[#2A2076]" />
          </div>

          <p className="mb-3 text-base text-[#D92157]">
            Mark Your Calendar
          </p>

          <h2 className="mb-5 text-3xl text-[#2A2076] md:text-4xl lg:text-5xl">
            Important Admission Dates
          </h2>

          <p className="leading-7 text-gray-600">
            Keep track of the important stages in the admission journey.
            Specific dates will be announced by the school.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Timeline Line */}
          <div className="absolute left-[10%] right-[10%] top-7 h-px bg-gradient-to-r from-[#2A2076]/20 via-[#D92157]/40 to-[#2A2076]/20" />

          <div className="grid grid-cols-5 gap-5">
            {importantDates.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative text-center"
                >
                  {/* Timeline Point */}
                  <div className="relative z-10 mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2076]/20 bg-white shadow-sm transition-all duration-300 group-hover:border-[#D92157] group-hover:bg-[#D92157] group-hover:shadow-md">
                    <Icon
                      size={22}
                      className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <p className="mb-2 text-xs text-[#D92157]">
                    {item.label}
                  </p>

                  <h3 className="mb-2 text-lg text-[#2A2076]">
                    {item.title}
                  </h3>

                  <p className="mb-3 text-sm text-[#D92157]">
                    {item.date}
                  </p>

                  <p className="text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet / Mobile Timeline */}
        <div className="relative lg:hidden">
          {/* Vertical Line */}
          <div className="absolute bottom-8 left-7 top-8 w-px bg-[#2A2076]/20" />

          <div className="space-y-8">
            {importantDates.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative flex gap-5"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#2A2076]/20 bg-white shadow-sm">
                    <Icon size={21} className="text-[#2A2076]" />
                  </div>

                  {/* Content */}
                  <div className="rounded-2xl border border-gray-100 bg-[#F7F6FC] p-5">
                    <p className="mb-1 text-xs text-[#D92157]">
                      {item.label}
                    </p>

                    <h3 className="mb-1 text-lg text-[#2A2076]">
                      {item.title}
                    </h3>

                    <p className="mb-2 text-sm text-[#D92157]">
                      {item.date}
                    </p>

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
        <div className="mt-14 flex items-start gap-4 rounded-2xl border border-[#2A2076]/10 bg-[#F7F6FC] p-6">
          <CalendarDays
            size={22}
            className="mt-0.5 shrink-0 text-[#D92157]"
          />

          <div>
            <h3 className="mb-1 text-base text-[#2A2076]">
              Dates may be subject to change
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              Parents are advised to check with the school for the latest
              admission schedule and important announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;