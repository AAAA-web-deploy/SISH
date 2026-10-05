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
    <svg viewBox="0 0 92 52" aria-hidden="true">
      <rect
        x="3"
        y="8"
        width="86"
        height="38"
        rx="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <path
        d="M60 21.5 67.2 29.6 60 32.8 52.8 29.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M52.8 31 60 34.2 67.2 31 60 42.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CoinsIcon() {
  return (
    <svg viewBox="0 0 84 86" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      >
        <ellipse cx="42" cy="13" rx="26" ry="7.2" />
        <path d="M16 13v10c0 4 11.6 7.2 26 7.2s26-3.2 26-7.2V13" />
        <ellipse cx="42" cy="38" rx="26" ry="7.2" />
        <path d="M16 38v10c0 4 11.6 7.2 26 7.2s26-3.2 26-7.2V38" />
        <ellipse cx="42" cy="63" rx="26" ry="7.2" />
        <path d="M16 63v10c0 4 11.6 7.2 26 7.2s26-3.2 26-7.2V63" />
      </g>
      <path
        d="M42 59.2 48.4 66.2 42 69 35.6 66.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M35.6 67.4 42 70.2 48.4 67.4 42 77.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContractIcon() {
  return (
    <svg viewBox="0 0 84 78" aria-hidden="true">
      <path
        d="M10 6h30l18 18v40a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M40 6v18h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M18 34h22M18 43h13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle
        cx="54"
        cy="52"
        r="13"
        fill="#03182a"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <path
        d="m63.4 61.4 8.2 8.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="m47.4 52.2 4 4 7.4-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 72 86" aria-hidden="true">
      <path
        d="M36 3c13 13 16 28 16 42L36 56 20 45c0-14 3-29 16-42Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle
        cx="36"
        cy="28"
        r="5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 43 6 60l14-4.5M52 43l14 17-14-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29.5 54c1.8 7 4.2 12 6.5 12s4.7-5 6.5-12" fill="#ea6829" />
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
    <main className="buy screen">
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
