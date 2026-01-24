import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-top">
        <section className="footer-brand" aria-labelledby="footer-brand-title">
          <div className="footer-brand-logo">
            <img src="/images/logo-cmf.png" alt="Logo-ul CMF Bălți" />
          </div>
          <h2 id="footer-brand-title" className="footer-title">Centrul Medicilor de Familie mun. Bălți</h2>
          <p className="footer-tagline">Asistență medicală primară pentru comunitatea municipiului Bălți</p>
        </section>

        <div className="footer-section">
          <section className="footer-group" aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading" className="footer-heading">Contact</h3>
            <address className="footer-address">
              <ul className="footer-list footer-contact">
                <li>Adresa: Bălți, Strada Decebal, 101V</li>
                <li>
                  Telefon: <a href="tel:02319977">02319977</a>
                </li>
                <li>
                  Email: <a href="mailto:cmfbalti@ms.md">cmfbalti@ms.md</a>
                </li>
              </ul>
            </address>
          </section>
          <section className="footer-group" aria-labelledby="footer-program-heading">
            <h3 id="footer-program-heading" className="footer-heading">Program</h3>
            <ul className="footer-list">
              <li>Luni - Vineri: 8:00 - 19:00</li>
              <li>Sâmbătă: 8:00 - 13:00</li>
            </ul>
          </section>
        </div>

        <nav className="footer-section" id="navigare" aria-label="Navigare footer">
          <h3 className="footer-heading">Navigare</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Acasă</Link>
            </li>
            <li>
              <Link to="/despre-noi">Despre noi</Link>
            </li>
            <li>
              <Link to="/generale">Generale</Link>
            </li>
            <li>
              <Link to="/transparenta">Transparență</Link>
            </li>
            <li>
              <Link to="/contacte">Contacte</Link>
            </li>
          </ul>
        </nav>
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
