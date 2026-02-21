import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import News from './pages/News';
import EditorialBoard from './pages/EditorialBoard';
import Submit from './pages/Submit';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/editorial-board" element={<EditorialBoard />} />
              <Route path="/submit" element={<Submit />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
