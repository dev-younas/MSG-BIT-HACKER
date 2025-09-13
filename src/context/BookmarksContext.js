import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const BookmarksContext = createContext(null);

function load(key, fallback){
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
}
function save(key, value){ try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ } }

export function BookmarksProvider({ children }){
  const [bookmarks, setBookmarks] = useState(() => load('nsn_bookmarks', []));
  const [recent, setRecent] = useState(() => load('nsn_recent', []));

  useEffect(() => { save('nsn_bookmarks', bookmarks); }, [bookmarks]);
  useEffect(() => { save('nsn_recent', recent); }, [recent]);

  const add = useCallback((item) => {
    setBookmarks(prev => {
      if (prev.find(b => b.id === item.id && b.type === item.type)) return prev;
      return [...prev, { ...item, note: item.note || '' }];
    });
  }, []);
  const remove = useCallback((item) => {
    setBookmarks(prev => prev.filter(b => !(b.id === item.id && b.type === item.type)));
  }, []);
  const updateNote = useCallback((item, note) => {
    setBookmarks(prev => prev.map(b => (b.id === item.id && b.type === item.type) ? { ...b, note } : b));
  }, []);

  const recordRecent = useCallback((item) => {
    setRecent(prev => {
      const filtered = prev.filter(b => !(b.id === item.id && b.type === item.type));
      const next = [item, ...filtered].slice(0, 12);
      return next;
    });
  }, []);

  const exportText = useCallback(() => {
    const lines = [
      'NextStep Navigator — Bookmarks Export',
      '====================================',
      ...bookmarks.map(b => `- [${b.type}] ${b.title}${b.meta ? ' — ' + b.meta : ''}${b.note ? `\n  Note: ${b.note}` : ''}`)
    ].join('\n');
    const blob = new Blob([lines], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'nsn-bookmarks.txt'; a.click();
    URL.revokeObjectURL(url);
  }, [bookmarks]);

  const shareClipboard = useCallback(async () => {
    const text = bookmarks.map(b => `• ${b.title} (${b.type})`).join('\n');
    try { await navigator.clipboard.writeText(text); alert('Copied recommendations to clipboard'); } catch { alert('Copy failed'); }
  }, [bookmarks]);

  const value = useMemo(() => ({ bookmarks, add, remove, updateNote, recent, recordRecent, exportText, shareClipboard }), [bookmarks, add, remove, updateNote, recent, recordRecent, exportText, shareClipboard]);
  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
}

export function useBookmarks(){
  const ctx = useContext(BookmarksContext);
  if (!ctx) throw new Error('useBookmarks must be used within BookmarksProvider');
  return ctx;
}


