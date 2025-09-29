import { ArrowRight, Users, Award, BookOpen, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function HomePage() {
  const { heroBackground, schoolName, schoolTagline, layout } = useTheme();

  const stats = [
    { number: '5,000+', label: 'Students', icon: Users },
    { number: '200+', label: 'Faculty', icon: Users },
    { number: '50+', label: 'Programs', icon: BookOpen },
    { number: '95%', label: 'Job Placement', icon: Award },
  ];

  const features = [
    {
      title: 'World-Class Faculty',
      description: 'Learn from industry experts and renowned academics who are passionate about teaching.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art laboratories, libraries, and learning spaces designed for excellence.',
      image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Global Community',
      description: 'Join a diverse community of students and alumni from around the world.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const containerClass = layout === 'centered' ? 'max-w-4xl' : layout === 'wide' ? 'max-w-8xl' : layout === 'compact' ? 'max-w-6xl' : 'max-w-7xl';
  const spacingClass = layout === 'compact' ? 'py-8 md:py-12' : 'py-12 md:py-20';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 ${containerClass} mx-auto`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4 md:mb-6 animate-fade-in leading-tight">
            {schoolName}
            <span className="block text-accent-400 mt-2">{schoolTagline}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-delay px-4">
            Discover your potential in an environment designed to inspire innovation, 
            foster creativity, and shape the leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2 px-4">
            <button className="group bg-accent-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-accent-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Explore Programs</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Take a Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${spacingClass} bg-white dark:bg-gray-900`}>
        <div className={`${containerClass} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${spacingClass} bg-gray-50 dark:bg-gray-800`}>
        <div className={`${containerClass} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Why Choose {schoolName}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Experience education that goes beyond the classroom, preparing you for success in an ever-evolving world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${spacingClass} bg-gradient-to-r from-accent-600 to-accent-700`}>
        <div className={`${containerClass} mx-auto text-center px-4 sm:px-6 lg:px-8`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 md:mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-accent-100 mb-8 md:mb-12 leading-relaxed px-4">
            Join thousands of students who have transformed their lives through education at {schoolName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-accent-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-50 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-white/10 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}