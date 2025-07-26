
import { useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const [problem, setProblem] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Problem:', problem);
    console.log('Image:', image ? image.name : 'No image uploaded');
    alert('Skjema sendt!');
  };

  return (
    <>
      <Header />
      <main>
        <h1>Velkommen til Elråd – din digitale elektroassistent</h1>
        <p>Hos Elråd hjelper vi deg med å løse problemer knyttet til ditt elektriske anlegg på en enkel og trygg måte.
        Vår løsning kombinerer kunstig intelligens og ekte fagkompetanse for å gi deg raske og presise råd.</p>
        <h2>Slik fungerer det:</h2>
        <p><strong>Steg 1:</strong> Fyll ut skjemaet nedenfor og beskriv problemet ditt. Vår AI analyserer informasjonen og gir deg råd og veiledning med en gang.</p>
        <p><strong>Steg 2:</strong> Hvis problemet ikke blir løst, kan en av våre kvalifiserte fagpersoner – autorisert installatør og elektriker – ta kontakt.
        Du får da profesjonell vurdering og eventuelt et prisestimat eller tilbud fra en lokal elektriker for å utbedre feilen.</p>

        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <label>Beskriv problemet:</label>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
            rows="4"
          />
          <label>Last opp et bilde:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ display: 'block', margin: '10px 0' }}
          />
          <button type="submit" style={{ backgroundColor: '#0070f3', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </main>
      <footer>
        <a href="/kontakt" style={{ background: '#0070f3', color: '#fff', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}>
          Trenger du hjelp? Klikk her!
        </a>
      </footer>
    </>
  );
}
