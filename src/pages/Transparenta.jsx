import { useMemo, useState } from 'react'
import { Download } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import usePageStyles from '../hooks/usePageStyles'
import componentsStyles from '../styles/components.css?raw'
import titleStyles from '../styles/title-and-section-text.css?raw'
import transparentaStyles from '../styles/transparenta.css?raw'

const pageStyles = [titleStyles, transparentaStyles, componentsStyles]

const documents = [
  {
    "category": "Achiziții publice",
    "year": 2019,
    "title": "Darea de seamă privind realizarea achizițiilor publice de valoare mică pentru anul 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-188-0.5752821305007563.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2019,
    "title": "Raport de monitorizare a contractelor de achiziții publice pentru anul 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-187-0.05081708511509031.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2019,
    "title": "Planul de achiziții publice pentru anul 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-186-0.7641984274827819.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2020,
    "title": "Darea de seama privind realizarea achizitiilor publice de valoare mica pentru anul 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-125-0.6328683296443433.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2020,
    "title": "Lista contractelor de achiziții publice centralizate (CAPCS) pentru anul 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-124-0.19690157570510602.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2020,
    "title": "Planul de achiziții ale bunurilor, serviciilor și lucrărilor pentru anul 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-123-0.8566088744118476.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2020,
    "title": "Raport de monitorizare a contractelor de achizitii publice pentru anul 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-122-0.5257070680244321.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2021,
    "title": "Datele privind procurările de medicamente, dispozitive medicale și echipament de protecție pentru anul 2021 ale IMSP„CMF mun. Bălți”",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-444-0.41867172126852836.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2021,
    "title": "Darea de seama privind realizarea achizitiilor publice de valoare mica pentru anul 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-406-0.5591445595921718.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2021,
    "title": "Planul de achiziții publice ale bunurilor, serviciilor și lucrărilor pentru anul 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-262-0.8919353074763584.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2022,
    "title": "Dare de seama contracte de valoare mică pentru anul 2022",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-485-0.5000931277172642.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2022,
    "title": "Planul de achiziții ale bunurilor, serviciilor și lucrărilor al IMSP„CMF mun. Bălți” pentru anul 2022",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-449-0.08144785986830272.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2023,
    "title": "Dare de seama contracte de valoare mică pentru anul 2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-561-0.07563706360596356.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2023,
    "title": "Planul anual de achiziții publice pentru anul 2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-543-0.8894765200868631.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2024,
    "title": "Planul de achiziții ale bunurilor, serviciilor și lucrărilor al IMSP „Centrul Medicilor de Familie Municipal Bălți” pentru anul 2024",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-563-0.5187493165883457.pdf"
  },
  {
    "category": "Achiziții publice",
    "year": 2025,
    "title": "Planul de achiziții ale bunurilor, serviciilor și lucrărilor al IMSP „Centrul Medicilor de Familie Municipal Bălți” pentru anul 2025",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-607-0.6741286305088359.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2019,
    "title": "Raport economico-financiar semestrul I, anul 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-183-0.22378742144305452.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2019,
    "title": "Raport economico- financiar anul 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-184-0.31273189720013117.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2020,
    "title": "Raport economico-financiar semestrul I, anul 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-84-0.830713463716243.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2020,
    "title": "Raport analitic privind activitatea IMSP CMF mun. Bălți pentru anul 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-229-0.9060638455223116.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2021,
    "title": "Raport economico-financiar pentru semestrul I, anul 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-292-0.8582639633101051.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2021,
    "title": "Raport economico-financiar pentru 9 luni, anul 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-293-0.7985941405290871.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2021,
    "title": "Raport analitic privind activitatea Instituției Medico-Sanitare Publice „Centrul Medicilor de Familie Municipal Bălți” în anul 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-405-0.185192199851003.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2022,
    "title": "Raportul economico-financiar pentru semestrul I al anului 2022 a IMSP ,,Centrul Medicilor de Familie Municipal Bălți”",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-462-0.8722344653798965.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2022,
    "title": "Raport economico-financiar pentru 9 luni al anului 2022 privind activitatea IMSP „CentrulMedicilor de Familie Municipal Bălți”",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-484-0.09728255839608024.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2022,
    "title": "Raport analitic privind activitatea Instituției Medico-Sanitare Publice „Centrul Medicilor de Familie Municipal Bălți” în anul 2022",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-516-0.9068700428519321.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2023,
    "title": "Raport analitic privind activitatea Instituției Medico-Sanitare Publice „Centrul Medicilor de Familie Municipal Bălți” în anul 2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-564-0.6940812918239908.pdf"
  },
  {
    "category": "Rapoarte de activitate",
    "year": 2024,
    "title": "Raport economico-financiar pentru 6 luni al anului 2024 privind activitatea IMSP ,,CentrulMedicilor de Familie Municipal Bălți”",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-601-0.29685171800865484.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2019,
    "title": "Acord adițional nr.1 din 31 octombrie 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-168-0.13576841365537862.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2019,
    "title": "Acord adițional nr. 2 din 24 decembrie 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-169-0.37235319563247593.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2019,
    "title": "Acord adițional nr.3 din 31 decembrie 2019",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-170-0.40823793458846125.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2020,
    "title": "Acord adițional nr.1 din 26 mai 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-163-0.6609125454216793.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2020,
    "title": "Acord adițional nr.2 din 24 august 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-164-0.8685999094774032.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2020,
    "title": "Acord adițional nr.3 din 24 decembrie 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-165-0.2648027611179068.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2020,
    "title": "Acord adițional nr.4 din 31 decembrie 2020",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-166-0.4609860331173371.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2021,
    "title": "Acord adițional nr.1 din 16 iulie 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-255-0.7100470963174558.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2021,
    "title": "Acord adițional nr. 2 din 1 noiembrie 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-348-0.059285286882801214.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2021,
    "title": "Acord adițional nr. 3 din 17 decembrie 2021",
    "href": ""
  },
  {
    "category": "Contracte CNAM",
    "year": 2021,
    "title": "Acord adițional nr. 4 din 31 decembrie 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-372-0.8393337100850192.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2022,
    "title": "CONTRACT nr. 06-4-0182 privind eliberarea medicamentelor și/sau dispozitivelor medicale compensate din fondurile asigurării obligatorii de asistență medicală, din 01 aprilie 2022",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-423-0.14858451202617284.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2022,
    "title": "Contract de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul asigurării obligatorii de asistență medicală nr. 05-08/98, din 31 decembrie 2021",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-375-0.151652907429092.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2022,
    "title": "Contract nr. 06-4-0182 privind eliberarea către persoanele înregistrate la medicul de familie a medicamentelor compensate din fondurile asigurării obligatorii de asistență medicală",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-350-0.5643703468196268.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2023,
    "title": "Acord adițional nr. 1 din 20.03.2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-567-0.6965367143630821.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2023,
    "title": "Acord adițional nr. 2 din 25.07.2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-568-0.16351672147722118.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2023,
    "title": "Acord adițional nr. 3 din 27.10.2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-569-0.9731710082042806.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2023,
    "title": "Acord adițional nr. 4 din 29.12.2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-570-0.8637566816850278.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2023,
    "title": "Contract de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul asigurării obligatorii de asistență medicală nr.05-08/98",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-487-0.7963495320245289.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2024,
    "title": "Contract nr. 06-4-0182 privind eliberarea medicamentelor și/sau dispozitivelor medicale compensate din fondurile asigurării obligatorii de asistență medicală, din 01 aprilie 2024",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-573-0.1323554546346899.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2024,
    "title": "Contract de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul asigurării obligatorii de asistență medicală 05-08/98 din 29 decembrie 2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-572-0.09345642469496152.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2024,
    "title": "Acord adițional nr. 1 din 19.03.2024 la Contractul de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul asigurării obligatorii de asistență medicală 05-08/98 din 29 decembrie 2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-574-0.40506096475907805.pdf"
  },
  {
    "category": "Contracte CNAM",
    "year": 2024,
    "title": "Acord adițional nr. 2 din 12.04.2024 la Contractul de acordare a asistenței medicale (de prestare a serviciilor medicale) în cadrul asigurării obligatorii de asistență medicală 05-08/98 din 29 decembrie 2023",
    "href": "https://server.cmf-balti.md/static/pdf/article-pdf-597-0.1626905003399216.pdf"
  }
]

