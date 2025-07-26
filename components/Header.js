
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#fff', padding: '10px 20px', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Elråd logo" style={{ height: '40px' }} />
          <strong>Elråd</strong>
        </div>
        <div>
          <Link href="/" legacyBehavior><a style={{ margin: '0 10px' }}>Forside</a></Link>
          <Link href="/om" legacyBehavior><a style={{ margin: '0 10px' }}>Om Elråd</a></Link>
          <Link href="/priser" legacyBehavior><a style={{ margin: '0 10px' }}>Priser</a></Link>
          <Link href="/kontakt" legacyBehavior><a style={{ margin: '0 10px' }}>Kontakt oss</a></Link>
        </div>
      </nav>
    </header>
  );
}
