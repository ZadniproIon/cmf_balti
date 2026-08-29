import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });

  const canonicalUrl = `https://cmfbalti.netlify.app/${locale}`;

  return {
    title: {
      default: t('title'),
      template: `%s - CMF Bălți`,
    },
    description: t('description'),
    metadataBase: new URL('https://cmfbalti.netlify.app'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ro: 'https://cmfbalti.netlify.app/ro',
        ru: 'https://cmfbalti.netlify.app/ru',
        en: 'https://cmfbalti.netlify.app/en',
        'x-default': 'https://cmfbalti.netlify.app/ro',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      siteName: 'CMF Bălți',
      locale: locale === 'ro' ? 'ro_RO' : locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og_image_1.jpg',
          width: 1200,
          height: 630,
          alt: 'Centrul Medicilor de Familie mun. Bălți',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og_image_1.jpg'],
    },
    icons: {
      icon: '/images/logo-cmf.png',
      apple: '/images/logo-cmf.png',
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Instituția Medico-Sanitară Publică „Centrul Medicilor de Familie Municipal Bălți”',
    alternateName: 'CMF Bălți',
    url: 'https://cmfbalti.netlify.app',
    logo: 'https://cmfbalti.netlify.app/images/logo-cmf.png',
    image: 'https://cmfbalti.netlify.app/og_image_1.jpg',
    description:
      'Centrul Medicilor de Familie mun. Bălți — servicii medicale primare, programări online, informații pentru beneficiari și contacte.',
    telephone: '+37323175228',
    email: 'cmfbalti@ms.md',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'str. Decebal 101V',
      addressLocality: 'Bălți',
      postalCode: 'MD-3100',
      addressCountry: 'MD',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.774417,
      longitude: 27.895833,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '13:00',
      },
    ],
  };

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-link">
            {locale === 'ru'
              ? 'Перейти к основному содержимому'
              : locale === 'en'
              ? 'Skip to main content'
              : 'Treci la conținutul principal'}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
