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
        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="nav-link"
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
