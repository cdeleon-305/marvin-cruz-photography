"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: Replace with actual form submission endpoint
      // For now, using a mailto fallback or integrate with Formspree/Resend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          serviceType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">
      <h2 className="font-display text-3xl font-bold text-white mb-6">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-white mb-2">
            Service Type *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
          >
            <option value="">Select a service</option>
            <option value="corporate">Corporate Event</option>
            <option value="wedding">Wedding</option>
            <option value="engagement">Engagement</option>
            <option value="portrait">Portrait Photography</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors resize-none"
            placeholder="Tell me about your project, preferred dates, and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm">
              Thanks for reaching out! I'll get back to you within 24 hours.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm">
              Oops! Something went wrong. Please try again or email me directly.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
