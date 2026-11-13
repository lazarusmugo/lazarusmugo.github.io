import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { WorksGrid } from "../components/WorksGrid";

export const metadata = {
  title: "Projects | Lazarus Mugo",
  description:
    "Mobile applications, cross platform products, web platforms, and open source libraries built by mobile engineer Lazarus Mugo.",
};

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 rounded-3xl bg-main-purple px-5 py-10 text-center md:mb-14 md:px-10 md:py-16">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
              Projects
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-700">
              Android and iOS apps, websites, and open source tools I’ve worked on.
            </p>
          </div>

          <WorksGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}
