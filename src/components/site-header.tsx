"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UNBUILT = [
  { label: "Story" },
  { label: "Token" },
  { label: "How to Buy" },
  { label: "Community" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const homeCurrent = pathname === "/";

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <Image
          src="/images/logo.png"
          alt=""
          width={1254}
          height={1254}
          className="brand-mark"
          priority
          sizes="48px"
        />
        <span className="wordmark">SI, Still Human</span>
      </Link>

      <input id="nav-toggle" type="checkbox" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="menu-button">
        <span className="sr-only">Menu</span>
        <span className="menu-bars" aria-hidden="true" />
      </label>
      <nav aria-label="Primary">
        <Link
          href="/"
          className="nav-link"
          aria-current={homeCurrent ? "page" : undefined}
        >
          Home
        </Link>
        {UNBUILT.map((item) => (
          <button
            key={item.label}
            type="button"
            className="nav-link"
            disabled
            title="Placeholder. This page is not available yet."
            aria-describedby="unbuilt-pages"
          >
            {item.label}
          </button>
        ))}
      </nav>
      <p id="unbuilt-pages" className="sr-only">
        Placeholder. Story, Token, How to Buy, and Community are not available
        yet.
      </p>
    </header>
  );
}
