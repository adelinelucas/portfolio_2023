import { Routes, Route,NavLink } from 'react-router-dom';
import './App.css';
// import Appv1 from './appv1/Appv1';
import Navbar from './global/components/Navbar';
import Contact from './appv1/pages/Contact';
import Home from './appv1/pages/Home';
import About from './appv1/pages/About';
import Portfolio from './appv1/pages/Portfolio';
import ExperiencesPro from './appv1/pages/ExperiencesPro';
import Layout from './appv1/pages/Layout';
import SalesforceHome from './appv2/pages/SalesforceHome';
import SalesforceAbout from './appv2/pages/SalesforceAbout';
import SalesforcePortfolio from './appv2/pages/SalesforcePorfolio';
import SalesforceExperiencesPro from './appv2/pages/SalesforceExperiencesPro';
import SalesforceContact from './appv2/pages/SalesforceContact';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* Salesforce portfolio */}
        <Route path='/' element={<SalesforceHome/>} >
          <Route path="salesforce/about" element={<SalesforceAbout />} />
          <Route path="salesforce/portfolio" element={<SalesforcePortfolio />} />
          <Route path="salesforce/experiences-pro" element={<SalesforceExperiencesPro />} />
          <Route path="salesforce/contact" element={<SalesforceContact />} />
        </Route>
        {/* Web dev portfolio */}
        <Route path='/webdev' element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="experiences-pro" element={<ExperiencesPro />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
