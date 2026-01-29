import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LanguageLayout from './components/LanguageLayout'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import General from './pages/General'
import NotFound from './pages/NotFound'
import Transparency from './pages/Transparency'
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
        <Route path="despre-noi" element={<About />} />
        <Route path="generale" element={<General />} />
        <Route path="transparenta" element={<Transparency />} />
        <Route path="contacte" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  </Routes>
)

export default App
