import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { WorksGrid } from "../components/WorksGrid";

export const metadata = {
  title: "My Works | Lazarus Mugo",
  description:
    "Mobile applications, cross platform products, web platforms, and open source libraries built by mobile engineer Lazarus Mugo.",
};

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-50 rounded-full text-sm font-medium border border-purple-100 text-slate-700 mb-6">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              My Works
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mobile products are at the center of my work, from Android and iOS
              apps to shared Kotlin Multiplatform infrastructure. This collection
              also includes the web platforms and open source tools that support
              those product experiences.
            </p>
          </div>

          <WorksGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}
