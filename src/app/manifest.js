export default function manifest() {
  return {
    name: 'Centrul Medicilor de Familie mun. Bălți',
    short_name: 'CMF Bălți',
    description:
      'Asistență medicală primară de calitate pentru întreaga comunitate din municipiul Bălți.',
    start_url: '/ro',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#283b6a',
    icons: [
      {
        src: '/images/logo-cmf.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo-cmf.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
