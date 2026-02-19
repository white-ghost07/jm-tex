"use client";

export default function ScrollButton() {
  return (
    <div
      onClick={() => {
        window.scrollBy({
          top: 800,
          behavior: "smooth",
        });
      }}
      className="mt-8 cursor-pointer flex flex-col gap-1 text-gray-600"
    >
      <span className="inline-flex h-12 w-8 items-center justify-center rounded-full border-2 border-gray-600 font-medium">
        i
      </span>

      <div className="scroll-indicator flex flex-col justify-center leading-none">
        <div className="flex max-w-8 flex-col items-center">
          <span className="text-[16px] font-medium">Scroll</span>
          <span className="text-[22px]">↓</span>
        </div>
      </div>
    </div>
  );
}
