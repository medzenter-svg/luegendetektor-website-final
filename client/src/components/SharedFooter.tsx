/**
 * SharedFooter – Vollständiger Footer für alle Unterseiten.
 *
 * Identisch mit dem Footer der Startseite, aber:
 * - Navigation-Links führen zu /#section (kein scroll-to auf Unterseiten)
 * - Rechtliche Dokumente verlinken zu /#legal=agb etc. (Startseite öffnet Modal)
 * - Alle internen Links als <a href="..."> statt Buttons
 */
import { Link } from "wouter";

const NAVY    = "#1a2a4a";
const ORANGE  = "#FF8C00";
const WHITE   = "#ffffff";
const GREEN_WA = "#25D366";

const SERVICES = [
  { label: "Treuetest",                  href: "/treuetest" },
  { label: "Hauspersonal-Überprüfung",   href: "/hauspersonal-ueberpruefung" },
  { label: "Fahrerüberprüfung",          href: "/fahrerpruefung" },
  { label: "Mitarbeiterüberprüfung",     href: "/mitarbeiterueberpruefung" },
  { label: "Interne Ermittlungen",       href: "/interne-ermittlungen" },
  { label: "Sicherheitsprüfung",         href: "/sicherheitspruefung" },
  { label: "IT-Sektor Überprüfung",      href: "/it-sektor" },
  { label: "Ratgeber & Magazin",         href: "/ratgeber" },
];

const NAV_LINKS = [
  { label: "Dienstleistungen",  href: "/#dienstleistungen" },
  { label: "Preise",            href: "/#preise" },
  { label: "Über uns",          href: "/#about" },
  { label: "Ausrüstung",        href: "/#equipment" },
  { label: "Ablauf",            href: "/#ablauf" },
  { label: "FAQ",               href: "/#faq" },
  { label: "Kontakt",           href: "/#contact" },
];

const CITIES = [
  { label: "München",     href: "/luegendetektor-muenchen" },
  { label: "Berlin",      href: "/luegendetektor-berlin" },
  { label: "Hamburg",     href: "/luegendetektor-hamburg" },
  { label: "Frankfurt",   href: "/luegendetektor-frankfurt" },
  { label: "Düsseldorf",  href: "/luegendetektor-duesseldorf" },
  { label: "Stuttgart",   href: "/luegendetektor-stuttgart" },
  { label: "Köln",        href: "/luegendetektor-koeln" },
  { label: "Wien",        href: "/polygraph-wien" },
  { label: "Zürich",      href: "/polygraph-zuerich" },
];

const RATGEBER = [
  { label: "Genauigkeit des Polygraphen",  href: "/ratgeber/luegendetektor-genauigkeit" },
  { label: "Kosten & Preise",              href: "/ratgeber/kosten-polygraph" },
  { label: "Legalität in Deutschland",     href: "/ratgeber/polygraph-legal-deutschland" },
  { label: "Treuetest Vorbereitung",       href: "/ratgeber/treuetest-vorbereitung" },
  { label: "Polygraph vs. Stresstest",     href: "/ratgeber/polygraph-vs-stresstest" },
  { label: "Ablauf & Dauer",               href: "/ratgeber/dauer-polygraph-test" },
  { label: "Polygraph für Unternehmen",    href: "/ratgeber/polygraph-fuer-unternehmen" },
  { label: "Mitarbeiterdiebstahl",         href: "/ratgeber/mitarbeiterdiebstahl" },
  { label: "Anzeichen Fremdgehen",         href: "/ratgeber/anzeichen-fremdgehen" },
  { label: "Polygraph bei Jugendlichen",   href: "/ratgeber/polygraph-jugendliche" },
];

const LEGAL_LINKS = [
  { label: "Datenschutzerklärung",        href: "/#datenschutz" },
  { label: "Impressum",                   href: "/#impressum" },
  { label: "AGB",                         href: "/#agb" },
  { label: "Vertraulichkeitsvereinbarung",href: "/#vertraulichkeit" },
  { label: "Freiwillige Einwilligung",    href: "/#einwilligung" },
  { label: "Merkblatt für Probanden",     href: "/#merkblatt" },
];

const linkStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
  textDecoration: "none",
  padding: "3px 0",
  transition: "color 0.15s",
};

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = ORANGE)}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
    >
      {label}
    </a>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        color: WHITE,
        fontWeight: 700,
        fontSize: "13px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "14px",
      }}
    >
      {children}
    </h4>
  );
}

export default function SharedFooter() {
  return (
    <footer style={{ backgroundColor: NAVY, padding: "56px 24px 28px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Top grid */}
        <div
          className="grid-footer"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "14px" }}>
              <img
                src="/__manus__/logo_clean_f9c5298d_633ac44d.png"
                alt="Lügendetektor Test München"
                style={{ width: "36px", height: "36px", objectFit: "contain" }}
              />
              <span style={{ color: WHITE, fontWeight: 700, fontSize: "14px", lineHeight: 1.3 }}>
                luegendetektor-<br />test-muenchen.de
              </span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", lineHeight: 1.75, marginBottom: "14px" }}>
              Professionelle Polygraphuntersuchungen in München und bundesweit. Diskret, zertifiziert, rechtssicher.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://wa.me/491756036003"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "34px", height: "34px", backgroundColor: GREEN_WA, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, textDecoration: "none", fontSize: "15px" }}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="mailto:info@luegendetektor-test-muenchen.de"
                style={{ width: "34px", height: "34px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, textDecoration: "none", fontSize: "13px" }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <ColTitle>Navigation</ColTitle>
            {NAV_LINKS.map((l) => <FooterLink key={l.href} href={l.href} label={l.label} />)}
          </div>

          {/* Leistungen */}
          <div>
            <ColTitle>Leistungen</ColTitle>
            {SERVICES.map((s) => <FooterLink key={s.href} href={s.href} label={s.label} />)}
          </div>

          {/* Ratgeber */}
          <div>
            <ColTitle>Ratgeber</ColTitle>
            {RATGEBER.map((r) => <FooterLink key={r.href} href={r.href} label={r.label} />)}
          </div>

          {/* Städte + Rechtliches */}
          <div>
            <ColTitle>Städte</ColTitle>
            {CITIES.map((c) => <FooterLink key={c.href} href={c.href} label={c.label} />)}
            <h4 style={{ color: WHITE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px", marginTop: "20px" }}>Rechtliches</h4>
            {LEGAL_LINKS.map((l) => <FooterLink key={l.href} href={l.href} label={l.label} />)}
          </div>
        </div>

        {/* Contact bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "16px 0",
            marginBottom: "18px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <a href="tel:+4917560360003" style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px" }}>
            <i className="fas fa-phone-alt" style={{ color: ORANGE, fontSize: "12px" }} />
            +49 175 6036003
          </a>
          <a href="https://wa.me/491756036003" style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px" }}>
            <i className="fab fa-whatsapp" style={{ color: GREEN_WA, fontSize: "13px" }} />
            WhatsApp
          </a>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", display: "flex", alignItems: "center", gap: "7px" }}>
            <i className="fas fa-map-marker-alt" style={{ color: ORANGE, fontSize: "12px" }} />
            Marienstr. 4, 80331 München
          </span>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", display: "flex", alignItems: "center", gap: "7px" }}>
            <i className="fas fa-clock" style={{ color: ORANGE, fontSize: "12px" }} />
            Täglich 10:00 – 22:00 Uhr
          </span>
        </div>

        {/* Copyright */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", margin: 0 }}>
            © 2014 – 2026 POLYGRAPH München. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: "flex", gap: "18px" }}>
            {[
              { label: "Datenschutz", href: "/#datenschutz" },
              { label: "Impressum",   href: "/#impressum" },
              { label: "AGB",         href: "/#agb" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = ORANGE)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .grid-footer { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .grid-footer { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .grid-footer { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
