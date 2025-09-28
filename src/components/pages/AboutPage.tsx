import { Target, Eye, Heart, Users, Award, Globe, Book, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new ideas and technologies to enhance learning experiences.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Committed to the highest standards in education and research.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong relationships and fostering collaboration.'
    },
    {
      icon: Globe,
      title: 'Diversity',
      description: 'Celebrating different perspectives and cultural backgrounds.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chancellor',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '25+ years in higher education administration'
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Dean of Academics',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former MIT researcher, educational innovation expert'
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Director of Student Affairs',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate advocate for student success and well-being'
    },
    {
      name: 'James Thompson',
      position: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Strategic financial planning and institutional growth'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Founded in 1985, EduVerse has been at the forefront of educational excellence, 
            transforming lives through innovative learning experiences and world-class research.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h2 className="text-3xl font-light text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                To provide transformative educational experiences that empower students to become 
                innovative leaders, critical thinkers, and responsible global citizens who make 
                meaningful contributions to society.
              </p>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h2 className="text-3xl font-light text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To be recognized as a premier educational institution that shapes the future 
                through excellence in teaching, groundbreaking research, and community engagement.
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-600 rounded-2xl flex items-center justify-center">
                <Book className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture of our institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 text-accent-600 dark:text-accent-400 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the visionary leaders who guide our institution toward excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-accent-600 dark:text-accent-400 font-medium mb-3">
                      {leader.position}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Four decades of educational excellence and innovation.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: '1985', event: 'EduVerse founded with 500 students and 25 faculty members' },
              { year: '1995', event: 'Launched our first graduate programs and research initiatives' },
              { year: '2005', event: 'Opened state-of-the-art science and technology center' },
              { year: '2015', event: 'Achieved university status with 5,000+ students' },
              { year: '2025', event: 'Celebrating 40 years of educational excellence' }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent-600 text-white flex items-center justify-center font-light text-lg">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}