import { Button } from "@/components/ui/button";

function BrushStroke() {
  return (
    <svg className="banner-brush" viewBox="0 0 220 72" aria-hidden="true">
      <path
        fill="#083e96"
        d="M8 40c6-16 20-18 36-14 18 4 24-8 46-8 20 0 28 8 48 6 18-2 30 4 46 1 10-2 18 1 24 6l8 4-14 6-16-2c-14 6-24 1-40 4-20 4-28-6-48-4-18 2-26 8-44 6-16-2-28 2-42 0-8-1-12 2-10 1z"
      />
      <path
        fill="#0d56c4"
        d="M18 38c14-10 32-6 50-8 20-2 28 6 48 4 16-2 28 3 42 1 8-1 14 2 16 5-8 3-12 7-24 6-18-1-26 5-44 4-20-2-30-8-50-6-16 2-26 5-38 3-6-1-8-3 0-9z"
      />
      <path
        fill="#1668de"
        d="M34 40c22-7 46-4 70-6 20-2 36 3 54 1 6 4-4 7-14 6-22-1-34 4-56 3-20-1-36-5-54-3-8 1-12 1 0-1z"
      />
    </svg>
  );
}

function XIcon({ filled = false }: { filled?: boolean }) {
  if (filled) {
    return (
      <svg className="mark-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.23 10.16 22.98 0h-2.07l-7.59 8.82L7.25 0H.26l9.17 13.34L.26 24h2.07l8.02-9.32L16.75 24h6.99L14.23 10.16Zm-2.84 3.3-.93-1.33L3.08 1.56h3.18l5.96 8.53.93 1.33 7.76 11.09h-3.18L11.39 13.46Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 5.5 19 19M19 5.5 5 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TelegramIcon({ filled = false }: { filled?: boolean }) {
  if (filled) {
    return (
      <svg className="mark-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.6 3.4 2.5 10.6c-1.05.4-1.04 1-.2 1.26l4.9 1.53 1.9 5.86c.23.7.12.98.72.98.34 0 .52-.16.74-.38l2.55-2.48 4.5 3.32c.82.46 1.4.22 1.6-.78l2.85-13.5c.28-1.2-.46-1.74-1.26-1.4ZM9.3 14.1l8.55-5.4c.42-.26.8-.12.48.17l-7.15 6.48-.3 3.2-1.58-4.45Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.2 11.3 20.6 4.6 14.8 20.1l-3.6-6.6-8-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 13.5 20.6 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SocialLinks({ marksOnly = false }: { marksOnly?: boolean }) {
  if (marksOnly) {
    return (
      <>
        <a
          className="banner-mark"
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <BrushStroke />
          <XIcon filled />
        </a>
        <a
          className="banner-mark"
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <BrushStroke />
          <TelegramIcon filled />
        </a>
      </>
    );
  }

  return (
    <>
      <Button asChild variant="community" size="hero">
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <XIcon />X
        </a>
      </Button>
      <Button asChild variant="story" size="hero">
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
          Telegram
        </a>
      </Button>
    </>
  );
}
