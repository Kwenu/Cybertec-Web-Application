import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation } from
'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageHero } from './components/layout/PageHero';
import { ActionLink } from './components/ui/ActionLink';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Partners } from './pages/Partners';
import { Solutions } from './pages/Solutions';
import { EngineeringServices } from './pages/EngineeringServices';
import { Projects } from './pages/Projects';
import { Clients } from './pages/Clients';
import { Contact } from './pages/Contact';
import { Quote } from './pages/Quote';
import { Telecommunication } from './pages/Telecommunication';
import { Broadcasting } from './pages/Broadcasting';
import { EnterpriseNetworking } from './pages/EnterpriseNetworking';
import { SolarAgriculture } from './pages/SolarAgriculture';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow="Page not found"
        title="This page isn’t available"
        subtitle="The page may have moved. Start from the technology catalogue or contact our supply team.">
        
        <div className="flex flex-wrap gap-3">
          <ActionLink to="/products" withArrow>
            Explore Products
          </ActionLink>
          <ActionLink to="/contact" variant="onDark">
            Contact Our Team
          </ActionLink>
        </div>
      </PageHero>
    </main>);

}

export function App() {
  return (
    <BrowserRouter basename="/Cybertec-Web-Application">
      <div className="flex min-h-screen w-full flex-col bg-white">
        <ScrollToTop />

        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route
              path="/engineering-services"
              element={<EngineeringServices />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route
              path="/telecommunication"
              element={<Telecommunication />}
            />
            <Route path="/broadcasting" element={<Broadcasting />} />
            <Route
              path="/enterprise-networking"
              element={<EnterpriseNetworking />}
            />
            <Route
              path="/solar-agriculture"
              element={<SolarAgriculture />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}