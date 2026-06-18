import { useEffect } from "react";
import SharedNavbar from "../components/SharedNavbar";
import SharedFooter from "../components/SharedFooter";
import FloatingButtons from "../components/FloatingButtons";
import Breadcrumb from "../components/Breadcrumb";

const DARK_NAVY = "#0f1932";
const ORANGE = "#e67e00";
const WHITE = "#ffffff";

const DIANA_FULL = "/__manus__/diana7_full.png";
const DIANA_COMPACT = "/__manus__/diana7_compact.png";

export default function ModerneAusruestung() {
  useEffect(() => {
    const BASE = "https://luegendetektor-test-muenchen.de";
    document.title = "Moderne Ausrüstung Diana 7 | Polygraph München – Professionelle Polygraphietechnik";
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
    setMeta("description", "Wir arbeiten mit dem Diana 7 – einem der präzisesten Polygraphsysteme weltweit. Erfahren Sie mehr über unsere professionelle Ausrüstung und warum sie den Unterschied macht.");
    setMeta("og:title", "Moderne Ausrüstung Diana 7 | Polygraph München", true);
    setMeta("og:description", "Das Diana 7 Polygraphsystem – 7+ physiologische Kanäle, Echtzeit-Auswertung, portabel. Professionelle Ausstättung für maximale Genauigkeit.", true);
    setMeta("og:url", `${BASE}/moderne-ausruestung`, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("twitter:card", "summary_large_image");
    setLink("canonical", `${BASE}/moderne-ausruestung`);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: "#f8f9fb", minHeight: "100vh" }}>
      <SharedNavbar />
      <FloatingButtons />

      {/* Hero */}
      <section style={{ background: DARK_NAVY, padding: "100px 24px 60px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Moderne Ausrüstung" }]} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", marginTop: "16px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className="fas fa-desktop" style={{ color: WHITE, fontSize: "24px" }}></i>
            </div>
            <div>
              <h1 style={{ color: WHITE, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, margin: 0 }}>
                Moderne Ausrüstung
              </h1>
              <p style={{ color: ORANGE, fontSize: "1rem", fontWeight: 600, margin: "4px 0 0" }}>Diana 7 – Polygraphsystem der neuesten Generation</p>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7, maxWidth: "720px" }}>
            Präzision beginnt mit der richtigen Technologie. Wir setzen das Diana 7 ein – eines der fortschrittlichsten Polygraphsysteme, das heute in der professionellen Praxis verfügbar ist.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 24px" }}>

        {/* Full kit image */}
        <div style={{ background: WHITE, borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", marginBottom: "40px" }}>
          <img
            src={DIANA_FULL}
            alt="Diana 7 Polygraph-System – vollständiges Ausrüstungsset mit Laptop, Sensoren, Manschetten und Transportkoffer"
            style={{ width: "100%", maxHeight: "520px", objectFit: "contain", background: "#fff", padding: "24px" }}
            loading="eager"
          />
          <div style={{ padding: "24px 32px", borderTop: "1px solid #eee" }}>
            <p style={{ color: "#666", fontSize: "14px", margin: 0, textAlign: "center", fontStyle: "italic" }}>
              Diana 7 – vollständiges Polygraphsystem mit allen Sensoren, Transportkoffern und Zubehör
            </p>
          </div>
        </div>

        {/* Two-column: compact image + description */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginBottom: "40px", alignItems: "start" }}>
          <div style={{ background: WHITE, borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <img
              src={DIANA_COMPACT}
              alt="Diana 7 Polygraph – Kompaktansicht mit Laptop, Steuereinheit und Sensoren"
              style={{ width: "100%", objectFit: "contain", background: "#f5f5f5", padding: "20px" }}
              loading="lazy"
            />
          </div>
          <div style={{ background: WHITE, borderRadius: "8px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
              Das Diana 7 System
            </h2>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
              Das Diana 7 ist ein computergestütztes Polygraphsystem, das simultane Messungen mehrerer physiologischer Parameter ermöglicht. Es wurde speziell für den Einsatz in professionellen Untersuchungsumgebungen entwickelt.
            </p>
            <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px" }}>
              Die Kombination aus hochpräzisen Sensoren, leistungsfähiger Auswertungssoftware und portablem Design macht es zum bevorzugten System erfahrener Polygraphexperten weltweit.
            </p>
            {[
              "Simultane Messung von 7+ physiologischen Kanälen",
              "Digitale Signalverarbeitung in Echtzeit",
              "Portable Ausführung für Vor-Ort-Einsätze",
              "Zertifiziert für professionellen Einsatz",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: ORANGE, fontSize: "14px", marginTop: "3px", flexShrink: 0 }}></i>
                <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>



        {/* Sensor cards with images */}
        <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px" }}>
          Sensoren und physiologische Parameter
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px", marginBottom: "40px" }}>
          {[
            { image: "/combined-breathing.webp", title: "Thorakale und abdominale Atmung", text: "Erfasst die Atembewegungen von Brustkorb und Bauchdecke und ermöglicht die Analyse von Atemfrequenz, Atemtiefe und Atemrhythmus." },
            { image: "/hlr-sensor.webp", title: "Hautleitwertreaktion – HLR", text: "Misst Veränderungen der elektrischen Hautleitfähigkeit, die durch die Aktivität der ekkrinen Schweißdrüsen infolge autonomer nervöser Erregung hervorgerufen werden." },
            { image: "/Bildschirmfoto2026-06-18um18.52.00.webp", title: "Blutdruck und Puls", text: "Erfasst kontinuierliche Veränderungen des arteriellen Druckverlaufs, der Pulsfrequenz und der Pulsamplitude als Parameter der kardiovaskulären Reaktion." },
            { image: "/ppg-sensor.webp", title: "Photoplethysmographie – PPG", text: "Misst optisch bedingte Veränderungen des peripheren Blutvolumens und bildet die Pulswelle sowie vasomotorische Reaktionen der Blutgefäße ab." },
            { image: "/tremor-sensor.webp", title: "Motorische Aktivität – Tremor", text: "Registriert mechanische Körperbewegungen, Muskelanspannungen und mikromotorische Aktivitäten, die während der Untersuchung auftreten können." },
            { image: "/control-unit.webp", title: "Hauptgerät", text: "Zentrale Steuereinheit des Polygraphensystems; verbindet die Sensoren, verarbeitet deren Signale und leitet die Messdaten zur Aufzeichnung und Auswertung an den Computer weiter." },
          ].map(item => (
            <div key={item.title} style={{ background: WHITE, borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
              <div style={{ height: "220px", background: "#f0f0f0", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ color: DARK_NAVY, fontSize: "0.95rem", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div style={{ background: DARK_NAVY, borderRadius: "8px", padding: "40px", marginBottom: "32px" }}>
          <h2 style={{ color: WHITE, fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px" }}>
            Warum die Ausrüstung den Unterschied macht
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
            Die Genauigkeit eines Polygraphtests hängt nicht nur von der Erfahrung des Examinators ab – sie beginnt mit der Qualität der eingesetzten Technologie. Veraltete oder ungenaue Geräte können selbst bei erfahrenen Experten zu fehlerhaften Ergebnissen führen.
          </p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.8 }}>
            Das Diana 7 wurde entwickelt, um diese Fehlerquellen zu minimieren. Seine hochauflösenden Sensoren, die stabile Signalverarbeitung und die präzise Auswertungssoftware bilden die technische Grundlage für unsere Genauigkeitsrate von 98–99%.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>
            Untersuchung mit professioneller Ausrüstung anfragen
          </h2>
          <p style={{ color: "#555", fontSize: "15px", marginBottom: "28px" }}>
            Wir beraten Sie gerne über den Ablauf und die eingesetzte Technologie.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a href="tel:+4917560360030" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: ORANGE, color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              <i className="fas fa-phone"></i> +49 175 6036003
            </a>
            <a href="https://wa.me/4917560360030" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25d366", color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          <p style={{ color: "#888", fontSize: "13px", marginTop: "16px" }}>Mo–So 9:00–22:00 Uhr · Kostenlose Erstberatung</p>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
