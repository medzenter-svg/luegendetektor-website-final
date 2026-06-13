// Seite: Fremdgehen beweisen – legale Möglichkeiten in Deutschland
import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import SharedFooter from "../components/SharedFooter";
import ContactFormCompact from "../components/ContactFormCompact";
import RelatedContent from "../components/RelatedContent";
import ServiceSchema from "../components/ServiceSchema";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

const methods = [
  {
    num: "1",
    icon: "fas fa-comments",
    title: "Offenes Gespräch",
    subtitle: "Erste Möglichkeit",
    text: "Der direkteste Weg ist das Gespräch mit dem Partner.",
    cons: ["Untreue wird häufig bestritten", "Antworten bleiben unklar oder ausweichend"],
    verdict: "Daher führt dieser Weg selten zu eindeutigen Ergebnissen.",
    verdictType: "warning" as const,
  },
  {
    num: "2",
    icon: "fas fa-eye",
    title: "Veränderungen im Verhalten analysieren",
    subtitle: "Indizien sammeln",
    text: "Mehrere Anzeichen zusammen können ein starkes Indiz sein: Geheimhaltung, emotionale Distanz, ungewöhnliche Aktivitäten.",
    cons: ["Das sind keine rechtssicheren Beweise"],
    verdict: "Indizien allein reichen für rechtliche Schritte nicht aus.",
    verdictType: "warning" as const,
  },
  {
    num: "3",
    icon: "fas fa-mobile-alt",
    title: "Digitale Spuren",
    subtitle: "Mit Vorsicht",
    text: "Viele versuchen über Handy, Nachrichten oder Social Media Informationen zu finden.",
    cons: ["In Deutschland ist das heimliche Überwachen oft illegal", "Kann rechtliche Konsequenzen haben"],
    verdict: "Achtung: Heimliches Überwachen kann strafbar sein.",
    verdictType: "danger" as const,
  },
  {
    num: "4",
    icon: "fas fa-user-secret",
    title: "Privatdetektiv beauftragen",
    subtitle: "Professionelle Observation",
    text: "Ein Detektiv kann Beobachtungen durchführen und Treffen dokumentieren.",
    cons: ["Hohe Kosten", "Zeitaufwendig", "Nicht immer eindeutig"],
    verdict: "Teuer und zeitintensiv – Ergebnisse nicht garantiert.",
    verdictType: "warning" as const,
  },
  {
    num: "5",
    icon: "fas fa-chart-line",
    title: "Lügendetektortest als objektive Lösung",
    subtitle: "Empfohlene Methode",
    text: "Ein professioneller Lügendetektortest (Polygraphentest) bietet strukturierte Befragung, wissenschaftlich basierte Messmethoden und klare Auswertung.",
    pros: ["Direkte Klärung", "Schnelle Ergebnisse", "Weniger Spekulation"],
    verdict: "Die schnellste und direkteste Methode zur Klärung.",
    verdictType: "success" as const,
  },
];

