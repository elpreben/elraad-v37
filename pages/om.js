
import Header from '../components/Header';

export default function Om() {
  return (
    <>
      <Header />
      <main>
        <h1>Om Elråd</h1>
        <p>Vi tilbyr råd og veiledning angående ditt elektriske anlegg.</p>
        <p>Vår kompetanse CV består av:</p>
        <ul>
          <li>Elektroinstallatør</li>
          <li>Gruppe L fagbrev</li>
          <li>NEK 405-2-3</li>
        </ul>
      </main>
      <footer>
        <a href="/kontakt" style={{ background: '#0070f3', color: '#fff', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}>
          Trenger du hjelp? Klikk her!
        </a>
      </footer>
    </>
  );
}
