import { Link } from 'react-router-dom'
import { Clock8, HeartPulse, PhoneCall, Globe } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import homeStyles from '../styles/index.css?raw'
import pillStyles from '../styles/pill-container.css?raw'

const pageStyles = [homeStyles, pillStyles, componentsStyles]
const Home = () => {
  useDocumentTitle(
    'Acasă - CMF Bălți',
    'Centrul Medicilor de Familie mun. Bălți — programări online, informații utile și servicii pentru comunitate.'
  )
  usePageStyles(pageStyles, 'home')

  return (
    <>
      {/* Hero section */}
      <div className="main-section-1-wrapper">
        <div className="main-section-1">
          <div className="left-side">
            <p>
              Programare online
            </p>
            <p>
              Rezervați o consultație la medicul de familie în doar câțiva pași. Evitați cozile și planificați-vă vizita din confortul casei.
            </p>
            <a href="https://sia.amp.md/" target="_blank" rel="noreferrer">
              Apasă aici
            </a>
          </div>
          <div className="right-side">
            <img
              src="/images/main-page-jpeg/programare_online_screen_1.jpg"
              srcSet="/images/main-page-jpeg/programare_online_screen_1-240.jpg 240w, /images/main-page-jpeg/programare_online_screen_1.jpg 480w"
              sizes="(max-width: 1024px) 90vw, 400px"
              width="480"
              height="476"
              alt="Programare online"
            />
          </div>
        </div>
      </div>
      
      
      <div className="info-utile">
        <p>Informații utile</p>
        <div className="info-utile-containers">
          <div>
            <Clock8 className="icon" />
            <p>Orele de lucru</p>
            <p>
              Luni - Vineri: 8:00 - 19:00<br />Sâmbătă: 8:00 - 13:00
            </p>
          </div>
          <div>
            <HeartPulse className="icon" />
            <p>Centrele de sănătate</p>
            <p>Total 10 în orașul Bălți, cât și satele Elizaveta și Sadovoie</p>
          </div>
          <div>
            <PhoneCall className="icon" />
            <p>Contact</p>
            <p>La numărul de telefon: 02319977 sau la secțiunea <Link to="/contacte.html">Contacte</Link></p>
          </div>
        </div>
      </div>

      <div className="content-wrapper" id="despre-cmf">
        <div className="content">
          <div className="image-side">
            <img
              src="/images/main-page-jpeg/despre-cmf-main-page-400.jpg"
              srcSet="/images/main-page-jpeg/despre-cmf-main-page-400.jpg 400w, /images/main-page-jpeg/despre-cmf-main-page-800.jpg 800w"
              sizes="400px"
              width="400"
              height="400"
              alt="Despre CMF Balti"
            />
          </div>
          <div className="content-side">
            <p>Despre CMF Bălți</p>
            <p>
              IMSP „Centrul Medicilor de Familie Municipal Bălți” are ca obiectiv principal furnizarea
              asistenței medicale primare pentru întreaga populație, indiferent de statutul de
              asigurare.
              <br/>
              Medicina de familie este esențială în prevenție, diagnostic și tratament. Medicii de
              familie, împreună cu echipele lor, contribuie la îmbunătățirea sănătății individuale și
              comunitare.
            </p>
            <Link to="/despre-cmf.html">Află mai multe</Link>
          </div>
        </div>
      </div>

      <div className="content-wrapper" id="esti-beneficiar">
        <div className="content">
          <div className="content-side">
            <p>Ești beneficiar?</p>
            <p>
              Dacă ești beneficiar al serviciilor medicale oferite de Centrul Medicilor de Familie din
              Bălți, medicul tău de familie va fi primul punct de contact pentru îngrijirea sănătății.
              <br />
              Înregistrarea la un medic de familie este esențială pentru a beneficia de consultații
              medicale, tratamente și acces la alte tipuri de servicii specializate. Aceste servicii
              sunt disponibile pentru toți, indiferent de statutul de asigurat sau neasigurat.
            </p>
            <Link to="/info-pentru-beneficiari.html">Află mai multe</Link>
          </div>
          <div className="image-side">
            <img
              src="/images/main-page-jpeg/esti-beneficiar-main-page-400.jpg"
              srcSet="/images/main-page-jpeg/esti-beneficiar-main-page-400.jpg 400w, /images/main-page-jpeg/esti-beneficiar-main-page-800.jpg 800w"
              sizes="400px"
              width="400"
              height="400"
              alt="Esti beneficiar"
            />
          </div>
        </div>
      </div>

      <div className="transparenta-section-wrapper">
        <div className="transparenta-section">
          <p>Transpa&shy;rență</p>
          <p>
            Pentru noi, transparența este esențială în activitatea noastră zilnică. Ne angajăm să
            oferim acces la informații detaliate privind achizițiile publice, rapoartele de activitate
            și contractele, pentru a asigura încrederea și responsabilitatea față de toți beneficiarii
            noștri.
            
            Această abordare deschisă ne ajută să gestionăm eficient resursele și să fim mereu la
            dispoziția comunității.
          </p>

          <div className="pills">
            <Link to="/transparenta.html#achizitii_publice">Achiziții publice</Link>
            <Link to="/transparenta.html#rapoarte_de_activitate">Rapoarte de activitate</Link>
            <Link to="/transparenta.html#contracte_cnam">Contracte CNAM</Link>
          </div>
        </div>
      </div>

      <div className="parteneri-oficiali-wrapper">
        <p id="parteneri-oficiali-title">Parteneri oficiali</p>
        <div className="parteneri-oficiali">
          <div>
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/ms%20gov%20md-150.jpg"
                srcSet="/images/main-page-jpeg/ms%20gov%20md-100.jpg 100w, /images/main-page-jpeg/ms%20gov%20md-150.jpg 150w, /images/main-page-jpeg/ms%20gov%20md-300.jpg 300w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt="Ministerul Sanatatii al Republicii Moldova"
              />
            </div>
            <div className="right-side">
              <p>Ministerul Sănătății al Republicii Moldova</p>
              <a href="https://ms.gov.md/" target="_blank" rel="noreferrer">
                <Globe />ms.gov.md
              </a>
            </div>
          </div>

          <div>
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/cnam-150.jpg"
                srcSet="/images/main-page-jpeg/cnam-100.jpg 100w, /images/main-page-jpeg/cnam-150.jpg 150w, /images/main-page-jpeg/cnam.jpg 280w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt="Compania Nationala de Asigurari in Medicina"
              />
            </div>
            <div className="right-side">
              <p>Compania Națională de Asigurări în Medicină
              </p>
              <a href="http://cnam.md/" target="_blank" rel="noreferrer">
                <Globe />cnam.md
              </a>
            </div>
          </div>

          <div>
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/primaria%20balti-150.jpg"
                srcSet="/images/main-page-jpeg/primaria%20balti-100.jpg 100w, /images/main-page-jpeg/primaria%20balti-150.jpg 150w, /images/main-page-jpeg/primaria%20balti-300.jpg 300w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt="Primaria Municipiului Balti"
              />
            </div>
            <div className="right-side">
              <p>Primăria Municipiului Bălți</p>
              <a href="https://balti.md/" target="_blank" rel="noreferrer">
                <Globe />balti.md
              </a>
            </div>
          </div>

          <div>
            <div className="left-side">
              <img
                src="/images/main-page-jpeg/cnas-150.jpg"
                srcSet="/images/main-page-jpeg/cnas-100.jpg 100w, /images/main-page-jpeg/cnas-150.jpg 150w, /images/main-page-jpeg/cnas-300.jpg 300w"
                sizes="(max-width: 675px) 100px, 150px"
                width="150"
                height="150"
                alt="Compania Nationala de Asigurari Sociale"
              />
            </div>
            <div className="right-side">
              <p>Compania Națională de Asigurări Sociale</p>
              <a href="https://cnas.gov.md/" target="_blank" rel="noreferrer">
                <Globe />cnas.gov.md
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

