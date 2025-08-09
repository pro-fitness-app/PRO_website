import React, { useState, useEffect } from 'react';

const AnimatedFeatureNames = () => {
  const [featureNames, setFeatureNames] = useState([]);

  const features = [
    'Health Rings', 'Multi-Sport', 'Streak Tracking', 'Personal Records',
    'AI Coach', 'Advanced Analytics', 'Heart Rate Zones', 'Sleep Tracking',
    'Workout History', 'Performance Metrics', 'Goal Setting', 'Progress Charts',
    'Calorie Tracking', 'Distance Monitoring', 'Speed Analysis', 'Pace Calculator',
    'Training Plans', 'Recovery Insights', 'Social Sharing', 'Achievement Badges',
    'Custom Workouts', 'GPS Tracking', 'Interval Training', 'VO2 Max',
    'Power Zones', 'Cadence Analysis', 'Stride Length', 'Ground Contact Time',
    'Vertical Oscillation', 'Running Dynamics', 'Swim Metrics', 'Bike Power',
    'Nutrition Logging', 'Hydration Tracking', 'Body Composition', 'Fitness Age',
    'Training Load', 'Recovery Score', 'Readiness Score', 'Stress Balance',
    'Sleep Quality', 'Resting Heart Rate', 'HRV Analysis', 'Blood Oxygen',
    'Temperature Monitoring', 'Weather Integration', 'Route Planning', 'Live Tracking',
    'Emergency Contacts', 'Safety Features', 'Music Integration', 'Voice Coaching'
  ];

  useEffect(() => {
    const generateRandomPosition = () => {
      // Determine if feature should be on left or right side
      const isLeftSide = Math.random() < 0.5;
      
      let x, y;
      if (isLeftSide) {
        // Left side: 5% to 30% of screen width (left edge to left of mockups)
        x = 5 + Math.random() * 25;
      } else {
        // Right side: 70% to 85% of screen width (right of mockups to right edge with margin)
        x = 70 + Math.random() * 15;
      }
      
      // Y position: 10% to 90% to avoid top/bottom edges
      y = 10 + Math.random() * 80;
      
      // Random font size between 2.5rem and 5rem (much bigger)
      const fontSize = 2.0 + Math.random() * 2.5;
      
      return {
        x,
        y,
        rotation: Math.random() * 360 - 180, // -180 to 180 degrees
        scale: 0.9 + Math.random() * 0.6, // 0.9 to 1.5 scale
        opacity: 0.6 + Math.random() * 0.4, // 0.6 to 1.0 opacity
        duration: 2000 + Math.random() * 2000, // 2-4 seconds duration (faster)
        fontSize: `${fontSize}rem`,
      };
    };

    const createFeatureName = () => {
      const feature = features[Math.floor(Math.random() * features.length)];
      const position = generateRandomPosition();
      
      return {
        id: Math.random().toString(36).substr(2, 9),
        name: feature,
        ...position,
        createdAt: Date.now(),
      };
    };

    // Initialize with some feature names
    const initialFeatures = Array.from({ length: 6 }, createFeatureName);
    setFeatureNames(initialFeatures);

    // Animation loop
    const interval = setInterval(() => {
      setFeatureNames(prev => {
        const now = Date.now();
        let newFeatures = [...prev];
        
        // Remove features older than 6 seconds (faster turnover)
        newFeatures = newFeatures.filter(feature => now - feature.createdAt < 6000);
        
        // Add new features more frequently
        if (Math.random() < 0.7 && newFeatures.length < 20) {
          newFeatures.push(createFeatureName());
        }
        
        return newFeatures;
      });
    }, 800); // Faster update interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ 
      width: '100vw',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      
      
      {featureNames.map((feature) => (
        <div
          key={feature.id}
          className="absolute text-pink-600 font-mono font-bold transition-all duration-1000 ease-in-out z-5"
          style={{
            left: `${feature.x}%`,
            top: `${feature.y}%`,
            fontSize: feature.fontSize,
            transform: `rotate(${feature.rotation}deg) scale(${feature.scale})`,
            opacity: feature.opacity,
            animation: `float ${feature.duration}ms ease-in-out infinite`,
            transformOrigin: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {feature.name}
        </div>
      ))}
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-10px) scale(1.05);
          }
          50% {
            transform: translateY(-5px) scale(1.1);
          }
          75% {
            transform: translateY(-15px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedFeatureNames;
