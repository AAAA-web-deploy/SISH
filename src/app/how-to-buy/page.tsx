import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Image from "next/image";

const hand = Caveat({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "How to Buy · SI, Still Human",
  description:
    "Set up an Ethereum wallet, fund it with ETH, verify the official $SISH contract, and wait for the confirmed purchase link.",
};

const CHECKS = ["Official contract", "Correct network", "Fees and slippage"];

function WalletIcon() {
  return (
    <svg viewBox="0 0 76 56" aria-hidden="true">
      <rect
        x="5"
        y="12"
        width="66"
        height="36"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M18 12.2c.4-5.2 4.6-8 10-8h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M51.5 26.4 56.2 31.6 51.5 33.7 46.8 31.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M46.8 32.6 51.5 34.7 56.2 32.6 51.5 40.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CoinsIcon() {
  return (
    <svg viewBox="0 0 72 68" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      >
        <ellipse cx="36" cy="14" rx="18" ry="6.2" />
        <path d="M18 14v8.5c0 3.4 8 6.2 18 6.2s18-2.8 18-6.2V14" />
        <path d="M18 22.5v8.5c0 3.4 8 6.2 18 6.2s18-2.8 18-6.2v-8.5" />
        <path d="M18 31v8.5c0 3.4 8 6.2 18 6.2s18-2.8 18-6.2V31" />
      </g>
      <path
        d="M36 34.2 40.4 39 36 40.9 31.6 39Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M31.6 39.9 36 41.8 40.4 39.9 36 46.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContractIcon() {
  return (
    <svg viewBox="0 0 72 68" aria-hidden="true">
      <path
        d="M16 8h24l14 14v34a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M40 8v14h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M22 32h18M22 39h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle
        cx="48"
        cy="46"
        r="10"
        fill="#03182a"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m55.2 53.2 6.2 6.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m43.6 46.2 2.8 2.8 5.6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 64 72" aria-hidden="true">
      <path
        d="M32 4c9 10 12 22 12 34l-12 8-12-8c0-12 3-24 12-34Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle
        cx="32"
        cy="26"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M20 38 10 50l10-3M44 38l10 12-10-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M27.5 48c1.2 5 3 9 4.5 9s3.3-4 4.5-9" fill="#ea6829" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.4 19.2 5.1v6.6c0 4.3-2.9 7.4-7.2 9.5-4.3-2.1-7.2-5.2-7.2-9.5V5.1L12 2.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m8.1 11.4 2.7 2.7 5.1-5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="#f07a32" />
      <path
        d="M4.5 8.15 6.9 10.5 11.5 5.6"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STEPS = [
  {
    title: "Set up an Ethereum wallet",
    body: "Use a trusted, self-custody wallet such as MetaMask or a compatible wallet.",
    icon: <WalletIcon />,
  },
  {
    title: "Fund with ETH and allow for gas",
    body: "Add ETH to your wallet and keep a little extra for network fees (gas).",
    icon: <CoinsIcon />,
  },
  {
    title: "Verify the official contract and swap",
    body: "Double-check the official contract and confirm you’re on Ethereum.",
    icon: <ContractIcon />,
  },
] as const;

export default function HowToBuyPage() {
  return (
    <main className="buy">
      <h1 className="sr-only">Your wallet. Your decision.</h1>
      <Image
        className="buy-hero"
        src="/images/how-to-buy-hero.png"
        width={2000}
        height={667}
        priority
        quality={90}
        sizes="100vw"
        alt="A small process for a bigger story. Your wallet. Your decision. Verify the details before you swap. $SISH is a community token on Ethereum. Take your time, follow the steps, and always double-check the details. You’re in control. A trader and SuperIntelligence review the checklist at the desk."
      />

      <ol className="buy-steps">
        {STEPS.map((step, index) => (
          <li key={step.title} className="buy-step">
            <div className="buy-step-head">
              <span className="buy-num" aria-hidden="true">
                {index + 1}
              </span>
              <h2>{step.title}</h2>
            </div>
            <div className="buy-icon">{step.icon}</div>
            <p>{step.body}</p>
            {index === 2 ? (
              <p className="buy-contract">Official contract — To be announced</p>
            ) : null}
          </li>
        ))}
        <li className="buy-launch">
          <div className="buy-icon">
            <RocketIcon />
          </div>
          <h2>Purchase links will appear after launch.</h2>
          <p>
            The official links to buy $SISH will be shared here once the token
            is live.
          </p>
          <p className="sr-only">
            Purchase actions are disabled until the official contract and
            purchase link are confirmed.
          </p>
        </li>
      </ol>

      <div className="buy-bar">
        <p className="buy-final">
          <ShieldIcon />
          <span>Final checklist</span>
        </p>
        <ul className="buy-checks">
          {CHECKS.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <span className="buy-rule" aria-hidden="true" />
        <p className={`${hand.className} buy-sign`}>
          <span>Same humans.</span>
          <span className="buy-sign-line">Brighter days.</span>
        </p>
      </div>
    </main>
  );
}
