import { useState } from 'react';

function TerminalSection({ command, children }) {
  return (
    <div className="bg-pink-200 rounded-lg shadow-lg p-4 my-6 w-full max-w-4xl mx-auto border border-pink-400">
      <div className="flex items-center text-pink-900 font-bold text-lg mb-2">
        <span className="mr-2 text-pink-600">$</span>
        <span className="font-mono">{command}</span>
      </div>
      <div className="pl-6 text-pink-950 font-mono">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  const [showPolicy, setShowPolicy] = useState(true);
  
  return (
    <TerminalSection command="cat privacy-policy.txt">
      <button onClick={() => setShowPolicy((v) => !v)} className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-1 rounded mb-2 font-bold">
        {showPolicy ? 'Hide Policy' : 'Show Policy'}
      </button>
      
      {showPolicy && (
        <div className="space-y-4 text-sm leading-relaxed">
          <div className="text-center border-b border-pink-400 pb-2 mb-4">
            <h1 className="text-xl font-bold text-pink-900 mb-2">Privacy Policy</h1>
            <p className="text-pink-700">Effective Date: 11.08.2025</p>
            <p className="text-pink-700">Last Updated: 11.08.2025</p>
          </div>
          
          <div>
            <p className="mb-4">
              Welcome to P.R.O.! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our fitness tracking app.
            </p>
            <p className="mb-4">
              By creating an account and using our app, you agree to the terms described below.
            </p>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Account Information:</strong> Name, email address, username, and password.</li>
              <li><strong>Fitness Data:</strong> Activity logs, workout details, steps, distance, calories, heart rate, and other health metrics you choose to track.</li>
              <li><strong>Device & Usage Data:</strong> Device type, operating system, app version, and usage statistics.</li>
              <li><strong>Optional Information:</strong> Profile photo, fitness goals, and other details you voluntarily provide.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and improve the app's features.</li>
              <li>Track and display your fitness progress.</li>
              <li>Personalize your experience.</li>
              <li>Communicate with you about updates, features, or important notices.</li>
              <li>Maintain the security of your account.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">3. How We Store and Protect Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We use secure servers and encryption to protect your personal and fitness data.</li>
              <li>Only authorized personnel can access your information.</li>
              <li>We store your data only for as long as necessary to provide our services.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">4. Sharing of Information</h2>
            <p className="mb-2">
              We do not sell your personal information. We may share your data only in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>With service providers who help us operate the app (e.g., cloud storage).</li>
              <li>When required by law or legal request.</li>
              <li>With your explicit consent.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">5. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, update, or delete your account and personal data.</li>
              <li>Withdraw your consent at any time.</li>
              <li>Request a copy of your stored information.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">6. Third-Party Services</h2>
            <p>
              If our app links to third-party services (e.g., Google Fit, Apple Health), their use of your data is governed by their own privacy policies.
            </p>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make significant changes, we will notify you in the app or via email.
            </p>
          </div>
          
          <div>
            <h2 className="font-bold text-pink-900 mb-2">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> <a href="mailto:P.R.O.devel001@gmail.com" className="text-pink-700 hover:text-pink-900 underline">P.R.O.devel001@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </TerminalSection>
  );
}
