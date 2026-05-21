"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  GraduationCap,
  HeartPulse,
  ImageIcon,
  IndianRupee,
  Languages,
  Leaf,
  MapPin,
  MessageCircle,
  Moon,
  Newspaper,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Target,
  Trophy,
  Users,
  Video,
  Zap,
} from "lucide-react";

const workshopHighlights = [
  {
    icon: Calendar,
    label: "Dates",
    value: "14-15 June 2026",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Pune, Maharashtra",
  },
  {
    icon: Clock,
    label: "Timing",
    value: "10:00 AM - 6:00 PM",
  },
  {
    icon: Languages,
    label: "Language",
    value: "Hindi, Marathi & English",
  },
  {
    icon: Award,
    label: "Certificate",
    value: "Internationally Recognised",
  },
  {
    icon: Users,
    label: "Seats",
    value: "Strictly Limited",
  },
];

const trustStats = [
  {
    icon: Star,
    value: "4.9 / 5",
    label: "Average Rating",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Professionals Trained",
  },
  {
    icon: Trophy,
    value: "10+ Years",
    label: "Clinical & Training Experience",
  },
  {
    icon: MapPin,
    value: "20+ Cities",
    label: "Pan-India Participant Reach",
  },
];

const outcomes = [
  {
    icon: Brain,
    title: "Instant Induction Techniques",
    text: "Learn practical induction methods you can understand, practice, and refine inside the room.",
  },
  {
    icon: HeartPulse,
    title: "Stress, Anxiety & Fear Elimination",
    text: "Work directly with the subconscious patterns that keep emotional reactions repeating.",
  },
  {
    icon: Zap,
    title: "Break Bad Habits at the Source",
    text: "Use hypnotic suggestion and structured protocols to address habit loops from the root.",
  },
  {
    icon: Target,
    title: "Confidence & Performance Enhancement",
    text: "Install focus, calm, and confidence for exams, work, public speaking, and personal goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Tools for Coaches",
    text: "Add a powerful transformation modality to your coaching, therapy, or healing practice.",
  },
  {
    icon: Leaf,
    title: "Personal Transformation",
    text: "Experience self-hypnosis and subconscious change before using it to help others.",
  },
];

const pricingIncludes = [
  "2 Days Live Training",
  "Certified Certificate",
  "Lifetime Community Access",
  "Bonus Resources & Scripts",
  "2 Days Lunch",
  "Workshop Manual",
  "Q&A Access",
];

const trustBullets = [
  "Internationally Certified",
  "Hands-On Practice",
  "Safe & Medically Informed",
  "Absolute Beginners Welcome",
  "Featured in ANI News",
];

const audience = [
  "Stress, Anxiety & Fear Sufferers",
  "Students & Exam-Takers",
  "Working Professionals",
  "Coaches, Healers & Therapists",
  "Anyone Seeking Personal Growth",
];

const secondaryOutcomes = [
  "Unlock Prosperity",
  "Health & Longevity",
  "Spiritual Awakening",
  "Wealth Mindset",
  "Academic Excellence",
];

const curriculum = [
  {
    day: "Day 1",
    title: "Science & Skill",
    topics: [
      "Subconscious Science",
      "Myth-Busting",
      "Para-Hypnosis",
      "Inductions",
      "Deepening Protocols",
      "Hypnotic Language",
      "Self-Hypnosis",
      "Live Practice",
    ],
  },
  {
    day: "Day 2",
    title: "Advanced Application",
    topics: [
      "Group Hypnosis",
      "Word-Language Structures",
      "Post-Hypnotic Suggestions",
      "Classical Methods",
      "Instant Self-Hypnosis",
      "Practical Hypnotherapy",
      "Supervised Practice",
    ],
  },
];

