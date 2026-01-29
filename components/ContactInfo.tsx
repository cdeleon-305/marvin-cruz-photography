import { FiMail, FiPhone, FiMessageSquare, FiClock, FiMapPin } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Prefer to reach out directly? Use any of the methods below. I'm available
          for consultations and typically respond within 24 hours.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {/* Email */}
        <a
          href="mailto:your.email@example.com"
          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <FiMail className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">your.email@example.com</p>
            <p className="text-sm text-gray-500 mt-1">Best for detailed inquiries</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+11234567890"
          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <FiPhone className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">(123) 456-7890</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm</p>
          </div>
        </a>

        {/* Text/SMS */}
        <a
          href="sms:+11234567890"
          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <FiMessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Text Message</h3>
            <p className="text-gray-600">(123) 456-7890</p>
            <p className="text-sm text-gray-500 mt-1">Quick questions welcome</p>
          </div>
        </a>
      </div>

      {/* Additional Info */}
      <div className="border-t border-gray-200 pt-8 space-y-4">
        <div className="flex items-start space-x-3">
          <FiClock className="w-5 h-5 text-gray-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
            <p className="text-gray-600 text-sm">
              I typically respond within 24 hours, often sooner
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FiMapPin className="w-5 h-5 text-gray-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
            <p className="text-gray-600 text-sm">
              Based in [Your City], serving [Your Region]
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-sm text-gray-600 italic">
          "I typically respond within a few hours during business hours. Looking
          forward to hearing about your project!"
        </p>
        <p className="text-sm font-medium text-gray-900 mt-2">- Your Name</p>
      </div>
    </div>
  );
}
