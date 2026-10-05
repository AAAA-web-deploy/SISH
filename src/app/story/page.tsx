import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Story · SI, Still Human",
  description:
    "The Rivalry, the Partnership, and the Human Leads. SuperIntelligence assists. Human judgment leads.",
};

const CHECKS = [
  "Multiple scenarios",
  "Check assumptions",
  "Size the risk",
  "Stay disciplined",
];

export default function StoryPage() {
  return (
    <main className="story">
      <h1 className="sr-only">It knows the patterns. You make the call.</h1>
      <Image
        className="story-hero"
        src="/images/story/hero.png"
        width={1774}
        height={887}
        priority
        sizes="100vw"
        alt="It knows the patterns. You make the call. Two minds. One desk. One mouse. The trader takes the mouse while SuperIntelligence sits beside him."
      />

      <p className="story-arc">
        <span>The Rivalry</span>
        <span className="story-arrow" aria-hidden="true">
          →
        </span>
        <span>The Partnership</span>
        <span className="story-arrow" aria-hidden="true">
          →
        </span>
        <span>The Human Leads</span>
      </p>

      <section className="beat beat-image-left" aria-labelledby="challenge-title">
        <div className="beat-copy">
          <h2 id="challenge-title">
            The <span className="hot">challenge</span>
          </h2>
          <p className="beat-lede">
            Different perspectives.
            <br />
            Same goal. A better decision.
          </p>
          <div className="exchange">
            <p>
              <span className="who who-si">SI:</span>
              <span>I’ve studied every crash.</span>
            </p>
            <p>
              <span className="who who-trader">Trader:</span>
              <span>I’ve paid tuition.</span>
            </p>
            <p>
              <span className="who who-si">SI:</span>
              <span>A thousand charts in a second.</span>
            </p>
            <p>
              <span className="who who-trader">Trader:</span>
              <span>I’ve learned when to close one.</span>
            </p>
          </div>
        </div>
        <Image
          className="beat-art"
          src="/images/story/challenge.png"
          width={610}
          height={337}
          sizes="(max-width: 800px) 92vw, 54vw"
          alt="The trader studies the screens while SuperIntelligence points at a chart."
        />
      </section>

      <section className="beat beat-image-right" aria-labelledby="reality-title">
        <div className="beat-copy">
          <h2 id="reality-title">
            The <span className="hot">reality check</span>
          </h2>
          <p className="beat-lede">
            Data can be convincing.
            <br />
            But markets have a way of humbling everyone.
          </p>
          <div className="exchange">
            <p>
              <span className="who who-trader">Trader:</span>
              <span>What if the buyers disappear?</span>
            </p>
            <p>
              <span className="who who-si">SI:</span>
              <span>Your gut liked last Tuesday.</span>
            </p>
            <p>
              <span className="who who-trader">Trader:</span>
              <span>Fine. Show me the numbers.</span>
            </p>
          </div>
        </div>
        <Image
          className="beat-art"
          src="/images/story/reality-check.png"
          width={568}
          height={350}
          sizes="(max-width: 800px) 92vw, 54vw"
          alt="SuperIntelligence points to a scenario analysis while the trader holds a note that reads Risk?"
        />
      </section>

      <section className="beat beat-image-left" aria-labelledby="partnership-title">
        <div className="beat-copy">
          <h2 id="partnership-title">
            A better <span className="hot">partnership</span>
          </h2>
          <p className="beat-lede">
            SI finds patterns.
            <br />
            Experience asks better questions.
          </p>
          <ul className="checks">
            {CHECKS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Image
          className="beat-art"
          src="/images/story/partnership.png"
          width={700}
          height={310}
          sizes="(max-width: 800px) 92vw, 54vw"
          alt="The trader writes while SuperIntelligence holds the numbers beside an entry and exit chart."
        />
      </section>

      <section className="beat beat-image-right" aria-labelledby="final-title">
        <div className="beat-copy">
          <h2 id="final-title">
            The <span className="hot">final call</span>
          </h2>
          <p className="beat-lede">
            All the analysis. All the debate.
            <br />
            In the end, it’s a human decision.
          </p>
          <div className="exchange">
            <p>
              <span className="who who-si">SI:</span>
              <span>Shall I execute?</span>
            </p>
            <p>
              <span className="who who-trader">Trader:</span>
              <span>
                Smaller position. Clear exit.
                <span className="exchange-next">Then I decide.</span>
              </span>
            </p>
          </div>
        </div>
        <Image
          className="beat-art"
          src="/images/story/final-call.png"
          width={630}
          height={270}
          sizes="(max-width: 800px) 92vw, 54vw"
          alt="The trader takes the mouse. SuperIntelligence holds the analysis and waits."
        />
      </section>

      <Image
        className="story-close"
        src="/images/story/closing.png"
        width={970}
        height={287}
        sizes="100vw"
        alt="SuperIntelligence assists. Human judgment leads. A billion calculations. Still your call. SI, Still Human. $SISH."
      />

      <footer className="story-foot">
        <nav aria-label="Footer">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="story-foot-link"
              aria-current={item.href === "/story" ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="story-tag">
          Same markets.
          <br />
          More human.
        </p>
      </footer>
    </main>
  );
}
