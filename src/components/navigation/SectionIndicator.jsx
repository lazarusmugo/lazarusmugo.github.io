import { useEffect, useState } from 'react';

const SectionIndicator = () => {
  const [currentSection, setCurrentSection] = useState('introduction');

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
      <ul className="fixed top-4 right-2 z-50  flex-col items-center mt-20 hidden lg:flex">
        {['introduction', 'about-me', 'skills-and-technologies', 'projects', 'testimonials', 'contact-me'].map((section) => (
          <li key={section} className="mb-4">
            <div className={`w-3 h-3 rounded-full ${currentSection === section ? 'bg-white' : 'bg-gray-500'}`}>
              <div className={`w-full h-full transform ${currentSection === section ? 'rotate-45' : ''}`}>
                {/* Diamond shape */}
                <div className={`absolute w-full h-full bg-transparent border-2 border-white transform rotate-45`} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {renderIndicators()}
    </>
  );
};

export default SectionIndicator;
