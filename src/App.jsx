import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LanguageLayout from './components/LanguageLayout'
import Contacte from './pages/Contacte'
import DespreCmf from './pages/DespreCmf'
import Home from './pages/Home'
import InfoBeneficiari from './pages/InfoBeneficiari'
import NotFound from './pages/NotFound'
import Transparenta from './pages/Transparenta'
import { DEFAULT_LANG } from './i18n'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
    <Route path="/index.html" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
    <Route path="/despre-cmf" element={<Navigate to={`/${DEFAULT_LANG}/despre-noi`} replace />} />
    <Route path="/info-pentru-beneficiari" element={<Navigate to={`/${DEFAULT_LANG}/generale`} replace />} />
    <Route path="/transparenta" element={<Navigate to={`/${DEFAULT_LANG}/transparenta`} replace />} />
    <Route path="/contacte" element={<Navigate to={`/${DEFAULT_LANG}/contacte`} replace />} />
    <Route path="/despre-cmf.html" element={<Navigate to={`/${DEFAULT_LANG}/despre-noi`} replace />} />
    <Route path="/info-pentru-beneficiari.html" element={<Navigate to={`/${DEFAULT_LANG}/generale`} replace />} />
    <Route path="/transparenta.html" element={<Navigate to={`/${DEFAULT_LANG}/transparenta`} replace />} />
    <Route path="/contacte.html" element={<Navigate to={`/${DEFAULT_LANG}/contacte`} replace />} />
    <Route path="/:lang" element={<LanguageLayout />}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="despre-noi" element={<DespreCmf />} />
        <Route path="generale" element={<InfoBeneficiari />} />
        <Route path="transparenta" element={<Transparenta />} />
        <Route path="contacte" element={<Contacte />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  </Routes>
)

export default App
