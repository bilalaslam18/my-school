import { useState } from 'react';
import { Settings, X, Palette, LayoutGrid as Layout, Image, Type, Sparkles, Contact as Font } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Configurator() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('colors');
  
  const { 
    theme, 
    accentColor, 
    designTheme, 
    layout, 
    fontFamily,
    heroBackground, 
    schoolName, 
    schoolTagline,
    toggleTheme, 
    setAccentColor, 
    setDesignTheme, 
    setLayout, 
    setFontFamily,
    setHeroBackground, 
    setSchoolName, 
    setSchoolTagline 
  } = useTheme();

  const accentColors = [
    { id: 'blue', name: 'Ocean Blue', class: 'bg-blue-500' },
    { id: 'green', name: 'Forest Green', class: 'bg-green-500' },
    { id: 'purple', name: 'Royal Purple', class: 'bg-purple-500' },
    { id: 'orange', name: 'Sunset Orange', class: 'bg-orange-500' },
    { id: 'red', name: 'Crimson Red', class: 'bg-red-500' },
    { id: 'teal', name: 'Teal Blue', class: 'bg-teal-500' },
    { id: 'indigo', name: 'Deep Indigo', class: 'bg-indigo-500' },
    { id: 'pink', name: 'Rose Pink', class: 'bg-pink-500' },
    { id: 'yellow', name: 'Golden Yellow', class: 'bg-yellow-500' },
    { id: 'emerald', name: 'Emerald Green', class: 'bg-emerald-500' },
    { id: 'slate', name: 'Slate Gray', class: 'bg-slate-500' },
    { id: 'rose', name: 'Rose Red', class: 'bg-rose-500' },
  ];

  const designThemes = [
    { id: 'modern', name: 'Modern', description: 'Sleek contemporary design with subtle shadows' },
    { id: 'minimal', name: 'Minimal', description: 'Ultra-clean with maximum white space and thin borders' },
    { id: 'classic', name: 'Classic', description: 'Refined elegance with balanced proportions' },
    { id: 'bold', name: 'Bold', description: 'Strong contrasts with prominent visual elements' },
    { id: 'vintage', name: 'Vintage', description: 'Warm tones with nostalgic design elements' },
  ];

  const layouts = [
    { id: 'default', name: 'Default', description: 'Balanced layout with standard spacing' },
    { id: 'centered', name: 'Centered', description: 'Content centered with narrow max-width' },
    { id: 'wide', name: 'Wide', description: 'Full-width layout for maximum content' },
    { id: 'compact', name: 'Compact', description: 'Tighter spacing for information density' },
  ];

  const fontFamilies = [
    { id: 'inter', name: 'Inter', description: 'Modern and highly readable sans-serif' },
    { id: 'poppins', name: 'Poppins', description: 'Geometric sans-serif with friendly feel' },
    { id: 'roboto', name: 'Roboto', description: 'Google\'s versatile and clean typeface' },
    { id: 'playfair', name: 'Playfair Display', description: 'Elegant serif for sophisticated look' },
    { id: 'source-sans', name: 'Source Sans Pro', description: 'Adobe\'s professional sans-serif' },
    { id: 'montserrat', name: 'Montserrat', description: 'Urban-inspired geometric typeface' },
  ];

  const backgroundImages = [
    'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ];

  const tabs = [
    { id: 'colors', label: 'Colors', icon: Palette },
    { id: 'themes', label: 'Themes', icon: Sparkles },
    { id: 'fonts', label: 'Fonts', icon: Font },
    { id: 'layouts', label: 'Layouts', icon: Layout },
    { id: 'backgrounds', label: 'Backgrounds', icon: Image },
    { id: 'content', label: 'Content', icon: Type },
  ];

  return (
    <>
      {/* Configurator Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-accent-600 text-white p-4 rounded-full shadow-lg hover:bg-accent-700 transition-colors"
      >
        <Settings className="h-6 w-6" />
      </button>

      {/* Configurator Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="w-96 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-light text-gray-900 dark:text-white">
                  Site Configurator
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Customize your school's website appearance
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-accent-600 text-accent-600 dark:text-accent-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Colors Tab */}
              {activeTab === 'colors' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Theme Mode
                    </h3>
                    <div className="flex space-x-3">
                      <button
                        onClick={toggleTheme}
                        className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                          theme === 'light'
                            ? 'border-accent-600 bg-accent-50 dark:bg-accent-900/30'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Light</div>
                      </button>
                      <button
                        onClick={toggleTheme}
                        className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                          theme === 'dark'
                            ? 'border-accent-600 bg-accent-50 dark:bg-accent-900/30'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Dark</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Accent Color
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {accentColors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setAccentColor(color.id as any)}
                          className={`flex items-center space-x-2 p-2 rounded-lg border-2 transition-colors ${
                            accentColor === color.id
                              ? 'border-accent-600 bg-accent-50 dark:bg-accent-900/30'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          <div className={`w-3 h-3 rounded-full ${color.class} flex-shrink-0`} />
                          <span className="text-xs font-medium text-gray-900 dark:text-white truncate">
                            {color.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Themes Tab */}
              {activeTab === 'themes' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Design Theme
                  </h3>
                  {designThemes.map((themeOption) => (
                    <button
                      key={themeOption.id}
                      onClick={() => setDesignTheme(themeOption.id as any)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                        designTheme === themeOption.id
                          ? 'border-accent-600 bg-accent-50 dark:bg-accent-900/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white mb-1">
                        {themeOption.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {themeOption.description}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Fonts Tab */}
              {activeTab === 'fonts' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Typography
                  </h3>
                  {fontFamilies.map((font) => (
                    <button
                      key={font.id}
                      onClick={() => setFontFamily(font.id as any)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                        fontFamily === font.id
                          ? 'border-accent-600 bg-accent-50 dark:bg-accent-900/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white mb-1" style={{
                        fontFamily: font.id === 'inter' ? 'Inter, sans-serif' :
                                   font.id === 'poppins' ? 'Poppins, sans-serif' :
                                   font.id === 'roboto' ? 'Roboto, sans-serif' :
                                   font.id === 'playfair' ? 'Playfair Display, serif' :
                                   font.id === 'source-sans' ? 'Source Sans Pro, sans-serif' :
                                   font.id === 'montserrat' ? 'Montserrat, sans-serif' : 'inherit'
                      }}>
                        {font.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {font.description}
                      </div>
                      <div className="text-lg mt-2 text-gray-800 dark:text-gray-200" style={{
                        fontFamily: font.id === 'inter' ? 'Inter, sans-serif' :
                                   font.id === 'poppins' ? 'Poppins, sans-serif' :
                                   font.id === 'roboto' ? 'Roboto, sans-serif' :
                                   font.id === 'playfair' ? 'Playfair Display, serif' :
                                   font.id === 'source-sans' ? 'Source Sans Pro, sans-serif' :
                                   font.id === 'montserrat' ? 'Montserrat, sans-serif' : 'inherit'
                      }}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Layouts Tab */}
              {activeTab === 'layouts' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Layout Style
                  </h3>
                  {layouts.map((layoutOption) => (
                    <button
                      key={layoutOption.id}
                      onClick={() => setLayout(layoutOption.id as any)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                        layout === layoutOption.id
                          ? 'border-accent-600 bg-accent-50 dark:bg-accent-900/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white mb-1">
                        {layoutOption.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {layoutOption.description}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Backgrounds Tab */}
              {activeTab === 'backgrounds' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Hero Background
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {backgroundImages.map((bg, index) => (
                      <button
                        key={index}
                        onClick={() => setHeroBackground(bg)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                          heroBackground === bg
                            ? 'border-accent-600'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        <img
                          src={bg}
                          alt={`Background ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {heroBackground === bg && (
                          <div className="absolute inset-0 bg-accent-600/20 flex items-center justify-center">
                            <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Content Tab */}
              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      School Tagline
                    </label>
                    <input
                      type="text"
                      value={schoolTagline}
                      onChange={(e) => setSchoolTagline(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Preview</h4>
                    <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                      {schoolName}
                    </div>
                    <div className="text-accent-600 dark:text-accent-400">
                      {schoolTagline}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Changes are saved automatically
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}