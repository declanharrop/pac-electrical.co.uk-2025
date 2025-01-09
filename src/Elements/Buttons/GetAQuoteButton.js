import Link from 'next/link';

export default function GetAQuoteButton() {
  return (
    <Link href="/get-a-quote">
      <button
        type="button"
        className="button-alt"
        style={{ fontWeight: '600', letterSpacing: '1px', fontSize: '1.4rem' }}
      >
        GET A QUOTE <span>→</span>
      </button>
    </Link>
  );
}