const testimonials = [
  {
    name: "Priya M.",
    role: "Life Coach",
    quote:
      "Left as a certified hypnotherapist and already used the tools with 5 clients.",
  },
  {
    name: "Rahul D.",
    role: "Psychologist",
    quote:
      "Overcame a 15-year fear. This workshop pays for itself after one session.",
  },
  {
    name: "Sneha P.",
    role: "Wellness Coach",
    quote: "Most practical, hands-on training I have ever attended.",
  },
  {
    name: "Vikram S.",
    role: "HR Director",
    quote:
      "A toolkit for stress and team wellbeing. Absolutely worth every rupee.",
  },
];

const videoTestimonials = [
  {
    id: "shaktipat-magnetism-hypnotism-1",
    title: "प्राचीन शक्तिपात, मैग्नेटिज्म और हिप्नोटिज्म का अद्भुत संगम",
    embedUrl: "https://www.youtube.com/embed/XlucfW18d80",
    description:
      "इस लाइव Demonstration में प्राचीन शक्तिपात ऊर्जा, मैग्नेटिज्म और आधुनिक Hypnotism Techniques का अनोखा अनुभव देखने को मिलता है। सिर्फ हाथों की ऊर्जा, दिशा और हल्के स्पर्श के माध्यम से व्यक्ति धीरे-धीरे गहरी ट्रांस और रिलैक्स अवस्था में पहुंच जाता है। यह Powerful प्रक्रिया लोगों को किसी अदृश्य ऊर्जा और मानसिक आकर्षण का अनुभव कराती है। बाद में सकारात्मक सुझावों द्वारा आत्मविश्वास, करियर ग्रोथ और जीवन में सफलता के लिए Mind Programming की जाती है।",
  },
  {
    id: "deep-hypnotic-experience",
    title: "सिर्फ कुछ सेकंड में गहरा हिप्नोटिक अनुभव",
    embedUrl: "https://www.youtube.com/embed/CYRPb6O0wqM",
    description:
      "इस गहरे सम्मोहन अनुभव में व्यक्ति तुरंत रिलैक्स अवस्था में पहुंचकर भीतर से शांति और सुकून महसूस करता है। इसके बाद मन को अच्छे स्वास्थ्य, मानसिक शांति, तनाव मुक्ति और जीवन में सफलता के लिए Positive Programming दी जाती है। यह Powerful प्रक्रिया अंदरूनी बदलाव और बेहतर जीवन की दिशा में कार्य करती है।",
  },
  {
    id: "handshake-hypnosis",
    title: "पलक झपकते ही हस्त स्पर्श से गहरे सम्मोहन का अनुभव",
    embedUrl: "https://www.youtube.com/embed/olj5yHMtNjs",
    description:
      "इस लाइव Handshake Hypnosis Demonstration में कई लोगों को सिर्फ एक स्पर्श के माध्यम से गहरी ट्रांस अवस्था में ले जाया गया है। इसके बाद सभी प्रतिभागियों को सफलता, मानसिक शांति, तनाव मुक्ति और Positive Life Transformation के लिए Powerful Group Therapy दी गई। यह अनुभव मन की अद्भुत शक्ति और सम्मोहन के गहरे प्रभाव को दर्शाता है। जिसे देखकर आप भी इस अनोखे अनुभव को स्वयं महसूस करना चाहेंगे।",
  },
  {
    id: "shaktipat-magnetism-hypnotism-2",
    title: "प्राचीन शक्तिपात, मैग्नेटिज्म और हिप्नोटिज्म का अद्भुत संगम",
    embedUrl: "https://www.youtube.com/embed/EpgWe5gcveI",
    description:
      "इस लाइव Demonstration में प्राचीन शक्तिपात ऊर्जा, मैग्नेटिज्म और आधुनिक Hypnotism Techniques का अनोखा अनुभव देखने को मिलता है। सिर्फ हाथों की ऊर्जा, दिशा और हल्के स्पर्श के माध्यम से व्यक्ति धीरे-धीरे गहरी ट्रांस और रिलैक्स अवस्था में पहुंच जाता है। यह Powerful प्रक्रिया लोगों को किसी अदृश्य ऊर्जा और मानसिक आकर्षण का अनुभव कराती है। बाद में सकारात्मक सुझावों द्वारा आत्मविश्वास, करियर ग्रोथ और जीवन में सफलता के लिए Mind Programming की जाती है।",
  },
];

