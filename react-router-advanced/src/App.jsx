import { Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
 import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/blog/hello-world">Sample Blog</Link>
      </nav>
      <Routes>
      
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
        />
      </Routes>
    </>
  );
}
