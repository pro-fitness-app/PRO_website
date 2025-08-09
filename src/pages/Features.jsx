import { useState, useEffect } from 'react';

const featureCategories = [
  {
    id: 'dashboard',
    title: '🏠 Smart Dashboard',
    command: 'cat dashboard-features.txt',
    features: [
      { icon: '⭕', title: 'Health Rings Visualization', desc: 'Apple Watch-style activity rings for steps, calories, and floors' },
      { icon: '📊', title: 'Real-time Activity Tracking', desc: 'Live updates of daily progress with instant feedback' },
      { icon: '🎛️', title: 'Personalized Widgets', desc: 'Customizable dashboard with your most important metrics' },
      { icon: '⚡', title: 'Quick Stats Overview', desc: 'Distance, duration, calories, and heart rate at a glance' }
    ]
  },
  {
    id: 'ai',
    title: '🤖 AI-Powered Features',
    command: 'cat ai-features.txt',
    features: [
      { icon: '👨‍🏫', title: 'Coach Assistant', desc: 'AI-powered fitness coaching and advice' },
      { icon: '🎯', title: 'Smart Goal Suggestions', desc: 'Personalized goal recommendations' },
      { icon: '🔮', title: 'Performance Predictions', desc: 'AI insights into your fitness potential' },
      { icon: '💡', title: 'Personalized Recommendations', desc: 'Custom training suggestions' }
    ]
  },
  {
    id: 'analytics',
    title: '📊 Advanced Analytics',
    command: 'cat analytics-features.txt',
    features: [
      { icon: '📋', title: 'Monthly Summary Reports', desc: 'Comprehensive monthly performance reviews' },
      { icon: '🥧', title: 'Sport Distribution Analysis', desc: 'Visual breakdown of your workout types' },
      { icon: '📈', title: 'Performance Trends', desc: 'Track improvements over time with detailed charts' },
      { icon: '❤️', title: 'Heart Rate Zone Analysis', desc: 'Detailed cardiovascular fitness insights' },
      { icon: '👣', title: 'Steps Analysis', desc: 'Advanced step counting and analysis' },
      { icon: '😴', title: 'Sleep Analytics', desc: 'Track sleep patterns and recovery' }
    ]
  },
  {
    id: 'workouts',
    title: '🏃‍♂️ Comprehensive Workout Tracking',
    command: 'cat workout-features.txt',
    features: [
      { icon: '🏃‍♀️', title: 'Multi-Sport Support', desc: 'Running, cycling, swimming, walking, hiking, and more' },
      { icon: '🗺️', title: 'GPS Route Mapping', desc: 'Real-time route tracking with beautiful map visualization' },
      { icon: '📈', title: 'Advanced Metrics', desc: 'Speed, pace, cadence, heart rate zones, elevation, and power' },
      { icon: '📚', title: 'Workout History', desc: 'Complete workout library with filtering and search' },
      { icon: '🔄', title: 'Import Integration', desc: 'Seamless import from Apple Health and other fitness apps' }
    ]
  },
  {
    id: 'goals',
    title: '🎯 Goal Setting & Achievement',
    command: 'cat goal-features.txt',
    features: [
      { icon: '🤖', title: 'Smart Goal Creation', desc: 'AI-powered goal suggestions based on your fitness level' },
      { icon: '📊', title: 'Progress Tracking', desc: 'Visual progress indicators for all your goals' },
      { icon: '🎯', title: 'Sport-Specific Goals', desc: 'Customized goals for different activities' },
      { icon: '🏆', title: 'Achievement System', desc: 'Bronze, Silver, Gold, Platinum, and Diamond levels' },
      { icon: '🎉', title: 'Milestone Celebrations', desc: 'Special rewards for reaching important milestones' }
    ]
  },
  {
    id: 'records',
    title: '🏆 Records & Achievements',
    command: 'cat records-features.txt',
    features: [
      { icon: '🥇', title: 'Personal Records Tracking', desc: 'All-time, yearly, monthly, and weekly records' },
      { icon: '📊', title: 'Multi-Dimensional Records', desc: 'Distance, duration, speed, heart rate, pace, calories, cadence, power, elevation' },
      { icon: '🔔', title: 'Real-time Record Detection', desc: 'Instant notifications when you break records' },
      { icon: '✨', title: 'Beautiful Record Celebrations', desc: 'Animated notifications for new achievements' },
      { icon: '📜', title: 'Record History', desc: 'Complete history of all your personal bests' }
    ]
  },
  {
    id: 'streaks',
    title: '🔥 Streak Tracking System',
    command: 'cat streak-features.txt',
    features: [
      { icon: '🔥', title: 'Daily Streak Counter', desc: 'Track consecutive workout days with visual indicators' },
      { icon: '🎁', title: 'Milestone Rewards', desc: 'Special bonuses for 7, 14, 30, 60, 100, and 365-day streaks' },
      { icon: '⭕', title: 'Visual Progress', desc: 'Circular progress indicators and 7-day calendar' },
      { icon: '💪', title: 'Motivational Messages', desc: 'Dynamic encouragement based on streak status' },
      { icon: '☁️', title: 'Sync', desc: 'Streak data syncs across all your devices' }
    ]
  },
  {
    id: 'gamification',
    title: '🎮 Gamification & Motivation',
    command: 'cat gamification-features.txt',
    features: [
      { icon: '⭐', title: 'Bonus System', desc: 'Earn points and level up through achievements' },
      { icon: '🎲', title: 'Mini-Games', desc: 'Fun fitness games to stay motivated' },
      { icon: '🏅', title: 'Achievement Badges', desc: 'Collect badges for various accomplishments' },
      { icon: '📊', title: 'Point System', desc: 'Comprehensive scoring system with multipliers' },
      { icon: '👥', title: 'Social Features', desc: 'Share achievements and compete with friends' }
    ]
  },
  
  {
    id: 'location',
    title: '🗺️ Location & Route Features',
    command: 'cat location-features.txt',
    features: [
      { icon: '🗺️', title: 'Interactive Maps', desc: 'Beautiful route visualization with elevation data' },
      // { icon: '📚', title: 'Route History', desc: 'Save and revisit your favorite routes' },
      { icon: '📍', title: 'Location Tracking', desc: 'Track where you\'ve been active' },
      { icon: '📤', title: 'Route Sharing', desc: 'Share your routes with the community' }
      // { icon: '🛍️', title: 'Route Shop', desc: 'Discover new routes from other users' }
    ]
  },
  
  // {
  //   id: 'ux',
  //   title: '📱 User Experience',
  //   command: 'cat ux-features.txt',
  //   features: [
  //     { icon: '🎨', title: 'Modern UI/UX', desc: 'Beautiful, intuitive interface with smooth animations' },
  //     { icon: '🌙', title: 'Dark/Light Mode', desc: 'Customizable themes to match your preference' },
  //     { icon: '🎨', title: 'Customizable Colors', desc: 'Personalize your app\'s appearance' },
  //     { icon: '📱', title: 'Side Menu Navigation', desc: 'Easy access to all features' },
  //     { icon: '📱', title: 'Bottom Tab Bar', desc: 'Quick access to main features' },
  //     { icon: '🚀', title: 'Onboarding Experience', desc: 'Guided setup for new users' }
  //   ]
  // },
  {
    id: 'security',
    title: '🔐 Data & Privacy',
    command: 'cat security-features.txt',
    features: [
      // { icon: '☁️', title: 'Firebase Integration', desc: 'Secure cloud storage and synchronization' },
      { icon: '🍎', title: 'HealthKit Integration', desc: 'Seamless integration with Apple Health' },
      { icon: '🔑', title: 'User Authentication', desc: 'Secure login and account management' },
      { icon: '💾', title: 'Data Backup', desc: 'Automatic backup of all your fitness data' },
      { icon: '🛡️', title: 'Privacy Protection', desc: 'Your data stays private and secure' }
    ]
  }
  // {
  //   id: 'notifications',
  //   title: '🔔 Smart Notifications',
  //   command: 'cat notification-features.txt',
  //   features: [
  //     { icon: '🎉', title: 'Record Celebrations', desc: 'Beautiful notifications for new achievements' },
  //     { icon: '🔥', title: 'Streak Reminders', desc: 'Motivational reminders to maintain your streak' },
  //     { icon: '📊', title: 'Goal Progress Updates', desc: 'Regular updates on your goal progress' },
  //     { icon: '📋', title: 'Monthly Summary Alerts', desc: 'End-of-month performance reviews' },
  //     { icon: '⏰', title: 'Workout Reminders', desc: 'Smart scheduling suggestions' }
  //   ]
  // },
  // {
  //   id: 'customization',
  //   title: '⚙️ Customization & Settings',
  //   command: 'cat customization-features.txt',
  //   features: [
  //     { icon: '👤', title: 'Profile Management', desc: 'Complete user profile with photo, stats, and preferences' },
  //     { icon: '🔔', title: 'Notification Preferences', desc: 'Customize what and when you receive notifications' },
  //     { icon: '📤', title: 'Data Import/Export', desc: 'Easy data management and backup' },
  //     { icon: '🎨', title: 'App Preferences', desc: 'Customize colors, themes, and display options' },
  //     { icon: '🔐', title: 'Health Permissions', desc: 'Granular control over health data access' }
  //   ]
  // },
  // {
  //   id: 'performance',
  //   title: '📈 Performance Features',
  //   command: 'cat performance-features.txt',
  //   features: [
  //     { icon: '⚡', title: 'Lightning-Fast Processing', desc: 'Optimized for speed and efficiency' },
  //     { icon: '📱', title: 'Offline Functionality', desc: 'Works without internet connection' },
  //     { icon: '🔄', title: 'Background Sync', desc: 'Automatic data synchronization' },
  //     { icon: '🔋', title: 'Battery Optimization', desc: 'Efficient power usage' },
  //     { icon: '💾', title: 'Memory Management', desc: 'Optimized for smooth performance' }
  //   ]
  // }
];

