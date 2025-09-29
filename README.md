# EduVerse - Premium School Website Template

A fully customizable, responsive educational website template built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Fully Customizable**: Complete theme system with colors, fonts, layouts, and design styles
- 📱 **Mobile Responsive**: Optimized for all devices with improved mobile navigation
- 🌙 **Dark/Light Mode**: Built-in theme switching with smooth transitions
- 🎯 **JSON Configuration**: Configure entire site content via JSON schema
- 🚀 **Modern Stack**: React 18, TypeScript, Tailwind CSS, Vite
- ♿ **Accessible**: WCAG compliant with proper contrast ratios and focus states
- 🎭 **Multiple Themes**: Modern, Classic, Vintage, Minimal, and Bold design themes
- 📐 **Layout Options**: Default, Centered, Wide, and Compact layouts
- 🔤 **Typography**: 6 Google Fonts options with proper font loading

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Customize Your Site**
   - Use the built-in configurator (settings icon in bottom-right)
   - Or load a JSON configuration file (see `example-site-config.json`)

## Site Configuration

### Using the Visual Configurator

Click the settings icon in the bottom-right corner to access the visual configurator where you can:
- Change colors and themes
- Customize fonts and layouts
- Update school name and content
- Switch background images

### Using JSON Configuration

For complete site customization, use the JSON schema approach:

1. **Create your configuration** based on `site-schema.json`
2. **Load the configuration** using the `loadSiteConfig()` utility
3. **See example** in `example-site-config.json`

```typescript
import { loadSiteConfig } from './src/utils/siteConfigLoader';
import siteConfig from './my-site-config.json';

loadSiteConfig(siteConfig);
```

## Customization Options

### Theme System
- **Colors**: 12 accent color options with proper dark/light mode variants
- **Design Themes**: Modern, Classic, Vintage, Minimal, Bold
- **Layouts**: Default, Centered, Wide, Compact
- **Fonts**: Inter, Poppins, Roboto, Playfair Display, Source Sans Pro, Montserrat

### Content Management
- School information and branding
- Academic programs and faculty
- News and events
- Gallery and media
- Contact information
- Admissions requirements
- Statistics and achievements

### Mobile Optimization
- Responsive hero sections
- Improved mobile navigation
- Touch-friendly interactions
- Optimized typography scaling
- Better spacing on small screens

## File Structure

```
src/
├── components/
│   ├── pages/           # Page components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── Configurator.tsx # Visual theme configurator
├── contexts/
│   └── ThemeContext.tsx # Theme management
├── styles/
│   └── theme.css        # CSS variables and theme styles
├── utils/
│   └── siteConfigLoader.ts # JSON configuration loader
└── App.tsx              # Main application
```

## Schema Documentation

The complete JSON schema is available in `site-schema.json` and includes:

- **Site Information**: Name, tagline, description, founding year
- **Theme Configuration**: Colors, fonts, layouts, backgrounds
- **Contact Details**: Address, phone, email, office hours, social media
- **Academic Programs**: Courses, faculty, departments
- **Admissions**: Requirements, deadlines, financial aid
- **Content**: News, events, gallery, statistics
- **SEO Settings**: Meta tags, keywords, Open Graph
- **Customization**: Custom CSS, analytics, favicon

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this template for your educational institution.
