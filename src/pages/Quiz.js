import { useMemo, useState } from 'react';
import quiz from '../data/quiz.json';
import careers from '../data/careers.json';
import BookmarkButton from '../components/BookmarkButton';
import { useBookmarks } from '../context/BookmarksContext';

export default function Quiz(){
  const [interest, setInterest] = useState(quiz.interests[0]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const { recordRecent } = useBookmarks();

  const questions = useMemo(()=> quiz.questions[interest] || [], [interest]);

  function evaluate(){
    // Simple evaluation: if majority are Agree/Strongly Agree, show recommendations for interest
    const values = Object.values(answers);
    const score = values.filter(v => v === 'Agree' || v === 'Strongly Agree').length;
    if (score >= Math.ceil(questions.length/2)) {
      setResult(quiz.recommendations[interest] || []);
    } else {
      setResult([]);
    }
  }

  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Interest-Based Quiz</h1>
          <p className="hero-subtitle-image">Discover your ideal career path through personalized questions</p>
          <div className="hero-tags hero-tags-image">
            <span className="hero-tag-image">10 Questions</span>
            <span className="hero-tag-image">5 Interest Areas</span>
            <span className="hero-tag-image">Personalized Results</span>
          </div>
        </div>
      </div>

      <div className="container hero">

      {/* Quiz Controls */}
      <div className="card" style={{marginBottom:'24px', background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)'}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
          <span style={{fontSize:'24px'}}>⚙️</span>
          <h3 style={{margin:0}}>Quiz Settings</h3>
        </div>
        <div className="toolbar">
          <select className="select" value={interest} onChange={e=>{ setInterest(e.target.value); setAnswers({}); setResult(null); }}>
            {quiz.interests.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
          <button className="button primary" onClick={evaluate}>Get Recommendations</button>
        </div>
      </div>
      <div className="card-grid">
        {questions.map((q, idx) => (
          <div key={idx} className="card" style={{gridColumn:'span 12'}}>
            <div style={{fontWeight:600, marginBottom:8}}>{q.q}</div>
            <div className="toolbar">
              {q.options.map(opt => (
                <label key={opt} style={{display:'inline-flex', alignItems:'center', gap:6}}>
                  <input type="radio" name={`q${idx}`} value={opt} checked={answers[idx]===opt} onChange={()=> setAnswers(prev=> ({...prev, [idx]: opt}))} /> {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {result && (
        <div className="card" style={{marginTop:16, background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)'}}>
          <div style={{textAlign:'center', marginBottom:'16px'}}>
            <span style={{fontSize:'32px'}}>🎯</span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Your Career Recommendations</h3>
            <p style={{margin:'8px 0 0', opacity:0.8}}>Based on your {interest} interests</p>
          </div>
          
          {result.length ? (
            <div className="card-grid">
              {result.map(r => {
                const career = careers.find(c => c.title.toLowerCase().includes(r.toLowerCase()) || r.toLowerCase().includes(c.title.toLowerCase()));
                return (
                  <div key={r} className="card" style={{gridColumn:'span 6', background:'linear-gradient(135deg, rgba(59,130,246,.1), transparent)'}}>
                    <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px'}}>
                      <div style={{fontSize:'32px'}}>{career?.image || '💼'}</div>
                      <div>
                        <h4 style={{margin:'0 0 4px'}}>{r}</h4>
                        {career?.industry && <span className="tag">{career.industry}</span>}
                      </div>
                    </div>
                    
                    {career && (
                      <>
                        <p style={{fontSize:'14px', margin:'0 0 8px', opacity:0.9}}>{career.description}</p>
                        {career.salaryRange && (
                          <div style={{fontSize:'12px', color:'#22c55e', fontWeight:'600', marginBottom:'8px'}}>
                            💰 {career.salaryRange}
                          </div>
                        )}
                        {career.skills && (
                          <div style={{marginBottom:'8px'}}>
                            <strong style={{fontSize:'12px'}}>Key Skills:</strong>
                            <div style={{display:'flex', gap:'4px', flexWrap:'wrap', marginTop:'4px'}}>
                              {career.skills.slice(0,3).map(skill => (
                                <span key={skill} style={{fontSize:'10px', background:'rgba(59,130,246,.2)', padding:'2px 6px', borderRadius:'8px'}}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    
                    <div style={{display:'flex', gap:8, marginTop:'12px'}}>
                      <BookmarkButton item={{ id: r.toLowerCase().replace(/\s+/g,'-'), type: 'career', title: r }} />
                      <button className="button ghost" onClick={()=> recordRecent({ id: r.toLowerCase().replace(/\s+/g,'-'), type: 'career', title: r })}>Mark Viewed</button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{textAlign:'center', padding:'20px'}}>
              <div style={{fontSize:'48px', marginBottom:'16px'}}>🤔</div>
              <h4>No Strong Match Found</h4>
              <p>Try answering more questions or select a different interest area to get better recommendations.</p>
              <button className="button primary" onClick={()=>{setAnswers({}); setResult(null);}} style={{marginTop:'12px'}}>
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
      </div>
    </>
  );
}


