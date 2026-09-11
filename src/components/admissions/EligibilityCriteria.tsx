import { useNavigate } from "react-router-dom";

import { ArrowRight, CalendarDays, GraduationCap, Users } from "lucide-react";

const eligibilityData = [
    {
        icon: GraduationCap,
        title: "Classes",
        description:
            "Admissions are offered for selected classes based on seat availability and the school's admission schedule.",
    },
    {
        icon: CalendarDays,
        title: "Age Criteria",
        description:
            "Student age eligibility is considered as per the applicable academic year and school admission guidelines.",
    },
    {
        icon: Users,
        title: "Student Interaction",
        description:
            "Depending on the class, students may be invited for an age-appropriate interaction or assessment.",
    },
];

const EligibilityCriteria = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-[#F7F6FC] px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-14 max-w-3xl">
                    <p className="mb-3 text-base text-[#D92157]">
                        Before You Apply
                    </p>

                    <h2 className="mb-5 text-3xl text-[#2A2076] md:text-4xl lg:text-5xl">
                        Eligibility & Admission Guidelines
                    </h2>

                    <p className="leading-7 text-gray-600">
                        Understanding the basic admission requirements can help families
                        prepare the necessary information and documents before beginning
                        the application process.
                    </p>
                </div>

                {/* Eligibility Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {eligibilityData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-[#2A2076]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2076] hover:shadow-lg"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2A2076]/10 transition-colors duration-300 group-hover:bg-[#2A2076]">
                                    <Icon
                                        size={26}
                                        className="text-[#2A2076] transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>

                                <h3 className="mb-3 text-xl text-[#2A2076]">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-6 text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Information Panel */}
                {/* Information Panel */}
                <div
                    className="mt-10 overflow-hidden rounded-3xl"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(217, 33, 87, 0.20) 0%, rgba(41, 31, 117, 0.20) 100%), #FFFFFF",
                    }}
                >
                    <div className="grid items-center gap-8 px-7 py-8 md:grid-cols-[1fr_auto] md:px-10 md:py-10">
                        <div>
                            <h3 className="mb-3 text-2xl text-[#2A2076] md:text-3xl">
                                Not sure if your child is eligible?
                            </h3>

                            <p className="max-w-2xl text-sm leading-6 text-[#2A2076]/75 md:text-base">
                                Our admissions team can help you understand class availability,
                                age criteria, and the admission requirements applicable to your
                                child's grade.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate("/contact")}
                            className="group flex w-fit items-center gap-2 rounded-full
        border border-[#2A2076] px-6 py-3
        text-sm text-[#2A2076]
        transition-all duration-300
        hover:bg-[#2A2076] hover:text-white"
                        >
                            Contact Admissions

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EligibilityCriteria;