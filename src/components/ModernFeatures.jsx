import React from 'react';
import { Link } from 'react-router-dom';

export default function ModernFeatures() {
  const features = [
    {
      icon: '⭕',
      title: 'Health Rings',
      description: 'Apple Watch-style activity tracking with personalized goals and beautiful visualizations',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: '🏃‍♀️',
      title: 'Multi-Sport Support',
      description: 'Comprehensive tracking for running, cycling, swimming, and 50+ other sports',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: '🔥',
      title: 'Streak Tracking',
      description: 'Stay motivated with daily streaks, achievements, and social challenges',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: '🏆',
      title: 'Personal Records',
      description: 'Track and celebrate your achievements with detailed analytics and insights',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: '🤖',
      title: 'AI Coach',
      description: 'Personalized fitness guidance powered by advanced machine learning',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Deep insights into your performance with professional-grade metrics',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-pink-50 text-pink-700 text-sm font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
              Dominate Your Sport
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of fitness tracking with cutting-edge features designed to motivate, 
            track, and elevate your performance to the next level.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative ${feature.bgColor} rounded-2xl p-8 border ${feature.borderColor} transition-all duration-300 hover:shadow-large hover:-translate-y-2 cursor-pointer`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideUp 0.6s ease-out forwards'
              }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
              
              {/* Learn More Link */}
              <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to See More?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore all 65+ features that make P.R.O. the ultimate fitness companion for athletes at every level.
            </p>
            <Link
              to="/features"
              className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              <span className="mr-2">📋</span>
              View All Features
              <span className="ml-2">⚡</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
