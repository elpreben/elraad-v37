
import Header from '../components/Header';

export default function Priser() {
  return (
    <>
      <Header />
      <main>
        <h1>Priser</h1>
        <p>Råd og veiledningsamtale for kun kr 50,- inkl. MVA.</p>
        <p>(estimert avsatt tid 10-15 minutter per samtale)</p>
      </main>
      <footer>
        <a href="/kontakt" style={{ background: '#0070f3', color: '#fff', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}>
          Trenger du hjelp? Klikk her!
        </a>
      </footer>
    </>
  );
}
