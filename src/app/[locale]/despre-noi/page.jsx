import { getTranslations } from 'next-intl/server';
import { MapPin, Phone } from 'lucide-react';

const subdivisionAssets = {
  cs1: {
    src: '/images/despre-cmf-jpeg/cmf-nr1-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-nr1-350.jpg 350w, /images/despre-cmf-jpeg/cmf-nr1-600.jpg 600w',
  },
  cs2: {
    src: '/images/despre-cmf-jpeg/cmf-nr2-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-nr2-350.jpg 350w, /images/despre-cmf-jpeg/cmf-nr2-600.jpg 600w',
  },
  cs3: {
    src: '/images/despre-cmf-jpeg/cmf-nr3-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-nr3-350.jpg 350w, /images/despre-cmf-jpeg/cmf-nr3-600.jpg 600w',
  },
  cs4: {
    src: '/images/despre-cmf-jpeg/cmf-nr4-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-nr4-350.jpg 350w, /images/despre-cmf-jpeg/cmf-nr4-600.jpg 600w',
  },
  cs5: {
    src: '/images/despre-cmf-jpeg/cmf-nr5-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-nr5-350.jpg 350w, /images/despre-cmf-jpeg/cmf-nr5-600.jpg 600w',
  },
  cs6: {
    src: '/images/despre-cmf-jpeg/cmf-nr6-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-nr6-350.jpg 350w, /images/despre-cmf-jpeg/cmf-nr6-600.jpg 600w',
  },
  atis: {
    src: '/images/despre-cmf-jpeg/cmf-atis-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-atis-350.jpg 350w, /images/despre-cmf-jpeg/cmf-atis-600.jpg 600w',
  },
  ccsm: {
    src: '/images/despre-cmf-jpeg/cmf-ccsm-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-ccsm-350.jpg 350w, /images/despre-cmf-jpeg/cmf-ccsm-600.jpg 600w',
  },
  elizaveta: {
    src: '/images/despre-cmf-jpeg/cmf-elizaveta-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-elizaveta-350.jpg 350w, /images/despre-cmf-jpeg/cmf-elizaveta-600.jpg 600w',
  },
  sadovoe: {
    src: '/images/despre-cmf-jpeg/cmf-sadovoe-350.jpg',
    srcSet: '/images/despre-cmf-jpeg/cmf-sadovoe-350.jpg 350w, /images/despre-cmf-jpeg/cmf-sadovoe-600.jpg 600w',
  },
};

const cardOrder = [
  'cs1',
  'cs2',
  'cs3',
  'cs4',
  'cs5',
  'cs6',
  'atis',
  'ccsm',
  'elizaveta',
  'sadovoe',
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.about' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://cmfbalti.netlify.app/${locale}/despre-noi`,
      languages: {
        ro: 'https://cmfbalti.netlify.app/ro/despre-noi',
        ru: 'https://cmfbalti.netlify.app/ru/despre-noi',
        en: 'https://cmfbalti.netlify.app/en/despre-noi',
      },
    },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const subdivisions = t.raw('about.subdivisions.cards');

  const headerLines = t('about.header').split('\n');
  const activityParagraphs = t('about.activity.text')
    .split(/\n\n+/)
    .filter((p) => p.trim());
  const evolutionParagraphs = t('about.evolution.text')
    .split(/\n\n+/)
    .filter((p) => p.trim());

  return (
    <>
      <header className="title-of-page">
        <h1>
          {headerLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < headerLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>
      </header>

      <section aria-labelledby="domeniul-activitate-title">
        <h2 id="domeniul-activitate-title" className="title-text">
          {t('about.activity.title')}
        </h2>
        <div className="section-text">
          {activityParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="evolutia-title">
        <h2 id="evolutia-title" className="title-text">
          {t('about.evolution.title')}
        </h2>
        <div className="section-text">
          {evolutionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="subdiviziuni-title">
        <h2 id="subdiviziuni-title" className="title-text">
          {t('about.subdivisions.title')}
        </h2>
        <div className="card-container" role="list">
          {cardOrder.map((key) => {
            const details = subdivisions[key];
            const asset = subdivisionAssets[key];

            return (
              <article className="card" role="listitem" key={key}>
                <div className="card-image">
                  <img
                    src={asset.src}
                    srcSet={asset.srcSet}
                    sizes="(max-width: 600px) 90vw, 350px"
                    width="350"
                    height="200"
                    loading="lazy"
                    decoding="async"
                    alt={details.alt}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{details.title}</h3>
                  <div className="card-row">
                    <MapPin className="card-icon" />
                    <p>{details.address}</p>
                  </div>
                  <div className="card-row">
                    <Phone className="card-icon" />
                    <p>{details.phone}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
