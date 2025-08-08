import Link from 'next/link';

export default function GetAQuoteButton() {
  return (
    <Link href="/get-a-quote">
      <button
        type="button"
        className="button-alt"
        style={{
          backgroundColor: 'var(--green)',
          border: 'var(--green)',
          color: 'white',
          fontWeight: '600',
          letterSpacing: '1px',
          height: '50px',
          borderRadius: '50px',
          width: '200px',
          fontSize: '1.7rem',
          boxShadow: '0 0 6px 0px var(--light-grey)',
        }}
      >
        GET A QUOTE <span>→</span>
      </button>
    </Link>
  );
}
