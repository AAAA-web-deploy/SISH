"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();

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
        {NAV.map((item) =>
          item.href ? (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ) : (
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
          ),
        )}
      </nav>
      <p id="unbuilt-pages" className="sr-only">
        Placeholder. Community is not available yet.
      </p>
    </header>
  );
}
