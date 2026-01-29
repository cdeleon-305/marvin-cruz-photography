import { FiMail, FiClock, FiMapPin } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Contact Information
        </h2>
        <p className="text-gray-200 leading-relaxed">
          Prefer to reach out directly? Use any of the methods below. I'm available
          for consultations and typically respond within 24 hours.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {/* Email */}
        <a
          href="mailto:marvindcruzjr@gmail.com"
          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50/5 transition-colors group"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <FiMail className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Email</h3>
            <p className="text-gray-200">marvindcruzjr@gmail.com</p>
            <p className="text-sm text-gray-400 mt-1">Best way to reach me</p>
          </div>
        </a>
      </div>

      {/* Additional Info */}
      <div className="border-t border-gray-200/10 pt-8 space-y-4">
        <div className="flex items-start space-x-3">
          <FiClock className="w-5 h-5 text-gray-300 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Response Time</h3>
            <p className="text-gray-200 text-sm">
              I typically respond within 24 hours, often sooner
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FiMapPin className="w-5 h-5 text-gray-300 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Service Area</h3>
            <p className="text-gray-200 text-sm">
              Based in Miami, serving South Florida
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50/5 p-6 rounded-lg">
        <p className="text-sm text-gray-300 italic">
          "I typically respond within a few hours during business hours. Looking
          forward to hearing about your project!"
        </p>
        <p className="text-sm font-medium text-white mt-2">- Marvin Cruz</p>
      </div>
    </div>
  );
}
