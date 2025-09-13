import resources from '../data/resources.json';

export default function Resources(){
  return (
    <>
      {/* Hero Section with Image Background - Outside Container */}
      <div className="hero-section hero-section-image" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay hero-overlay-image"></div>
        
        <div className="hero-content hero-content-image">
          <h1 className="animated-heading hero-title">Resource Library</h1>
          <p className="hero-subtitle-image">Comprehensive collection of career guidance materials</p>
          <div className="hero-tags hero-tags-image">
            <span className="hero-tag-image">Articles</span>
            <span className="hero-tag-image">eBooks</span>
            <span className="hero-tag-image">Checklists</span>
            <span className="hero-tag-image">Webinars</span>
          </div>
        </div>
      </div>

      <div className="container hero">

      {Object.keys(resources).map(group => (
        <div key={group} className="card" style={{marginBottom:16}}>
          <div style={{textAlign:'center', marginBottom:'16px'}}>
            <span style={{fontSize:'32px'}}>
              {group === 'Articles' ? '📖' : 
               group === 'eBooks' ? '📚' : 
               group === 'Checklists' ? '✅' : '🎥'}
            </span>
            <h3 style={{margin:'8px 0 0', textAlign:'center'}}>{group}</h3>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(12,1fr)', gap:12}}>
            {resources[group].map((r, idx) => (
              <div key={idx} className="card" style={{gridColumn:'span 4', background:'linear-gradient(135deg, rgba(59,130,246,.1), transparent)'}}>
                <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px'}}>
                  <div style={{fontSize:'24px'}}>{r.icon}</div>
                  <div>
                    <h4 style={{margin:'0 0 4px', fontSize:'16px'}}>{r.title}</h4>
                    <span className="tag" style={{fontSize:'10px'}}>{group}</span>
                  </div>
                </div>
                
                <p style={{fontSize:'14px', margin:'0 0 12px', opacity:0.9}}>{r.desc}</p>
                
                <div style={{display:'flex', gap:8, alignItems:'center'}}>
                  {r.link.includes('.pdf') ? (
                    <button 
                      className="button primary" 
                      onClick={() => {
                        // Simulate PDF opening
                        const pdfWindow = window.open('', '_blank');
                        pdfWindow.document.write(`
                          <html>
                            <head><title>${r.title}</title></head>
                            <body style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
                              <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                                <h1 style="color: #333; margin-bottom: 20px;">${r.title}</h1>
                                <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                                  <strong>📄 PDF Document Preview</strong><br>
                                  This is a simulated PDF view of "${r.title}"
                                </div>
                                <p style="line-height: 1.6; color: #666;">${r.desc}</p>
                                <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 5px;">
                                  <strong>Content Preview:</strong><br>
                                  This PDF contains detailed information about ${r.title.toLowerCase()}. 
                                  In a real application, this would be the actual PDF content.
                                </div>
                                <button onclick="window.close()" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
                              </div>
                            </body>
                          </html>
                        `);
                      }}
                    >
                      📄 Open PDF
                    </button>
                  ) : (
                    <a className="button primary" href={r.link} target="_blank" rel="noreferrer">
                      🔗 Open Link
                    </a>
                  )}
                  
                  <button 
                    className="button ghost" 
                    onClick={() => {
                      navigator.clipboard.writeText(r.link);
                      alert('Link copied to clipboard!');
                    }}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </>
  );
}


