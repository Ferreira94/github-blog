import { Route, Routes } from 'react-router-dom';

import { Home, Post } from './pages';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}
