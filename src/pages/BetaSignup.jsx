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
      // Добавляем timestamp к данным
      const formDataWithTimestamp = {
        ...formData,
        timestamp: serverTimestamp(),
        submittedAt: new Date().toISOString()
      };
      
      // Сохраняем в Firebase
      const docRef = await addDoc(collection(db, 'beta-signups'), formDataWithTimestamp);
      
      console.log('Document written with ID: ', docRef.id);
      
      setIsSubmitted(true);
      
      // Сброс формы через 3 секунды
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
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="bg-pink-100 border-2 border-pink-400 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-pink-900 mb-4">Welcome to the Beta!</h2>
          <p className="text-lg text-pink-800 mb-6">
            Thank you for joining our exclusive beta testing program. We'll be in touch soon with your access credentials.
          </p>
          <div className="bg-pink-200 border border-pink-400 rounded p-4 font-mono text-sm text-pink-900">
            <div className="mb-2">📧 Check your email for confirmation</div>
            <div className="mb-2">📱 You'll receive early access within 24-48 hours</div>
            <div>🎯 Be among the first to experience PRO's advanced features</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <pre className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-none text-pink-100 select-none font-mono mb-6" style={{fontFamily: 'monospace'}}>
          {asciiLogo}
        </pre>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-pink-100 mb-6">
          Join the Beta Revolution
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-pink-200 max-w-3xl mx-auto leading-relaxed">
          Be among the first to experience the future of sports analytics. 
          Get exclusive early access to PRO's cutting-edge features and help shape the future of athletic performance tracking.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-pink-100 border-2 border-pink-400 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-pink-900 mb-2">Early Access</h3>
          <p className="text-pink-800">Get exclusive access to features before anyone else</p>
        </div>
        <div className="bg-pink-100 border-2 border-pink-400 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-xl font-bold text-pink-900 mb-2">Premium Features</h3>
          <p className="text-pink-800">Unlock all premium features during beta testing</p>
        </div>
        <div className="bg-pink-100 border-2 border-pink-400 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-pink-900 mb-2">Shape the Future</h3>
          <p className="text-pink-800">Your feedback directly influences the final product</p>
        </div>
      </div>

      {/* Signup Form */}
      <div className="bg-pink-100 border-2 border-pink-400 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-pink-900 mb-6 text-center">Beta Tester Application</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-pink-900 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg bg-pink-50 text-pink-900 placeholder-pink-600 focus:outline-none focus:border-pink-600 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-pink-900 font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg bg-pink-50 text-pink-900 placeholder-pink-600 focus:outline-none focus:border-pink-600 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-pink-900 font-semibold mb-2">Primary Sport *</label>
              <select
                name="sport"
                value={formData.sport}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg bg-pink-50 text-pink-900 focus:outline-none focus:border-pink-600 transition-colors"
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
            </div>
            
            <div>
              <label className="block text-pink-900 font-semibold mb-2">Experience Level *</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg bg-pink-50 text-pink-900 focus:outline-none focus:border-pink-600 transition-colors"
              >
                <option value="">Select your level</option>
                <option value="no-level">No level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
                <option value="coach">Coach</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-pink-900 font-semibold mb-2">Device Type *</label>
            <select
              name="device"
              value={formData.device}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg bg-pink-50 text-pink-900 focus:outline-none focus:border-pink-600 transition-colors"
            >
              <option value="">Select your device</option>
              <optgroup label="iPhone">
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
              <optgroup label="iPad">
                <option value="ipad-pro-13">iPad Pro 13"</option>
                <option value="ipad-pro-11">iPad Pro 11"</option>
                <option value="ipad-air">iPad Air</option>
                <option value="ipad">iPad</option>
                <option value="ipad-mini">iPad mini</option>
                <option value="ipad-other">Other iPad</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-pink-900 font-semibold mb-2">What features are you most excited about?</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border-2 border-pink-400 rounded-lg bg-pink-50 text-pink-900 placeholder-pink-600 focus:outline-none focus:border-pink-600 transition-colors"
              placeholder="Tell us what excites you most about PRO and what features you'd like to test..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-semibold text-pink-100 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-500 hover:border-pink-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-pink-100 mr-3"></div>
                  Processing...
                </>
              ) : (
                <>
                  🚀 Join Beta Program
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-8 p-6 bg-pink-200 border border-pink-400 rounded-lg">
          <h3 className="text-lg font-bold text-pink-900 mb-3">What to Expect:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-pink-800">
            <div>
              <div className="font-semibold mb-1">📧 Email Confirmation</div>
              <div>You'll receive a confirmation email within 24 hours</div>
            </div>
            <div>
              <div className="font-semibold mb-1">🔑 Beta Access</div>
              <div>Early access credentials sent within 48-72 hours</div>
            </div>
            <div>
              <div className="font-semibold mb-1">📱 TestFlight Invite</div>
              <div>iOS users will get a TestFlight invitation</div>
            </div>
            <div>
              <div className="font-semibold mb-1">💬 Community Access</div>
              <div>Join our exclusive beta tester community</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
