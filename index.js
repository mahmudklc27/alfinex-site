
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Alfinex Pro</h1>
      <p>Yatırıma başlamak için aşağıdan giriş yap veya kayıt ol!</p>
      <Link href="/auth/login"><button>Giriş Yap</button></Link>
      <Link href="/auth/register"><button>Kayıt Ol</button></Link>
    </div>
  );
}
