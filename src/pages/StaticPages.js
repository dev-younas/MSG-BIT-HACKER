import { useState } from 'react';

export function About(){
  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">About Us</h1>
          <p className="hero-subtitle-image">Learn more about NextStep Navigator and our mission</p>
        </div>
      </div>

    <div className="container hero">

      {/* Section 1: Our Mission */}
      <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(59,130,246,.1), transparent)', marginBottom:'24px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', alignItems:'center'}}>
          <div>
            <div style={{textAlign:'center', marginBottom:'16px'}}>
              <span style={{fontSize:'32px'}}>🎯</span>
              <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Our Mission</h3>
            </div>
            <p style={{fontSize:'16px', lineHeight:'1.6', margin:'0 0 16px'}}>
              NextStep Navigator is a comprehensive career guidance platform designed to help students and graduates make informed decisions about their future. We provide personalized career recommendations, educational guidance, and professional insights through an intuitive and accessible platform.
            </p>
            <p style={{fontSize:'14px', opacity:0.8}}>
              Built with modern React technology and powered by extensive career databases, we aim to bridge the gap between education and career success.
            </p>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'120px', marginBottom:'16px'}}>🚀</div>
            <p style={{fontSize:'14px', opacity:0.7}}>Empowering the next generation of professionals</p>
          </div>
        </div>
      </div>

      {/* Section 2: What We Offer */}
      <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)', marginBottom:'24px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', alignItems:'center'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'120px', marginBottom:'16px'}}>💼</div>
            <p style={{fontSize:'14px', opacity:0.7}}>Comprehensive career exploration tools</p>
          </div>
          <div>
            <div style={{textAlign:'center', marginBottom:'16px'}}>
              <span style={{fontSize:'32px'}}>🛠️</span>
              <h3 style={{margin:'8px 0 0', textAlign:'center'}}>What We Offer</h3>
            </div>
            <div style={{display:'grid', gap:'12px'}}>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <span style={{fontSize:'20px'}}>🎯</span>
                <span>Personalized career recommendations based on interests</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <span style={{fontSize:'20px'}}>📚</span>
                <span>Extensive resource library with guides and templates</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <span style={{fontSize:'20px'}}>🎥</span>
                <span>Multimedia content from industry professionals</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <span style={{fontSize:'20px'}}>🏆</span>
                <span>Inspiring success stories and career journeys</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Technology */}
      <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(168,85,247,.1), transparent)', marginBottom:'24px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', alignItems:'center'}}>
          <div>
            <div style={{textAlign:'center', marginBottom:'16px'}}>
              <span style={{fontSize:'32px'}}>⚡</span>
              <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Our Technology</h3>
            </div>
            <p style={{fontSize:'16px', lineHeight:'1.6', margin:'0 0 16px'}}>
              NextStep Navigator is built using cutting-edge web technologies to ensure fast, responsive, and reliable performance across all devices.
            </p>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
              <div style={{textAlign:'center', padding:'12px', background:'rgba(59,130,246,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', marginBottom:'4px'}}>⚛️</div>
                <div style={{fontSize:'12px', fontWeight:'600'}}>React.js</div>
              </div>
              <div style={{textAlign:'center', padding:'12px', background:'rgba(34,197,94,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', marginBottom:'4px'}}>📱</div>
                <div style={{fontSize:'12px', fontWeight:'600'}}>Responsive</div>
              </div>
              <div style={{textAlign:'center', padding:'12px', background:'rgba(168,85,247,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', marginBottom:'4px'}}>🚀</div>
                <div style={{fontSize:'12px', fontWeight:'600'}}>Fast Loading</div>
              </div>
              <div style={{textAlign:'center', padding:'12px', background:'rgba(245,158,11,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', marginBottom:'4px'}}>🔒</div>
                <div style={{fontSize:'12px', fontWeight:'600'}}>Secure</div>
              </div>
            </div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'120px', marginBottom:'16px'}}>💻</div>
            <p style={{fontSize:'14px', opacity:0.7}}>Modern web technologies for better user experience</p>
          </div>
        </div>
      </div>

      {/* Section 4: Our Impact */}
      <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(245,158,11,.1), transparent)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', alignItems:'center'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'120px', marginBottom:'16px'}}>📊</div>
            <p style={{fontSize:'14px', opacity:0.7}}>Making a real difference in career guidance</p>
          </div>
          <div>
            <div style={{textAlign:'center', marginBottom:'16px'}}>
              <span style={{fontSize:'32px'}}>🌟</span>
              <h3 style={{margin:'8px 0 0', textAlign:'center'}}>Our Impact</h3>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'16px', marginBottom:'16px'}}>
              <div style={{textAlign:'center', padding:'16px', background:'rgba(59,130,246,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', fontWeight:'bold', color:'#3b82f6'}}>20+</div>
                <div style={{fontSize:'12px'}}>Career Profiles</div>
              </div>
              <div style={{textAlign:'center', padding:'16px', background:'rgba(34,197,94,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', fontWeight:'bold', color:'#22c55e'}}>50+</div>
                <div style={{fontSize:'12px'}}>Quiz Questions</div>
              </div>
              <div style={{textAlign:'center', padding:'16px', background:'rgba(168,85,247,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', fontWeight:'bold', color:'#a855f7'}}>30+</div>
                <div style={{fontSize:'12px'}}>Resources</div>
              </div>
              <div style={{textAlign:'center', padding:'16px', background:'rgba(245,158,11,.1)', borderRadius:'8px'}}>
                <div style={{fontSize:'24px', fontWeight:'bold', color:'#f59e0b'}}>12+</div>
                <div style={{fontSize:'12px'}}>Success Stories</div>
              </div>
            </div>
            <p style={{fontSize:'14px', opacity:0.8, textAlign:'center'}}>
              Continuously expanding our database to serve more students and professionals worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Contact Us</h1>
          <p className="hero-subtitle-image">Get in touch with our team for support and inquiries</p>
        </div>
      </div>

    <div className="container hero">

      <div className="card-grid">
        {/* Contact Form */}
        <div className="card" style={{gridColumn:'span 8', background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
            <span style={{fontSize:'24px'}}>📝</span>
            <h3 style={{margin:0}}>Send us a Message</h3>
          </div>
          
          {submitted ? (
            <div style={{textAlign:'center', padding:'20px'}}>
              <div style={{fontSize:'48px', marginBottom:'16px'}}>✅</div>
              <h3 style={{color:'#22c55e'}}>Message Sent!</h3>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'16px'}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
                <input 
                  className="input" 
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input 
                  className="input" 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
                <input 
                  className="input" 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <input 
                  className="input" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </div>
              
              <textarea 
                className="input" 
                placeholder="Your Message" 
                rows={5} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
              
              <button type="submit" className="button primary" style={{alignSelf:'flex-start'}}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="card" style={{gridColumn:'span 4', background:'linear-gradient(135deg, rgba(59,130,246,.1), transparent)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
            <span style={{fontSize:'24px'}}>📧</span>
            <h3 style={{margin:0}}>Contact Information</h3>
          </div>
          
          <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            <div>
              <strong>Email:</strong><br />
              info@nextstepnavigator.com
            </div>
            
            <div>
              <strong>Phone:</strong><br />
              +1-555-0100
            </div>
            
            <div>
              <strong>Address:</strong><br />
              123 Career Street<br />
              Education City, EC 12345
            </div>
            
            <div>
              <strong>Business Hours:</strong><br />
              Mon-Fri: 9:00 AM - 6:00 PM<br />
              Sat: 10:00 AM - 4:00 PM
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="card" style={{gridColumn:'span 12', background:'linear-gradient(135deg, rgba(168,85,247,.1), transparent)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
            <span style={{fontSize:'24px'}}>🗺️</span>
            <h3 style={{margin:0}}>Find Us</h3>
          </div>
          <iframe 
            title="map" 
            src="https://maps.google.com/maps?q=aptech&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="300" 
            frameBorder="0"
            style={{borderRadius:'8px'}}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export function Admissions(){
  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Admissions & Coaching</h1>
          <p className="hero-subtitle-image">Comprehensive guidance for academic and career advancement</p>
          <div className="hero-tags hero-tags-image">
            <span className="hero-tag-image">Stream Selection</span>
            <span className="hero-tag-image">Study Abroad</span>
            <span className="hero-tag-image">Interview Prep</span>
            <span className="hero-tag-image">Resume Building</span>
          </div>
        </div>
      </div>

    <div className="container hero">

      <div className="card-grid">
        <div className="card" style={{background:'linear-gradient(135deg, rgba(59,130,246,.1), transparent)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>📚</span>
            <h3 style={{margin:0}}>Stream Selection (post-10th)</h3>
          </div>
          <p>Guidance on selecting Science, Commerce, or Arts based on strengths and interests.</p>
        </div>
        
        <div className="card" style={{background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>✈️</span>
            <h3 style={{margin:0}}>Study Abroad Guidelines</h3>
          </div>
          <p>Check eligibility, exams (IELTS/TOEFL), SOPs, LORs, timelines, and budgeting.</p>
        </div>
        
        <div className="card" style={{background:'linear-gradient(135deg, rgba(245,158,11,.1), transparent)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>💼</span>
            <h3 style={{margin:0}}>Interview Tips</h3>
          </div>
          <p>STAR method, company research, mock interviews, and follow-ups.</p>
        </div>
        
        <div className="card" style={{background:'linear-gradient(135deg, rgba(239,68,68,.1), transparent)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px'}}>
            <span style={{fontSize:'24px'}}>📄</span>
            <h3 style={{margin:0}}>Resume Guidelines</h3>
          </div>
          <p>One-page resumes for graduates, quantify impact, tailor to roles.</p>
        </div>
      </div>
    </div>
    </>
  );
}


