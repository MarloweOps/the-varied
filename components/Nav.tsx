"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  anchor?: string;
  href?: string;
};

const navItems: NavItem[] = [
  { label: "Work", anchor: "work" },
  { label: "Director", anchor: "director" },
  { label: "Blog", href: "/blog" },
  { label: "About", anchor: "about" },
  { label: "Contact", anchor: "contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const useScrollPosition = () => {
      setIsScrolled(window.scrollY > 80);
    };

    useScrollPosition();
    window.addEventListener("scroll", useScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", useScrollPosition);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    anchor: string,
  ) => {
    const target = document.getElementById(anchor);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  const getHref = (anchor: string) =>
    pathname === "/" ? `#${anchor}` : `/#${anchor}`;

  const renderNavLink = (item: NavItem, className: string) => {
    if (item.href) {
      return (
        <Link
          key={item.label}
          href={item.href}
          className={className}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        key={item.label}
        href={getHref(item.anchor!)}
        onClick={(event) => handleLinkClick(event, item.anchor!)}
        className={className}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-[rgba(8,8,8,0.95)] backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-10 py-6 md:px-16">
          <a
            href="/"
            className="font-inter text-xs tracking-[0.25em] text-[var(--text-muted)]"
          >
            THE VARIED
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              renderNavLink(
                item,
                "font-inter text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              )
            )}
          </div>

          <button
            type="button"
            className="flex h-8 w-8 flex-col items-center justify-center gap-[3px] md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="block h-px w-4 bg-[var(--text-muted)]" />
            <span className="block h-px w-4 bg-[var(--text-muted)]" />
            <span className="block h-px w-4 bg-[var(--text-muted)]" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#080808]">
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) =>
              renderNavLink(
                item,
                "font-cormorant text-[48px] leading-none text-[var(--text-primary)]"
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
