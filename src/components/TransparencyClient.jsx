'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const categoryByHash = {
  '#achizitii_publice': 'procurement',
  '#rapoarte_de_activitate': 'reports',
  '#contracte_cnam': 'contracts',
};

const TransparencyClient = ({ documents }) => {
  const t = useTranslations('transparenta');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const category = categoryByHash[`#${categoryParam.toLowerCase()}`];
      if (category) return category;
    }
    return 'all';
  });

  const [selectedYear, setSelectedYear] = useState(() => {
    return searchParams.get('year') || 'all';
  });

  // Listen to hash from window if present on initial load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashCat = categoryByHash[window.location.hash.toLowerCase()];
      if (hashCat) {
        setSelectedCategory(hashCat);
      }
    }
  }, []);

  const categoryOptions = useMemo(() => {
    return Array.from(new Set(Object.values(categoryByHash)));
  }, []);

  const yearOptions = useMemo(() => {
    return Array.from(new Set(documents.map((doc) => doc.year))).sort((a, b) => b - a);
  }, [documents]);

  const keyByCategory = useMemo(() => {
    return Object.fromEntries(
      Object.entries(categoryByHash).map(([hash, category]) => [category, hash.slice(1)])
    );
  }, []);

  const categoryLabel = (category) => t(`categories.${category}`);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
        return false;
      }
      if (selectedYear !== 'all' && doc.year !== Number(selectedYear)) {
        return false;
      }
      return true;
    });
  }, [documents, selectedCategory, selectedYear]);

  const updateFilters = (newCategory, newYear) => {
    setSelectedCategory(newCategory);
    setSelectedYear(newYear);

    const params = new URLSearchParams();
    const categoryKey = keyByCategory[newCategory];

    if (newCategory !== 'all' && categoryKey) {
      params.set('category', categoryKey);
    }
    if (newYear !== 'all') {
      params.set('year', newYear);
    }

    const search = params.toString();
    router.replace(`${pathname}${search ? `?${search}` : ''}`, { scroll: false });
  };

  return (
    <section className="transparenta-section-content" aria-labelledby="transparenta-title">
      <h1 id="transparenta-title" className="sr-only">
        {t('title')}
      </h1>
      <div className="transparenta-filters" role="group" aria-label="Filtre documente">
        <label>
          <span>{t('filters.category')}</span>
          <select
            value={selectedCategory}
            onChange={(e) => updateFilters(e.target.value, selectedYear)}
          >
            <option value="all">{t('filters.allCategories')}</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {categoryLabel(category)}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>{t('filters.year')}</span>
          <select
            value={selectedYear}
            onChange={(e) => updateFilters(selectedCategory, e.target.value)}
          >
            <option value="all">{t('filters.allYears')}</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="transparenta-results" role="list">
        {filteredDocuments.length === 0 ? (
          <li className="transparenta-empty">{t('empty')}</li>
        ) : (
          filteredDocuments.map((doc, index) => (
            <li
              className="transparenta-result"
              key={`${doc.category}-${doc.year}-${index}`}
            >
              <div className="transparenta-result-text">
                <h3 className="transparenta-result-title">{doc.title}</h3>
                <p className="transparenta-result-meta">
                  {categoryLabel(doc.category)} • {doc.year}
                </p>
              </div>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <Download className="download-icon" aria-hidden="true" />
                {t('cta')}
              </a>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default TransparencyClient;
