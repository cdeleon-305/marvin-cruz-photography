import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional photographer specializing in sports events, engagements, and personal shoots. View my portfolio and book your session today.",
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
