import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import infoStyles from '../styles/info-pentru-beneficiari.css?raw'
import pillStyles from '../styles/pill-container.css?raw'
import quickSelectStyles from '../styles/quick-select.css?raw'
import titleStyles from '../styles/title-and-section-text.css?raw'

const pageStyles = [quickSelectStyles, titleStyles, pillStyles, infoStyles, componentsStyles]

const InfoBeneficiari = () => {
  useDocumentTitle('Informații pentru beneficiari - CMF Bălți')
  usePageStyles(pageStyles, 'info-beneficiari')

  return (
    <>
      <div className="quick-select">
        <p>Apasă butoanele pentru acces direct</p>
        <div className="select-options">
          <a href="#drepturile_pacientului">Drepturile pacientului</a>
          <a href="#responsabilitatile_pacientului">Responsabilitățile pacientului</a>
          <a href="#servicii">Servicii</a>
          <a href="#asigurarea_obligatorie_de_asistenta_medicala">Asigurarea obligatorie</a>
          <a href="#tarife">Tarife</a>
        </div>
      </div>

      <p className="title-text" id="drepturile_pacientului">
        Drepturile pacientului
      </p>
      <div className="section-text">
        <p>Pacientul are dreptul la:</p>
        <ul>
          <li>
            informații complete asupra stării de sănătate, metodelor de profilaxie, diagnostic,
            tratament și recuperare, precum și despre riscurile potențiale și eficiența terapeutică a
            acestora, prognoza și progresul tratamentului, precum și despre alternativele metodelor
            propuse, inclusiv opțiunea de a nu urma un tratament;
          </li>
          <li>
            informații cu privire la prestatorul de servicii de sănătate, profilul acestuia, volumul,
            calitatea, costul și modalitatea de prestare a serviciilor respective;
          </li>
          <li>
            dreptul de a refuza sau opri o intervenție medicală; implicațiile refuzului sau opririi
            unei astfel de intervenții trebuie explicate clar pacientului;
          </li>
          <li>
            acceptarea sau refuzul de a participa la cercetări biomedicale (studii clinice), conform
            prevederilor prezentei legi și altor acte normative în vigoare;
          </li>
          <li>
            protecția datelor cu caracter personal, inclusiv a informațiilor privind starea de
            sănătate, diagnosticul și tratamentul; aceste informații nu vor fi dezvăluite unor terțe
            persoane și vor fi păstrate în conformitate cu regulamentele de confidențialitate;
          </li>
          <li>acces la asistență medicală gratuită, în volumul stabilit de legislație;</li>
          <li>
            o atitudine respectuoasă și umană din partea prestatorului de servicii de sănătate,
            indiferent de vârstă, apartenență etnică sau statut socio-economic;
          </li>
          <li>
            securitatea vieții personale, integritatea fizică, psihică și morală, cu respectarea
            discreției în timpul acordării serviciilor medicale;
          </li>
          <li>
            reducerea suferinței și atenuarea durerii prin metode legale disponibile, în funcție de
            posibilitățile reale ale prestatorului de servicii de sănătate;
          </li>
          <li>îngrijire terminală demnă de o ființă umană.</li>
        </ul>
      </div>

      <p className="title-text" id="responsabilitatile_pacientului">
        Responsabi&shy;litățile pacientului
      </p>
      <div className="section-text">
        <p>Pacientul are următoarele responsabilități:</p>
        <ul>
          <li>să fie înregistrat pe lista unui medic de familie;</li>
          <li>
            să aibă grijă de propria sănătate și să adopte un mod de viață sănătos, excluzând acțiunile
            premeditate care dăunează sănătății sale și a altor persoane;
          </li>
          <li>
            să respecte măsurile de precauție în contactele cu alte persoane, inclusiv cu lucrătorii
            medicali, în cazul în care are cunoștință că suferă de o boală care prezintă pericol
            social;
          </li>
          <li>
            să întreprindă, în lipsa contraindicațiilor medicale, măsuri profilactice obligatorii,
            inclusiv imunizări, a căror neîndeplinire amenință propria sănătate și creează un pericol
            social;
          </li>
          <li>
            să comunice lucrătorului medical informații complete despre bolile suportate și cele
            curente, despre afecțiunile care prezintă pericol social, inclusiv în cazul donării
            benevole de sânge, substanțe biologice lichide, organe și țesuturi;
          </li>
          <li>
            să respecte regulile de comportament stabilite pentru pacienți în instituția
            medico-sanitară, precum și recomandările medicului pe durata tratamentului ambulator sau
            staționar;
          </li>
          <li>
            să evite utilizarea produselor farmaceutice și a substanțelor medicamentoase fără
            prescrierea și acceptul medicului curant, inclusiv droguri, alte substanțe psihotrope și
            alcool, pe durata tratamentului în instituția medico-sanitară;
          </li>
          <li>
            să respecte drepturile și demnitatea celorlalți pacienți, precum și ale personalului
            medico-sanitar.
          </li>
        </ul>
      </div>

      <p className="title-text" id="servicii">
        Servicii
      </p>
      <div className="section-text">
        <div className="servicii-block">
          <div className="block">
            <p className="block-title">Medicina de familie</p>
            <div className='block-content'>
              <p>
              Medicina de familie este o specialitate medicală care asigură asistența medicală primară
              și reprezintă un set de servicii medicale ce include activități de profilaxie,
              consultanță în scop curativ și suport. Activitatea medicului de familie și a echipei
              sale asigură, prin acțiuni preventive, educaționale, terapeutice și de recuperare,
              promovarea stării de sănătate a individului, familiei și colectivității.
              </p>
              <p>
                Asistența medicală primară este garantată pentru întreaga populație a Republicii
                Moldova, indiferent de statutul de asigurat sau neasigurat. Pentru a beneficia de
                asistență medicală primară, este obligatorie înregistrarea pe lista medicului de familie,
                respectându-se principiul deservirii teritoriale. Medicul de familie este specialistul
                de prim contact și cel care, după caz, organizează accesul la celelalte tipuri de
                asistență și servicii medicale prevăzute de{' '}
                <u>
                  <a
                    href="https://www.legis.md/cautare/getResults?doc_id=93248&lang=ro"
                    target="_blank"
                    rel="noreferrer"
                    className="simple-link"
                  >
                    Programul unic
                  </a>
                </u>
                .
              </p>
              <div className="list">
                <p>
                  <b>Pașii de acces la serviciile de asistență medicală primară:</b>
                </p>
                <ol>
                  <li>Aveți dreptul și obligația de a vă alege și înregistra la instituția medico-sanitară primară.</li>
                  <li>
                    Pentru a beneficia de consultația medicului de familie, este necesară programarea
                    prin telefon, internet sau direct la ghișeele de înregistrare ale instituției.
                  </li>
                  <li>
                    Medicul de familie vă eliberează biletul de trimitere/extras pentru consultația
                    medicului specialist sau pentru spitalizare.
                  </li>
                  <li>
                    Medicul de familie sau, după caz, pediatrul, endocrinologul, psihiatrul, neurologul
                    vă poate prescrie rețete pentru medicamente compensate.
                  </li>
                  <li>
                    Medicul de familie este obligat să vă supravegheze starea pe toată durata tratamentului
                    ambulatoriu.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="block">
            <p className="block-title">Serviciul de laborator</p>
            <div className='block-content'>
              <p>
              Serviciul de laborator este o subdiviziune structurală a IMSP „CMF mun. Bălți”, organizată
              în anul 2003, odată cu deschiderea IMSP „Centrul Medicilor de Familie Municipal Bălți”.
              </p>
              <div className="list">
                <p>
                  Serviciul își desfășoară activitatea prin intermediul a 6 laboratoare, amplasate în
                  cadrul celor 6 centre de sănătate – subdiviziuni ale IMSP „CMF mun. Bălți” – și a unui
                  laborator situat în incinta OMF Elizaveta:
                </p>
                <ol>
                  <li>Centrul de Sănătate nr. 1, mun. Bălți, str. Decebal, 101V</li>
                  <li>Centrul de Sănătate nr. 2, mun. Bălți, str. Ștefan cel Mare, 52</li>
                  <li>Centrul de Sănătate nr. 3, mun. Bălți, str. George Coșbuc, 13</li>
                  <li>Centrul de Sănătate nr. 4, mun. Bălți, bd. Larisa, 9</li>
                  <li>Centrul de Sănătate nr. 5, mun. Bălți, str. Boris Glăvan, 21</li>
                  <li>Centrul de Sănătate nr. 6, mun. Bălți, str. Kiev, 30</li>
                  <li>OMF Elizaveta, mun. Bălți, s. Elizaveta, str. Ștefan cel Mare, 21</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="block">
            <p className="block-title">Serviciul de imagistică</p>
            <div className='block-content'>
              <div className="list">
                <p>
                  Serviciul își desfășoară activitatea prin intermediul cabinetelor amplasate în diferite
                  centre de sănătate ale orașului:
                </p>
                <ul>
                  <li>Centrul de Sănătate nr. 1, mun. Bălți, str. Decebal, 101V;</li>
                  <li>Centrul de Sănătate nr. 2, mun. Bălți, str. Ștefan cel Mare, 52;</li>
                  <li>Centrul de Sănătate nr. 6, mun. Bălți, str. Kiev, 30.</li>
                </ul>
              </div>
              <p>
                Serviciul de imagistică reprezintă o subdiviziune de diagnostic destinată identificării
                patologiilor prin metode radiologice, inclusiv ale sistemului pulmonar, osteoarticular,
                ecografie abdominală, ecografie de sarcină, FGDS (Fibro-Gastro-Duodenoscopie) și
                colonoscopie.
              </p>
              <p>
                Serviciul este dotat cu echipamente moderne, performante: 2 instalații de diagnostic
                radiologic digital, 1 instalație pentru videogastroscopie și colonoscopie, 3 ecografe
                noi, testate metrologic, care permit efectuarea anuală a următorului volum de
                investigații: 4000–5000 ecografii, 12.000–14.000 investigații radiologice (radiografii
                pulmonare preventive și ale sistemului osteoarticular), 1500 investigații endoscopice.
              </p>
              <div className="list">
                <p>
                  <b>Serviciul de imagistică efectuează:</b>
                </p>
                <p>
                  <b>Investigații radiologice:</b>
                </p>
                <ul>
                  <li>radiografie pulmonară diagnostică;</li>
                  <li>radiografie pulmonară preventivă;</li>
                  <li>radiografie a coloanei vertebrale (nu se eliberează peliculă, ci DVD);</li>
                  <li>radiografie a craniului;</li>
                  <li>radiografie a sistemului osteoarticular.</li>
                </ul>
              </div>
              <div className="list">
                <p>
                  <b>Investigații ecografice ale organelor interne:</b>
                </p>
                <ul>
                  <li>abdominale (ficat, splină, vezica biliară, pancreas);</li>
                  <li>ale sistemului urinar (rinichi, glande suprarenale, vezica urinară);</li>
                  <li>ale bazinului mic, transabdominal (vezica urinară, prostata);</li>
                  <li>ale glandei tiroide;</li>
                  <li>ale glandei mamare;</li>
                  <li>ecografie obstetrică (EUS) pentru monitorizarea sarcinii.</li>
                </ul>
              </div>
              <div className="list">
                <p>
                  <b>Endoscopie de diagnostic:</b>
                </p>
                <ul>
                  <li>FGDS (Fibro-Gastro-Duodenoscopie);</li>
                  <li>Colonoscopie.</li>
                </ul>
              </div>

            </div>
            
          </div>

          <div className="block">
            <p className="block-title">Serviciul de reabilitare medicală și medicină fizică</p>
            <div className='block-content'>
              <p>
              Serviciul de reabilitare medicală și medicină fizică al IMSP „CMF mun. Bălți” a fost
              organizat în anul 2012, prin comasarea tuturor cabinetelor de fizioterapie, kinetoterapie
              și masaj din cadrul Centrelor de Sănătate, OMF Sadovoe și OMF Elizaveta.
              </p>
              <div className="list">
                <p>
                  <b>Program de lucru:</b>
                </p>
                <ul>
                  <li>Cabinetele de fizioterapie: Luni–Vineri, 08:00–18:00 (pauză: 12:00–12:30)</li>
                  <li>Cabinetele de masaj: Luni–Vineri, 08:00–15:30 (pauză: 12:00–12:30)</li>
                  <li>Cabinetul de kinetoterapie: Luni–Vineri, 08:30–18:00 (pauză: 13:00–13:30)</li>
                </ul>
              </div>
              <div className="list">
                <p>
                  <b>Serviciul corespunde normativelor sanitare și dispune de următoarele cabinete:</b>
                </p>
                <ul>
                  <li>Fizioterapie</li>
                  <li>Kinetoterapie</li>
                  <li>Masaj</li>
                  <li>Aerosoloterapie</li>
                  <li>Termoterapie</li>
                  <li>Cabinete de lucru pentru medici</li>
                  <li>Cabinete de lucru pentru asistenți medicali</li>
                </ul>
              </div>
              <div className="list">
                <p>
                  <b>Serviciul de reabilitare medicală și medicină fizică furnizează următoarele metode fizice:</b>
                </p>
                <ul>
                  <li>Aerosoloterapie</li>
                  <li>Aplicații cu parafină și ozocherită</li>
                  <li>Curenți pulsativi</li>
                  <li>Darsonvalizare</li>
                  <li>Electroforeză</li>
                  <li>Fototerapie (tubus)</li>
                  <li>Fonoforeză</li>
                  <li>Galvanizare</li>
                  <li>Lazero-terapie</li>
                  <li>Magnetoterapie</li>
                  <li>Rusterapie</li>
                  <li>Raze ultraviolete (generale)</li>
                  <li>Somn electrogen</li>
                  <li>Ultrasonoterapie</li>
                </ul>
              </div>
              <div className="list">
                <p>
                  <b>Procedurile de reabilitare prestate de Serviciul de reabilitare medicală și medicină fizică sunt:</b>
                </p>
                <ul>
                  <li>Masaj curativ</li>
                  <li>Kinetoterapie curativă</li>
                  <li>Kinetoterapie activă în grup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="title-text" id="asigurarea_obligatorie_de_asistenta_medicala">
        Asigurarea obligatorie de asistență medicală
      </p>
      <div className="section-text">
        <p>
          <b>Asigurările obligatorii de asistență medicală (AOAM)</b> reprezintă un sistem&nbsp;autonom
          garantat de stat de protecție financiară a populației în domeniul ocrotirii sănătății prin
          constituirea, pe principii de solidaritate, din contul primelor de asigurare, a unor fonduri
          bănești destinate pentru acoperirea cheltuielilor de tratare a stărilor condiționate de
          survenirea evenimentelor asigurate (maladie sau afecțiune). Sistemul asigurării obligatorii
          de asistență medicală oferă cetățenilor posibilități egale în obținerea asistenței medicale
          oportune și calitative.
        </p>
        <p>
          În Republica Moldova, sistemul asigurării obligatorii de asistență medicală este gestionat
          de către&nbsp;<b>Compania Națională de Asigurări în Medicină</b>&nbsp;(CNAM -&nbsp;
          <a href="http://cnam.md/" target="_blank" rel="noreferrer" className="simple-link">
            cnam.md
          </a>
          ), iar sarcina de bază a acestuia este de a acoperi cheltuielile sistemului de sănătate,
          pentru tratamentul și profilaxia maladiilor persoanelor asigurate.&nbsp;
        </p>
        <p>
          De remarcat este faptul că cele mai multe servicii medicale sunt consumate de către copii și
          bătrâni, grupuri sociale care nu achită personal primele de asigurare. Plătitorii de prime
          din salariu utilizează serviciile medicale relativ mai puțin. Când aceștia nu vor mai activa
          în câmpul muncii, cheltuielile pentru tratament vor fi suportate de către viitorii angajați.
          Potrivit datelor din rapoartele CNAM, omul în perioada copilăriei și la vârsta de pensionare
          folosește un volum de servicii medicale, costul cărora este cel puțin la nivelul
          contribuțiilor sale în perioada activ a vieții sociale.
        </p>
        <p>
          Respectiv, cu cât vom fi mai mulți în SAOAM, cu atât mai multe servicii și medicamente
          asigurate vom avea, instituții medicale mai performante și lucrători medicali mai bine
          plătiți. Calitatea serviciilor depinde direct de contribuțiile noastre în sistemul de
          asigurare obligatorie de asistență medicală.
        </p>
      </div>

      <p className="title-text" id="tarife">
        Tarife
      </p>
      <div className="tarife">
        <p className="tarife-title-text">Extras din catalogul tarifelor</p>
        <div className="download-button-class">
          <a
            className="download-button"
            href="https://server.cmf-balti.md/static/pdf/article-pdf-511-0.3289387758139458.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Download className="download-icon" />
            <p>Anul 2021</p>
          </a>

          <a
            className="download-button"
            href="https://server.cmf-balti.md/static/pdf/article-pdf-512-0.1886027953116397.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Download className="download-icon" />
            <p>Anul 2022</p>
          </a>

          <a
            className="download-button"
            href="https://server.cmf-balti.md/static/pdf/article-pdf-513-0.2620717613034873.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Download className="download-icon" />
            <p>Anul 2023</p>
          </a>

          <a
            className="download-button"
            href="https://server.cmf-balti.md/static/pdf/article-pdf-553-0.3840356830293784.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Download className="download-icon" />
            <p>Anul 2024</p>
          </a>

          <a
            className="download-button"
            href='https://server.cmf-balti.md/static/pdf/article-pdf-617-0.31922044473368605.pdf'
            target="_blank"
            rel="noreferrer"
          >
            <Download className="download-icon" />
            <p>Anul 2025</p>
          </a>

          <a
            className="download-button"
            href='https://server.cmf-balti.md/static/pdf/article-pdf-698-0.6186151516443106.pdf'
            target="_blank"
            rel="noreferrer"
          >
            <Download className="download-icon" />
            <p>Anul 2026</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default InfoBeneficiari

