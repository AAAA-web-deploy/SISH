import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";

const STORIES = [
  {
    src: "/images/the-rivalry.png",
    width: 1448,
    height: 1086,
    alt: "The Rivalry. Different minds. Same markets. One sees infinite data. The other has lived through the fallout.",
  },
  {
    src: "/images/the-partnership.png",
    width: 1448,
    height: 1086,
    alt: "The Partnership. SuperIntelligence brings the impossible. Human experience brings perspective. Together, they go further.",
  },
  {
    src: "/images/the-human-leads.png",
    width: 1448,
    height: 1086,
    alt: "The Human Leads. All the data in the world can’t replace a human who’s been through it. Final decisions will always be human.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="home-title">
        <h1 id="home-title" className="sr-only">
          A billion calculations. Still your call.
        </h1>
        <div className="hero-frame">
          <Image
            src="/images/banner.png"
            width={2000}
            height={667}
            alt="A billion calculations. Still your call. SuperIntelligence assists. Human judgment leads. $SISH. A veteran trader at his desk overlooking the city at sunset, with SuperIntelligence beside him. Speech bubbles: I’ve studied every crash. I’ve paid tuition."
            priority
            sizes="100vw"
          />
          <div className="hero-social">
            <SocialLinks />
          </div>
          <div className="hero-actions">
            <Button asChild variant="story" size="hero">
              <Link href="/story">
                Explore the Story
                <span aria-hidden="true">→</span>
              </Link>
            </Button>
            <Button asChild variant="community" size="hero">
              <Link href="/community">Meet the Community</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="stories" aria-label="The story">
        {STORIES.map((story) => (
          <Image
            key={story.src}
            src={story.src}
            width={story.width}
            height={story.height}
            alt={story.alt}
            sizes="(max-width: 800px) 92vw, 30vw"
          />
        ))}
      </section>
    </main>
  );
}