const faqs = [
  {
    question: "Do I need prior experience?",
    answer:
      "No. The workshop is beginner-friendly and structured so first-time learners can follow every step.",
  },
  {
    question: "Is hypnosis safe?",
    answer:
      "Yes. You will learn safe, ethical, and medically informed methods under guided supervision.",
  },
  {
    question: "Can I use this professionally?",
    answer:
      "Yes. Coaches, healers, therapists, psychologists, and wellness professionals can add these tools to their practice responsibly.",
  },
  {
    question: "What if I am not a coach?",
    answer:
      "That is completely fine. The training is useful for personal growth, stress relief, confidence, and performance.",
  },
  {
    question: "What is the group size?",
    answer:
      "Seats are strictly limited so every participant gets enough attention and practice time.",
  },
  {
    question: "Are installments available?",
    answer:
      "Yes. You can reserve your seat with Rs. 5,000 and pay the balance before the workshop.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "There is a 100% risk-free guarantee. You can request a full refund if you are not satisfied after Day 1.",
  },
  {
    question: "Are group discounts available?",
    answer:
      "Yes. Contact the team on WhatsApp for group booking support and available offers.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a notebook, pen, water bottle, and an open mind. Lunch is included on both days.",
  },
  {
    question: "Which language will be used?",
    answer:
      "The workshop will be conducted in Hindi, Marathi, and English so participants can learn comfortably.",
  },
];

