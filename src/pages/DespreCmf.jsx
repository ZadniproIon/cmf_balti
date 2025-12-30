import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import despreStyles from '../styles/despre-cmf.css?raw'
import pillStyles from '../styles/pill-container.css?raw'
import titleStyles from '../styles/title-and-section-text.css?raw'

const pageStyles = [despreStyles, titleStyles, componentsStyles, pillStyles]

const DespreCmf = () => {
  useDocumentTitle('Despre CMF - CMF Bălți')
  usePageStyles(pageStyles, 'despre-cmf')

  return (
    <>
      <div className="title-of-page">
        <p>
          Instituția Medico-Sanitară Publică
          <br />
          „Centrul Medicilor de Familie Municipal Bălți”
        </p>
      </div>

      <p className="title-text">Domeniul de activitate</p>
      <div className="section-text">
        <p>
          Domeniul de activitate al IMSP„Centrul Medicilor de Familie Municipal Bălți”, este
          acordarea serviciilor medicale primare.
          <br />
          <br />
          Medicina de familie este o specialitate medicală care asigură asistența medicală primară și
          reprezintă setul de servicii medicale ce include: activități de profilaxie, de consultanță
          în scop curativ și de suport. Activitatea medicului de familie și echipa sa, asigură prin
          acțiuni preventive, educaționale, terapeutice și de recuperare, promovarea stării de
          sănătate a individului, familiei și colectivității. Asistența medicală primară este
          garantată pentru toată populația Republicii Moldova, indiferent de statutul de asigurat sau
          neasigurat.
          <br />
          <br />
          Pentru a beneficia de asistență medicală primară este obligatorie înregistrarea pe lista
          medicului de familie fiind respectat pricipiul deservirii teritoriale. Medicul de familie
          este specialistul de prim-contact și cel care, după caz, organizează accesul la celelalte
          tipuri de asistență și servicii medicale prevăzute de{' '}
          <a
            id="programul-unic-link"
            href="https://www.legis.md/cautare/getResults?doc_id=93248&lang=ro"
            target="_blank"
            rel="noreferrer"
          >
            Programul unic
          </a>
          .
        </p>
      </div>

      <p className="title-text">Evoluția</p>
      <div className="section-text">
        <p>
          Sistemul de sănătate din mun. Bălți până în anul 1997 a fost constituit din 13 instituții
          medicale, sectorul de ambulator fiind reprezentat prin 3 policlinici pentru maturi și 2
          policlinici pentru copii, inclusiv, specialiști de profil îngust, dispensare specializate și
          2 centre de consultații pentru femei.
          <br />
          <br />
          Odată cu adoptarea Concepției de dezvoltare a sistemului ocrotirii sănătății în Republica
          Moldova pe perioada anilor 1997-2005 (Hotărârea Guvernului Republicii Moldova Nr.668 din
          17.07.97), în corespundere cu prevederile Hotărârii Guvernului Republicii Moldova NR.I134
          din 09.12.97„Cu privire la dezvoltarea asistenței medicale primare”, în scopul accelerării
          procesului de reformă a sistemului sănătății și realizării măsurilor de trecere la o nouă
          formă de asistență medicală primară, de către organele administrației publice locale au fost
          luate unele decizii importante în acest context.
          <br />
          <br />
          În luna februarie 1998, în municipiu, a fost instituită Asociația Medicală Teritorială,
          denumită inițial „Asociația Policlinicilor mun. Bălți”. Noua instituție medicală, s-a format
          prin comasarea policlinicilor pentru maturi/copii și centrelor de consultații pentru femei,
          având drept scop acordarea asistenței medicale primare populației municipiului.
          <br />
          <br />
          Din 01.03.98, prin reorganizarea acestor structuri au fost create 5 policlinici mixte,
          ulterior, specialiștii fiind uniți într-o secție consultativ - diagnostică. Inițial, medicii
          au activat în echipe mari, compuse din 3 terapeuți, 2 pediatri și 1 obstetrician-ginecolog.
          Începând cu anul 2000, echipele s-au redus la 3 medici, unul dintre care, în mod obligatoriu,
          era fost - pediatru, manevră îndreptată spre asigurarea asistenței medicale calitative
          copiilor de vârstă fragedă în primul rând și sporirea gradului de responsabilitate a
          fiecărui medic.
          <br />
          <br />
          Ca rezultat a reformei administrativ - teritoriale, prin ordinul Ministerului Sănătății
          Republicii Moldova Nr. I60 din 01.07.99 a fost aprobat noul sistem de sănătate a
          municipiului Bălți. În baza „Asociației policlinicilor” fiind format „Centrul Medicilor de
          Familie Municipal Bălți” cu retragerea specialiștilor de profil îngust în secția consultativă
          a Spitalului Județean.
          <br />
          <br />
          Structura Sistemului Ocrotirii Sănătății din municipiul Bălți n-a suferit modificări
          esențiale nici după noua reformă administrativ - teritorială, în luna decembrie a anului 2003
          fiind instituită Instituția Medico - Sanitară Publică „Centrul Medicilor de Familie Municipal
          Bălți”, ce are în subdiviziune: 6 Centre de Sănătate și 2 OMF-uri - Oficiul Medicului de
          Familie Sadovoe și Oficiul Medicului de Familie Elizaveta, ce deservesc populația de pe cele
          81 de sectoare.
        </p>
      </div>

      <p className="title-text">Subdiviziunile IMSP „CMF mun. Bălți”</p>
      <div className="card-container">
        <div className="card">
          <img src="/images/despre-cmf/cmf-nr1.png" />
          <p className="card-title">Centrul de Sănătate Nr. 1</p>
          <div className="card-info">
            <p>str. Decebal, 101V</p>
            <p className="line">&#124;</p>
            <p>0(231)7-43-34</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-nr2.png" />
          <p className="card-title">Centrul de Sănătate Nr. 2</p>
          <div className="card-info">
            <p>str. Șt. cel Mare, 52</p>
            <p className="line">&#124;</p>
            <p>0(231)2-12-32</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-nr3.png" />
          <p className="card-title">Centrul de Sănătate Nr. 3</p>
          <div className="card-info">
            <p>str. G. Goșbuc, 13</p>
            <p className="line">&#124;</p>
            <p>0(231)2-42-74</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-nr4.png" />
          <p className="card-title">Centrul de Sănătate Nr. 4</p>
          <div className="card-info">
            <p>str. Strîii, 9</p>
            <p className="line">&#124;</p>
            <p>0(231)6-78-77</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-nr5.png" />
          <p className="card-title">Centrul de Sănătate Nr. 5</p>
          <div className="card-info">
            <p>str. B. Glavan, 21</p>
            <p className="line">&#124;</p>
            <p>0(231)3-81-79</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-nr6.png" />
          <p className="card-title">Centrul de Sănătate Nr. 6</p>
          <div className="card-info">
            <p>str. Kiev, 30</p>
            <p className="line">&#124;</p>
            <p>0(231)4-45-77</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-atis.png" />
          <p className="card-title">Centrul de Sănătate Prietinos Tinerilor „ATIS”</p>
          <div className="card-info">
            <p>str. Kiev, 30</p>
            <p className="line">&#124;</p>
            <p>0(231)4-64-62</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-ccsm.jpg" />
          <p className="card-title">Centrul Comunitar de Sănătate Mintală (CCSM)</p>
          <div className="card-info">
            <p>str. Decebal, 101V</p>
            <p className="line">&#124;</p>
            <p>0(231)7-10-11</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-elizaveta.png" />
          <p className="card-title">Oficiul Medicului de Familie s. Elizaveta</p>
          <div className="card-info">
            <p>str. Șt. cel Mare, 21</p>
            <p className="line">&#124;</p>
            <p>0(231)6-82-82</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/despre-cmf/cmf-sadovoe.png" />
          <p className="card-title">Oficiul Medicului de Familie s. Sadovoe</p>
          <div className="card-info">
            <p>str. Parcovaia, 31</p>
            <p className="line">&#124;</p>
            <p>0(231)5-52-19</p>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="pill-container">
          <p>Pentru mai multe detalii, vă rugăm să vizitați secțiunea</p>
          <Link to="/contacte.html">Contacte</Link>
        </div>
      </div>
    </>
  )
}

export default DespreCmf

