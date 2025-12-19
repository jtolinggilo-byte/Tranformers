
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Careers from './components/pages/Careers';
import Contact from './components/pages/Contact';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('home');

  // Handle browser back/forward and initial load
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.replace('#', '') || 'home';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Initial check

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'projects': return <Projects />;
      case 'blog': return <Blog />;
      case 'careers': return <Careers />;
      case 'contact': return <Contact />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Navbar navigate={navigate} currentPath={currentPath} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <Chatbot />
    </div>
  );
};

export default App;
