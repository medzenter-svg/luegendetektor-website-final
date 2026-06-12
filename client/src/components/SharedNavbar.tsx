/**
 * SharedNavbar – identisch mit der Navbar auf der Startseite.
 * Wird auf allen Unterseiten verwendet.
 *
 * Design: Navy #1a2a4a, Orange #FF8C00, Lato font
 * Auf Unterseiten scrollen die Menüpunkte zur Startseite (/#services etc.)
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLang } from "../contexts/LanguageContext";
import { t } from "../data/translations";

const NAVY      = "#1a2a4a";
const NAVY_DARK = "#111d35";
const ORANGE    = "#FF8C00";
const WHITE     = "#ffffff";

export default function SharedNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const [location] = useLocation();
  const isHome = location === "/";

  // On subpages, links go to /#section instead of smooth-scrolling
  const navLinks: [string, string][] = [
    [t.nav.services[lang], "services"],
    [t.nav.prices[lang],   "prices"],
    [t.nav.about[lang],    "about"],
    [t.nav.equipment[lang],"equipment"],
    [t.nav.contact[lang],  "contact"],
  ];

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: NAVY,
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* ── Desktop bar ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: "60px",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onClick={handleLogoClick}
        >
          <img
            src="/__manus__/logo_clean_f9c5298d_633ac44d.png"
            alt="Lügendetektor Test München – Logo"
            loading="eager"
            style={{ width: "42px", height: "42px", objectFit: "contain" }}
          />
          <span
            style={{
              color: WHITE,
              fontWeight: 700,
              fontSize: "20px",
              letterSpacing: "1px",
            }}
          >
            luegendetektor-test-muenchen.de
          </span>
        </div>

        {/* Desktop nav links */}
        <div
          className="hidden lg:flex"
          style={{ flex: 1, gap: "22px", alignItems: "center" }}
        >
          {navLinks.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.3px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = ORANGE)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
              }
            >
              {label}
            </button>
          ))}
          <Link
            href="/ratgeber"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.3px",
              textDecoration: "none",
              padding: "4px 0",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = ORANGE)
            }
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.85)")
            }
          >
            Ratgeber
          </Link>
        </div>

        {/* Language switcher */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <button
            onClick={() => setLang("de")}
            style={{
              padding: "5px 10px",
              borderRadius: "3px 0 0 3px",
              border: "1px solid rgba(255,255,255,0.35)",
              background: lang === "de" ? ORANGE : "transparent",
              color: WHITE,
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              letterSpacing: "0.5px",
            }}
          >
            DE
          </button>
          <button
            onClick={() => setLang("en")}
            style={{
              padding: "5px 10px",
              borderRadius: "0 3px 3px 0",
              border: "1px solid rgba(255,255,255,0.35)",
              borderLeft: "none",
              background: lang === "en" ? ORANGE : "transparent",
              color: WHITE,
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              letterSpacing: "0.5px",
            }}
          >
            EN
          </button>
        </div>

        {/* CTA button */}
        <button
          onClick={() => handleNavClick("contact")}
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "6px",
            backgroundColor: ORANGE,
            color: WHITE,
            border: "none",
            padding: "9px 14px",
            borderRadius: "4px",
            fontWeight: 700,
            fontSize: "13px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e07b00")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ORANGE)
          }
        >
          {t.nav.cta[lang]}
        </button>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            color: WHITE,
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: NAVY_DARK,
            padding: "12px 24px 20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {navLinks.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                color: "rgba(255,255,255,0.85)",
                fontSize: "14px",
                padding: "10px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {label}
            </button>
          ))}
          <Link
            href="/ratgeber"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              color: "rgba(255,255,255,0.85)",
              fontSize: "14px",
              padding: "10px 0",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            Ratgeber
          </Link>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "12px",
              marginBottom: "8px",
            }}
          >
            <button
              onClick={() => setLang("de")}
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: lang === "de" ? ORANGE : "transparent",
                color: WHITE,
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              DE – Deutsch
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: lang === "en" ? ORANGE : "transparent",
                color: WHITE,
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              EN – English
            </button>
          </div>
          <button
            onClick={() => handleNavClick("contact")}
            style={{
              width: "100%",
              backgroundColor: ORANGE,
              color: WHITE,
              border: "none",
              padding: "11px",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            {t.nav.cta[lang]}
          </button>
        </div>
      )}
    </nav>
  );
}
