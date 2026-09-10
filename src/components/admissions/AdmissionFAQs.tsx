import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "Parents can begin the admission process by submitting an enquiry or contacting the school admissions team. The team will guide you through the application and documentation process.",
  },
  {
    question: "Which classes are open for admission?",
    answer:
      "Admissions are subject to class-wise seat availability. Parents are advised to contact the school to know which classes are currently accepting applications.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "Commonly required documents include the student's birth certificate, previous school records, transfer certificate where applicable, passport-size photographs, and address proof. Additional documents may be required depending on the class.",
  },
  {
    question: "Is there an entrance test for admission?",
    answer:
      "The admission process may include a student interaction or age-appropriate assessment depending on the class. Please contact the admissions team for class-specific details.",
  },
  {
    question: "Can parents visit the school before applying?",
    answer:
      "Yes. Parents are encouraged to connect with the school and understand the learning environment, facilities, academic approach, and admission process before making a decision.",
  },
  {
    question: "How will I know if my child's admission is confirmed?",
    answer:
      "Once the admission process and required documentation are completed, the school will communicate the admission confirmation and guide parents through the next steps.",
  },
  {
    question: "When does the academic session begin?",
    answer:
      "The academic session commencement date will be communicated by the school as part of the admission schedule and official announcements.",
  },
];

const AdmissionFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="bg-[#F7F6FC] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A2076]/10">
            <HelpCircle size={27} className="text-[#2A2076]" />
          </div>

          <p className="mb-3 text-base text-[#D92157]">
            Have Questions?
          </p>

          <h2 className="mb-5 text-3xl text-[#2A2076] md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="leading-7 text-gray-600">
            Find answers to some of the common questions parents have about
            the admission process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#2A2076]/30 shadow-md"
                    : "border-gray-100 hover:border-[#2A2076]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
                >
                  <span className="text-base text-[#2A2076] md:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#2A2076] text-white"
                        : "bg-[#2A2076]/10 text-[#2A2076]"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4 md:px-7">
                      <p className="text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Still have a question?
            <span className="ml-1 text-[#D92157]">
              Our admissions team will be happy to help.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionFAQs;