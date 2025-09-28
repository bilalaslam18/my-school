import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Configurator from './components/Configurator';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import AcademicsPage from './components/pages/AcademicsPage';
import AdmissionsPage from './components/pages/AdmissionsPage';
import FacultyPage from './components/pages/FacultyPage';
import NewsPage from './components/pages/NewsPage';
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'faculty':
        return <FacultyPage />;
      case 'news':
        return <NewsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer />
        <Configurator />
      </div>
    </ThemeProvider>
  );
}

export default App;