export default function FremdgehenBeweisen() {
  useEffect(() => {

    // Meta tags
    document.title = "Fremdgehen beweisen – Polygraphtest | luegendetektor-test-muenchen.de";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };
    setMeta("description", "Polygraphuntersuchung zum Nachweis oder Ausschluss von Untreue. Offizielles Gutachten mit wissenschaftlich fundierten Ergebnissen. Verwertbarkeit wird von Gerichten im Einzelfall entschieden.");
    setMeta("og:title", "Fremdgehen beweisen – Polygraphtest | luegendetektor-test-muenchen.de", true);
    setMeta("og:description", "Polygraphuntersuchung zum Nachweis oder Ausschluss von Untreue. Offizielles Gutachten mit wissenschaftlich fundierten Ergebnissen. Verwertbarkeit wird von Gerichten im Einzelfall entschieden.", true);
    setMeta("og:url", "https://luegendetektor-test-muenchen.de/fremdgehen-beweisen", true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("og:image", "https://luegendetektor-test-muenchen.de/og-image.jpg", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Fremdgehen beweisen – Polygraphtest | luegendetektor-test-muenchen.de");
    setMeta("twitter:description", "Polygraphuntersuchung zum Nachweis oder Ausschluss von Untreue. Offizielles Gutachten mit wissenschaftlich fundierten Ergebnissen. Verwertbarkeit wird von Gerichten im Einzelfall entschieden.");
    setLink("canonical", "https://luegendetektor-test-muenchen.de/fremdgehen-beweisen");
    window.scrollTo(0, 0);
  }, []);

  const verdictColors = {
    warning: { bg: "rgba(255,140,0,0.08)", border: "rgba(255,140,0,0.3)", icon: "fas fa-exclamation-triangle", color: "#b45309" },
    danger: { bg: "rgba(220,38,38,0.07)", border: "rgba(220,38,38,0.25)", icon: "fas fa-exclamation-circle", color: "#dc2626" },
    success: { bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.3)", icon: "fas fa-check-circle", color: "#16a34a" },
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: WHITE, minHeight: "100vh" }}>
      <SharedNavbar />
      <ServiceSchema
        name="Fremdgehen beweisen – Polygraphuntersuchung"
        description="Polygraphuntersuchung zum Nachweis oder Ausschluss von Untreue. Offizielles Gutachten mit wissenschaftlich fundierten Ergebnissen. Verwertbarkeit in Gerichtsverfahren wird von Gerichten im Einzelfall entschieden."
        url="/fremdgehen-beweisen"
        serviceType="Treuetest"
        areaServed={["München", "Deutschland", "Österreich", "Schweiz"]}
        offers={{ priceRange: "ab 490 €", description: "Treuetest inkl. rechtssicherem Gutachten" }}
      />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Fremdgehen beweisen" }
  ]
} />
      {/* Navbar */}
      

      {/* Hero */}
      <section style={{ backgroundColor: NAVY, paddingTop: "100px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-block", backgroundColor: ORANGE, color: WHITE, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 16px", borderRadius: "4px", marginBottom: "20px" }}>
            RATGEBER
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Fremdgehen beweisen –<br />legale Möglichkeiten in Deutschland
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7, marginBottom: "32px" }}>
            Viele Betroffene stellen sich dieselbe Frage: <strong style={{ color: WHITE }}>Wie kann man Fremdgehen beweisen?</strong> Der Verdacht allein reicht oft nicht aus. Für Klarheit braucht es nachvollziehbare und im Idealfall objektive Hinweise.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "10px 18px", color: WHITE, fontSize: "14px" }}>
              <i className="fas fa-list-ol" style={{ marginRight: "8px", color: ORANGE }} />
              5 Methoden im Vergleich
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "10px 18px", color: WHITE, fontSize: "14px" }}>
              <i className="fas fa-clock" style={{ marginRight: "8px", color: ORANGE }} />
              4 Min. Lesezeit
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "10px 18px", color: WHITE, fontSize: "14px" }}>
              <i className="fas fa-balance-scale" style={{ marginRight: "8px", color: ORANGE }} />
              Rechtlich geprüft
            </div>
          </div>
        </div>
      </section>

      {/* Methoden */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          {methods.map((m) => {
            const vc = verdictColors[m.verdictType];
            return (
              <div key={m.num} style={{ backgroundColor: WHITE, borderRadius: "12px", border: `1px solid ${BORDER}`, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "22px 28px", borderBottom: `1px solid ${BORDER}` }}>
                  <div style={{ flexShrink: 0, width: "48px", height: "48px", backgroundColor: m.verdictType === "success" ? ORANGE : NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={m.icon} style={{ color: WHITE, fontSize: "18px" }} />
                  </div>
                  <div>
                    <div style={{ color: ORANGE, fontWeight: 700, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                      {m.num}. {m.subtitle}
                    </div>
                    <h2 style={{ color: TEXT_DARK, fontSize: "19px", fontWeight: 700, margin: 0 }}>{m.title}</h2>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "20px 28px" }}>
                  <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>{m.text}</p>

                  {m.cons && (
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                      {m.cons.map((c, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px", color: TEXT_DARK, fontSize: "15px" }}>
                          <i className="fas fa-times-circle" style={{ color: "#dc2626", fontSize: "14px", marginTop: "2px", flexShrink: 0 }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}

                  {m.pros && (
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                      {m.pros.map((p, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px", color: TEXT_DARK, fontSize: "15px" }}>
                          <i className="fas fa-check-circle" style={{ color: "#16a34a", fontSize: "14px", marginTop: "2px", flexShrink: 0 }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Verdict */}
                  <div style={{ backgroundColor: vc.bg, border: `1px solid ${vc.border}`, borderRadius: "8px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className={vc.icon} style={{ color: vc.color, fontSize: "16px", flexShrink: 0 }} />
                    <span style={{ color: vc.color, fontWeight: 700, fontSize: "14px" }}>{m.verdict}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section style={{ backgroundColor: WHITE, padding: "60px 24px", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: TEXT_DARK, fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 800, marginBottom: "32px", textAlign: "center" }}>
            Methoden im Überblick
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  <th style={{ padding: "14px 18px", color: WHITE, textAlign: "left", fontWeight: 700 }}>Methode</th>
                  <th style={{ padding: "14px 18px", color: WHITE, textAlign: "center", fontWeight: 700 }}>Kosten</th>
                  <th style={{ padding: "14px 18px", color: WHITE, textAlign: "center", fontWeight: 700 }}>Rechtssicher</th>
                  <th style={{ padding: "14px 18px", color: WHITE, textAlign: "center", fontWeight: 700 }}>Eindeutigkeit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Offenes Gespräch", cost: "Kostenlos", legal: "✓", clarity: "Gering" },
                  { name: "Verhaltensanalyse", cost: "Kostenlos", legal: "✓", clarity: "Mittel" },
                  { name: "Digitale Spuren", cost: "Kostenlos", legal: "⚠️ Risiko", clarity: "Mittel" },
                  { name: "Privatdetektiv", cost: "Hoch", legal: "✓", clarity: "Mittel" },
                  { name: "Polygraphentest", cost: "550 €", legal: "✓", clarity: "Hoch" },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? LIGHT_BG : WHITE, borderBottom: `1px solid ${BORDER}` }}>
                    <td style={{ padding: "13px 18px", color: TEXT_DARK, fontWeight: i === 4 ? 700 : 400 }}>{row.name}</td>
                    <td style={{ padding: "13px 18px", color: TEXT_MID, textAlign: "center" }}>{row.cost}</td>
                    <td style={{ padding: "13px 18px", textAlign: "center", color: row.legal.includes("⚠️") ? "#b45309" : "#16a34a", fontWeight: 600 }}>{row.legal}</td>
                    <td style={{ padding: "13px 18px", textAlign: "center", color: row.clarity === "Hoch" ? "#16a34a" : row.clarity === "Mittel" ? "#b45309" : TEXT_MID, fontWeight: row.clarity === "Hoch" ? 700 : 400 }}>{row.clarity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "60px", height: "60px", backgroundColor: "rgba(255,140,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <img src="/__manus__/logo_clean_f9c5298d_633ac44d.png" alt="Lügendetektor Test München – Logo" loading="eager" fetchPriority="high" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
          </div>
          <h2 style={{ color: TEXT_DARK, fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, marginBottom: "16px" }}>
            Jetzt Klarheit schaffen
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.7, marginBottom: "32px" }}>
            Ein professioneller Polygraphentest liefert in kürzester Zeit objektive Ergebnisse – diskret, vertraulich und ohne Weitergabe Ihrer Daten.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "24px" }}>
            <Link href="/#contact">
              <button style={{ backgroundColor: ORANGE, color: WHITE, border: "none", borderRadius: "8px", padding: "16px 32px", fontWeight: 800, fontSize: "16px", cursor: "pointer", fontFamily: "'Lato', sans-serif", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-paper-plane" />
                JETZT ANFRAGEN
              </button>
            </Link>
            <a href="tel:+4917560360003" style={{ textDecoration: "none" }}>
              <button style={{ backgroundColor: "transparent", color: NAVY, border: `2px solid ${NAVY}`, borderRadius: "8px", padding: "16px 32px", fontWeight: 700, fontSize: "16px", cursor: "pointer", fontFamily: "'Lato', sans-serif", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-phone" />
                +49 175 6036003
              </button>
            </a>
          </div>
          <Link href="/anzeichen-fremdgehen" style={{ color: ORANGE, textDecoration: "none", fontSize: "15px", fontWeight: 600 }}>
            <i className="fas fa-search" style={{ marginRight: "6px" }} />
            Anzeichen für Fremdgehen erkennen →
          </Link>
        </div>
      </section>

      {/* Footer */}
            <RelatedContent
        heading="Weiterführende Informationen"
        items={[
        { title: "Treuetest – Polygraphuntersuchung", excerpt: "Professioneller Treuetest mit dem Polygraphen – diskret, zertifiziert, mit offiziellem Gutachten.", href: "/treuetest", type: "leistung" as const },
        { title: "Anzeichen Fremdgehen – Ratgeber", excerpt: "Sachliche Analyse typischer Anzeichen von Untreue.", href: "/ratgeber/anzeichen-fremdgehen", type: "ratgeber" as const },
        { title: "Ist ein Lügendetektor legal?", excerpt: "Rechtliche Einordnung des Polygraphen in Deutschland, Österreich und der Schweiz.", href: "/ratgeber/polygraph-legal-deutschland", type: "ratgeber" as const }
        ]}
      />
      <ContactFormCompact context="Treuetest / Fremdgehen beweisen" />
      <SharedFooter />

      {/* WhatsApp Float */}
      <a href="https://wa.me/4917560360003" target="_blank" rel="noopener noreferrer"
        style={{ position: "fixed", bottom: "80px", right: "20px", width: "52px", height: "52px", backgroundColor: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 999, textDecoration: "none" }}>
        <i className="fab fa-whatsapp" style={{ color: WHITE, fontSize: "24px" }} />
      </a>
      <FloatingButtons />
    </div>
  );
}
