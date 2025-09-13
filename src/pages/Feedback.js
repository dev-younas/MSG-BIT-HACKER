import { useState } from 'react';

export default function Feedback(){
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Feedback</h1>
          <p className="hero-subtitle-image">Share your thoughts and help us improve NextStep Navigator</p>
        </div>
      </div>

      <div className="container hero">

      {/* Feedback Form with Side-by-Side Layout */}
      <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(168,85,247,.1), transparent)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'32px', alignItems:'center'}}>
          
          {/* Left Side - Image/Visual */}
          <div style={{textAlign:'center', padding:'20px'}}>
            <div style={{fontSize:'120px', marginBottom:'20px'}}>💬</div>
            <h3 style={{margin:'0 0 16px', color:'#a855f7'}}>We Value Your Feedback</h3>
            <p style={{fontSize:'16px', lineHeight:'1.6', opacity:0.8, margin:'0 0 20px'}}>
              Your thoughts and suggestions help us improve NextStep Navigator and make it better for everyone.
            </p>
            
            <div style={{display:'grid', gap:'12px', marginTop:'24px'}}>
              <div style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px', background:'rgba(168,85,247,.1)', borderRadius:'8px'}}>
                <span style={{fontSize:'20px'}}>🎯</span>
                <span style={{fontSize:'14px'}}>Help us improve our career recommendations</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px', background:'rgba(168,85,247,.1)', borderRadius:'8px'}}>
                <span style={{fontSize:'20px'}}>📚</span>
                <span style={{fontSize:'14px'}}>Suggest new resources and content</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'12px', padding:'12px', background:'rgba(168,85,247,.1)', borderRadius:'8px'}}>
                <span style={{fontSize:'20px'}}>🚀</span>
                <span style={{fontSize:'14px'}}>Share ideas for new features</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div style={{textAlign:'center', marginBottom:'20px'}}>
              <span style={{fontSize:'32px'}}>📝</span>
              <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Send Us Your Feedback</h3>
            </div>
            
            {submitted ? (
              <div style={{textAlign:'center', padding:'20px'}}>
                <div style={{fontSize:'48px', marginBottom:'16px'}}>✅</div>
                <h3 style={{color:'#22c55e'}}>Thank You!</h3>
                <p>Your feedback has been received. We appreciate your input!</p>
              </div>
            ) : (
              <form style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                <div>
                  <label style={{display:'block', fontWeight:'600', marginBottom:'6px', fontSize:'14px'}}>Your Name</label>
                  <input 
                    className="input" 
                    placeholder="Enter your name" 
                    value={form.name} 
                    onChange={e=>setForm({...form, name:e.target.value})} 
                    style={{width:'100%'}}
                  />
                </div>
                
                <div>
                  <label style={{display:'block', fontWeight:'600', marginBottom:'6px', fontSize:'14px'}}>Email Address</label>
                  <input 
                    className="input" 
                    type="email"
                    placeholder="your.email@example.com" 
                    value={form.email} 
                    onChange={e=>setForm({...form, email:e.target.value})} 
                    style={{width:'100%'}}
                  />
                </div>
                
                <div>
                  <label style={{display:'block', fontWeight:'600', marginBottom:'6px', fontSize:'14px'}}>Feedback Type</label>
                  <select className="select" style={{width:'100%'}}>
                    <option value="general">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="content">Content Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label style={{display:'block', fontWeight:'600', marginBottom:'6px', fontSize:'14px'}}>Your Message</label>
                  <textarea 
                    className="input" 
                    placeholder="Tell us what you think..." 
                    rows={5} 
                    value={form.message} 
                    onChange={e=>setForm({...form, message:e.target.value})} 
                    style={{width:'100%', resize:'vertical'}}
                  />
                </div>
                
                <button 
                  className="button primary" 
                  onClick={()=> setSubmitted(true)}
                  style={{alignSelf:'flex-start', padding:'12px 24px'}}
                >
                  📤 Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