export default function LandingPage() {
  const [darkShade, setDarkShade] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main
      className={`min-h-screen overflow-hidden font-sans text-slate-950 transition-colors duration-300 ${
        darkShade ? "bg-slate-900" : "bg-slate-50"
      }`}
      data-shade={darkShade ? "dark" : "light"}
    >
      <button
        aria-pressed={darkShade}
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-slate-950/30 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
        onClick={() => setDarkShade((value) => !value)}
        type="button"
      >
        {darkShade ? (
          <Sun className="h-4 w-4 text-amber-300" />
        ) : (
          <Moon className="h-4 w-4 text-amber-300" />
        )}
        {darkShade ? "Light shade" : "Dark shade"}
      </button>
      <div className="sticky top-0 z-50 overflow-hidden border-b border-amber-500/30 bg-amber-400 py-3 text-xs font-black tracking-wide text-slate-950 shadow-lg shadow-amber-900/10 sm:text-sm">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
          {[0, 1].map((item) => (
            <a
              className="mx-8 inline-flex items-center gap-3 underline-offset-4 transition-colors hover:text-white hover:underline"
              href="#pricing"
              key={item}
            >
              <Sparkles className="h-4 w-4 flex-shrink-0" />
              <span>
                EARLY BIRD OFFER ENDS SOON, Save Rs. 3,000 | 2-Day Certified
                Hypnosis Mastery Workshop | 14-15 June 2026, Pune | Lunch
                Included - Certificate Awarded
              </span>
              <span className="inline-flex items-center gap-1">
                Book your seat now
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>

      <section className="relative isolate px-4 py-20 text-center sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_32rem)]" />
        <div className="absolute left-1/2 top-28 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/25 blur-3xl" />

        <motion.div
          animate="visible"
          className="mx-auto max-w-7xl"
          initial="hidden"
          variants={fadeIn}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-700 shadow-sm backdrop-blur">
            <BadgeCheck className="h-4 w-4" />
            Pune&apos;s most transformative hypnosis training, certified &
            hands-on
          </div>

          <h1 className="mx-auto max-w-6xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Master the Art of{" "}
            <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Hypnosis
            </span>{" "}
            in Just{" "}
            <span className="text-amber-600">2 Days.</span>{" "}
            <span className="block pt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-slate-700">Change Your Mind.</span>{" "}
              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                Change Your Clients.
              </span>{" "}
              <span className="text-amber-600">Change Your Life.</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600 sm:text-xl">
            A breakthrough certified workshop for coaches, healers,
            therapists, and driven professionals ready to harness the
            extraordinary power of the subconscious mind, to heal themselves,
            and transform the lives of others.
          </p>

          <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-center gap-3 text-sm font-bold text-slate-600 md:flex-row md:gap-6">
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              Trusted by 1,000+ trained professionals. Rated 4.9/5 by past
              participants.
            </span>
            <span className="hidden h-5 w-px bg-slate-300 md:block" />
            <span>Led by Dr. Anand Kharat | India&apos;s Master of Masters in Hypnosis</span>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
            >
              Claim your early bird seat
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 rounded-3xl border border-slate-200 bg-white/90 p-4 text-left shadow-2xl shadow-slate-900/10 backdrop-blur sm:grid-cols-2 lg:grid-cols-3">
            {workshopHighlights.map(({ icon: Icon, label, value }) => (
              <div
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                key={label}
              >
                <Icon className="mb-4 h-6 w-6 text-amber-500" />
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="mt-1 font-bold text-slate-950">{value}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:col-span-2 lg:col-span-3">
              <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-amber-700">
                Lunch & Certificate Included. Seats strictly limited.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-300">
              <Star className="h-4 w-4 fill-amber-300" />
              Trust signals & social proof
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Why Thousands Trust Dr. Anand Kharat
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-4">
            {trustStats.map(({ icon: Icon, value, label }) => (
              <div
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                key={label}
              >
                <Icon className="mx-auto mb-4 h-7 w-7 text-amber-400" />
                <div className="text-4xl font-black text-amber-400">
                  {value}
                </div>
                <div className="mt-2 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {trustBullets.map((item) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Video teaser
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            See What Happens in the Room, And Why It Changes Everything
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Watch Dr. Anand Kharat demonstrate a live hypnosis session and hear
            directly from past participants about the transformations they
            experienced in just 48 hours.
          </p>

          <div className="mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/20">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/fyoZPv8xpCo?start=56"
              title="Workshop preview video"
            />
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-black text-slate-950 transition-colors hover:bg-slate-100"
              href="#video-testimonials"
            >
              Watch the preview
              <Video className="h-5 w-5" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-black text-white transition-colors hover:bg-slate-800"
              href="#pricing"
            >
              Reserve your seat
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            The real problem
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            You&apos;re Capable of So Much More, So Why Are You Still Stuck?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            You help others. You invest in yourself. You&apos;ve read the books,
            attended the seminars, and still stress creeps back, clients
            struggle with recurring patterns, and old habits resist every
            technique. You haven&apos;t found the tool that works at the root.
          </p>

          <div className="mt-12 rounded-3xl border border-amber-100 bg-amber-50 p-8 text-left shadow-xl shadow-amber-100/60">
            <div className="mb-6 flex items-start gap-4">
              <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950">
                  The root is the subconscious mind.
                </h3>
                <p className="mt-2 text-lg text-slate-700">
                  And hypnosis is the most direct, proven path to it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12"
        id="video-testimonials"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Testimonial video
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Real demonstrations, real experiences
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {videoTestimonials.map((testimonial) => (
              <div
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                key={testimonial.id}
              >
                <div className="aspect-video overflow-hidden rounded-2xl bg-slate-950">
                  {testimonial.embedUrl ? (
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={testimonial.embedUrl}
                      title={testimonial.title}
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-slate-100 px-4 text-center text-slate-500">
                      <Video className="mb-3 h-10 w-10 text-amber-500" />
                      <p className="text-sm font-black">Video coming soon</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-2 pt-5">
                  <h3 className="text-lg font-black leading-7 text-slate-950">
                    {testimonial.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">
                    {testimonial.description}
                  </p>
                  <div className="mt-5 flex gap-0.5 border-t border-slate-100 pt-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <h3 className="text-2xl font-black">Who is this for?</h3>
              <ul className="mt-6 space-y-4">
                {audience.map((item) => (
                  <li className="flex items-center gap-3" key={item}>
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-400" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-8">
              <h3 className="text-2xl font-black text-slate-950">
                Beginners, professionals, and seekers are welcome.
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Whether you want to transform your own stress patterns or add a
                practical client-facing skill, this workshop gives you guided
                learning, demonstrations, and supervised practice.
              </p>
              <a
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-black text-white transition-colors hover:bg-slate-800"
                href="#pricing"
              >
                Book My Seat Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              What you&apos;ll gain
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              In 2 Days, You&apos;ll Walk Away With Skills That Most
              Practitioners Spend Years Trying to Acquire.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map(({ icon: Icon, title, text }) => (
              <div
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-transform hover:-translate-y-1"
                key={title}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-amber-100 bg-amber-50 p-8 text-center">
            <h3 className="text-2xl font-black text-slate-950">
              Secondary outcomes participants often experience
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {secondaryOutcomes.map((item) => (
                <span
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              The curriculum
            </p>
            <h2 className="text-4xl font-black sm:text-5xl">
              Two Days. Zero Fluff. Complete Mastery.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {curriculum.map((day) => (
              <div
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
                key={day.day}
              >
                <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                  {day.day}
                </p>
                <h3 className="mt-3 text-3xl font-black">{day.title}</h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {day.topics.map((topic) => (
                    <div
                      className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4"
                      key={topic}
                    >
                      <BookOpen className="h-5 w-5 flex-shrink-0 text-amber-400" />
                      <span className="font-semibold text-slate-200">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-lg font-black text-slate-950 transition-colors hover:bg-amber-300"
              href="#pricing"
            >
              Book My Seat Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Inclusions
            </p>
            <h2 className="text-4xl font-black text-slate-950 sm:text-5xl">
              Everything You Get When You Register
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingIncludes.map((item) => (
              <div
                className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5"
                key={item}
              >
                <ShieldCheck className="h-6 w-6 flex-shrink-0 text-amber-500" />
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-24" id="pricing">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Pricing, booking & guarantees
            </p>
            <h2 className="text-4xl font-black text-slate-950 sm:text-5xl">
              Your Investment in a Lifelong Skill
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Lock in your seat today before the price increases.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border-2 border-amber-400 bg-white shadow-2xl shadow-slate-900/15">
            <div className="bg-amber-400 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-slate-950">
              Limited-time early bird pricing
            </div>

            <div className="p-8 sm:p-12">
              <div className="mb-8 flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-lg text-slate-500 line-through">
                    Standard: Rs. 14,999
                  </p>
                  <div className="mt-2 flex items-center text-5xl font-black text-slate-950">
                    <IndianRupee className="h-10 w-10" />
                    11,999
                  </div>
                  <p className="mt-2 font-semibold text-slate-600">
                    Includes Lunch + Certificate
                  </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-black uppercase text-emerald-800">
                  Save Rs. 3,000
                </span>
              </div>

              <div className="mb-8 rounded-3xl bg-slate-50 p-6">
                <p className="text-lg font-black text-slate-950">
                  Pay just Rs. 5,000 now to secure your seat.
                </p>
                <p className="mt-2 text-slate-600">
                  Pay the balance before the workshop.
                </p>
              </div>

              <div className="mb-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="font-black text-emerald-900">
                  100% Risk-Free Guarantee
                </p>
                <p className="mt-2 text-emerald-800">
                  Full refund if you are not satisfied after Day 1.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-5 text-lg font-black text-white shadow-lg transition-colors hover:bg-slate-800">
                  Book My Seat Now, Pay Rs. 5,000
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-5 text-lg font-black text-slate-950 transition-colors hover:bg-slate-50"
                  href="https://wa.me/"
                >
                  WhatsApp Us to Book
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>

              <p className="mt-4 text-center text-sm text-slate-500">
                Secure checkout. Balance payable before the workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/15 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Discovery call
            </p>
            <h2 className="text-4xl font-black">
              Not Sure If This Workshop Is Right for You?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Book a Free 20-Minute Call with Dr. Anand Kharat. Get honest
              answers tailored to your goals.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition-colors hover:bg-amber-300"
              href="tel:"
            >
              Book Your Free Call
              <PhoneCall className="h-5 w-5" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-black text-white transition-colors hover:bg-white/10"
              href="https://wa.me/"
            >
              WhatsApp Us
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Gallery & written testimonials
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              See the Energy, Then Read the Results
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex aspect-video flex-col items-center justify-center rounded-3xl bg-slate-100 text-slate-500">
                <ImageIcon className="mb-3 h-12 w-12 text-amber-500" />
                <p className="font-black">Photo Gallery Placeholder</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex aspect-video flex-col items-center justify-center rounded-3xl bg-slate-100 text-slate-500">
                <Video className="mb-3 h-12 w-12 text-amber-500" />
                <p className="font-black">Video Gallery Placeholder</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <div
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                key={testimonial.name}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      key={index}
                    />
                  ))}
                </div>
                <p className="leading-7 text-slate-700">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="mt-5 font-black text-slate-950">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8">
            <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-3xl bg-white text-center text-slate-500 shadow-inner">
              <Users className="mb-4 h-16 w-16 text-amber-500" />
              <p className="font-black">Professional Photo Placeholder</p>
              <p className="mt-2 text-sm">Dr. Anand Kharat</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Trainer bio
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Meet Your Trainer: Dr. Anand Kharat
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Master of Masters in Hypnosis, 10+ years experience, and Founder
              of Healing Light Hub. Dr. Anand Kharat has trained professionals
              across India through practical, safe, and transformation-focused
              hypnosis education.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <GraduationCap className="mb-3 h-7 w-7 text-amber-500" />
                <p className="font-black">Certified Clinical Hypnotherapist</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <Award className="mb-3 h-7 w-7 text-amber-500" />
                <p className="font-black">Master NLP Practitioner</p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-start gap-3 font-bold text-amber-900">
                <Newspaper className="mt-1 h-5 w-5 flex-shrink-0" />
                Featured in ANI News: 10 Change-Maker Indian Influential
                Personalities 2023.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              FAQ
            </p>
            <h2 className="text-4xl font-black text-slate-950 sm:text-5xl">
              Questions Before You Book?
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-slate-950">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Final call to action
          </p>
          <h2 className="text-4xl font-black sm:text-6xl">
            Don&apos;t Miss This. Seats Are Strictly Limited.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            You&apos;ve been looking for a tool that works at a deeper level.
            This is that training.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 text-left sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Dates", "14-15 June"],
              ["Time", "10 AM - 6 PM"],
              ["Venue", "Pune"],
              ["Reserve", "Rs. 5,000"],
              ["Early Bird", "Rs. 11,999"],
            ].map(([label, value]) => (
              <div className="rounded-2xl bg-white/[0.05] p-4" key={label}>
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-1 font-black text-white">{value}</p>
              </div>
            ))}
          </div>

          <a
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-5 text-lg font-black text-slate-950 shadow-xl shadow-amber-500/20 transition-colors hover:bg-amber-300"
            href="#pricing"
          >
            Lock My Seat Now, Pay Rs. 5,000 to Reserve
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 px-4 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black text-white">
              Anand Foundation, India | HealingLightHub.com
            </p>
            <p className="mt-2">[Phone] | [Email] | [WhatsApp]</p>
          </div>
          <div className="max-w-xl text-slate-400 md:text-right">
            <p>
              This site is not a part of Facebook or Meta Platforms, Inc.
              Additionally, this site is not endorsed by Facebook in any way.
              Copyright 2026 Anand Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
