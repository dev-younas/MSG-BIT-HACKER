import './App.css';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Home from './pages/Home';
import CareerBank from './pages/CareerBank';
import Quiz from './pages/Quiz';
import Multimedia from './pages/Multimedia';
import SuccessStories from './pages/SuccessStories';
import Resources from './pages/Resources';
import Feedback from './pages/Feedback';
import { About, Contact, Admissions } from './pages/StaticPages';
import Bookmarks from './pages/Bookmarks';
import { BookmarksProvider, useBookmarks } from './context/BookmarksContext';

function Navbar() {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdowns = document.querySelectorAll('.has-dropdown');
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('open');
        }
      });
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="nsn-navbar" role="navigation" aria-label="Main">
      <div className="nsn-inner container">
        <a className="nsn-brand" href="/" aria-label="NextStep Navigator">
          <img src="Logo.png" alt="NextStep Navigator" />
        </a>
        <button className="nsn-toggle" aria-label="Toggle menu" aria-expanded="false" onClick={() => {
          const menu = document.getElementById('nsnMenu');
          if (menu) menu.classList.toggle('open');
        }}>Menu</button>
        <div className="nsn-menu" id="nsnMenu">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <div className="has-dropdown">
            <a href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false" onClick={(e)=>{e.preventDefault(); e.currentTarget.parentElement.classList.toggle('open');}}>Explore</a>
            <div className="dropdown">
              <NavLink to="/career-bank" className={({isActive}) => isActive ? 'active' : ''}>Career Bank</NavLink>
              <NavLink to="/quiz" className={({isActive}) => isActive ? 'active' : ''}>Interest Quiz</NavLink>
              <NavLink to="/multimedia" className={({isActive}) => isActive ? 'active' : ''}>Multimedia</NavLink>
              <NavLink to="/success-stories" className={({isActive}) => isActive ? 'active' : ''}>Success Stories</NavLink>
              <NavLink to="/resources" className={({isActive}) => isActive ? 'active' : ''}>Resources</NavLink>
            </div>
          </div>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
          <NavLink to="/feedback" className={({isActive}) => isActive ? 'active' : ''}>Feedback</NavLink>
        </div>
      </div>
    </nav>
  );
}



function Topbar() {
  const [username, setUsername] = useState(sessionStorage.getItem('nsn_username') || 'Guest');
  const [userType, setUserType] = useState(sessionStorage.getItem('nsn_userType') || 'student');
  const [clock, setClock] = useState(new Date());
  const [geo, setGeo] = useState(null);
  const [visitorCount, setVisitorCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const id = setInterval(()=> setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setGeo({ lat: pos.coords.latitude.toFixed(3), lon: pos.coords.longitude.toFixed(3) });
      }, () => setGeo(null), { maximumAge: 600000, timeout: 5000 });
    }
  }, []);

  useEffect(() => {
    // Simulate visitor counter
    const baseCount = 1247;
    const randomIncrement = Math.floor(Math.random() * 10) + 1;
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000 + Math.random() * 10000); // Random interval between 5-15 seconds
    
    setVisitorCount(baseCount + randomIncrement);
    return () => clearInterval(interval);
  }, []);

  const crumbs = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    const links = [];
    let path = '';
    for (const p of parts) {
      path += '/' + p;
      links.push({ label: p.replace(/-/g,' '), path });
    }
    return links;
  }, [location.pathname]);

  return (
    <div className="topbar">
      <div className="topbar-inner container">
        <div className="crumbs" aria-label="Breadcrumbs">
          <NavLink to="/">Home</NavLink>
          {crumbs.map((c,i)=> (
            <span key={c.path}> / <NavLink to={c.path}>{c.label}</NavLink></span>
          ))}
        </div>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <span title="Clock">🕐 {clock.toLocaleTimeString()}</span>
          <span title="User">👋 Welcome, {username} ({userType})</span>
          <span title="Visitors">👥 {visitorCount.toLocaleString()} visitors</span>
          <NavLink to="/bookmarks" className={({isActive}) => isActive ? 'active' : ''}>Bookmarks</NavLink>
          {geo && <span title="Location">📍 {geo.lat}, {geo.lon}</span>}
        </div>
      </div>
    </div>
  );
}

function Placeholder({ title }){
  return (
    <div className="container hero">
      <h1 className="animated-heading">{title}</h1>
      <p>Content will be ported from static pages.</p>
    </div>
  );
}

function App() {
  return (
    <BookmarksProvider>
      <Navbar />
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-bank" element={<CareerBank />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      <footer className="footer">
        <div className="container">© NextStep Navigator</div>
      </footer>
    </BookmarksProvider>
  );
}

export default App;
