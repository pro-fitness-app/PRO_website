import React from 'react';
import { Link } from 'react-router-dom';

const privacySections = [
  {
    id: 'collection',
    title: 'Information We Collect',
    description: 'We collect only the information necessary to provide you with the best fitness tracking experience.',
    content: [
      {
        title: 'Account Information',
        description: 'Name, email address, username, and password for account creation and management.'
      },
      {
        title: 'Fitness Data',
        description: 'Activity logs, workout details, steps, distance, calories, heart rate, and other health metrics you choose to track.'
      },
      {
        title: 'Device & Usage Data',
        description: 'Device type, operating system, app version, and usage statistics to optimize app performance.'
      },
      {
        title: 'Optional Information',
        description: 'Profile photo, fitness goals, and other details you voluntarily provide to personalize your experience.'
      }
    ]
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    description: 'Your data is used exclusively to enhance your fitness journey and improve our services.',
    content: [
      {
        title: 'App Features',
        description: 'Provide and improve the app\'s features and functionality based on user needs and preferences.'
      },
      {
        title: 'Progress Tracking',
        description: 'Track and display your fitness progress with accurate, real-time data visualization.'
      },
      {
        title: 'Personalization',
        description: 'Personalize your experience with tailored recommendations and custom dashboard layouts.'
      },
      {
        title: 'Communication',
        description: 'Communicate with you about updates, new features, or important service notices.'
      },
      {
        title: 'Security',
        description: 'Maintain the security of your account and protect against unauthorized access.'
      }
    ]
  },
  {
    id: 'protection',
    title: 'Data Protection & Security',
    description: 'We implement industry-standard security measures to protect your personal information.',
    content: [
      {
        title: 'Encryption',
        description: 'All data is encrypted using industry-standard protocols both in transit and at rest.'
      },
      {
        title: 'Secure Servers',
        description: 'We use secure, cloud-based servers with multiple layers of protection and redundancy.'
      },
      {
        title: 'Access Control',
        description: 'Only authorized personnel with specific security clearances can access your information.'
      },
      {
        title: 'Data Retention',
        description: 'We store your data only for as long as necessary to provide our services effectively.'
      }
    ]
  },
  {
    id: 'sharing',
    title: 'Information Sharing',
    description: 'We are committed to protecting your privacy and do not sell your personal information.',
    content: [
      {
        title: 'No Data Sales',
        description: 'We do not sell, rent, or trade your personal information to third parties for marketing purposes.'
      },
      {
        title: 'Service Providers',
        description: 'We may share data with trusted service providers who help us operate the app (e.g., cloud storage, analytics).'
      },
      {
        title: 'Legal Requirements',
        description: 'We may share information when required by law or in response to valid legal requests.'
      },
      {
        title: 'Explicit Consent',
        description: 'We will only share your data with third parties when you provide explicit consent.'
      }
    ]
  },
  {
    id: 'rights',
    title: 'Your Privacy Rights',
    description: 'You have complete control over your personal information and how it\'s used.',
    content: [
      {
        title: 'Access & Control',
        description: 'Access, update, or delete your account and personal data at any time through the app settings.'
      },
      {
        title: 'Consent Management',
        description: 'Withdraw your consent for data processing at any time with immediate effect.'
      },
      {
        title: 'Data Portability',
        description: 'Request a complete copy of your stored information in a machine-readable format.'
      },
      {
        title: 'Deletion Rights',
        description: 'Request permanent deletion of your account and all associated data from our systems.'
      }
    ]
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    description: 'We maintain transparency about any third-party integrations and their data practices.',
    content: [
      {
        title: 'HealthKit Integration',
        description: 'Our app integrates with Apple HealthKit, and their data handling is governed by Apple\'s privacy policy.'
      },
      {
        title: 'Cloud Services',
        description: 'We use secure cloud services for data storage and backup, with strict privacy controls.'
      },
      {
        title: 'Analytics',
        description: 'We use privacy-focused analytics tools that do not collect personally identifiable information.'
      }
    ]
  },
  {
    id: 'updates',
    title: 'Policy Updates',
    description: 'We keep you informed about any changes to our privacy practices.',
    content: [
      {
        title: 'Regular Reviews',
        description: 'We regularly review and update this Privacy Policy to reflect current practices and legal requirements.'
      },
      {
        title: 'Change Notifications',
        description: 'Significant changes are communicated through in-app notifications or email updates.'
      },
      {
        title: 'Version History',
        description: 'All policy versions are archived and accessible for your reference.'
      }
    ]
  }
];

function PrivacySection({ section }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-soft hover:shadow-medium transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {section.title}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg leading-relaxed">
          {section.description}
        </p>
      </div>
      
      <div className="space-y-4">
        {section.content.map((item, index) => (
          <div key={index} className="border-l-4 border-pink-200 pl-4 py-2">
            <h4 className="font-semibold text-gray-900 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-50 text-pink-700 text-sm font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
            Privacy & Data Protection
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Your Privacy
            <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
              Is Our Priority
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in complete transparency about how we collect, use, and protect your personal information. 
            Your data security and privacy are fundamental to our mission.
          </p>
          
          {/* Policy Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Effective Date</p>
                <p className="font-semibold text-gray-900">November 8, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                <p className="font-semibold text-gray-900">November 8, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {privacySections.map((section) => (
              <PrivacySection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help. If you have any questions about our privacy practices or how we handle your data, 
            don't hesitate to reach out to our privacy team.
          </p>
          
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Our Privacy Team
            </h3>
            <p className="text-gray-600 mb-6">
              Email us directly for privacy-related inquiries and data requests.
            </p>
            <a
              href="mailto:P.R.O.devel001@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Contact Privacy Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust P.R.O. with their fitness data and personal information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/beta"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-700 font-semibold rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              <span className="mr-2">🚀</span>
              Join Beta
            </Link>
            <button
              onClick={() => window.open('https://apps.apple.com/app/your-app-id', '_blank')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
