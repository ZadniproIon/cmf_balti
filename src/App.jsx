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
      <Route index element={<Home />} />
      <Route path="despre-cmf" element={<DespreCmf />} />
      <Route path="info-pentru-beneficiari" element={<InfoBeneficiari />} />
      <Route path="transparenta" element={<Transparenta />} />
      <Route path="contacte" element={<Contacte />} />
      <Route path="index.html" element={<Navigate to="/" replace />} />
      <Route path="despre-cmf.html" element={<Navigate to="/despre-cmf" replace />} />
      <Route path="info-pentru-beneficiari.html" element={<Navigate to="/info-pentru-beneficiari" replace />} />
      <Route path="transparenta.html" element={<Navigate to="/transparenta" replace />} />
      <Route path="contacte.html" element={<Navigate to="/contacte" replace />} />
    </Route>
  </Routes>
)

export default App
