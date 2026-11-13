export interface Project {
  title: string;
  category: "Mobile App" | "Website" | "Open Source Library";
  description: string;
  longDescription: string;
  images: string[];
  imageDescriptions?: Record<string, string>;
  screenshotNote?: string;
  cover?: string;
  tech: Record<string, string[]>;
  availability?: string;
  links?: {
    live?: string;
    github?: string;
    playStore?: string;
    appStore?: string;
  };
}

export const projects: Record<string, Project> = {
  glossarist: {
    title: "Glossarist",
    category: "Open Source Library",
    description:
      "A type safe internationalization (i18n) library for Kotlin Multiplatform projects",
    longDescription: `Glossarist is a simple, type safe internationalization library for Kotlin Multiplatform projects.

The library was born out of frustration with existing i18n solutions that required XML files, complex setup, or lacked proper type safety. I wanted something that felt natural in Kotlin with clean code, compile time safety, and zero boilerplate.

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
    links: {
      live: "https://tajji.io",
    },
  },
  bomaos: {
    title: "BomaOS",
    category: "Mobile App",
    description: "Track rent, manage maintenance, and communicate with tenants in one place.",
    longDescription: `BomaOS is the landlord side of TAJJI’s property platform. It brings rent and fee tracking, work orders, team coordination, and tenant communication into one app.

I designed the core mobile architecture, including sign-in, identity verification, and controls for rolling out features. Kotlin Multiplatform lets BomaOS share business logic across Android and iOS.`,
    images: [
      "/projects/bomaos/welcome.jpeg",
      "/projects/bomaos/earnings.jpeg",
      "/projects/bomaos/arrears.jpeg",
      "/projects/bomaos/ledger.jpeg",
      "/projects/bomaos/portfolio.jpeg",
      "/projects/bomaos/tenant.jpeg",
    ],
    imageDescriptions: {
      "/projects/bomaos/welcome.jpeg": "BomaOS welcome screen for landlords",
      "/projects/bomaos/earnings.jpeg": "Monthly earnings and lease overview",
      "/projects/bomaos/arrears.jpeg": "Overdue balances by lease",
      "/projects/bomaos/ledger.jpeg": "Payment ledger for rent and other charges",
      "/projects/bomaos/portfolio.jpeg": "Property portfolio with occupancy and collection figures",
      "/projects/bomaos/tenant.jpeg": "Tenant lease and payment history",
    },
    screenshotNote: "Screenshots use demo records. The properties, tenant details, and balances are examples.",
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS", " Desktop (Windows, Linux & macOS)"],
      Architecture: ["Clean Architecture", "MVI"],
      DevOps: ["CI/CD", "Fastlane", "GitHub Actions"],
    },
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=io.tajji.bomaos&pcampaignid=web_share",
    },
    availability:
      "Built for Android, iOS, and desktop",
  },
  jirani: {
    title: "Jirani",
    category: "Mobile App",
    description: "Manage leases, request maintenance, and stay in touch with landlords.",
    longDescription: `Jirani is the tenant side of TAJJI’s property platform. Renters can find their lease details, send maintenance requests, and communicate with their landlord from one app.

I worked on the shared mobile infrastructure for Jirani and BomaOS, giving both apps a common foundation while keeping their workflows specific to renters and landlords.`,
    images: [],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS"],
      Architecture: ["Clean Architecture", "MVI"],
      DevOps: ["CI/CD", "Fastlane", "GitHub Actions"],
    },
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=io.tajji.jiranios&pcampaignid=web_share",
    },
    availability: "Available on Android & iOS",
  },
  "fleurdah-website": {
    title: "Fleurdah Website",
    category: "Website",
    description: "Launch website for a playful nail set tracking app",
    longDescription: `Fleurdah's website introduces a simple, playful way to keep the history of every nail set, from first day photos and small repairs to removal, wear time, and total cost.

I refreshed the site around the real product experience, using the app's current visual language and an authentic app screenshot. The page clearly explains the set lifecycle and gives visitors a path from learning about Fleurdah to downloading it.

The result is a responsive landing page with focused messaging, smooth motion, and a direct path to the live Fleurdah experience.`,
    images: ["/projects/fleurdah/hero-current.png"],
    tech: {
      Framework: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      Animation: ["Framer Motion"],
    },
    links: {
      live: "https://fleurdah.com",
    },
  },
  "fleurdah-app": {
    title: "Fleurdah",
    category: "Mobile App",
    description: "A nail set tracker for photos, care, repairs, wear time, and spending.",
    longDescription: `Fleurdah is a cross platform nail set tracker designed to give every set a complete, useful history.

Users can record a new set, add photos, track care, maintenance and repairs, then complete the journey at removal. Fleurdah brings wear time, set history, expenditure, and cost per day insights together in one playful experience that is easy to use.

I built the app with Kotlin Multiplatform and Compose Multiplatform so the Android and iOS experiences share product logic and a consistent design system.`,
    images: ["/projects/fleurdah-app/home.png"],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      Platforms: ["Android", "iOS"],
      "Key Features": ["Set History", "Photo Journaling", "Wear & Cost Insights"],
      Libraries: ["Glossarist (i18n)", "Ktor", "SQLDelight", "Supabase"],
    },
    links: {
      live: "https://fleurdah.com",
      appStore: "https://apps.apple.com/app/id6809422960",
    },
  },
  "verse-website": {
    title: "Verse & Voice Website",
    cover: "/projects/verse.png",
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
    links: {
      live: "https://verseandvoice.app",
    },
  },
  "verse-app": {
    title: "Verse & Voice",
    category: "Mobile App",
    description: "A Bible app with personalized narration, guided prayers, and a built-in KJV reader.",
    longDescription: `Verse & Voice brings Scripture to life, responding to your personal profile, prayer lists, and emotions.

Hear the Bible read aloud and access emotion specific devotions customized with your name. Select your current emotion, whether Peace, Fear, Anger, Anxiety, Joy, or Grief, to receive curated verses and natural voice blessings featuring your name, written specifically to support you in that exact moment.

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
    links: {
      live: "https://verseandvoice.app",
      appStore: "https://apps.apple.com/us/app/verse-voice-bible-prayer/id6757763408",
      playStore: "https://play.google.com/store/apps/details?id=com.voiceandverse",
    },
    availability: "Available on Android & iOS",
  },
  cityhomes: {
    title: "City Homes Kenya",
    category: "Website",
    description: "A booking website for stays and curated travel experiences across Kenya.",
    cover: "/projects/cityhomes.png",
    longDescription: `City Homes Kenya is a premium platform for discovering and booking luxury accommodations and curated travel experiences across Kenya.

I built the entire frontend of the platform, which features property listings, booking management, tour packages, and an admin dashboard for property owners. The design emphasizes high quality imagery and a smooth user experience to match the luxury positioning of the brand.

The project was a collaborative effort with a backend developer, which gave me valuable experience in API integration and coordination across the full stack.`,
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
    links: {
      live: "https://cityhomeskenya.com",
    },
  },
  mylifepool: {
    title: "MyLifePool",
    category: "Mobile App",
    description:
      "Community support platform rebuilt for scalability and expansion",
    longDescription: `MyLifePool is a social enterprise in the UK serving the Harrogate community, with plans for nationwide expansion.

I was brought in to completely modernize their mobile stack, rewriting the entire app from a legacy setup to Kotlin Multiplatform. This transformation significantly reduced technical debt and enabled the scalability needed for UK-wide expansion.

I also established their complete mobile DevOps infrastructure including CI/CD pipelines, automated testing workflows, and app store deployment automation. The app successfully launched to internal testing and public beta, with positive feedback on the improved performance and new features.`,
    images: [
      "/projects/mylifepool/groups.jpeg",
      "/projects/mylifepool/discounts.jpeg",
      "/projects/mylifepool/events.jpeg",
    ],
    tech: {
      Framework: ["Kotlin Multiplatform", "Compose Multiplatform"],
      DevOps: ["CI/CD", "Automated Testing", "Play Store Automation"],
      Platforms: ["Android", "iOS"],
    },
    availability: "Available to UK residents only",
  },

  givetobetterlives: {
    title: "Give To Better Lives",
    category: "Website",
    description: "Charity website for a nonprofit in Kenya",
    longDescription: `Give To Better Lives is a charity platform built for a nonprofit organization dedicated to improving the lives of families and children in Kenya.

The site needed to do one thing above all else: inspire people to give. I built it around that goal with clear storytelling, a frictionless PayPal donation flow, and a contact form with direct email delivery via FormSubmit.

The design uses a warm dark green and orange palette that feels human and trustworthy, with a hero section, service cards, and a feature layout that communicates the organization's mission without overwhelming visitors.

Fully responsive and deployed as a single page experience with smooth scroll navigation.`,
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
    links: {
      live: "https://givetobetterlives.com",
    },
  },
};

export const featuredProjectIds = [
  "bomaos",
  "jirani",
  "fleurdah-app",
  "verse-app",
  "cityhomes",
];

export const projectIds = [
  ...featuredProjectIds,
  ...Object.keys(projects).filter((id) => !featuredProjectIds.includes(id)),
];
