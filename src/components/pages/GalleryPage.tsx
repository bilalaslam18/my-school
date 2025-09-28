import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'academics', label: 'Academics' },
    { id: 'events', label: 'Events' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'sports', label: 'Sports' }
  ];

  const gallery = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Campus Aerial View',
      category: 'campus',
      type: 'image'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Students in Discussion',
      category: 'campus',
      type: 'image'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Laboratory',
      category: 'facilities',
      type: 'image'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Computer Science Lab',
      category: 'academics',
      type: 'image'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Business Presentation',
      category: 'academics',
      type: 'image'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Study Group',
      category: 'campus',
      type: 'image'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'University Library',
      category: 'facilities',
      type: 'image'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Research Laboratory',
      category: 'facilities',
      type: 'image'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Engineering Workshop',
      category: 'academics',
      type: 'image'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Medical Training',
      category: 'academics',
      type: 'image'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Graduation Ceremony',
      category: 'events',
      type: 'image'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Faculty Meeting',
      category: 'academics',
      type: 'image'
    }
  ];

  const filteredGallery = currentCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === currentCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredGallery.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
            Campus Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Explore life at EduVerse through our visual journey. From state-of-the-art facilities 
            to vibrant campus events, discover what makes our community special.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentCategory === category.id
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
                onClick={() => openModal(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-accent-600 ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-5xl max-h-[90vh] relative">
            <img
              src={filteredGallery[selectedImage].src}
              alt={filteredGallery[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-white text-lg font-medium">
                {filteredGallery[selectedImage].title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                {selectedImage + 1} of {filteredGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Campus by the Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-accent-600 dark:text-accent-400 mb-2">
                150+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Acres
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-accent-600 dark:text-accent-400 mb-2">
                25
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Buildings
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-accent-600 dark:text-accent-400 mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Laboratories
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-accent-600 dark:text-accent-400 mb-2">
                10
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Sports Facilities
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}