import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from '../components/layout/SmoothScroll';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageTransition } from '../components/layout/PageTransition';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-surface text-on-surface">
          <Navbar />
          <div className="flex-1">
            <PageTransition>
              <AppRoutes />
            </PageTransition>
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
