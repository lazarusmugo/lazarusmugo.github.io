"use client";

const RebrandingPage = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold  mb-8">
            Hey, I'm rebranding and re-building this!
          </h1>

          <p className="text-2xl md:text-3xl  mb-12">
            Please take my Resume with you and check back later!
          </p>

          <a
            href="/Lazarus_Mugo.pdf"
            download
            className="inline-block text-xl underline hover:text-gray-600 transition-colors"
          >
            Download Resume →
          </a>
        </div>
      </main>
    </>
  );
};

export default RebrandingPage;
