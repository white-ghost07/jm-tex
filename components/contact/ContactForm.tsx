"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  designation: string;
  companyName: string;
  organizationType: string;
  inquiryType: string;
  inquiry: string;
};

const inquiryOptions = [
  { value: "", label: "Select your inquiry type" },
  { value: "Apparel And Fashion", label: "Apparel And Fashion" },
  { value: "Fancy Yarns", label: "Fancy Yarns" },
  // { value: "activewear", label: "Activewear" },
  // { value: "hosiery", label: "Hosiery" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 600));
    reset();
  };

  const Input = ({
    label,
    name,
    required,
    type = "text",
  }: {
    label: string;
    name: keyof FormValues;
    required?: boolean;
    type?: React.HTMLInputTypeAttribute;
  }) => {
    const hasErr = Boolean(errors[name]);

    return (
      <div className="w-full">
        <label className="mb-2 block text-sm font-medium text-black">
          {label}
        </label>

        <input
          type={type}
          className={`h-11 w-full border px-4 text-sm outline-none ${
            hasErr ? "border-black" : "border-zinc-300 focus:border-black"
          }`}
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
        />

        {hasErr && (
          <p className="mt-1 text-xs text-zinc-600">
            {String(errors[name]?.message)}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-16">
      <div className=" px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-black">
              REACH OUT
            </div>
            <div className="mt-9 max-w-2xl">
              <h2 className="text-2xl font-normal uppercase text-zinc-900 md:text-5xl">
                Contact jM TEX
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input label="First Name" name="firstName" required />
                <Input label="Last Name" name="lastName" required />
              </div>

              <Input label="Email Address" name="email" type="email" required />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input label="Country" name="country" />
                <Input label="Telephone Number" name="phone" required />
              </div>

              <h3 className="pt-6 text-lg font-medium text-black">
                Company Information
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input label="Designation" name="designation" required />
                <Input label="Company Name" name="companyName" required />
              </div>

              <Input label="Organization Type" name="organizationType" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h3 className="text-lg font-medium text-black">Inquiry Type</h3>

            <div className="mt-6 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Type
                </label>

                <select
                  className="h-11 w-full border border-zinc-300 px-4 text-sm outline-none focus:border-black"
                  {...register("inquiryType", {
                    required: "Type is required",
                  })}
                >
                  {inquiryOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Inquiry
                </label>

                <textarea
                  rows={7}
                  className="w-full border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-black"
                  {...register("inquiry", {
                    required: "Inquiry is required",
                  })}
                />
              </div>

              <div className=" flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="mt-4 h-11 bg-black px-8 text-sm font-medium text-white border cursor-pointer  hover:bg-transparent hover:text-black transition-colors duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
