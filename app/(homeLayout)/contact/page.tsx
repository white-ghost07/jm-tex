import ContactForm from "@/components/contact/ContactForm";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import FaqSection from "@/components/contact/FaqSection";
import React from "react";

export default function ContactPage() {
  return (
    <div className="my-16 max-w-7xl mx-auto">
      <ContactHeroSection />
      <FaqSection />
      <ContactForm />
    </div>
  );
}
