import { useBookmarks } from '../context/BookmarksContext';

export default function Bookmarks(){
  const { bookmarks, remove, updateNote, exportText, shareClipboard } = useBookmarks();

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
          <h1 className="animated-heading hero-title">Your Bookmarks</h1>
          <p className="hero-subtitle-image">Manage your saved careers, resources, and stories</p>
          <div className="hero-tags hero-tags-image">
            <span className="hero-tag-image">Personal Collection</span>
            <span className="hero-tag-image">Export & Share</span>
            <span className="hero-tag-image">Add Notes</span>
          </div>
        </div>
      </div>

      <div className="container hero">

      {/* Actions Section */}
      <div className="card" style={{marginBottom:'24px', background:'linear-gradient(135deg, rgba(34,197,94,.1), transparent)'}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
          <span style={{fontSize:'24px'}}>⚡</span>
          <h3 style={{margin:0}}>Quick Actions</h3>
        </div>
        <div className="toolbar">
          <button className="button primary" onClick={exportText}>Export List</button>
          <button className="button ghost" onClick={shareClipboard}>Share (copy)</button>
        </div>
      </div>
      <div className="card-grid">
        {bookmarks.map(b => (
          <div key={`${b.type}:${b.id}`} className="card">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <div className="tag">{b.type}</div>
                <h3 style={{margin:'6px 0'}}>{b.title}</h3>
                {b.meta && <div style={{color:'#94a3b8'}}>{b.meta}</div>}
              </div>
              <button className="button ghost" onClick={()=> remove(b)}>Remove</button>
            </div>
            <div style={{marginTop:8}}>
              <label style={{display:'block', fontWeight:600, marginBottom:6}}>Personal Note</label>
              <textarea className="input" rows={3} value={b.note || ''} onChange={e=> updateNote(b, e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      {bookmarks.length === 0 && <p>No bookmarks yet.</p>}
      </div>
    </>
  );
}


