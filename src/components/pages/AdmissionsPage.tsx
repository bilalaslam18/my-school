import { CheckCircle, Calendar, FileText, Users, DollarSign, Clock } from 'lucide-react';

export default function AdmissionsPage() {
  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete our online application form with your academic records and personal statement.',
      icon: FileText
    },
    {
      number: 2,
      title: 'Document Review',
      description: 'Our admissions team carefully reviews all submitted materials and transcripts.',
      icon: CheckCircle
    },
    {
      number: 3,
      title: 'Interview Process',
      description: 'Selected candidates participate in a personal interview with faculty members.',
      icon: Users
    },
    {
      number: 4,
      title: 'Final Decision',
      description: 'Receive your admission decision and begin your journey with us.',
      icon: Calendar
    }
  ];

  const requirements = [
    'High school diploma or equivalent',
    'Official transcripts from all institutions',
    'Personal statement (500 words)',
    'Two letters of recommendation',
    'English proficiency test (for international students)',
    'Portfolio (for creative programs)'
  ];

  const deadlines = [
    { term: 'Fall 2025', deadline: 'May 1, 2025', status: 'Open' },
    { term: 'Spring 2026', deadline: 'November 1, 2025', status: 'Coming Soon' },
    { term: 'Summer 2026', deadline: 'March 1, 2026', status: 'Coming Soon' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Take the first step toward your future. Our admissions process is designed to identify 
            students who will thrive in our academic community and contribute to our shared mission.
          </p>
          <button className="bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-700 transition-colors">
            Start Your Application
          </button>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Follow these simple steps to complete your application and join our community of learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-6">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Deadlines */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
                Admission Requirements
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent-600 dark:text-accent-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {requirement}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
                <h3 className="text-lg font-medium text-accent-800 dark:text-accent-200 mb-2">
                  Need Help?
                </h3>
                <p className="text-accent-700 dark:text-accent-300 text-sm">
                  Our admissions counselors are here to guide you through the process. 
                  Schedule a consultation to discuss your application.
                </p>
              </div>
            </div>

            {/* Deadlines */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
                Application Deadlines
              </h2>
              <div className="space-y-4">
                {deadlines.map((deadline, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                          {deadline.term}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Application Deadline: {deadline.deadline}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        deadline.status === 'Open' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {deadline.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                  <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200">
                    Early Application
                  </h3>
                </div>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-2">
                  Apply early for priority consideration for scholarships and housing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Financial Aid & Scholarships
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We believe financial barriers should never prevent talented students from pursuing their education. 
              Explore our comprehensive financial aid options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                Merit Scholarships
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Academic excellence scholarships ranging from $5,000 to full tuition coverage.
              </p>
              <div className="text-3xl font-light text-green-600 dark:text-green-400">
                Up to 100%
              </div>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                Need-Based Aid
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Financial assistance based on family income and demonstrated need.
              </p>
              <div className="text-3xl font-light text-blue-600 dark:text-blue-400">
                $12M+
              </div>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                Work-Study
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Earn while you learn through on-campus employment opportunities.
              </p>
              <div className="text-3xl font-light text-purple-600 dark:text-purple-400">
                500+ Jobs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Start your application today and take the first step toward your future.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Program of Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors">
                    <option>Select a program</option>
                    <option>Computer Science</option>
                    <option>Business Administration</option>
                    <option>Engineering</option>
                    <option>Liberal Arts</option>
                    <option>Natural Sciences</option>
                    <option>Health Sciences</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Intended Start Term
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors">
                    <option>Fall 2025</option>
                    <option>Spring 2026</option>
                    <option>Summer 2026</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tell us about yourself (optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                  placeholder="Share your interests, goals, and what draws you to EduVerse..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-gray-300 rounded"
                />
                <label className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                  I agree to receive communications about my application and EduVerse programs
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-600 text-white py-4 rounded-lg text-lg font-medium hover:bg-accent-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}