import { Button } from "@/components/ui/button";

function XIcon() {
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

function TelegramIcon() {
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

export function SocialLinks() {
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
