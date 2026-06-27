// app/works/[id]/page.tsx
import { Navbar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/app/components/ProjectDetails";

const projects = {
  glossarist: {
    title: "Glossarist",
    category: "Open Source Library",
    description:
      "A type-safe internationalization (i18n) library for Kotlin Multiplatform projects",
    longDescription: `Glossarist is a simple, type-safe internationalization library for Kotlin Multiplatform projects.

The library was born out of frustration with existing i18n solutions that required XML files, complex setup, or lacked proper type safety. I wanted something that felt natural in Kotlin — clean code, compile-time safety, and zero boilerplate.

Currently being used in production in Fleurdah and other projects, Glossarist provides automatic validation of translations, supports pluralization, and works seamlessly across JVM, iOS, Android, JS, and Native platforms.`,
    images: ["/projects/glossarist.png"],
    tech: {
      Language: ["Kotlin"],
      Platforms: ["Android", "iOS", "JVM", "JS", "Native"],
      "Key Features": [
        "Type Safety",
        "Auto Validation",
        "Pluralization",
        "Custom Locales",
      ],
    },
    status: "In Development",
    links: {
      github: "https://github.com/lazarusmugo/Glossarist",
    },
  },
  tajji: {
    title: "Tajji Website",
    category: "Website",
    description:
      "Complete real estate platform connecting landlords and renters",
    longDescription: `TAJJI is a comprehensive real estate platform that bridges the gap between property owners and renters in Kenya.

The platform consists of two main products: BomaOS, a powerful property management tool for landlords, and Jirani, a seamless renting experience for tenants.

I built the frontend architecture, establishing design patterns and component libraries that enabled rapid feature development while maintaining consistency across the platform. The website serves as the central hub for users to discover both products and understand how TAJJI simplifies real estate management.`,
    images: [
      "/projects/tajji.png",
      "/projects/tajji/1.png",
      "/projects/tajji/2.png",
      "/projects/tajji/3.png",
      "/projects/tajji/4.png",
      "/projects/tajji/5.png",
    ],
    tech: {
      Frontend: ["SvelteKit", "TypeScript", "Tailwind CSS"],
      "State Management": ["Svelte Stores"],
    },
    status: "Live",
    links: {
      live: "https://tajji.io",
    },
  },
  bomaos: {
    title: "BomaOS",
    category: "Mobile App",
    description: "Property management app for landlords at any scale",
    longDescription: `BomaOS transforms your informal, chaotic property operations and finances into structured and governed operations.

BomaOS aligns rent & fee cashflows, work orders, workforce and tenant communications at your scale of operations. Whether you manage one property or a large portfolio, BomaOS gives you the clarity and control to run things properly.

Built with Kotlin Multiplatform, the app shares 100% of business logic across Android and iOS while maintaining native performance on both platforms. I architected the core infrastructure including authentication, identity verification, and feature flag systems that power the app.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS", " Desktop (Windows, Linux & macOS)"],
      Architecture: ["Clean Architecture", "MVI"],
      DevOps: ["CI/CD", "Fastlane", "GitHub Actions"],
    },
    status: "Live",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=io.tajji.bomaos&pcampaignid=web_share",
    },
    availability:
      "Available on Android ,iOS & Desktop (Windows, Linux & macOS)",
  },
  jirani: {
    title: "Jirani",
    category: "Mobile App",
    description: "Manage your leases and tenancy experiences all in one place",
    longDescription: `Jirani puts tenants in control of their entire renting experience — from lease management to maintenance requests and communications with landlords.

Manage your leases and tenancy experiences all in one place. Jirani keeps everything organized so you always know where you stand with your tenancy.

Built alongside BomaOS as part of the TAJJI ecosystem, Jirani shares the same robust cross-platform infrastructure while delivering an experience tailored specifically to the needs of renters.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS"],
      Architecture: ["Clean Architecture", "MVI"],
      DevOps: ["CI/CD", "Fastlane", "GitHub Actions"],
    },
    status: "Live",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=io.tajji.jiranios&pcampaignid=web_share",
    },
    availability: "Available on Android & iOS",
  },
  "fleurdah-website": {
    title: "Fleurdah Website",
    category: "Website",
    description: "AI-powered nail design platform with 3D visualization",
    longDescription: `Fleurdah's website serves as the landing page and web interface for an innovative nail design platform.

The site provides information about the platform's features, showcases the AI-powered nail design capabilities, and serves as the entry point for users to explore what Fleurdah offers.

It features smooth animations, responsive design, and optimized performance to ensure users can quickly understand and access Fleurdah's unique nail design experience.`,
    images: [
      "/projects/fleurdah/1.png",
      "/projects/fleurdah/2.png",
      "/projects/fleurdah/3.png",
      "/projects/fleurdah/4.png",
      "/projects/fleurdah/5.png",
    ],
    tech: {
      Framework: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      Animation: ["Framer Motion"],
    },
    status: "Live",
    links: {
      live: "https://fleurdah.com",
    },
  },
  "fleurdah-app": {
    title: "Fleurdah Mobile App",
    category: "Mobile App",
    description:
      "Design and try on nails in 3D with AI-powered personalization",
    longDescription: `Fleurdah is my personal project that combines AI, 3D rendering, and mobile technology to revolutionize how people design and visualize nail art.

The app allows users to design custom nail art, try it on virtually using 3D models of their own hands, and share designs with their community. For nail technicians, it provides scheduling tools, portfolio management, and client tracking features.

The app is currently in development with plans for both iOS and Android release.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS"],
      "Key Features": ["3D Rendering", "AI Integration", "Camera Integration"],
      Libraries: ["Glossarist (i18n)", "Ktor", "SQLDelight"],
    },
    status: "In Development",
    availability: "Not yet available",
  },
  "verse-website": {
    title: "Verse & Voice Website",
    category: "Website",
    description:
      "Landing page for Verse & Voice, a Bible app featuring personalized emotional devotions",
    longDescription: `The Verse & Voice website introduces users to a revolutionary way of experiencing Scripture where Jesus speaks your name.

It serves as the central hub for the Verse & Voice platform, showcasing its features: personalized emotional devotions, intercessory prayer profiles for loved ones, and the embedded KJV Bible. The site highlights the contrast between Pro and Premium cinematic moving video backgrounds and provides a seamless download experience.`,
    images: [
      "/projects/vnv-web/1.png",
      "/projects/vnv-web/1-d.png",
      "/projects/vnv-web/2.png",
      "/projects/vnv-web/3.png",
      "/projects/vnv-web/4.png",
      "/projects/vnv-web/5.png",
    ],
    tech: {
      Framework: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      Animation: ["Framer Motion"],
    },
    status: "In Development",
    links: {
      live: "https://verseandvoice.app",
    },
  },
  "verse-app": {
    title: "Verse & Voice App",
    category: "Mobile App",
    description:
      "Verse & Voice is a Bible app featuring personalized emotional devotions. Hear scripture read aloud, and access guided prayers and emotion-specific devotions customized with your name.",
    longDescription: `Verse & Voice brings Scripture to life, responding to your personal profile, prayer lists, and emotions.

Hear the Bible read aloud and access emotion-specific devotions customized with your name. Select your current emotion—Peace, Fear, Anger, Anxiety, Joy, or Grief—to receive curated verses and natural voice blessings featuring your name, written specifically to support you in that exact moment.

The app also features Intercessory Prayers, allowing you to create dedicated prayer request profiles for loved ones with a searchable library of situation-specific prayers. Additionally, access the complete embedded KJV Bible from the app, navigate by book and chapter, and stream your favorite scriptures on demand.`,
    images: [
      "/projects/vnv-app/homescreen.png",
      "/projects/vnv-app/daily-prayers.png",
      "/projects/vnv-app/emotion-prayer.png",
      "/projects/vnv-app/bible.png",
      "/projects/vnv-app/favourites.png",
      "/projects/vnv-app/login-light.png",
      "/projects/vnv-app/login-dark.png",
      "/projects/vnv-app/prayer-list-mothers.png",
      "/projects/vnv-app/prayer-request-screen.png"
    ],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS"],
      "Key Features": ["Personalized Devotions", "Natural Voice Narration", "Embedded Bible"],
    },
    status: "Live",
    links: {
      live: "https://verseandvoice.app",
    },
    availability: "Available on Android & iOS",
  },
  cityhomes: {
    title: "City Homes Kenya",
    category: "Website",
    description: "Luxury travel and accommodation booking platform",
    longDescription: `City Homes Kenya is a premium platform for discovering and booking luxury accommodations and curated travel experiences across Kenya.

I built the entire frontend of the platform, which features property listings, booking management, tour packages, and an admin dashboard for property owners. The design emphasizes high-quality imagery and a smooth user experience to match the luxury positioning of the brand.

The project was a collaborative effort with a backend developer, which gave me valuable experience in API integration and full-stack coordination.`,
    images: [
      "/projects/city/1.png",
      "/projects/city/2.png",
      "/projects/city/3.png",
      "/projects/city/4.png",
      "/projects/city/5.png",
      "/projects/city/6.png",
      "/projects/city/7.png",
    ],
    tech: {
      Frontend: ["SvelteKit", "TypeScript", "Tailwind CSS"],
      Features: ["Property Listings", "Booking System", "Tour Packages"],
    },
    status: "Live",
    links: {
      live: "https://cityhomeskenya.com",
    },
  },
  mylifepool: {
    title: "MyLifePool",
    category: "Mobile App",
    description:
      "Community support platform rebuilt for scalability and expansion",
    longDescription: `MyLifePool is a UK-based social enterprise serving the Harrogate community, with plans for nationwide expansion across the UK.

I was brought in to completely modernize their mobile stack, rewriting the entire app from a legacy setup to Kotlin Multiplatform. This transformation significantly reduced technical debt and enabled the scalability needed for UK-wide expansion.

I also established their complete mobile DevOps infrastructure including CI/CD pipelines, automated testing workflows, and app store deployment automation. The app successfully launched to internal testing and public beta, with positive feedback on the improved performance and new features.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      DevOps: ["CI/CD", "Automated Testing", "Play Store Automation"],
      Platforms: ["Android", "iOS"],
    },
    status: "Live",
    availability: "Available to UK residents only",
  },

  givetobetterlives: {
    title: "Give To Better Lives",
    category: "Website",
    description: "Charity website for a Kenya-based nonprofit",
    longDescription: `Give To Better Lives is a charity platform built for a nonprofit organization dedicated to improving the lives of families and children in Kenya.

The site needed to do one thing above all else: inspire people to give. I built it around that goal — clear storytelling, a frictionless PayPal donation flow, and a contact form with direct email delivery via FormSubmit.

The design uses a warm dark green and orange palette that feels human and trustworthy, with a hero section, service cards, and a feature layout that communicates the organization's mission without overwhelming visitors.

Fully responsive and deployed as a single-page experience with smooth scroll navigation.`,
    images: [
      "/projects/gtbl/1.png",
      "/projects/gtbl/2.png",
      "/projects/gtbl/3.png",
    ],
    tech: {
      Frontend: ["SvelteKit", "TypeScript", "Tailwind CSS"],
      Features: [
        "PayPal Donation Integration",
        "Contact Form",
        "Smooth Scroll Navigation",
      ],
    },
    status: "Live",
    links: {
      live: "https://givetobetterlives.com",
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id: id,
  }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects[id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectDetails project={project} />
      <Footer />
    </div>
  );
}
