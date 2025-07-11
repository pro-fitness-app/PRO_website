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

export default function FAQ() {
  const [showFAQ, setShowFAQ] = useState(true);
  return (
    <TerminalSection command="help --faq">
      <button onClick={() => setShowFAQ((v) => !v)} className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-1 rounded mb-2 font-bold">
        {showFAQ ? 'Hide FAQ' : 'Show FAQ'}
      </button>
      {showFAQ && (
        <ul className="list-disc pl-6">
          <li><b>Is PRO free?</b> Yes, PRO offers a free tier with premium features available.</li>
          <li><b>What sports are supported?</b> Most major sports, with more added regularly.</li>
          <li><b>How do I get started?</b> Download the app and create your profile!</li>
        </ul>
      )}
    </TerminalSection>
  );
} 