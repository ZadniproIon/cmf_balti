import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <img src="/images/logo-cmf.png" alt="Logo-ul CMF Bălți" />
          </div>
          <p className="footer-title">Centrul Medicilor de Familie mun. Bălți</p>
          <p className="footer-tagline">Asistență medicală primară pentru comunitatea municipiului Bălți</p>
        </div>

        <div className="footer-section">
          <div className="footer-group">
            <p className="footer-heading">Contact</p>
            <ul className="footer-list footer-contact">
              <li>Adresa: Bălți, Strada Decebal, 101V</li>
              <li>
                Telefon: <a href="tel:02319977">02319977</a>
              </li>
              <li>
                Email: <a href="mailto:cmfbalti@ms.md">cmfbalti@ms.md</a>
              </li>
            </ul>
          </div>
          <div className="footer-group">
            <p className="footer-heading">Program</p>
            <ul className="footer-list">
              <li>Luni - Vineri: 8:00 - 19:00</li>
              <li>Sâmbătă: 8:00 - 13:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-section" id='navigare'>
          <p className="footer-heading">Navigare</p>
          <ul className="footer-links">
            <li>
              <Link to="/index.html">Acasă</Link>
            </li>
            <li>
              <Link to="/despre-cmf.html">Despre noi</Link>
            </li>
            <li>
              <Link to="/info-pentru-beneficiari.html">Generale</Link>
            </li>
            <li>
              <Link to="/transparenta.html">Transparență</Link>
            </li>
            <li>
              <Link to="/contacte.html">Contacte</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Project made with love ❤️ by{' '}
          <a href="https://github.com/ZadniproIon" target="_blank" rel="noreferrer">
            Zadnipro Ion
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
