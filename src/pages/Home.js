import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookmarks } from '../context/BookmarksContext';

export default function Home(){
  const navigate = useNavigate();
  const [username, setUsername] = useState(sessionStorage.getItem('nsn_username') || '');
  const [userType, setUserType] = useState(sessionStorage.getItem('nsn_userType') || 'student');
  const { recent } = useBookmarks();

  useEffect(() => {
    if (username) sessionStorage.setItem('nsn_username', username);
  }, [username]);
  useEffect(() => { sessionStorage.setItem('nsn_userType', userType); }, [userType]);

  return (
    <>
      {/* Hero Section with Video Background - Outside Container */}
      <div className="hero-section hero-section-video">
        <video 
          autoPlay 
          muted 
          loop 
          className="hero-video"
        >
          <source src="/career.mp4" type="video/mp4" />
        </video>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="animated-heading hero-title"><span style={{color:'#0a4ce5ff'}}>Welcome To </span> NextStep Navigator</h1>
          <p className="hero-subtitle">Your Guide to the Future</p>
          <div className="hero-tags">
            <span className="hero-tag">Career Discovery</span>
            <span className="hero-tag">Educational Guidance</span>
            <span className="hero-tag">Expert Insights</span>
          </div>
        </div>
      </div>

      <div className="container hero">

    {/* Section 1: User Selection */}
<div 
  className="card overlap-card " 
style={{
    gridColumn: 'span 12',
    background: 'rgb(144, 140, 140)',
    margin: '0 auto 24px',
    position: 'absolute',     // 👈 relative ki jagah absolute
    top: '85%',               // 👈 hero video ke beech se neeche
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,               // 👈 taake overlay aur video ke upar aye
    width: '80%',
    borderRadius: '16px',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.25)',
    padding: '60px',
    color: 'black'
  
  }}
>
  <div className="toolbar">
    <input 
      className="input" 
      placeholder="Enter your name" 
      value={username} 
      onChange={e=>setUsername(e.target.value)} 
    />
    <select 
      className="select" 
      value={userType} 
      onChange={e=>setUserType(e.target.value)}
    >
      <option value="student">Student (Grades 8–12)</option>
      <option value="graduate">Graduate (UG/PG)</option>
      <option value="professional">Working Professional</option>
    </select>
    <button 
      className="button primary" 
      onClick={()=> navigate('/career-bank')}
    >
      Explore Careers
    </button>
  </div>
  <div className='' style={{marginTop:8 ,   }}>
    Welcome{username ? `, ${username}` : ''}! Tailored menu shown based on <span className="tag bg-dark" style={{ background: 'black' , color: 'white'}}>{userType}</span>.
  </div>
</div>


      {/* Section 2: Main Features Grid */}


      <center><h1 class="text-center text-white" style={{ fontFamily: 'cursive' , fontWeight: 'bold',marginTop: '50px'}}>Explore Your Pathways</h1></center>
    
      <div className="card-grid mt-5" style={{marginBottom:'24px'}}>
        <div className="card" style={{background:'linear-gradient(135deg, rgba(59,130,246,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>💼</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Career Bank</h3>
          </div>
          <p>Filter by industry, sort by salary or A–Z.</p>
          <button className="button ghost" onClick={()=>navigate('/career-bank')}>Explore</button>
        </div>
        
        <div className="card" style={{background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>🧠</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Interest Quiz</h3>
          </div>
          <p>Discover streams based on interests.</p>
          <button className="button ghost" onClick={()=>navigate('/quiz')}>Start Quiz</button>
        </div>
        
        <div className="card" style={{background:'linear-gradient(135deg, rgba(168,85,247,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>🎥</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Multimedia</h3>
          </div>
          <p>Videos and podcasts by professionals.</p>
          <button className="button ghost" onClick={()=>navigate('/multimedia')}>Watch</button>
        </div>

        <div className="card" style={{background:'linear-gradient(135deg, rgba(245,158,11,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>🏆</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Success Stories</h3>
          </div>
          <p>Inspiring journeys from professionals.</p>
          <button className="button ghost" onClick={()=>navigate('/success-stories')}>Read</button>
        </div>
      </div>


      <center><h1 class="text-center text-white" style={{ fontFamily: 'cursive' , fontWeight: 'bold',marginTop: '50px'}}>Stay Informed & Engaged</h1></center>

      {/* Section 3: Additional Resources */}
      <div className="card-grid" style={{marginBottom:'24px'}}>
        <div className="card" style={{background:'linear-gradient(135deg, rgba(239,68,68,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>📚</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Resources</h3>
          </div>
          <p>Articles, guides, and study materials.</p>
          <button className="button ghost" onClick={()=>navigate('/resources')}>Browse</button>
        </div>

        <div className="card" style={{background:'linear-gradient(135deg, rgba(236,72,153,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>🎓</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Admissions</h3>
          </div>
          <p>Guidance for college and university.</p>
          <button className="button ghost" onClick={()=>navigate('/admissions')}>Learn</button>
        </div>

        <div className="card" style={{background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>🔖</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Bookmarks</h3>
          </div>
          <p>Save and organize your favorite content.</p>
          <button className="button ghost" onClick={()=>navigate('/bookmarks')}>View</button>
        </div>

        <div className="card" style={{background:'linear-gradient(135deg, rgba(168,85,247,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>💬</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Feedback</h3>
          </div>
          <p>Share your thoughts and suggestions.</p>
          <button className="button ghost" onClick={()=>navigate('/feedback')}>Submit</button>
        </div>
      </div>

      {/* Section 4: Recently Viewed */}
      <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(148,163,184,.1), transparent)', marginBottom:'24px'}}>
        <div style={{textAlign:'center', marginBottom:'16px'}}>
          <span style={{fontSize:'24px'}}>🕒</span>
          <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Recently Viewed</h3>
        </div>
        {recent.length ? (
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            {recent.slice(0,8).map(r => <span key={`${r.type}:${r.id}`} className="tag">{r.title}</span>)}
          </div>
        ) : <p>No items yet. Explore content to see recent items here.</p>}
      </div>

      {/* Section 5: Quick Stats */}
      <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(59,130,246,.1), rgba(34,197,94,.1))'}}>
        <div style={{textAlign:'center', marginBottom:'16px'}}>
          <span style={{fontSize:'24px'}}>📊</span>
          <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Platform Statistics</h3>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'16px'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'24px', fontWeight:'bold', color:'#3b82f6'}}>20+</div>
            <div>Career Profiles</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'24px', fontWeight:'bold', color:'#22c55e'}}>50+</div>
            <div>Quiz Questions</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'24px', fontWeight:'bold', color:'#a855f7'}}>12+</div>
            <div>Success Stories</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'24px', fontWeight:'bold', color:'#f59e0b'}}>30+</div>
            <div>Resources</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}