import { FiMail, FiPhone, FiMessageSquare, FiClock, FiMapPin } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Choose your preferred method to reach out. I'm available for consultations
          and typically respond within 24 hours.
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <a
          href="mailto:marvindcruzjr@gmail.com"
          className="flex flex-col items-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-brand hover:bg-gray-800 transition-all group"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <FiMail className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Email</h3>
          <p className="text-gray-300 text-sm mb-1">marvindcruzjr@gmail.com</p>
          <p className="text-xs text-gray-500">Best for detailed inquiries</p>
        </a>

        {/* Phone */}
        <a
          href="tel:+13054847595"
          className="flex flex-col items-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-brand hover:bg-gray-800 transition-all group"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <FiPhone className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Phone</h3>
          <p className="text-gray-300 text-sm mb-1">(305) 484-7595</p>
          <p className="text-xs text-gray-500">Mon-Fri, 9am-6pm</p>
        </a>

        {/* Text/SMS */}
        <a
          href="sms:+13054847595"
          className="flex flex-col items-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-brand hover:bg-gray-800 transition-all group"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <FiMessageSquare className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Text Message</h3>
          <p className="text-gray-300 text-sm mb-1">(305) 484-7595</p>
          <p className="text-xs text-gray-500">Quick questions welcome</p>
        </a>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-700">
        <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30">
          <div className="flex-shrink-0 mt-1">
            <FiClock className="w-5 h-5 text-brand" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Response Time</h3>
            <p className="text-gray-400 text-sm">
              I typically respond within 24 hours, often sooner
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30">
          <div className="flex-shrink-0 mt-1">
            <FiMapPin className="w-5 h-5 text-brand" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Service Area</h3>
            <p className="text-gray-400 text-sm">
              Based in Miami, serving South Florida
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
