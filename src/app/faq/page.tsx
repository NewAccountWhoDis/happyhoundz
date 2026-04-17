import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";

const faqs = [
  {
    question: "My dog gets nervous at the groomer. Can they still be seen?",
    answer:
      "Yes. Happy Houndz is built around one-on-one appointments, slower pacing, and a calmer environment. If your dog is shy, worried, or easily overwhelmed, share that up front so the appointment can be approached with extra patience and realistic goals.",
  },
  {
    question: "What if my dog is reactive or has trouble being handled?",
    answer:
      "It is always best to mention reactivity, bite history, handling sensitivities, or trigger areas before the visit. That helps Heather decide whether the appointment is a good fit, what accommodations may help, and whether a shorter or modified groom would be safer and kinder for your dog.",
  },
  {
    question: "Do you sedate dogs?",
    answer:
      "No. Sedation is a veterinary decision, not a grooming service. If your dog may need medical support to be groomed safely, talk with your veterinarian before booking so you can decide on the safest path together.",
  },
  {
    question: "What happens at a first visit?",
    answer:
      "First visits are about getting a feel for your dog, their coat, their comfort level, and what kind of grooming plan makes sense. For some dogs, that may mean completing the full appointment. For others, the first visit may focus on building trust and handling comfort before aiming for a more polished finish.",
  },
  {
    question: "How long does a grooming appointment usually take?",
    answer:
      "Timing depends on coat type, size, behavior, the condition of the coat, and the service requested. A smaller bath visit may be much quicker than a full haircut on a heavily coated dog. If timing is important for your day, ask when booking and Heather can give you a realistic estimate.",
  },
  {
    question: "What if my dog is matted?",
    answer:
      "Matting changes what is comfortable and humane for a dog. In some cases, a shorter reset may be the kindest option instead of trying to preserve length. Coat condition, matting, and the time needed to work safely can also affect final pricing.",
  },
  {
    question: "Can you work around senior dogs or dogs with sensitivities?",
    answer:
      "Often, yes, but it helps to know about mobility issues, skin sensitivities, past grooming struggles, or medical concerns ahead of time. The more context Heather has before the appointment, the better she can pace the visit and set appropriate expectations.",
  },
  {
    question: "I am not sure what service to book. What should I choose?",
    answer:
      "That is completely fine. You can request the closest option on the booking page or reach out on Facebook if you want help deciding. A quick conversation about coat type, maintenance routine, and your goals usually makes the right choice clear.",
  },
];

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common Happy Houndz questions about nervous dogs, reactive dogs, first visits, timing, matting, and booking.",
};

export default function FAQPage() {
  return (
    <>
      <section className="pt-28 pb-18 px-4 sm:px-6" style={{ backgroundColor: "#5F7154" }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-nunito font-bold text-sm uppercase tracking-[0.24em] text-white/70 mb-5">
            Frequently Asked Questions
          </p>
          <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-5">
            Calm answers for the questions dog owners ask most.
          </h1>
          <p className="font-nunito text-xl text-white/82 max-w-3xl leading-relaxed">
            If your dog is nervous, reactive, matted, or just new to professional grooming, this is the best place to start before requesting an appointment.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.75rem] border bg-white px-6 py-5 sm:px-8 sm:py-6"
              style={{ borderColor: "rgba(26,26,26,0.08)" }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-grotesk font-bold text-xl sm:text-2xl text-[#1A1A1A]">
                <span>{item.question}</span>
                <span
                  className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg transition-transform group-open:rotate-45"
                  style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
                >
                  +
                </span>
              </summary>
              <p className="pt-4 pr-12 font-nunito text-base leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6" style={{ backgroundColor: "#FFF9F0" }}>
        <div
          className="max-w-5xl mx-auto rounded-[2rem] px-8 py-9 sm:px-10 sm:py-10"
          style={{ backgroundColor: "rgba(95,113,84,0.08)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="font-grotesk font-bold text-3xl sm:text-4xl mb-3" style={{ color: "#1A1A1A" }}>
                Still not sure what your dog needs?
              </p>
              <p className="font-nunito text-lg leading-relaxed text-gray-700 max-w-2xl">
                Reach out with your dog&apos;s age, breed, coat condition, and any handling concerns. Heather can help you decide on the best next step.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-grotesk font-bold text-base"
                style={{ backgroundColor: "#FFD23F", color: "#1A1A1A" }}
              >
                Request an Appointment
              </Link>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-grotesk font-bold text-base"
                style={{ backgroundColor: "#5F7154", color: "#FFF9F0" }}
              >
                Message on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
