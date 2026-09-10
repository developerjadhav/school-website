import { useState } from "react";
import type { FormEvent } from "react";
import { GOOGLE_SHEET_URL_FOR_ADMISSIONS_ENQURIES_FORM } from "../../config";

const AdmissionEnquiryForm = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const enquiryData = {
      parentName: formData.get("parentName")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      studentName: formData.get("studentName")?.toString().trim() || "",
      currentSchool:
        formData.get("currentSchool")?.toString().trim() || "",
      className: formData.get("className")?.toString() || "",
      academicYear: formData.get("academicYear")?.toString() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    try {
      await fetch(GOOGLE_SHEET_URL_FOR_ADMISSIONS_ENQURIES_FORM, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(enquiryData),
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Admission enquiry submission failed:", error);

      setStatus("error");
      setErrorMessage(
        "Something went wrong while submitting your enquiry. Please try again."
      );
    }
  };

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-widest text-[#D92157]">
            ADMISSIONS
          </p>

          <h1 className="mb-4 text-3xl text-[#2A2076] md:text-4xl">
            Admission Enquiry
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600">
            Interested in joining JADHAV Public School? Fill in the form
            below and our admissions team will get in touch with you.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
          {/* Success State */}
          {status === "success" && (
            <div className="py-16 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                <span className="text-2xl text-green-600">✓</span>
              </div>

              <h2 className="mb-3 text-2xl text-[#2A2076]">
                Enquiry Submitted!
              </h2>

              <p className="mx-auto max-w-md text-gray-600">
                Thank you for your interest in JADHAV Public School. Our
                admissions team will contact you shortly.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg border border-[#2A2076] px-6 py-3 text-sm text-[#2A2076] transition duration-300 hover:bg-[#2A2076] hover:text-white"
              >
                Submit Another Enquiry
              </button>
            </div>
          )}

          {/* Error State */}
          {status === "error" && (
            <div className="mb-6 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Form */}
          {status !== "success" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Name */}
              <div>
                <label
                  htmlFor="parentName"
                  className="mb-2 block text-sm text-gray-700"
                >
                  Parent / Guardian Name *
                </label>

                <input
                  id="parentName"
                  name="parentName"
                  type="text"
                  required
                  placeholder="Enter parent or guardian name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm text-gray-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="Enter 10-digit phone number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                  />
                </div>
              </div>

              {/* Student Name */}
              <div>
                <label
                  htmlFor="studentName"
                  className="mb-2 block text-sm text-gray-700"
                >
                  Student Name *
                </label>

                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  placeholder="Enter student's full name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                />
              </div>

              {/* Previous School */}
              <div>
                <label
                  htmlFor="currentSchool"
                  className="mb-2 block text-sm text-gray-700"
                >
                  Current / Previous School
                </label>

                <input
                  id="currentSchool"
                  name="currentSchool"
                  type="text"
                  placeholder="Enter school name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                />
              </div>

              {/* Class + Academic Year */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="className"
                    className="mb-2 block text-sm text-gray-700"
                  >
                    Class Seeking Admission *
                  </label>

                  <select
                    id="className"
                    name="className"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                  >
                    <option value="" disabled>
                      Select class
                    </option>

                    <option value="Nursery">Nursery</option>
                    <option value="Jr. KG">Jr. KG</option>
                    <option value="Sr. KG">Sr. KG</option>

                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="academicYear"
                    className="mb-2 block text-sm text-gray-700"
                  >
                    Academic Year *
                  </label>

                  <select
                    id="academicYear"
                    name="academicYear"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                  >
                    <option value="" disabled>
                      Select academic year
                    </option>

                    <option value="2026-27">2026-27</option>
                    <option value="2027-28">2027-28</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us anything you'd like to know about admissions..."
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2A2076] focus:ring-1 focus:ring-[#2A2076]"
                />
              </div>

              {/* Error Message */}
              {status === "error" && (
                <p className="text-center text-sm text-red-600">
                  {errorMessage}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-lg border border-[#2A2076] bg-[#2A2076] px-8 py-3 text-sm text-white transition duration-300 hover:bg-[#191155] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Submitting..."
                    : "Submit Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdmissionEnquiryForm;