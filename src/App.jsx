import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="relative select-none">
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#2563eb12_1px,transparent_1px),linear-gradient(to_bottom,#2563eb12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>  
  );
}

export default App;
