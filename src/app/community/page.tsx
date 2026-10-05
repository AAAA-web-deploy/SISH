import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Community · SI, Still Human",
  description:
    "Trading stories. Hard-earned lessons. Still human. Bring your brain. Keep your judgment.",
};

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

export default function CommunityPage() {
  return (
    <main className="community screen">
      <h1 className="sr-only">Bring your brain. Keep your judgment.</h1>
      <div className="community-frame">
        <Image
          className="community-art"
          src="/images/community.png"
          width={1536}
          height={1024}
          priority
          quality={90}
          sizes="100vw"
          alt="Bring your brain. Keep your judgment. Trading stories. Hard-earned lessons. Still human. A trader and SuperIntelligence sit together at the desk. In the meme, SI says I’ve studied every crash. The trader says I’ve paid tuition. What was your most expensive lesson?"
        />
        <div className="community-actions">
          <Button
            type="button"
            variant="community"
            size="hero"
            disabled
            title="Placeholder. The official X link is not available yet."
            aria-describedby="social-placeholders"
          >
            <XIcon />X
          </Button>
          <Button
            type="button"
            variant="story"
            size="hero"
            disabled
            title="Placeholder. The official Telegram link is not available yet."
            aria-describedby="social-placeholders"
          >
            <TelegramIcon />
            Telegram
          </Button>
        </div>
        <p className="community-mark">SI, Still Human · $SISH</p>
      </div>
      <p id="social-placeholders" className="sr-only">
        Placeholders. Official X and Telegram links are not available yet.
      </p>
    </main>
  );
}
