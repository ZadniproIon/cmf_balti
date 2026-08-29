import { getTranslations } from 'next-intl/server';
import ContactClient from '../../../components/ContactClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.contact' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://cmfbalti.netlify.app/${locale}/contacte`,
      languages: {
        ro: 'https://cmfbalti.netlify.app/ro/contacte',
        ru: 'https://cmfbalti.netlify.app/ru/contacte',
        en: 'https://cmfbalti.netlify.app/en/contacte',
      },
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
