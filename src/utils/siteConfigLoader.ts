import { useTheme } from '../contexts/ThemeContext';

export interface SiteConfig {
  siteInfo: {
    schoolName: string;
    schoolTagline: string;
    description: string;
    foundedYear: number;
    website?: string;
  };
  theme: {
    mode: 'light' | 'dark';
    accentColor: string;
    designTheme: string;
    layout: string;
    fontFamily: string;
    heroBackground: string;
  };
  contact: {
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    phone: {
      main: string;
      admissions: string;
      financialAid: string;
    };
    email: {
      main: string;
      admissions: string;
      support: string;
    };
    officeHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    socialMedia?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
  programs: Array<{
    id: string;
    title: string;
    level: string;
    duration: string;
    students: string;
    description: string;
    image: string;
    features: string[];
  }>;
  faculty: Array<{
    department: string;
    members: Array<{
      name: string;
      title: string;
      specialization: string;
      image: string;
      email: string;
      phone: string;
      achievements: string[];
    }>;
  }>;
  admissions: {
    requirements: string[];
    deadlines: Array<{
      term: string;
      deadline: string;
      status: 'Open' | 'Coming Soon' | 'Closed';
    }>;
    financialAid: {
      scholarships: {
        merit: string;
        needBased: string;
        workStudy: string;
      };
    };
  };
  news: Array<{
    id: string;
    title: string;
    excerpt: string;
    content?: string;
    image: string;
    date: string;
    category: string;
    readTime: string;
    featured?: boolean;
  }>;
  events: Array<{
    id: string;
    title: string;
    description?: string;
    date: string;
    time: string;
    type: 'Virtual Event' | 'On Campus' | 'Hybrid Event';
    location?: string;
    registrationUrl?: string;
  }>;
  gallery: Array<{
    id: number;
    src: string;
    title: string;
    category: 'campus' | 'academics' | 'events' | 'facilities' | 'sports';
    type: 'image' | 'video';
    alt?: string;
  }>;
  stats: {
    students: string;
    faculty: string;
    programs: string;
    jobPlacement: string;
    phdHolders: string;
    researchPublications: string;
    awards: string;
    campusSize: string;
    buildings: string;
    laboratories: string;
    sportsFacilities: string;
  };
  features: Array<{
    title: string;
    description: string;
    image?: string;
    icon?: string;
  }>;
  navigation: {
    pages: Array<{
      id: string;
      label: string;
      enabled: boolean;
    }>;
  };
  seo: {
    title: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
  customization?: {
    customCSS?: string;
    customJS?: string;
    googleAnalytics?: string;
    favicon?: string;
    logo?: string;
  };
}

export function loadSiteConfig(config: Partial<SiteConfig>): void {
  // Apply theme settings
  if (config.theme) {
    const { 
      setAccentColor, 
      setDesignTheme, 
      setLayout, 
      setFontFamily, 
      setHeroBackground,
      toggleTheme 
    } = useTheme();

    if (config.theme.accentColor) setAccentColor(config.theme.accentColor as any);
    if (config.theme.designTheme) setDesignTheme(config.theme.designTheme as any);
    if (config.theme.layout) setLayout(config.theme.layout as any);
    if (config.theme.fontFamily) setFontFamily(config.theme.fontFamily as any);
    if (config.theme.heroBackground) setHeroBackground(config.theme.heroBackground);
    if (config.theme.mode === 'dark') toggleTheme();
  }

  // Apply site info
  if (config.siteInfo) {
    const { setSchoolName, setSchoolTagline } = useTheme();
    if (config.siteInfo.schoolName) setSchoolName(config.siteInfo.schoolName);
    if (config.siteInfo.schoolTagline) setSchoolTagline(config.siteInfo.schoolTagline);
  }

  // Apply SEO settings
  if (config.seo) {
    if (config.seo.title) {
      document.title = config.seo.title;
    }
    if (config.seo.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', config.seo.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = config.seo.description;
        document.head.appendChild(meta);
      }
    }
  }

  // Apply custom CSS
  if (config.customization?.customCSS) {
    const style = document.createElement('style');
    style.textContent = config.customization.customCSS;
    document.head.appendChild(style);
  }

  // Apply custom favicon
  if (config.customization?.favicon) {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = config.customization.favicon;
    }
  }

  // Store config in localStorage for persistence
  localStorage.setItem('siteConfig', JSON.stringify(config));
}

export function getSiteConfig(): Partial<SiteConfig> | null {
  const stored = localStorage.getItem('siteConfig');
  return stored ? JSON.parse(stored) : null;
}

export function resetSiteConfig(): void {
  localStorage.removeItem('siteConfig');
  window.location.reload();
}