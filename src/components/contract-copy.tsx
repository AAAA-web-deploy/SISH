"use client";

import { useState } from "react";

export function ContractCopy({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  function copyWithSelection() {
    const area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }

  async function copy() {
    const write = navigator.clipboard?.writeText(value);
    const wrote = await Promise.race([
      write?.then(() => true).catch(() => false) ?? Promise.resolve(false),
      new Promise<boolean>((resolve) => window.setTimeout(() => resolve(false), 250)),
    ]);
    if (!wrote) copyWithSelection();
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      className="token-copy-btn"
      data-copy={value}
      data-copied={copied ? "true" : "false"}
      onClick={copy}
      aria-label={copied ? "Contract address copied" : "Copy contract address"}
    >
      <svg className="copy-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="8"
          y="8"
          width="11"
          height="12"
          rx="1.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M6 15.5H5.4A1.4 1.4 0 0 1 4 14.1V5.4A1.4 1.4 0 0 1 5.4 4H14a1.4 1.4 0 0 1 1.4 1.4V6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
      <svg className="ok-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5.2 12.4 10 17.2 18.8 7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span data-copy-label>Copy</span>
    </button>
  );
}
