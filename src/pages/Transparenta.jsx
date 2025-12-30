import { useState } from 'react'
import Dropdown from '../components/Dropdown'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import quickSelectStyles from '../styles/quick-select.css?raw'
import titleStyles from '../styles/title-and-section-text.css?raw'
import transparentaStyles from '../styles/transparenta.css?raw'

const pageStyles = [quickSelectStyles, titleStyles, transparentaStyles, componentsStyles]

const Transparenta = () => {
  useDocumentTitle('Transparență - CMF Bălți')
  usePageStyles(pageStyles, 'transparenta')

  const [openItems, setOpenItems] = useState({})

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
      <div className="quick-select">
        <p>Apasă butoanele pentru acces direct</p>
        <div className="select-options">
          <a href="#achizitii_publice">Achiziții publice</a>
          <a href="#rapoarte_de_activitate">Rapoarte de activitate</a>
          <a href="#contracte_cnam">Contracte CNAM</a>
        </div>
      </div>

      <p className="title-text" id="achizitii_publice">
        Achiziții publice
      </p>
      <div className="section-text">
        <Dropdown
          title="Anul 2019"
          isOpen={!!openItems['achizitii-2019']}
          onToggle={() => toggleItem('achizitii-2019')}
        >
          <div className="pill-container">
            <p>Darea de seamă privind realizarea achizițiilor publice de valoare mică pentru anul 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-188-0.5752821305007563.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Raport de monitorizare a contractelor de achiziții publice pentru anul 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-187-0.05081708511509031.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Planul de achiziții publice pentru anul 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-186-0.7641984274827819.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2020"
          isOpen={!!openItems['achizitii-2020']}
          onToggle={() => toggleItem('achizitii-2020')}
        >
          <div className="pill-container">
            <p>Darea de seama privind realizarea achizitiilor publice de valoare mica pentru anul 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-125-0.6328683296443433.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Lista contractelor de achiziții publice centralizate (CAPCS) pentru anul 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-124-0.19690157570510602.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Planul de achiziții ale bunurilor, serviciilor și lucrărilor pentru anul 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-123-0.8566088744118476.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Raport de monitorizare a contractelor de achizitii publice pentru anul 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-122-0.5257070680244321.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2021"
          isOpen={!!openItems['achizitii-2021']}
          onToggle={() => toggleItem('achizitii-2021')}
        >
          <div className="pill-container">
            <p>
              Datele privind procurările de medicamente, dispozitive medicale și echipament de protecție
              pentru anul 2021 ale IMSP„CMF mun. Bălți”
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-444-0.41867172126852836.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Darea de seama privind realizarea achizitiilor publice de valoare mica pentru anul 2021</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-406-0.5591445595921718.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Planul de achiziții publice ale bunurilor, serviciilor și lucrărilor pentru anul 2021</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-262-0.8919353074763584.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2022"
          isOpen={!!openItems['achizitii-2022']}
          onToggle={() => toggleItem('achizitii-2022')}
        >
          <div className="pill-container">
            <p>Dare de seama contracte de valoare mică pentru anul 2022</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-485-0.5000931277172642.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Planul de achiziții ale bunurilor, serviciilor și lucrărilor al IMSP„CMF mun. Bălți”
              pentru anul 2022
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-449-0.08144785986830272.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2023"
          isOpen={!!openItems['achizitii-2023']}
          onToggle={() => toggleItem('achizitii-2023')}
        >
          <div className="pill-container">
            <p>Dare de seama contracte de valoare mică pentru anul 2023</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-561-0.07563706360596356.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Planul anual de achiziții publice pentru anul 2023</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-543-0.8894765200868631.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2024"
          isOpen={!!openItems['achizitii-2024']}
          onToggle={() => toggleItem('achizitii-2024')}
        >
          <div className="pill-container">
            <p>
              Planul de achiziții ale bunurilor, serviciilor și lucrărilor al IMSP „Centrul Medicilor
              de Familie Municipal Bălți” pentru anul 2024
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-563-0.5187493165883457.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2025"
          isOpen={!!openItems['achizitii-2025']}
          onToggle={() => toggleItem('achizitii-2025')}
        >
          <div className="pill-container">
            <p>
              Planul de achiziții ale bunurilor, serviciilor și lucrărilor al IMSP „Centrul Medicilor
              de Familie Municipal Bălți” pentru anul 2025
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-607-0.6741286305088359.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>
      </div>

      <p className="title-text" id="rapoarte_de_activitate">
        Rapoarte de activitate
      </p>
      <div className="section-text">
        <Dropdown
          title="Anul 2019"
          isOpen={!!openItems['rapoarte-2019']}
          onToggle={() => toggleItem('rapoarte-2019')}
        >
          <div className="pill-container">
            <p>Raport economico-financiar semestrul I, anul 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-183-0.22378742144305452.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Raport economico- financiar anul 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-184-0.31273189720013117.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2020"
          isOpen={!!openItems['rapoarte-2020']}
          onToggle={() => toggleItem('rapoarte-2020')}
        >
          <div className="pill-container">
            <p>Raport economico-financiar semestrul I, anul 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-84-0.830713463716243.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Raport analitic privind activitatea IMSP CMF mun. Bălți pentru anul 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-229-0.9060638455223116.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2021"
          isOpen={!!openItems['rapoarte-2021']}
          onToggle={() => toggleItem('rapoarte-2021')}
        >
          <div className="pill-container">
            <p>Raport economico-financiar pentru semestrul I, anul 2021</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-292-0.8582639633101051.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Raport economico-financiar pentru 9 luni, anul 2021</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-293-0.7985941405290871.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Raport analitic privind activitatea Instituției Medico-Sanitare Publice „Centrul
              Medicilor de Familie Municipal Bălți” în anul 2021
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-405-0.185192199851003.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2022"
          isOpen={!!openItems['rapoarte-2022']}
          onToggle={() => toggleItem('rapoarte-2022')}
        >
          <div className="pill-container">
            <p>Raportul economico-financiar pentru semestrul I al anului 2022 a IMSP ,,Centrul Medicilor de Familie Municipal Bălți”</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-462-0.8722344653798965.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Raport economico-financiar pentru 9 luni al anului 2022 privind activitatea IMSP „CentrulMedicilor de Familie Municipal Bălți”</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-484-0.09728255839608024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Raport analitic privind activitatea Instituției Medico-Sanitare Publice „Centrul Medicilor de Familie Municipal Bălți” în anul 2022
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-516-0.9068700428519321.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2023"
          isOpen={!!openItems['rapoarte-2023']}
          onToggle={() => toggleItem('rapoarte-2023')}
        >
          <div className="pill-container">
            <p>
              Raport analitic privind activitatea Instituției Medico-Sanitare Publice „Centrul Medicilor de Familie Municipal Bălți” în anul 2023
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-564-0.6940812918239908.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2024"
          isOpen={!!openItems['rapoarte-2024']}
          onToggle={() => toggleItem('rapoarte-2024')}
        >
          <div className="pill-container">
            <p>
              Raport economico-financiar pentru 6 luni al anului 2024 privind activitatea IMSP ,,CentrulMedicilor de Familie Municipal Bălți”
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-601-0.29685171800865484.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>
      </div>

      <p className="title-text" id="contracte_cnam">
        Contracte CNAM
      </p>
      <div className="section-text">
        <Dropdown
          title="Anul 2019"
          isOpen={!!openItems['contracte-2019']}
          onToggle={() => toggleItem('contracte-2019')}
        >
          <div className="pill-container">
            <p>Acord adițional nr.1 din 31 octombrie 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-168-0.13576841365537862.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr. 2 din 24 decembrie 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-169-0.37235319563247593.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr.3 din 31 decembrie 2019</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-170-0.40823793458846125.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2020"
          isOpen={!!openItems['contracte-2020']}
          onToggle={() => toggleItem('contracte-2020')}
        >
          <div className="pill-container">
            <p>Acord adițional nr.1 din 26 mai 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-163-0.6609125454216793.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr.2 din 24 august 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-164-0.8685999094774032.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr.3 din 24 decembrie 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-165-0.2648027611179068.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr.4 din 31 decembrie 2020</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-166-0.4609860331173371.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2021"
          isOpen={!!openItems['contracte-2021']}
          onToggle={() => toggleItem('contracte-2021')}
        >
          <div className="pill-container">
            <p>Acord adițional nr.1 din 16 iulie 2021</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-255-0.7100470963174558.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr. 2 din 1 noiembrie 2021</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-348-0.059285286882801214.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr. 3 din 17 decembrie 2021</p>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr. 4 din 31 decembrie 2021</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-372-0.8393337100850192.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2022"
          isOpen={!!openItems['contracte-2022']}
          onToggle={() => toggleItem('contracte-2022')}
        >
          <div className="pill-container">
            <p>
              CONTRACT nr. 06-4-0182 privind eliberarea medicamentelor și/sau dispozitivelor medicale
              compensate din fondurile asigurării obligatorii de asistență medicală, din 01 aprilie 2022
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-423-0.14858451202617284.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Contract de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul
              asigurării obligatorii de asistență medicală nr. 05-08/98, din 31 decembrie 2021
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-375-0.151652907429092.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Contract nr. 06-4-0182 privind eliberarea către persoanele înregistrate la medicul de
              familie a medicamentelor compensate din fondurile asigurării obligatorii de asistență
              medicală
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-350-0.5643703468196268.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2023"
          isOpen={!!openItems['contracte-2023']}
          onToggle={() => toggleItem('contracte-2023')}
        >
          <div className="pill-container">
            <p>Acord adițional nr. 1 din 20.03.2023</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-567-0.6965367143630821.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr. 2 din 25.07.2023</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-568-0.16351672147722118.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr. 3 din 27.10.2023</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-569-0.9731710082042806.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>Acord adițional nr. 4 din 29.12.2023</p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-570-0.8637566816850278.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Contract de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul
              asigurării obligatorii de asistență medicală nr.05-08/98
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-487-0.7963495320245289.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>

        <Dropdown
          title="Anul 2024"
          isOpen={!!openItems['contracte-2024']}
          onToggle={() => toggleItem('contracte-2024')}
        >
          <div className="pill-container">
            <p>
              Contract nr. 06-4-0182 privind eliberarea medicamentelor și/sau dispozitivelor medicale
              compensate din fondurile asigurării obligatorii de asistență medicală, din 01 aprilie 2024
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-573-0.1323554546346899.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Contract de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul
              asigurării obligatorii de asistență medicală 05-08/98 din 29 decembrie 2023
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-572-0.09345642469496152.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Acord adițional nr. 1 din 19.03.2024 la Contractul de acordare a asistenței medicale (de
              prestare a serviciilor medicale) în cadrul asigurării obligatorii de asistență medicală
              05-08/98 din 29 decembrie 2023
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-574-0.40506096475907805.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>

          <div className="pill-container">
            <p>
              Acord adițional nr. 2 din 12.04.2024 la Contractul de acordare a asistenței medicale (de
              prestare a serviciilor medicale) în cadrul asigurării obligatorii de asistență medicală
              05-08/98 din 29 decembrie 2023
            </p>
            <a
              href="https://server.cmf-balti.md/static/pdf/article-pdf-597-0.1626905003399216.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>Descarcă PDF
            </a>
          </div>
        </Dropdown>
      </div>
    </>
  )
}

export default Transparenta

