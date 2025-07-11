function MockBarChart() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-48 md:h-64">
      <rect x="10" y="40" width="30" height="35" fill="#f472b6" />
      <rect x="50" y="20" width="30" height="55" fill="#ec4899" />
      <rect x="90" y="10" width="30" height="65" fill="#f472b6" />
      <rect x="130" y="30" width="30" height="45" fill="#ec4899" />
      <rect x="170" y="24" width="20" height="51" fill="#f472b6" />
    </svg>
  );
}

function MockPieChart() {
  return (
    <svg viewBox="0 0 80 80" className="w-48 h-48 md:w-64 md:h-64">
      <circle r="32" cx="40" cy="40" fill="#ec4891" />
      <path d="M40 40 L40 8 A32 32 0 0 1 72 40 Z" fill="#ec4899" />
      <path d="M40 40 L72 40 A32 32 0 0 1 40 72 Z" fill="#f472b6" />
    </svg>
  );
}

export default function Analytics() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-2 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold text-pink-900 mb-8 font-mono text-center">App Analytics & Usage</h2>
      <div className="w-full flex flex-col md:flex-row gap-12 items-center justify-center mb-12">
        <div className="flex-1 flex flex-col items-center">
          <MockBarChart />
          <span className="text-lg md:text-2xl text-pink-700 mt-4 font-mono">Weekly Active Users</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <MockPieChart />
          <span className="text-lg md:text-2xl text-pink-700 mt-4 font-mono">User Demographics</span>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="flex-1 flex flex-col items-center">
          <span className="text-5xl md:text-7xl font-bold text-pink-500">1,234</span>
          <span className="text-lg md:text-2xl text-pink-700 mt-2 font-mono">Active Users</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-5xl md:text-7xl font-bold text-pink-400">42</span>
          <span className="text-lg md:text-2xl text-pink-700 mt-2 font-mono">Countries Reached</span>
        </div>
      </div>
      <div className="text-xs text-pink-700 mt-8 text-center">Replace these mock charts with real data when ready!</div>
    </div>
  );
} 