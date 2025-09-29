import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type AccentColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal' | 'indigo' | 'pink' | 'yellow' | 'emerald' | 'slate' | 'rose';
type DesignTheme = 'modern' | 'classic' | 'vintage' | 'minimal' | 'bold';
type Layout = 'default' | 'centered' | 'wide' | 'compact';
type FontFamily = 'inter' | 'poppins' | 'roboto' | 'playfair' | 'source-sans' | 'montserrat';

interface ThemeContextType {
  theme: Theme;
  accentColor: AccentColor;
  designTheme: DesignTheme;
  layout: Layout;
  fontFamily: FontFamily;
  heroBackground: string;
  schoolName: string;
  schoolTagline: string;
  toggleTheme: () => void;
  setAccentColor: (color: AccentColor) => void;
  setDesignTheme: (theme: DesignTheme) => void;
  setLayout: (layout: Layout) => void;
  setFontFamily: (font: FontFamily) => void;
  setHeroBackground: (bg: string) => void;
  setSchoolName: (name: string) => void;
  setSchoolTagline: (tagline: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [accentColor, setAccentColorState] = useState<AccentColor>('blue');
  const [designTheme, setDesignThemeState] = useState<DesignTheme>('modern');
  const [layout, setLayoutState] = useState<Layout>('default');
  const [fontFamily, setFontFamilyState] = useState<FontFamily>('inter');
  const [heroBackground, setHeroBackgroundState] = useState<string>('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920');
  const [schoolName, setSchoolNameState] = useState<string>('EduVerse');
  const [schoolTagline, setSchoolTaglineState] = useState<string>('Education Redefined');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedAccent = localStorage.getItem('accentColor') as AccentColor;
    const savedDesignTheme = localStorage.getItem('designTheme') as DesignTheme;
    const savedLayout = localStorage.getItem('layout') as Layout;
    const savedFontFamily = localStorage.getItem('fontFamily') as FontFamily;
    const savedHeroBackground = localStorage.getItem('heroBackground');
    const savedSchoolName = localStorage.getItem('schoolName');
    const savedSchoolTagline = localStorage.getItem('schoolTagline');
    
    if (savedTheme) setTheme(savedTheme);
    if (savedAccent) setAccentColorState(savedAccent);
    if (savedDesignTheme) setDesignThemeState(savedDesignTheme);
    if (savedLayout) setLayoutState(savedLayout);
    if (savedFontFamily) setFontFamilyState(savedFontFamily);
    if (savedHeroBackground) setHeroBackgroundState(savedHeroBackground);
    if (savedSchoolName) setSchoolNameState(savedSchoolName);
    if (savedSchoolTagline) setSchoolTaglineState(savedSchoolTagline);
  }, []);

  useEffect(() => {
    // Apply theme class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply data attributes
    document.documentElement.setAttribute('data-accent', accentColor);
    document.documentElement.setAttribute('data-design-theme', designTheme);
    document.documentElement.setAttribute('data-layout', layout);
    document.documentElement.setAttribute('data-font', fontFamily);
    
    // Apply layout classes to body for proper CSS targeting
    document.body.className = `layout-${layout} theme-${designTheme} font-${fontFamily}`;
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('accentColor', accentColor);
    localStorage.setItem('designTheme', designTheme);
    localStorage.setItem('layout', layout);
    localStorage.setItem('fontFamily', fontFamily);
    localStorage.setItem('heroBackground', heroBackground);
    localStorage.setItem('schoolName', schoolName);
    localStorage.setItem('schoolTagline', schoolTagline);
  }, [theme, accentColor, designTheme, layout, fontFamily, heroBackground, schoolName, schoolTagline]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color);
  };

  const setDesignTheme = (theme: DesignTheme) => {
    setDesignThemeState(theme);
  };

  const setLayout = (layout: Layout) => {
    setLayoutState(layout);
  };

  const setFontFamily = (font: FontFamily) => {
    setFontFamilyState(font);
  };

  const setHeroBackground = (bg: string) => {
    setHeroBackgroundState(bg);
  };

  const setSchoolName = (name: string) => {
    setSchoolNameState(name);
  };

  const setSchoolTagline = (tagline: string) => {
    setSchoolTaglineState(tagline);
  };

  return (
    <ThemeContext.Provider value={{ 
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
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}