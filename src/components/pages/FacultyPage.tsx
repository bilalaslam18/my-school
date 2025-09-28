import { Mail, Phone, Award, BookOpen, GraduationCap } from 'lucide-react';

export default function FacultyPage() {
  const departments = [
    {
      name: 'Computer Science',
      faculty: [
        {
          name: 'Dr. Alan Turing',
          title: 'Professor of Computer Science',
          specialization: 'Artificial Intelligence & Machine Learning',
          image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
          email: 'a.turing@eduverse.edu',
          phone: '+1 (555) 123-4567',
          achievements: ['ACM Fellow', '50+ Research Papers', 'AI Innovation Award 2024']
        },
        {
          name: 'Prof. Ada Lovelace',
          title: 'Associate Professor',
          specialization: 'Software Engineering & Cybersecurity',
          image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
          email: 'a.lovelace@eduverse.edu',
          phone: '+1 (555) 123-4568',
          achievements: ['IEEE Senior Member', 'Cybersecurity Expert', 'Best Teacher Award 2023']
        }
      ]
    },
    {
      name: 'Business Administration',
      faculty: [
        {
          name: 'Dr. Warren Buffett',
          title: 'Professor of Finance',
          specialization: 'Investment Strategy & Corporate Finance',
          image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
          email: 'w.buffett@eduverse.edu',
          phone: '+1 (555) 123-4569',
          achievements: ['Fortune 500 Consultant', 'Finance Author', 'MBA Excellence Award']
        },
        {
          name: 'Prof. Sheryl Sandberg',
          title: 'Professor of Management',
          specialization: 'Leadership & Organizational Behavior',
          image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
          email: 's.sandberg@eduverse.edu',
          phone: '+1 (555) 123-4570',
          achievements: ['Leadership Expert', 'Executive Coach', 'Management Innovation Award']
        }
      ]
    },
    {
      name: 'Engineering',
      faculty: [
        {
          name: 'Dr. Nikola Tesla',
          title: 'Professor of Electrical Engineering',
          specialization: 'Power Systems & Renewable Energy',
          image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
          email: 'n.tesla@eduverse.edu',
          phone: '+1 (555) 123-4571',
          achievements: ['IEEE Fellow', 'Energy Innovation Award', '100+ Patents']
        },
        {
          name: 'Prof. Marie Curie',
          title: 'Professor of Materials Science',
          specialization: 'Advanced Materials & Nanotechnology',
          image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
          email: 'm.curie@eduverse.edu',
          phone: '+1 (555) 123-4572',
          achievements: ['Nobel Laureate', 'Materials Research Society', 'Research Excellence Award']
        }
      ]
    }
  ];

  const stats = [
    { icon: GraduationCap, label: 'Faculty Members', value: '200+' },
    { icon: Award, label: 'PhD Holders', value: '95%' },
    { icon: BookOpen, label: 'Research Publications', value: '500+' },
    { icon: Award, label: 'Awards & Honors', value: '150+' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            Our Faculty
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Meet our distinguished faculty members who bring expertise, passion, and dedication to every classroom. 
            Our educators are leaders in their fields, committed to your academic success.
          </p>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty by Department */}
      {departments.map((department, deptIndex) => (
        <section key={deptIndex} className={`py-16 ${deptIndex % 2 === 1 ? 'bg-gray-50 dark:bg-gray-800' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                {department.name} Department
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {department.faculty.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-2xl object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                          {member.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {member.specialization}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            <a href={`mailto:${member.email}`} className="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{member.phone}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                            Key Achievements
                          </h4>
                          <div className="space-y-1">
                            {member.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-600 dark:bg-accent-400 mr-2"></div>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join Our Faculty */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-accent-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Join Our Faculty
          </h2>
          <p className="text-xl text-accent-100 mb-12 leading-relaxed">
            Are you passionate about education and research? We're always looking for exceptional 
            educators to join our community of scholars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-accent-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors">
              Submit Your CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}