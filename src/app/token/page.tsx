import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Token · SI, Still Human",
  description:
    "$SISH represents experience, intuition, and independent judgment.",
};

const FACTS = [
  {
    label: "Name:",
    value: "SI, Still Human",
    icon: "person",
  },
  {
    label: "Ticker:",
    value: "SISH",
    icon: "tag",
  },
  {
    label: "Network:",
    value: "Ethereum",
    icon: "ethereum",
  },
] as const;

function FactIcon({ name }: { name: (typeof FACTS)[number]["icon"] }) {
  if (name === "person") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="8"
          r="3.15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5.4 19.2c1.3-3.3 3.5-4.8 6.6-4.8s5.3 1.5 6.6 4.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "tag") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3.8 12.4 11.2 5h6.6v6.6l-7.5 7.5L3.8 12.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="15.3" cy="8.5" r="1.15" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2 5.8 12.1 12 15.1 18.2 12.1 12 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 13.2 12 20.6 18.2 13.2 12 16.2 5.8 13.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TokenPage() {
  return (
    <main className="token">
      <div className="token-layout">
        <Image
          className="token-art"
          src="/images/token-illustration.png"
          width={1254}
          height={1254}
          priority
          quality={90}
          sizes="(max-width: 1040px) 92vw, 54vw"
          alt="A trader rests his chin on his hand while SuperIntelligence leans on his shoulder. The notebook reads Same Curiosity. Bigger Perspective. The mug reads People Over Panic. The books are Markets, Psychology, Human Behavior, and A Brighter Tomorrow."
        />

        <div className="token-copy">
          <h1>
            <span>The human</span>
            <span>stays at the center.</span>
          </h1>
          <svg
            className="center-rule"
            viewBox="0 0 560 28"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#e27432"
              d="M6 15c28-7 62-1 98-5 48-5 86 7 142 3 52-4 92 6 148 1 38-3 78 5 128-1 10 5-4 9-16 11-62 5-118-1-176 3-64 4-112-7-168 1-42 6-78-1-112-6-18-2-36-6-44-7z"
            />
          </svg>
          <p className="token-lede">
            $SISH represents experience, intuition,{" "}
            <br />
            and independent judgment.
          </p>

          <ul className="token-facts">
            {FACTS.map((fact) => (
              <li key={fact.label}>
                <span className="token-icon">
                  <FactIcon name={fact.icon} />
                </span>
                <span className="token-fact-text">
                  <span className="token-fact-label">{fact.label}</span>
                  <span className="token-fact-value">{fact.value}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="token-contract" role="status">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 3.5h7.1L19 8.3V20.5H7V3.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M13.8 3.8V8.5H18.6M9.2 12.3h6.1M9.2 15.6h6.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <p>Contract address — To be announced</p>
          </div>

          <p className="token-note">
            A meme community. No trading signals or promised returns.
          </p>

          <Button asChild variant="story" size="hero" className="token-story">
            <Link href="/story">
              View the Story
              <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
