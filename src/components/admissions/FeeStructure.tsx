import {
  BookOpen,
  CreditCard,
  Info,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const feeItems = [
  {
    title: "Registration Fee",
    description: "Applicable at the time of submitting the admission application.",
  },
  {
    title: "Admission Fee",
    description: "One-time fee applicable upon confirmation of admission.",
  },
  {
    title: "Tuition Fee",
    description: "Academic fee payable as per the selected class and school guidelines.",
  },
  {
    title: "Other Charges",
    description:
      "Additional charges may apply for facilities, activities, transport, or other services.",
  },
];

const paymentOptions = [
  {
    icon: CreditCard,
    title: "Online Payment",
    description: "Convenient digital payment options for parents.",
  },
  {
    icon: Wallet,
    title: "Flexible Schedule",
    description: "Fee payment schedule will be communicated by the school.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    description: "Clear fee communication with no hidden charges.",
  },
];

const FeeStructure = () => {
  return (
    <section className="bg-[#F7F6FC] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-base text-[#D92157]">
            Simple & Transparent
          </p>

          <h2 className="mb-5 text-3xl text-[#2A2076] md:text-4xl lg:text-5xl">
            Fee Structure
          </h2>

          <p className="leading-7 text-gray-600">
            We believe in keeping our fee structure clear and transparent,
            helping families plan their child's education with confidence.
          </p>
        </div>

        {/* Fee Overview */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Fee Table */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_auto] gap-6 bg-[#2A2076] px-6 py-5 text-white md:px-8">
              <span className="text-sm">Fee Component</span>
              <span className="text-sm">Amount</span>
            </div>

            {/* Rows */}
            {feeItems.map((item, index) => (
              <div
                key={item.title}
                className={`grid grid-cols-[1fr_auto] items-center gap-6 px-6 py-6 md:px-8 ${
                  index !== feeItems.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div>
                  <h3 className="mb-1 text-base text-[#2A2076]">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>

                <span className="whitespace-nowrap text-sm text-[#D92157]">
                  To Be Announced
                </span>
              </div>
            ))}
          </div>

          {/* Side Card */}
          <div className="rounded-3xl bg-[#2A2076] p-7 text-white md:p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <BookOpen size={26} />
            </div>

            <h3 className="mb-4 text-2xl">
              Plan Your Child's Education
            </h3>

            <p className="mb-7 text-sm leading-6 text-white/75">
              The final fee structure will depend on the student's class and
              applicable school policies. Parents will receive complete fee
              details during the admission process.
            </p>

            <div className="rounded-2xl bg-white/10 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Info size={18} />
                <span className="text-sm">Please Note</span>
              </div>

              <p className="text-sm leading-6 text-white/70">
                Fees once paid will be subject to the school's applicable
                refund and cancellation policies.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Features */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {paymentOptions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-[#2A2076]/10 bg-white p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2A2076]/10">
                  <Icon size={21} className="text-[#2A2076]" />
                </div>

                <div>
                  <h3 className="mb-1 text-base text-[#2A2076]">
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
    </section>
  );
};

export default FeeStructure;