const features = [
  { icon: '📊', title: 'Real-Time Stats', desc: 'Track your performance live with instant updates.' },
  { icon: '🏆', title: 'Leaderboards', desc: 'See how you stack up against the competition.' },
  { icon: '📈', title: 'Progress Tracking', desc: 'Visualize your growth over time.' },
  { icon: '🔒', title: 'Private & Secure', desc: 'Your data is safe and only visible to you.' },
];

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

export default function Features() {
  return (
    <TerminalSection command="ls features/">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-start space-x-3 p-2 border-b border-pink-300">
            <span className="text-2xl">{f.icon}</span>
            <div>
              <div className="font-bold">{f.title}</div>
              <div className="text-pink-800">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </TerminalSection>
  );
} 