import { Button } from "@/components/ui/button";

function BrushStroke() {
  return (
    <svg className="banner-brush" viewBox="0 0 140 48" aria-hidden="true">
      <path
        fill="#2d6adf"
        d="M6 27c8-13 22-9 36-13 18-5 30 8 50 4 15-3 26 6 38 2 5-1 8 4 4 8-9 8-22 2-36 6-17 5-32-4-50-2-14 2-26 4-38 0-6-2-8-2-4-5z"
      />
      <path
        fill="#4b8ef2"
        d="M16 29c12-8 26-6 40-8 15-2 28 4 44 2 8-1 15 2 20 1 2 4-5 7-14 6-17-1-32 4-48 2-15-2-28 2-38 0-4-1-6-2-4-3z"
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
          d="M5.4 4.8h3.1l3.5 4.8 3.5-4.8h3.1L13.4 12l5.4 7.2h-3.1l-3.7-5.1-3.7 5.1H5.2L10.6 12 5.4 4.8Z"
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
          d="M20.8 4.7 3.4 11.2c-.9.3-.9.9-.2 1.1l4.5 1.4 10.4-6.6c.5-.3.9-.1.6.2l-8.4 7.6-.3 4.3c.4 0 .6-.2.8-.4l2.2-2.1 4.5 3.3c.8.4 1.4.2 1.6-.8l2.9-13.6c.3-1.1-.4-1.7-1.2-1.3Z"
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
