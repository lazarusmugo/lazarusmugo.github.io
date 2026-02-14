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
    
    The library was born out of frustration with existing i18n solutions that required XML files, complex setup, or lacked proper type safety. I wanted something that felt natural in Kotlin - clean code, compile-time safety, and zero boilerplate.

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
    title: "TAJJI Platform",
    category: "Website",
    description:
      "Complete real estate platform connecting landlords and renters",
    longDescription: `TAJJI is a comprehensive real estate platform built with SvelteKit that bridges the gap between property owners and renters in Kenya.

    The platform consists of two main products: Boma, a powerful property management tool for landlords, and Jirani, a seamless renting experience for tenants. 

    I built the frontend architecture, establishing design patterns and component libraries that enabled rapid feature development while maintaining consistency across the platform. The website serves as the central hub for users to discover the products and understand how TAJJI simplifies real estate management.`,
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
  "tajji-apps": {
    title: "Boma & Jirani Apps",
    category: "Mobile App",
    description: "Cross-platform property management and rental applications",
    longDescription: `Boma and Jirani are production mobile and desktop applications built entirely with Kotlin Multiplatform and Compose Multiplatform, serving landlords and tenants respectively.

    These apps represent the culmination of extensive work in cross-platform development. I architected and developed 6+ internal KMP libraries that power these apps, including authentication, identity verification, internationalization, feature flags, and more. This infrastructure enabled us to share 100% of business logic across Android, iOS and Desktop while maintaining native performance.

    I also established the complete DevOps pipeline, including CI/CD automation, crash analytics, and Play Store deployment workflows.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS", "Desktop"],
      Architecture: ["Clean Architecture", "MVI"],
      "Internal Libraries": [
        "Authentication SDK",
        "Identity Verification",
        "Feature Flags",
        "i18n",
      ],
      DevOps: ["CI/CD", "Fastlane", "GitHub Actions"],
    },
    status: "In Development",
  },
  "fleurdah-website": {
    title: "Fleurdah Website",
    category: "Website",
    description: "AI-powered nail design platform with 3D visualization",
    longDescription: `Fleurdah's website serves as the landing page and web interface for an innovative nail design platform that leverages AI and 3D technology.

    Built with Next.js, the website provides information about the platform's features, showcases the AI-powered nail design capabilities, and serves as the entry point for users to download the mobile app or explore virtual nail try-ons.

    The site features smooth animations, responsive design, and optimized performance to ensure users can quickly understand and access Fleurdah's unique nail design experience.`,
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

    Built with Kotlin Multiplatform, the app uses Glossarist (my i18n library) for internationalization, demonstrating how my open-source work integrates into production applications. The app is currently in development with plans for both iOS and Android release.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS"],
      "Key Features": ["3D Rendering", "AI Integration", "Camera Integration"],
      Libraries: ["Glossarist (i18n)", "Ktor", "SQLDelight"],
    },
    status: "In Development",
  },
  "verse-website": {
    title: "Verse & Voice Website",
    category: "Website",
    description:
      "Interactive Scripture platform with AI-powered personalization",
    longDescription: `The Verse & Voice website introduces users to a revolutionary way of experiencing Scripture through personalized 3D videos and AI-generated narration.

    Built with Next.js, the website showcases the platform's unique features including personalized verses where Jesus speaks directly to you by name, emotional support features, and daily prayers. The site integrates with HeyGen's API for promotional content and serves as the main landing page for app downloads.

    The website features engaging animations and clear feature explanations that help potential users understand the spiritual depth and technological innovation behind Verse & Voice.`,
    images: ["/projects/verse.png"],
    tech: {
      Framework: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      APIs: ["HeyGen API"],
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
      "Experience Scripture with personalized 3D videos and AI narration",
    longDescription: `Verse & Voice brings Scripture to life through cutting-edge technology, offering users personalized spiritual experiences.

    The app features 3D video rendering where Jesus delivers verses directly to users, AI-powered voice narration that speaks their name, and emotional support matching Scripture to users' current feelings. I built both the iOS and Android versions using Kotlin Multiplatform, ensuring feature parity and native performance across platforms.

    The technical challenges included optimizing 3D video playback, implementing sophisticated caching strategies for media content, and creating a seamless offline experience for daily prayers and verses.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS"],
      "Key Features": ["3D Video", "AI Narration", "Offline Support"],
      Media: ["ExoPlayer", "AVPlayer"],
    },
    status: "Live",
  },
  cityhomes: {
    title: "City Homes Kenya",
    category: "Website",
    description: "Luxury travel and accommodation booking platform",
    longDescription: `City Homes Kenya is a premium platform for discovering and booking luxury accommodations and curated travel experiences across Kenya.

    Working alongside backend developer Arnold, I built the entire frontend using SvelteKit. The platform features property listings, booking management, tour packages, and an admin dashboard for property owners. The design emphasizes high-quality imagery and smooth user experience to match the luxury positioning of the brand.

    The collaboration with Arnold taught me valuable lessons about API integration and full-stack coordination, resulting in a polished platform that serves both travelers and property owners effectively.`,
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
    longDescription: `MyLifePool is a UK-based social enterprise serving the Harrogate community with plans for nationwide expansion.

    I was brought in to completely modernize their mobile stack, rewriting the entire app from a legacy Ionic/WordPress setup to Kotlin Multiplatform. This transformation reduced technical debt significantly and enabled the scalability needed for UK-wide expansion.

    Beyond the rewrite, I established their complete mobile DevOps infrastructure including CI/CD pipelines, automated testing workflows, and Play Store deployment automation. The app successfully launched to internal testing and public beta, with positive feedback on performance improvements and new features.`,
    images: ["placeholder"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Migration: ["From Ionic to KMP"],
      DevOps: ["CI/CD", "Automated Testing", "Play Store Automation"],
      Platforms: ["Android", "iOS"],
    },
    status: "Live",
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
