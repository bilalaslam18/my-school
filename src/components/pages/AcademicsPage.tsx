import { BookOpen, Award, Users, Clock, ChevronRight } from 'lucide-react';

export default function AcademicsPage() {
  const programs = [
    {
      title: 'Computer Science',
      level: 'Bachelor\'s & Master\'s',
      duration: '4 years / 2 years',
      students: '850+',
      description: 'Cutting-edge curriculum covering AI, machine learning, software engineering, and cybersecurity.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Advanced Programming', 'AI & Machine Learning', 'Cybersecurity', 'Software Engineering']
    },
    {
      title: 'Business Administration',
      level: 'Bachelor\'s & MBA',
      duration: '4 years / 2 years',
      students: '1200+',
      description: 'Comprehensive business education with focus on leadership, strategy, and innovation.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Strategic Management', 'Digital Marketing', 'Financial Analysis', 'Entrepreneurship']
    },
    {
      title: 'Engineering',
      level: 'Bachelor\'s & Master\'s',
      duration: '4 years / 2 years',
      students: '750+',
      description: 'Hands-on engineering programs in mechanical, electrical, and civil engineering.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Design Thinking', 'Advanced Materials', 'Robotics', 'Sustainable Engineering']
    },
    {
      title: 'Liberal Arts',
      level: 'Bachelor\'s & Master\'s',
      duration: '4 years / 2 years',
      students: '650+',
      description: 'Interdisciplinary studies fostering critical thinking and creative expression.',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Critical Writing', 'Cultural Studies', 'Philosophy', 'Creative Arts']
    },
    {
      title: 'Natural Sciences',
      level: 'Bachelor\'s & Master\'s',
      duration: '4 years / 2 years',
      students: '500+',
      description: 'Research-focused programs in biology, chemistry, physics, and environmental science.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Lab Research', 'Field Studies', 'Data Analysis', 'Scientific Computing']
    },
    {
      title: 'Health Sciences',
      level: 'Bachelor\'s & Master\'s',
      duration: '4 years / 2 years',
      students: '400+',
      description: 'Preparing healthcare professionals with comprehensive medical and health education.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Clinical Practice', 'Medical Research', 'Patient Care', 'Health Policy']
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: '98% Graduate Success Rate',
      description: 'Our graduates are highly sought after by top employers worldwide'
    },
    {
      icon: Users,
      title: '12:1 Student-Faculty Ratio',
      description: 'Personalized attention and mentorship for every student'
    },
    {
      icon: BookOpen,
      title: '200+ Course Offerings',
      description: 'Diverse curriculum designed to meet evolving industry needs'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Evening and weekend classes available for working professionals'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Discover world-class programs designed to prepare you for success in the modern world. 
            Our curriculum combines theoretical knowledge with practical experience.
          </p>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-6 group-hover:scale-110 transition-transform">
                  <highlight.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose from our comprehensive range of undergraduate and graduate programs, 
              each designed to provide you with the knowledge and skills needed for your career.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {program.students} Students
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-light text-gray-900 dark:text-white">
                        {program.title}
                      </h3>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span>{program.level}</span>
                      <span>•</span>
                      <span>{program.duration}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-600 dark:bg-accent-400 mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">
                Research & Innovation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Our faculty and students engage in cutting-edge research that addresses real-world 
                challenges and drives innovation across industries. Join a community of scholars 
                making meaningful contributions to knowledge and society.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent-600 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">50+ Active Research Projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent-600 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">$15M Annual Research Funding</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent-600 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">200+ Published Papers Annually</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Research laboratory"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}