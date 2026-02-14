import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { WorksGrid } from "../components/WorksGrid";

export const metadata = {
  title: "My Works | Lazarus Mugo",
  description:
    "A collection of mobile apps, web applications, and open-source libraries I've built",
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
              A collection of mobile applications, web platforms, and
              open-source libraries I've built. Each project showcases different
              aspects of cross-platform development and modern web technologies.
            </p>
          </div>

          <WorksGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}
