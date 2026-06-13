import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import SharedFooter from "../components/SharedFooter";
import RelatedContent from "../components/RelatedContent";
import Breadcrumb from "../components/Breadcrumb";
import { InlineCTA, BottomCTA } from "../components/ArticleCTA";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberLegal() {
  useEffect(() => {

    // Meta tags
    document.title = "Ist ein Lügendetektor legal? – Recht in Deutschland | luegendetektor-test-muenchen.de";
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
    setMeta("description", "Rechtliche Einordnung des Polygraphen in Deutschland, Österreich und der Schweiz. Was ist erlaubt, was nicht – und wie wird das Gutachten verwendet?");
    setMeta("og:title", "Ist ein Lügendetektor legal? – Recht in Deutschland | luegendetektor-test-muenchen.de", true);
    setMeta("og:description", "Rechtliche Einordnung des Polygraphen in Deutschland, Österreich und der Schweiz. Was ist erlaubt, was nicht – und wie wird das Gutachten verwendet?", true);
    setMeta("og:url", "https://luegendetektor-test-muenchen.de/ratgeber/polygraph-legal-deutschland", true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("og:image", "https://luegendetektor-test-muenchen.de/og-image.jpg", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Ist ein Lügendetektor legal? – Recht in Deutschland | luegendetektor-test-muenchen.de");
    setMeta("twitter:description", "Rechtliche Einordnung des Polygraphen in Deutschland, Österreich und der Schweiz. Was ist erlaubt, was nicht – und wie wird das Gutachten verwendet?");
    setLink("canonical", "https://luegendetektor-test-muenchen.de/ratgeber/polygraph-legal-deutschland");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Private Polygraphuntersuchungen sind in Deutschland, Österreich und der Schweiz legal. Eine sachliche Darstellung der rechtlichen Rahmenbedingungen.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Legalität in Deutschland" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Recht & Rahmenbedingungen &nbsp;·&nbsp; 6 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Rechtliche Grundlagen der Polygraphie in Deutschland
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Private Polygraphuntersuchungen sind in Deutschland zulässig. Eine sachliche Darstellung der Rechtslage – ohne Vereinfachungen.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <div style={{ backgroundColor: "#f0faf4", border: "1px solid #b7e4c7", borderRadius: "8px", padding: "20px 24px", marginBottom: "36px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <i className="fas fa-check-circle" style={{ color: "#2d6a4f", fontSize: "20px", flexShrink: 0, marginTop: "2px" }} />
            <p style={{ color: "#1b4332", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
              <strong>Zusammenfassung:</strong> Private Polygraphuntersuchungen sind in Deutschland, Österreich und der Schweiz rechtlich zulässig, sofern die zu testende Person freiwillig und informiert zustimmt.
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Die Entscheidung des Bundesverfassungsgerichts – richtig eingeordnet</h2>

          <InlineCTA
            headline="Rechtssichere Untersuchung beauftragen"
            body="Wir erstellen ein offizielles Gutachten mit wissenschaftlich dokumentierten Ergebnissen zur persönlichen und außergerichtlichen Klärung. Wir sichern keine gerichtliche Verwertbarkeit zu."
          />

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Die Entscheidung betrifft ausschließlich den Einsatz durch staatliche Strafverfolgungsbehörden im Rahmen eines Strafverfahrens. Sie trifft keine Aussage über die Zulässigkeit privater Polygraphuntersuchungen, die von Privatpersonen oder Unternehmen in Auftrag gegeben werden.
          </p>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Was im staatlichen Strafprozess nicht zulässig ist, ist im privaten Bereich nicht automatisch verboten. Die Rechtslage für private Polygraphuntersuchungen ist klar: Sie sind legal."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Die drei rechtlichen Grundvoraussetzungen</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              {
                num: "01",
                title: "Freiwillige Teilnahme",
                text: "Die zu testende Person muss ohne Zwang, Druck oder Täuschung an der Untersuchung teilnehmen. Eine erzwungene Teilnahme ist nicht nur rechtlich problematisch, sondern verfälscht auch die physiologischen Messwerte und macht das Ergebnis unverwertbar.",
              },
              {
                num: "02",
                title: "Informierte Einwilligung",
                text: "Die Person muss vorab vollständig über Ablauf, Methodik, die konkreten Fragen und die geplante Verwendung der Ergebnisse informiert werden. Wir holen in jedem Fall eine schriftliche Einwilligungserklärung ein, bevor die Untersuchung beginnt.",
              },
              {
                num: "03",
                title: "Datenschutz und Vertraulichkeit",
                text: "Die Ergebnisse unterliegen strengen Datenschutzbestimmungen. Sie dürfen nur an den Auftraggeber weitergegeben werden und sind vertraulich zu behandeln. Wir schließen mit jedem Mandanten eine Vertraulichkeitsvereinbarung ab.",
              },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "22px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0 }}>
                  <span style={{ color: ORANGE, fontWeight: 800, fontSize: "22px", fontFamily: "monospace" }}>{item.num}</span>
                </div>
                <div>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Rechtslage in Österreich und der Schweiz</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            In Österreich und der Schweiz gilt eine vergleichbare Rechtslage: Private Polygraphuntersuchungen sind zulässig, sofern Freiwilligkeit und informierte Einwilligung gewährleistet sind. Auch hier gilt, dass die Entscheidungen der jeweiligen Höchstgerichte zur Unzulässigkeit im Strafprozess nicht auf den privaten Bereich übertragen werden können.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Hinweis zu arbeitsrechtlichen Fragen</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Im Unternehmenskontext – insbesondere bei Mitarbeiterüberprüfungen – empfehlen wir, vorab rechtlichen Rat einzuholen. Das Arbeitsrecht setzt der Verwendung von Polygraphergebnissen im Arbeitsverhältnis bestimmte Grenzen, die von Fall zu Fall unterschiedlich sind. Unsere Spezialisten beraten Sie zu den Rahmenbedingungen in Ihrem konkreten Fall.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Rechtliche Fragen besprechen</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir erläutern Ihnen die Rahmenbedingungen für Ihren spezifischen Fall – vertraulich und ohne Verpflichtung.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/treuetest-vorbereitung" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Treuetest: Vorbereitung →</Link>
          </div>
        
          <BottomCTA
            headline="Rechtssichere Polygraphuntersuchung"
            body="Unser Gutachten entspricht den Anforderungen der deutschen Rechtsprechung. Wir beraten Sie zu den rechtlichen Rahmenbedingungen Ihres konkreten Falls."
            prevLabel="← Kosten & Preise"
            prevHref="/ratgeber/kosten-polygraph"
            nextLabel="Treuetest Vorbereitung"
            nextHref="/ratgeber/treuetest-vorbereitung"
          />

        </div>
      </section>
            <RelatedContent
        heading="Weitere Ratgeber-Artikel"
        items={[
        { title: "Wie genau ist ein Lügendetektor?", excerpt: "Wissenschaftliche Grundlagen und Aussagekraft moderner Polygraphsysteme.", href: "/ratgeber/luegendetektor-genauigkeit", type: "ratgeber" as const },
        { title: "Kosten & Preise", excerpt: "Transparente Übersicht der Kosten für Polygraphuntersuchungen.", href: "/ratgeber/kosten-polygraph", type: "ratgeber" as const },
        { title: "Polygraph für Unternehmen", excerpt: "Einsatzmöglichkeiten, Rechtslage und Ablauf im Unternehmenskontext.", href: "/ratgeber/polygraph-fuer-unternehmen", type: "ratgeber" as const }
        ]}
      />
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
