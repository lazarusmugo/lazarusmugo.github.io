import { useEffect, useState } from 'react';

const SectionIndicator = () => {
  const [currentSection, setCurrentSection] = useState('introduction');

  const sectionColors = {
    introduction: "bg-custom-blue border-custom-blue",
    skills: "bg-custom-blue border-custom-blue",
    "about-me": "bg-custom-green border-custom-green",
    portfolio: "bg-custom-blue border-custom-blue",
    "contact-me": "bg-custom-blue border-custom-blue",
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(sectionId);
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderIndicators = () => {
    return (
      <ul className="fixed bottom-56 right-24 z-50 flex-col items-center mt-20 hidden lg:flex">
        {['introduction', 'skills', 'about-me', 'portfolio', 'contact-me'].map((section) => (
          <li key={section} className="mb-4">
            <div className="relative w-3 h-3">
              <div
                className={`absolute top-0 left-0 w-full h-full transform border-2 ${
                  sectionColors[currentSection]
                } ${currentSection === section ? "rotate-0 bg-transparent" : "rotate-45"} ${
                  currentSection === section ? "bg-transparent" : ""
                }`}
                style={{
                  transition: "transform 0.3s",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return <>{renderIndicators()}</>;
};

export default SectionIndicator;
