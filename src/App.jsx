import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
// import Media from './pages/Media';
import FAQ from './pages/FAQ';
import Analytics from './pages/Analytics';
import BetaSignup from './pages/BetaSignup';
import PrivacyPolicy from './pages/PrivacyPolicy';

function TerminalNav() {
  return (
    <nav className="w-full max-w-4xl mx-auto mt-4 mb-2">
      <div className="bg-pink-200 border border-pink-400 rounded-lg flex flex-wrap gap-2 p-2 font-mono text-pink-900">
        <span className="mr-2 text-pink-600">$</span>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'underline font-bold' : ''}>home</NavLink>
        <span>/</span>
        <NavLink to="/features" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>features</NavLink>
        <span>/</span>
        {/* <NavLink to="/media" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>media</NavLink>
        <span>/</span> */}
        <NavLink to="/analytics" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>analytics</NavLink>
        <span>/</span>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>faq</NavLink>
        <span>/</span>
        <NavLink to="/privacy" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>privacy</NavLink>
        <span>/</span>
        <NavLink to="/beta" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>beta</NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen w-full bg-pink-300 font-mono flex flex-col items-center justify-center">
        {/* Terminal window bar */}
        <div className="flex space-x-2 mb-2 mt-4 self-start ml-8">
          <span className="w-3 h-3 bg-pink-500 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-pink-400 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-pink-200 rounded-full inline-block"></span>
        </div>
        <TerminalNav />
        <main className="w-full flex-1 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            {/* <Route path="/media" element={<Media />} /> */}
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/beta" element={<BetaSignup />} />
          </Routes>
        </main>
        <footer className="mt-8 text-pink-900 text-center text-xs opacity-80 w-full">
          {/* <div className="flex justify-center space-x-4 mb-2">
            <span className="font-mono">/./_ Follow us: </span>
            <a href="#" className="hover:underline">@proapp</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
          </div> */}
          <div>&copy; {new Date().getFullYear()} PRO App. All rights reserved.</div>
        </footer>
      </div>
    </HashRouter>
  );
}
