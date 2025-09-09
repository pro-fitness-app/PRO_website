import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const asciiLogo = `
██████╗ ██████╗  ██████╗ 
██╔══██╗██╔══██╗██╔═══██╗
██████╔╝██████╔╝██║   ██║
██╔═══╝ ██╔══██╗██║   ██║
██║     ██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ 
`;

export default function BetaSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sport: '',
    experience: '',
    device: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataWithTimestamp = {
        ...formData,
        timestamp: serverTimestamp(),
        submittedAt: new Date().toISOString()
      };
      
      const docRef = await addDoc(collection(db, 'beta-signups'), formDataWithTimestamp);
      
      console.log('Document written with ID: ', docRef.id);
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          sport: '',
          experience: '',
          device: '',
          feedback: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-12 text-center shadow-large border border-gray-200">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to the Beta!</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for joining our exclusive beta testing program. We'll be in touch soon with your access credentials.
            </p>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Check your email</div>
                    <div className="text-sm text-gray-600">Confirmation sent</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Early access</div>
                    <div className="text-sm text-gray-600">Within 24-48 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Exclusive features</div>
                    <div className="text-sm text-gray-600">Be among the first</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-50 text-pink-700 text-sm font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
            Exclusive Beta Access
          </div>
          
          {/* ASCII Logo */}
          <div className="mb-8">
            <pre className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none text-pink-600 select-none font-mono opacity-80" style={{fontFamily: 'monospace'}}>
              {asciiLogo}
            </pre>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Join the
            <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
              Beta Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the future of sports analytics. 
            Get exclusive early access to P.R.O.'s cutting-edge features and help shape the future of athletic performance tracking.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-soft border border-gray-200 hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Early Access</h3>
              <p className="text-gray-600">Get exclusive access to features before anyone else</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-soft border border-gray-200 hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Features</h3>
              <p className="text-gray-600">Unlock all premium features during beta testing</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-soft border border-gray-200 hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shape the Future</h3>
              <p className="text-gray-600">Your feedback directly influences the final product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Beta Tester Application
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us about yourself and your fitness goals. We'll review your application and get back to you within 24 hours.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Primary Sport *</label>
                  <div className="relative">
                    <select
                      name="sport"
                      value={formData.sport}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 transition-all duration-300 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 12px center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px',
                        paddingRight: '48px'
                      }}
                    >
                      <option value="">Select your sport</option>
                      <option value="running">Running</option>
                      <option value="cycling">Cycling</option>
                      <option value="swimming">Swimming</option>
                      <option value="triathlon">Triathlon</option>
                      <option value="basketball">Basketball</option>
                      <option value="soccer">Soccer</option>
                      <option value="tennis">Tennis</option>
                      <option value="baseball">Baseball</option>
                      <option value="football">Football</option>
                      <option value="volleyball">Volleyball</option>
                      <option value="track">Track & Field</option>
                      <option value="golf">Golf</option>
                      <option value="active-lifestyle">Just have an active lifestyle</option>
                      <option value="ai-play">I am here to play with AI</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <div className="w-4 h-4 bg-gray-400 rounded-full opacity-50"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Experience Level *</label>
                  <div className="relative">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 transition-all duration-300 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 12px center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px',
                        paddingRight: '48px'
                      }}
                    >
                      <option value="">Select your level</option>
                      <option value="no-level">No level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="professional">Professional</option>
                      <option value="coach">Coach</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <div className="w-4 h-4 bg-gray-400 rounded-full opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-3">Device Type *</label>
                <div className="relative">
                  <select
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 transition-all duration-300 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 12px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '16px',
                      paddingRight: '48px'
                    }}
                  >
                    <option value="">Select your device</option>
                    <optgroup label="iPhone" className="font-semibold text-gray-700 bg-gray-100">
                      <option value="iphone-16-pro-max">iPhone 16 Pro Max</option>
                      <option value="iphone-16-pro">iPhone 16 Pro</option>
                      <option value="iphone-16-plus">iPhone 16 Plus</option>
                      <option value="iphone-16">iPhone 16</option>
                      <option value="iphone-15-pro-max">iPhone 15 Pro Max</option>
                      <option value="iphone-15-pro">iPhone 15 Pro</option>
                      <option value="iphone-15-plus">iPhone 15 Plus</option>
                      <option value="iphone-15">iPhone 15</option>
                      <option value="iphone-14-pro-max">iPhone 14 Pro Max</option>
                      <option value="iphone-14-pro">iPhone 14 Pro</option>
                      <option value="iphone-14-plus">iPhone 14 Plus</option>
                      <option value="iphone-14">iPhone 14</option>
                      <option value="iphone-13-pro-max">iPhone 13 Pro Max</option>
                      <option value="iphone-13-pro">iPhone 13 Pro</option>
                      <option value="iphone-13">iPhone 13</option>
                      <option value="iphone-13-mini">iPhone 13 mini</option>
                      <option value="iphone-12-pro-max">iPhone 12 Pro Max</option>
                      <option value="iphone-12-pro">iPhone 12 Pro</option>
                      <option value="iphone-12">iPhone 12</option>
                      <option value="iphone-12-mini">iPhone 12 mini</option>
                      <option value="iphone-11-pro-max">iPhone 11 Pro Max</option>
                      <option value="iphone-11-pro">iPhone 11 Pro</option>
                      <option value="iphone-11">iPhone 11</option>
                      <option value="iphone-se-3rd-gen">iPhone SE (3rd generation)</option>
                      <option value="iphone-se-2nd-gen">iPhone SE (2nd generation)</option>
                      <option value="iphone-xs-max">iPhone XS Max</option>
                      <option value="iphone-xs">iPhone XS</option>
                      <option value="iphone-xr">iPhone XR</option>
                      <option value="iphone-x">iPhone X</option>
                      <option value="iphone-8-plus">iPhone 8 Plus</option>
                      <option value="iphone-8">iPhone 8</option>
                      <option value="iphone-other">Other iPhone</option>
                    </optgroup>
                    <optgroup label="iPad" className="font-semibold text-gray-700 bg-gray-100">
                      <option value="ipad-pro-13">iPad Pro 13"</option>
                      <option value="ipad-pro-11">iPad Pro 11"</option>
                      <option value="ipad-air">iPad Air</option>
                      <option value="ipad">iPad</option>
                      <option value="ipad-mini">iPad mini</option>
                      <option value="ipad-other">Other iPad</option>
                    </optgroup>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <div className="w-4 h-4 bg-gray-400 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-3">What features are you most excited about?</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                  placeholder="Tell us what excites you most about P.R.O. and what features you'd like to test..."
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-soft hover:shadow-medium transform hover:scale-105 transition-all duration-300 border-2 border-pink-500 hover:border-pink-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Join Beta Program
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-3xl p-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email Confirmation</div>
                  <div className="text-gray-600">You'll receive a confirmation email within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Beta Access</div>
                  <div className="text-gray-600">Early access credentials sent within 48-72 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">TestFlight Invite</div>
                  <div className="text-gray-600">iOS users will get a TestFlight invitation</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Community Access</div>
                  <div className="text-gray-600">Join our exclusive beta tester community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Dropdown Styles */}
      <style jsx>{`
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 48px;
        }
        
        select:focus {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ec4899' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        }
        
        optgroup {
          font-weight: 600;
          color: #374151;
          background-color: #f3f4f6;
        }
        
        option {
          padding: 8px 12px;
          background-color: white;
          color: #374151;
        }
        
        option:hover {
          background-color: #fef3f2;
        }
      `}</style>
    </div>
  );
}
