import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export default function NewsPage() {
  const featuredNews = {
    title: 'EduVerse Receives $10M Grant for AI Research Initiative',
    excerpt: 'The National Science Foundation has awarded EduVerse a prestigious grant to establish a new center for artificial intelligence research, focusing on ethical AI development and education.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-15',
    category: 'Research',
    readTime: '5 min read'
  };

  const news = [
    {
      title: 'New State-of-the-Art Science Center Opens',
      excerpt: 'Our new $50 million science center features cutting-edge laboratories and research facilities for biology, chemistry, and physics programs.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-12',
      category: 'Campus News',
      readTime: '3 min read'
    },
    {
      title: 'EduVerse Students Win International Programming Competition',
      excerpt: 'Team EduVerse secured first place in the Global Collegiate Programming Championship, competing against 500+ teams worldwide.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-10',
      category: 'Student Success',
      readTime: '4 min read'
    },
    {
      title: 'Partnership with Leading Tech Companies Announced',
      excerpt: 'New partnerships with major technology companies will provide internship opportunities and job placement for our graduates.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-08',
      category: 'Partnerships',
      readTime: '3 min read'
    },
    {
      title: 'Sustainability Initiative Reduces Campus Carbon Footprint by 40%',
      excerpt: 'Our comprehensive sustainability program has achieved remarkable results in reducing environmental impact across campus operations.',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-05',
      category: 'Sustainability',
      readTime: '4 min read'
    },
    {
      title: 'Annual Innovation Showcase Highlights Student Projects',
      excerpt: 'Students presented groundbreaking projects in AI, robotics, and biotechnology at our annual innovation showcase.',
      image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-03',
      category: 'Events',
      readTime: '5 min read'
    },
    {
      title: 'New Graduate Programs in Data Science Launched',
      excerpt: 'Responding to industry demand, we\'ve introduced comprehensive graduate programs in data science and analytics.',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-01',
      category: 'Academics',
      readTime: '3 min read'
    }
  ];

  const events = [
    {
      title: 'Virtual Information Session',
      date: '2025-01-25',
      time: '7:00 PM EST',
      type: 'Virtual Event'
    },
    {
      title: 'Campus Open House',
      date: '2025-02-15',
      time: '10:00 AM - 4:00 PM',
      type: 'On Campus'
    },
    {
      title: 'Research Symposium',
      date: '2025-03-10',
      time: '9:00 AM - 5:00 PM',
      type: 'Hybrid Event'
    },
    {
      title: 'Alumni Networking Event',
      date: '2025-03-22',
      time: '6:00 PM - 9:00 PM',
      type: 'On Campus'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            News & Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Stay updated with the latest happenings at EduVerse. From groundbreaking research 
            to student achievements and upcoming events.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 px-3 py-1 rounded-full font-medium">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(featuredNews.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredNews.readTime}
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>
                <button className="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium group-hover:translate-x-1 transition-transform">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Discover what's happening across our campus and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-accent-600 dark:text-accent-400 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <button className="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join us for these exciting upcoming events and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div>{formatDate(event.date)}</div>
                    <div>{event.time}</div>
                    <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-700 transition-colors">
              View All Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}