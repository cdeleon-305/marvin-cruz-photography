import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Marvin Cruz Photography | South Florida Photographer",
  description: "South Florida professional photographer specializing in corporate events, weddings, engagements, and portraits. Serving Miami, Fort Lauderdale, and Palm Beach. View my portfolio and book your session today.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutMe />
      <CallToAction />
    </>
  );
}
