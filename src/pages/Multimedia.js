import { useMemo, useState } from 'react';
import media from '../data/media.json';
import BookmarkButton from '../components/BookmarkButton';
import { useBookmarks } from '../context/BookmarksContext';

export default function Multimedia(){
  const [category, setCategory] = useState('all');
  const [type, setType] = useState('all');
  const { recordRecent } = useBookmarks();

  const categories = useMemo(()=> ['all', ...Array.from(new Set(media.map(m=>m.category)))], []);

  const items = useMemo(()=> {
    return media.filter(m => (category==='all' || m.category===category) && (type==='all' || m.type===type));
  }, [category, type]);

  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Multimedia Guidance</h1>
          <p className="hero-subtitle-image">Learn from industry experts through videos and podcasts</p>
          <div className="hero-tags hero-tags-image">
            <span className="hero-tag-image">Videos</span>
            <span className="hero-tag-image">Podcasts</span>
            <span className="hero-tag-image">Expert Insights</span>
          </div>
        </div>
      </div>

      <div className="container hero">

      {/* Filters Section */}
      <div className="card" style={{marginBottom:'24px', background:'linear-gradient(135deg, rgba(168,85,247,.1), transparent)'}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
          <span style={{fontSize:'24px'}}>🔍</span>
          <h3 style={{margin:0}}>Filter Content</h3>
        </div>
        <div className="toolbar">
          <select className="select" value={category} onChange={e=>setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="select" value={type} onChange={e=>setType(e.target.value)}>
            <option value="all">All Types</option>
            <option value="video">Videos Only</option>
            <option value="podcast">Podcasts Only</option>
          </select>
        </div>
      </div>
      <div className="media-grid">
        {items.map(i => (
          <div key={i.id} className="media-card">
            <div style={{padding:12}}>
              <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
                <span style={{fontSize:'24px'}}>{i.thumbnail}</span>
                <div className="tag">{i.type}</div>
                <div className="tag">{i.category}</div>
              </div>
              <h3 style={{margin:'0 0 8px'}}>{i.title}</h3>
              <p style={{margin:'0 0 12px', color:'#94a3b8', fontSize:'14px'}}>{i.description}</p>
              <div style={{display:'flex', gap:8}}>
                <BookmarkButton item={{ id: i.id, type: 'media', title: i.title, meta: i.type }} />
                <button className="button ghost" onClick={()=> recordRecent({ id: i.id, type: 'media', title: i.title, meta: i.type })}>Mark Viewed</button>
              </div>
            </div>
            {i.type === 'video' ? (
              <iframe title={i.title} src={i.url} width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
            ) : (
              <audio controls style={{width:'100%'}} src={i.url}></audio>
            )}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}


