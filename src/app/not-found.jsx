import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <html lang="ro">
      <head>
        <title>404 - Pagina nu a fost găsită | CMF Bălți</title>
      </head>
      <body style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>404 - Pagina nu a fost găsită</h1>
        <p>Ne pare rău, pagina pe care o căutați nu există.</p>
        <Link
          href="/ro"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#ff6b6b',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          Înapoi la pagina principală
        </Link>
      </body>
    </html>
  );
}
