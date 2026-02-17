"use client";

import { ArrowUp } from "lucide-react";
import React from "react";

type Faq = {
  q: string;
  a: string;
};

const faqs: Faq[] = [
  {
    q: "How can I contact the Brandix HR department?",
    a: "For inquiries regarding HR matters, please reach out to info@brandix.com with details of your specific HR requirement. This will ensure that you are directed to the relevant HR contact point.",
  },
  {
    q: "What job vacancies are currently available at Brandix?",
    a: "All current job vacancies at Brandix are published on the official Brandix Careers page. You can explore available opportunities, review job descriptions, and apply directly through the online portal.",
  },
  {
    q: "What is the process for applying for a job at Brandix?",
    a: "To apply for a job at Brandix, visit the official Careers page, select a suitable vacancy, and submit your application online along with your updated CV and required documents. Shortlisted candidates will be contacted for further assessments and interviews.",
  },
  {
    q: "Can I request the annual report from Brandix for a research project or assignment?",
    a: "Yes, Brandix annual reports and other corporate publications are typically available on the official website under the Investor Relations or Media section. If you require additional information, you may contact the company via their official email.",
  },
  {
    q: "What are the criteria for seeking sponsorships from Brandix?",
    a: "Sponsorship requests are evaluated based on alignment with Brandix’s corporate values, sustainability initiatives, and community impact. Applicants are encouraged to submit a detailed proposal outlining objectives, benefits, and expected outcomes to the official contact email.",
  },
  {
    q: "How can I get in touch with Brandix to promote third-party service offerings?",
    a: "For third-party service proposals or partnership opportunities, you may contact Brandix through their official communication channels with a detailed company profile and proposal. The relevant department will review and respond if there is potential alignment.",
  },
  {
    q: "Where can I find the contact information for Brandix's HR department regarding employment verifications or background checks?",
    a: "For employment verifications or background checks, please contact Brandix via their official email address and clearly mention the purpose of the request along with the necessary authorization documents. The HR team will respond through the appropriate channel.",
  },
  {
    q: "How can I obtain information about Brandix's total employee count, operating countries, revenue generated, etc.?",
    a: "Information such as total employee count, operating locations, financial performance, and sustainability initiatives can be found in Brandix’s official annual reports, sustainability reports, or corporate website under the About Us or Investor Relations sections.",
  },
];

function DashedLine({ active }: { active?: boolean }) {
  return (
    <div className="mt-6">
      <div
        className={[
          "h-0.5 w-full border-t-2 border-dashed transition-colors duration-300",
          active ? "border-black" : "border-zinc-200",
        ].join(" ")}
      />
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="w-full bg-white">
      <div className=" w-full  px-5 py-14 md:py-20">
        {/* top label */}
        <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-black">
          SUPPORTING INFO
        </div>

        {/* heading */}
        <div className="mt-8 max-w-2xl">
          <h2 className="text-2xl font-normal uppercase text-zinc-900 md:text-5xl">
            Frequently <br /> Asked Questions
          </h2>
        </div>

        {/* grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-14 md:grid-cols-3">
          {faqs.map((item, idx) => {
            const open = idx === openIndex;
            const hasAnswer = !!item.a?.trim();

            return (
              <div key={item.q} className="flex flex-col">
                {/* ✅ fixed header height so rows align */}
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full  items-start justify-between gap-6 text-left"
                  aria-expanded={open}
                >
                  <span className="min-h-16 text-[18px] font-medium leading-snug text-zinc-900">
                    {item.q}
                  </span>

                  <span className="mt-1 shrink-0 cursor-pointer rounded-full border border-black/80 bg-transparent p-1 transition-colors duration-300 hover:bg-black hover:text-white">
                    <ArrowUp
                      size={20}
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* ✅ animated answer */}
                <div
                  className={[
                    "grid transition-all duration-500 ease-in-out",
                    open && hasAnswer
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-7 text-zinc-600">
                      {item.a}
                    </p>
                  </div>
                </div>

                {/* divider */}
                <DashedLine active={open && hasAnswer} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
