import type { Metadata } from "next";
import Image from "next/image";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "Community · SI, Still Human",
  description:
    "Trading stories. Hard-earned lessons. Still human. Bring your brain. Keep your judgment.",
};

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
          <SocialLinks />
        </div>
        <p className="community-mark">SI, Still Human · $SISH</p>
      </div>
    </main>
  );
}