const Transparenta = () => {
  useDocumentTitle('Transparența - CMF Bălți')
  usePageStyles(pageStyles, 'transparenta')

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')

  const categoryOptions = useMemo(() => {
    return Array.from(new Set(documents.map((doc) => doc.category))).sort()
  }, [])

  const yearOptions = useMemo(() => {
    return Array.from(new Set(documents.map((doc) => doc.year))).sort((a, b) => b - a)
  }, [])

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
        return false
      }
      if (selectedYear !== 'all' && doc.year !== Number(selectedYear)) {
        return false
      }
      return true
    })
  }, [selectedCategory, selectedYear])

  return (
    <>
      <div className="section-text">
        <div className="transparenta-filters">
          <label>
            <span>Categoria</span>
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              <option value="all">Toate categoriile</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Anul</span>
            <select value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
              <option value="all">Toți anii</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="transparenta-results">
          {filteredDocuments.length === 0 ? (
            <p>Nu există rezultate pentru filtrele selectate.</p>
          ) : (
            filteredDocuments.map((doc, index) => (
              <div className="transparenta-result" key={`${doc.category}-${doc.year}-${index}`}>
                <div className="transparenta-result-text">
                  <p className="transparenta-result-title">{doc.title}</p>
                  <p className="transparenta-result-meta">{doc.category} • {doc.year}</p>
                </div>
                <a href={doc.href} target="_blank" rel="noreferrer">
                  <Download className="download-icon" />Descarca PDF
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Transparenta
