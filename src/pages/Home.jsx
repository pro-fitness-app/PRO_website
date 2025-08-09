import { useState } from 'react';
import { Link } from 'react-router-dom';

import TerminalIntro from '../components/TerminalIntro';
import LandingSection from '../components/LandingSection';

function FeaturesPreview() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const previewFeatures = [
    {
      icon: '⭕',
      title: 'Health Rings',
      desc: 'Apple Watch-style activity tracking',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '🏃‍♀️',
      title: 'Multi-Sport Support',
      desc: 'Running, cycling, swimming & more',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🔥',
      title: 'Streak Tracking',
      desc: 'Stay motivated with daily streaks',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: '🏆',
      title: 'Personal Records',
      desc: 'Track and celebrate your achievements',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '🤖',
      title: 'AI Coach',
      desc: 'Personalized fitness guidance',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      desc: 'Deep insights into your performance',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-pink-300 to-pink-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="bg-pink-200 rounded-lg shadow-lg p-6 border border-pink-400 max-w-4xl mx-auto">
            <div className="text-pink-900 font-bold text-xl mb-2">
              <span className="mr-2 text-pink-600">$</span>
              <span className="font-mono">ls features/ | head -6</span>
            </div>
            <div className="pl-6 text-pink-950 font-mono">
              <div className="text-2xl font-bold mb-4">🚀 Discover What Makes P.R.O. Special</div>
              <div className="text-sm leading-relaxed mb-4">
                Experience the future of fitness tracking with cutting-edge features designed to motivate, 
                track, and elevate your performance. From AI-powered coaching to comprehensive analytics, 
                P.R.O. has everything you need to achieve your fitness goals.
              </div>
              <div className="text-xs text-pink-700">
                Showing 6 of {65}+ features • Click to explore all capabilities
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {previewFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-pink-100 rounded-lg p-6 border border-pink-300 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg ${
                hoveredFeature === index ? 'border-pink-500 bg-pink-50' : ''
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-xl mr-4 transition-transform duration-300 hover:scale-110`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-pink-900 text-lg">{feature.title}</h3>
                  <p className="text-pink-700 text-sm">{feature.desc}</p>
                </div>
              </div>
              <div className="text-xs text-pink-600 font-mono">
                feature_{index + 1}.jsx ✓
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-pink-200 rounded-lg shadow-lg p-6 border border-pink-400 max-w-2xl mx-auto">
            <div className="text-pink-900 font-bold text-lg mb-2">
              <span className="mr-2 text-pink-600">$</span>
              <span className="font-mono">echo "Ready to see more?"</span>
            </div>
            <div className="pl-6 text-pink-950 font-mono">
              <div className="text-sm mb-4">
                🎯 Explore all {65}+ features that make P.R.O. the ultimate fitness companion
              </div>
              <Link
                to="/features"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold rounded-full hover:from-pink-500 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">📋</span>
                View All Features
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      {showIntro && <TerminalIntro onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <LandingSection />
          <FeaturesPreview />
          
          {/* Frame 1.png Full Width Section */}
          <section className="w-full py-8">
            <div className="w-full">
              <img 
                src="public/Frame 1-3.png" 
                alt="P.R.O. App Screenshots" 
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
          
          {/* Try Out Section */}
          <section className="w-full py-16 ">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="bg-pink-200 rounded-lg shadow-lg p-8 border border-pink-400">
                <div className="text-pink-900 font-bold text-2xl mb-2">
                  <span className="mr-2 text-pink-600">$</span>
                  <span className="font-mono">echo "Want to try out?"</span>
                </div>
                <div className="pl-6 text-pink-950 font-mono">
                  <div className="text-xl font-bold mb-6">
                    🚀 Ready to experience the future of fitness tracking?
                  </div>
                  <div className="text-sm leading-relaxed mb-8">
                    Start your journey with P.R.O. to elevate your performance. 
                    Download now, try the beta, or get in touch with our team.
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => window.open('https://apps.apple.com/app/your-app-id', '_blank')}
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-100 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-pink-500 hover:border-pink-400"
                    >
                      <svg 
                        className="w-6 h-6 mr-3" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      Download for iOS
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                    
                    <Link
                      to="/beta"
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-900 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-400 hover:border-pink-500"
                    >
                      <span className="flex items-center justify-center">
                        <span className="mr-2">🚀</span>
                        <span>Try Beta</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Link>
                    
                    <a
                      href="mailto:P.R.O.devel001@gmail.com"
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-100 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-purple-500 hover:border-purple-400"
                    >
                      <svg 
                        className="w-6 h-6 mr-3" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Contact Us
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </a>
                  </div>
                  
                  <div className="mt-6 text-xs text-pink-700">
                    💬 Questions? Reach out to P.R.O.devel001@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </>
      )}
    </>
  );
} 