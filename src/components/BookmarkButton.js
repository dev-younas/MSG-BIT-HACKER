import { useBookmarks } from '../context/BookmarksContext';

export default function BookmarkButton({ item }){
  const { bookmarks, add, remove } = useBookmarks();
  const isSaved = bookmarks.some(b => b.id === item.id && b.type === item.type);
  return (
    <button className="button ghost" onClick={() => isSaved ? remove(item) : add(item)}>
      {isSaved ? 'Remove Bookmark' : 'Add Bookmark'}
    </button>
  );
}