function TerminalSection({ command, children, isExpanded, onToggle }) {
  return (
    <div className="bg-pink-200 rounded-lg shadow-lg p-4 my-4 w-full max-w-6xl mx-auto border border-pink-400 transition-all duration-300 hover:shadow-xl">
      <div 
        className="flex items-center text-pink-900 font-bold text-lg mb-2 cursor-pointer hover:text-pink-700 transition-colors"
        onClick={onToggle}
      >
        <span className="mr-2 text-pink-600">$</span>
        <span className="font-mono">{command}</span>
        <span className="ml-auto text-pink-600 transition-transform duration-300">
          {isExpanded ? '▼' : '▶'}
        </span>
      </div>
      <div className={`pl-6 text-pink-950 font-mono overflow-hidden transition-all duration-300 ${
        isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {children}
      </div>
    </div>
  );
}

function FeatureCard({ feature, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      key={feature.title}
      className={`feature-card flex items-start space-x-3 p-3 border border-pink-300 rounded-lg transition-all duration-300 hover:bg-pink-100 hover:border-pink-500 hover:shadow-md transform hover:scale-105 ${
        isHovered ? 'bg-pink-100' : 'bg-pink-50'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <span className="text-2xl transition-transform duration-300 hover:scale-110">{feature.icon}</span>
      <div className="flex-1">
        <div className="font-bold text-pink-900 transition-colors duration-300">{feature.title}</div>
        <div className="text-pink-800 text-sm leading-relaxed">{feature.desc}</div>
      </div>
    </div>
  );
}

export default function Features() {
  const [expandedSections, setExpandedSections] = useState(new Set(['dashboard', 'workouts', 'goals']));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto text-center">
        <div className="bg-pink-200 rounded-lg shadow-lg p-8 border border-pink-400">
          <div className="text-pink-900 font-mono text-lg">
            <span className="mr-2 text-pink-600">$</span>
            Loading P.R.O. features...
          </div>
          <div className="mt-4 text-pink-700 animate-pulse">
            <span className="inline-block animate-bounce">⠋</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>⠙</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>⠹</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>⠸</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>⠼</span>
          </div>
          <div className="mt-4 text-pink-800 text-sm">
            Discovering {featureCategories.reduce((sum, cat) => sum + cat.features.length, 0)} amazing features...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="bg-pink-200 rounded-lg shadow-lg p-6 mb-6 border border-pink-400">
        <div className="text-pink-900 font-bold text-xl mb-2">
          <span className="mr-2 text-pink-600">$</span>
          <span className="font-mono">cat P.R.O.-features-overview.txt</span>
        </div>
        <div className="pl-6 text-pink-950 font-mono">
          <div className="text-lg font-bold mb-4">🏃‍♀️ P.R.O. - Premium Fitness Tracking App</div>
          <div className="text-sm leading-relaxed mb-4">
            Discover the ultimate fitness tracking experience with cutting-edge technology and motivational features. 
            Whether you're a beginner or an elite athlete, P.R.O. provides all the tools you need to achieve your fitness goals.
          </div>
          <div className="text-xs text-pink-700">
            Total features: {featureCategories.reduce((sum, cat) => sum + cat.features.length, 0)} | 
            Categories: {featureCategories.length} | 
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Feature Categories */}
      {featureCategories.map((category) => (
        <TerminalSection
          key={category.id}
          command={category.command}
          isExpanded={expandedSections.has(category.id)}
          onToggle={() => toggleSection(category.id)}
        >
          <div className="mb-4">
            <div className="text-lg font-bold text-pink-900 mb-3">{category.title}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </TerminalSection>
      ))}

      {/* Footer Summary */}
      <div className="bg-pink-200 rounded-lg shadow-lg p-4 mt-6 border border-pink-400">
        <div className="text-pink-900 font-bold text-lg mb-2">
          <span className="mr-2 text-pink-600">$</span>
          <span className="font-mono">echo "Ready to transform your fitness journey?"</span>
        </div>
        <div className="pl-6 text-pink-950 font-mono">
          <div className="text-sm">
            🚀 Join thousands of users who have already transformed their fitness with P.R.O.
          </div>
          <div className="text-xs text-pink-700 mt-2">
            Type 'beta' to sign up for early access
          </div>
        </div>
      </div>
    </div>
  );
} 