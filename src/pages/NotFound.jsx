import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import notFoundStyles from '../styles/not-found.css?raw'

const pageStyles = [notFoundStyles, componentsStyles]

const NotFound = () => {
  useDocumentTitle('Eroare 404 - CMF Bălți', 'Pagina solicitată nu a fost găsită.')
  usePageStyles(pageStyles, 'not-found')

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-content">
        <h1 id="not-found-title" className="not-found-title">Eroare 404</h1>
        <p className="not-found-text">
          Pagina nu există sau a fost mutată.
          <br />
          Poți reveni la <Link className="not-found-inline-link" to="/">pagina principală</Link> sau accesa unul dintre link-urile de mai sus.
        </p>
        <Link className="not-found-link" to="/">
          <ArrowLeft className="icon" />
          Înapoi acasă
        </Link>
      </div>
    </section>
  )
}

export default NotFound
