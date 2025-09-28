import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Education Street', 'Knowledge City, KC 12345', 'United States']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Admissions)', '+1 (555) 123-4569 (Financial Aid)']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@eduverse.edu', 'admissions@eduverse.edu', 'support@eduverse.edu']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  const departments = [
    { name: 'General Information', email: 'info@eduverse.edu' },
    { name: 'Admissions Office', email: 'admissions@eduverse.edu' },
    { name: 'Financial Aid', email: 'financialaid@eduverse.edu' },
    { name: 'Academic Affairs', email: 'academics@eduverse.edu' },
    { name: 'Student Services', email: 'students@eduverse.edu' },
    { name: 'Alumni Relations', email: 'alumni@eduverse.edu' },
    { name: 'Research Office', email: 'research@eduverse.edu' },
    { name: 'IT Support', email: 'itsupport@eduverse.edu' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We're here to help you with any questions about EduVerse. 
            Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-6">
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors">
                    <option>General Inquiry</option>
                    <option>Admissions Question</option>
                    <option>Financial Aid</option>
                    <option>Academic Programs</option>
                    <option>Campus Visit</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-600 dark:focus:ring-accent-400 focus:border-transparent transition-colors"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-gray-300 rounded mt-1"
                  />
                  <label className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    I agree to receive communications from EduVerse and understand that I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-600 text-white py-4 rounded-lg text-lg font-medium hover:bg-accent-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
                Find Us
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-8 aspect-square flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-accent-600 dark:text-accent-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Campus map and directions would be integrated here
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  Department Contacts
                </h3>
                <div className="space-y-3">
                  {departments.slice(0, 6).map((dept, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {dept.name}
                      </span>
                      <a 
                        href={`mailto:${dept.email}`}
                        className="text-sm text-accent-600 dark:text-accent-400 hover:underline"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Quick Answers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find answers to commonly asked questions before reaching out.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are your admission requirements?",
                answer: "Our admission requirements vary by program. Generally, we require a high school diploma, official transcripts, personal statement, and letters of recommendation. Visit our Admissions page for detailed requirements."
              },
              {
                question: "How can I schedule a campus visit?",
                answer: "You can schedule a campus visit by calling our admissions office at +1 (555) 123-4568 or by filling out our online campus visit form. We offer both individual tours and group information sessions."
              },
              {
                question: "What financial aid options are available?",
                answer: "We offer a comprehensive range of financial aid options including merit scholarships, need-based grants, work-study programs, and student loans. Our financial aid office can help you explore all available options."
              },
              {
                question: "How do I apply for housing?",
                answer: "Housing applications are available online once you've been accepted to EduVerse. We offer various housing options including traditional dormitories, suite-style rooms, and apartment-style living."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}