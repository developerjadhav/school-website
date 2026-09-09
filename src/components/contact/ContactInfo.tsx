const ContactInfo = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-[#2A2076]">
        Get In Touch
      </h2>

      <div className="space-y-6">

        {/* Address */}
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2A2076]/10 text-[#2A2076]">
            📍
          </div>

          <div>
            <h3 className="mb-1 font-semibold text-gray-800">
              Address
            </h3>

            <p className="leading-6 text-gray-600">
              School Name,<br />
              Village, Taluka, District,<br />
              Maharashtra - 000000
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2A2076]/10 text-[#2A2076]">
            📞
          </div>

          <div>
            <h3 className="mb-1 font-semibold text-gray-800">
              Phone
            </h3>

            <p className="text-gray-600">
              +91 XXXXX XXXXX
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2A2076]/10 text-[#2A2076]">
            ✉
          </div>

          <div>
            <h3 className="mb-1 font-semibold text-gray-800">
              Email
            </h3>

            <p className="text-gray-600">
              school@example.com
            </p>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2A2076]/10 text-[#2A2076]">
            🕐
          </div>

          <div>
            <h3 className="mb-1 font-semibold text-gray-800">
              Office Hours
            </h3>

            <p className="leading-6 text-gray-600">
              Monday - Saturday<br />
              9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;