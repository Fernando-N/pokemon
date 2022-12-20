import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PokeInfo } from './pages/PokeInfo';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<PokeInfo />} />
    </Routes>
  );
}
