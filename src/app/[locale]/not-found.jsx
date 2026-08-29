import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import { Link } from '../../i18n/routing';

export default function NotFound() {
  const t = useTranslations();

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-content">
        <h1 id="not-found-title" className="not-found-title">
          {t('notFound.title')}
        </h1>
        <p className="not-found-text">
          {t.rich('notFound.text', {
            link: (chunks) => (
              <Link href="/" className="not-found-inline-link">
                {chunks}
              </Link>
            ),
          })}
        </p>
        <Link className="not-found-link" href="/">
          <ArrowLeft className="icon" aria-hidden="true" />
          {t('notFound.back')}
        </Link>
      </div>
    </section>
  );
}
