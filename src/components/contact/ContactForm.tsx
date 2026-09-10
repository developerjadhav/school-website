import { useState } from "react";
import { GOOGLE_SCRIPT_URL_FOR_CONTACT_FORM } from "../../config";

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setIsSubmitting(true);
        setStatusMessage("");

        try {
            await fetch(GOOGLE_SCRIPT_URL_FOR_CONTACT_FORM, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(formData),
            });

            setStatusMessage(
                "Thank you! Your message has been submitted successfully."
            );

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Form submission error:", error);

            setStatusMessage(
                "Something went wrong. Please try again later."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h2 className="mb-6 text-2xl font-semibold text-[#2A2076]">
                Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Full Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Subject
                    </label>

                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Write your message..."
                        required
                        className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                    />
                </div>

                {/* Status Message */}
                {statusMessage && (
                    <p className="text-sm font-medium text-green-700">
                        {statusMessage}
                    </p>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-[#2A2076] px-7 py-3 font-medium text-white transition hover:bg-[#21195e] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>

            </form>
        </div>
    );
};

export default ContactForm;