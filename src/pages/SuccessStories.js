import stories from '../data/stories.json';
import { useMemo, useState } from 'react';
import BookmarkButton from '../components/BookmarkButton';
import { useBookmarks } from '../context/BookmarksContext';

export default function SuccessStories(){
  const [domain, setDomain] = useState('all');
  const domains = useMemo(()=> ['all', ...Array.from(new Set(stories.map(s=>s.domain)))], []);
  const { recordRecent } = useBookmarks();

  const items = useMemo(()=> stories.filter(s => domain==='all' || s.domain===domain), [domain]);

  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Success Stories</h1>
          <p className="hero-subtitle-image">Inspiring journeys from professionals across different fields</p>
          <div className="hero-tags hero-tags-image">
            <span className="hero-tag-image">Real Stories</span>
            <span className="hero-tag-image">Career Journeys</span>
            <span className="hero-tag-image">Inspiration</span>
          </div>
        </div>
      </div>

      <div className="container hero">

      {/* Filter Section */}
      <div className="card" style={{marginBottom:'24px', background:'linear-gradient(135deg, rgba(245,158,11,.1), transparent)'}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
          <span style={{fontSize:'24px'}}>🔍</span>
          <h3 style={{margin:0}}>Filter by Domain</h3>
        </div>
        <div className="toolbar">
          <select className="select" value={domain} onChange={e=>setDomain(e.target.value)}>
            {domains.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>
      <div className="card-grid">
        {items.map(s => (
          <div key={s.id} className="card">
            <div style={{display:'flex', gap:12, alignItems:'center'}}>
              <div style={{width:56, height:56, borderRadius:16, background:'rgba(148,163,184,.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>{s.photo}</div>
              <div>
                <h3 style={{margin:'0 0 6px'}}>{s.name}</h3>
                <div className="tag">{s.domain}</div>
              </div>
            </div>
            <p style={{marginTop:8}}>{s.summary}</p>
            {s.journey && (
              <div style={{marginTop:8, padding:8, background:'rgba(59,130,246,.1)', borderRadius:8, fontSize:'14px'}}>
                <strong>Career Journey:</strong> {s.journey}
              </div>
            )}
            <div style={{display:'flex', gap:8, marginTop:12}}>
              <BookmarkButton item={{ id: s.id, type: 'story', title: s.name, meta: s.domain }} />
              <button className="button ghost" onClick={()=> recordRecent({ id: s.id, type: 'story', title: s.name, meta: s.domain })}>Mark Viewed</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}


