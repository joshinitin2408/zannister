import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navb from './components/Navb'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Methods from './pages/Methods'
import AboutUs from './pages/AboutUs'
import ResponsiveWebsite from './pages/services/ResponsiveWebsite'
import CloudComputing from './pages/services/CloudComputing'
import AIBotDevelopment from './pages/services/AIBotDevelopment'
import CustomApplicationDevelopment from './pages/services/CustomApplicationDevelopment'
import MobileAppDevelopment from './pages/services/MobileAppDevelopment'
import SystemIntegration from './pages/services/SystemIntegration'
import DataMigration from './pages/services/DataMigration'
import DataWarehouse from './pages/services/DataWarehouse'
import Clients from './pages/Clients'
import Footer from './components/Footer'
import MyKinHealthPage from './pages/services/clients/MyKinHealthPage'
import MeritCampusPage from './pages/services/clients/MeritCampusPage'
import TradersMarketPage from './pages/services/clients/TradersMarketPage'
import AdzshopPage from './pages/services/clients/AdzshopPage'
import GetBikePage from './pages/services/clients/GetBikePage'
import VisakaCalculationToolPage from './pages/services/clients/VisakaCalculationToolPage'
import ZenInsightsPage from './pages/services/clients/ZenInsightsPage'
import RiskWatchPage from './pages/services/clients/RiskWatchPage'
import DHouursPage from './pages/services/clients/DHouursPage'
import OneDelPage from './pages/services/clients/OneDelPage'
import GLADPage from './pages/services/clients/GLADPage'
import SahadevReddySweetsPage from './pages/services/clients/SahadevReddySweetsPage'
import CFAACondominiumAppPage from './pages/services/clients/CFAACondominiumAppPage'

const App = () => {
  return (
    <Router>
      <Navb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/responsive-website" element={<ResponsiveWebsite />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/ai-bot-development" element={<AIBotDevelopment />} />
        <Route path="/custom-application-development" element={<CustomApplicationDevelopment />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/system-integration" element={<SystemIntegration />} />
        <Route path="/data-migration" element={<DataMigration />} />
        <Route path="/data-warehouse" element={<DataWarehouse />} />
        {/* <Route path="/MyKinHealthPage" element={<MyKinHealthPage />} />
        <Route path="/MeritCampusPage" element={<MeritCampusPage />} />
        <Route path="/TradersMarketPage" element={<TradersMarketPage />} />
        <Route path="/AdzshopPage" element={<AdzshopPage />} />
        <Route path="/GetBikePage" element={<GetBikePage />} />
        <Route path="/VisakaCalculationToolPage" element={<VisakaCalculationToolPage />} />
        <Route path="/ZenInsightsPage" element={<ZenInsightsPage />} />
        <Route path="/RiskWatchPage" element={<RiskWatchPage />} />
        <Route path="/DHouursPage" element={<DHouursPage />} />
        <Route path="/OneDelPage" element={<OneDelPage />} />
        <Route path="/GLADPage" element={<GLADPage />} />
        <Route path="/SahadevReddySweetsPage" element={<SahadevReddySweetsPage />} />
        <Route path="/CFAACondominiumAppPage" element={<CFAACondominiumAppPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App