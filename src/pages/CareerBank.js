import { useEffect, useMemo, useState } from 'react';
import data from '../data/careers.json';
import BookmarkButton from '../components/BookmarkButton';
import { useBookmarks } from '../context/BookmarksContext';

export default function CareerBank(){
  const { recordRecent } = useBookmarks();
  const [industry, setIndustry] = useState('All');
  const [sort, setSort] = useState('alpha');
  const industries = useMemo(() => ['All', ...Array.from(new Set(data.map(c=>c.industry)))], []);

  const careers = useMemo(() => {
    let list = data.slice();
    if (industry !== 'All') list = list.filter(c=>c.industry === industry);
    if (sort === 'alpha') list.sort((a,b)=> a.title.localeCompare(b.title));
    if (sort === 'salary') list.sort((a,b)=> (a.salaryRange||'').localeCompare(b.salaryRange||''));
    return list;
  }, [industry, sort]);

  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Career Bank</h1>
          <p className="hero-subtitle-image">Explore {careers.length} career opportunities across different industries</p>
          <div className="hero-tags hero-tags-image">
            <span className="hero-tag-image">Technology</span>
            <span className="hero-tag-image">Healthcare</span>
            <span className="hero-tag-image">Business</span>
            <span className="hero-tag-image">Engineering</span>
            <span className="hero-tag-image">Arts</span>
          </div>
        </div>
      </div>

      <div className="container hero">

      {/* Filters Section */}
      <div className="card" style={{marginBottom:'24px', background:'linear-gradient(135deg, rgba(59,130,246,.1), transparent)'}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
          <span style={{fontSize:'24px'}}>🔍</span>
          <h3 style={{margin:0}}>Filter & Sort</h3>
        </div>
        <div className="toolbar">
          <select className="select" value={industry} onChange={e=>setIndustry(e.target.value)}>
            {industries.map(ind=> <option key={ind} value={ind}>{ind}</option>)}
          </select>
          <select className="select" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="alpha">Sort A–Z</option>
            <option value="salary">Sort by Salary Range</option>
          </select>
        </div>
      </div>
      <div className="card-grid">
        {careers.map(c => (
          <div key={c.id} className="card">
            <div style={{display:'flex', gap:12, alignItems:'center'}}>
              <div style={{width:56, height:56, borderRadius:12, background:'rgba(148,163,184,.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>{c.image}</div>
              <div>
                <h3 style={{margin:'0 0 6px'}}>{c.title}</h3>
                <div className="tag">{c.industry}</div>
                <div className="tag">{c.salaryRange}</div>
              </div>
            </div>
            <p style={{marginTop:8}}>{c.description}</p>
            <div style={{marginTop:8}}>
              <strong>Skills:</strong> {c.skills.join(', ')}
            </div>
            <div style={{marginTop:4}}>
              <strong>Education:</strong> {c.education}
            </div>
            <div style={{marginTop:8, display:'flex', gap:8}}>
              <BookmarkButton item={{ id: c.id, type: 'career', title: c.title, meta: c.industry }} />
              <button className="button ghost" onClick={()=> recordRecent({ id: c.id, type: 'career', title: c.title, meta: c.industry })}>Mark Viewed</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}


