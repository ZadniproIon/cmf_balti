import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contacte from './pages/Contacte'
import DespreCmf from './pages/DespreCmf'
import Home from './pages/Home'
import InfoBeneficiari from './pages/InfoBeneficiari'
import Transparenta from './pages/Transparenta'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/index.html" replace />} />
      <Route path="index.html" element={<Home />} />
      <Route path="despre-cmf.html" element={<DespreCmf />} />
      <Route path="info-pentru-beneficiari.html" element={<InfoBeneficiari />} />
      <Route path="transparenta.html" element={<Transparenta />} />
      <Route path="contacte.html" element={<Contacte />} />
    </Route>
  </Routes>
)

export default App
