import { useState } from 'react';
import { Menu, X, Moon, Sun, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme, accentColor, schoolName, toggleTheme, setAccentColor } = useTheme();

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'news', label: 'News' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const accentColors = [
    { id: 'blue', class: 'bg-blue-500' },
    { id: 'green', class: 'bg-green-500' },
    { id: 'purple', class: 'bg-purple-500' },
    { id: 'orange', class: 'bg-orange-500' },
    { id: 'red', class: 'bg-red-500' },
    { id: 'teal', class: 'bg-teal-500' },
    { id: 'indigo', class: 'bg-indigo-500' },
    { id: 'pink', class: 'bg-pink-500' },
    { id: 'slate', class: 'bg-slate-500' },
    { id: 'rose', class: 'bg-rose-500' },
  ];

  const handlePageChange = (pageId: string) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300" data-design-theme>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handlePageChange('home')}
              className="text-2xl font-light tracking-tight text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
            >
              {schoolName}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handlePageChange(page.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    currentPage === page.id
                      ? 'text-accent-600 bg-accent-50 dark:text-accent-400 dark:bg-accent-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Controls */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <Settings className="h-5 w-5" />
              </button>
              
              {isThemeOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                    <button
                      onClick={toggleTheme}
                      className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {theme === 'light' ? (
                        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Accent Color</span>
                    <div className="grid grid-cols-5 gap-2">
                      {accentColors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setAccentColor(color.id as any)}
                          className={`w-6 h-6 rounded-lg ${color.class} transition-transform hover:scale-110 ${
                            accentColor === color.id ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500' : ''
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    handlePageChange(page.id);
                  }}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 rounded-lg w-full text-left ${
                    currentPage === page.id
                      ? 'text-accent-600 bg-accent-50 dark:text-accent-400 dark:bg-accent-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}