import { useEffect } from "react";
import SharedNavbar from "../components/SharedNavbar";
import SharedFooter from "../components/SharedFooter";
import FloatingButtons from "../components/FloatingButtons";
import Breadcrumb from "../components/Breadcrumb";

const DARK_NAVY = "#0f1932";
const ORANGE = "#e67e00";
const WHITE = "#ffffff";

const SPECIALISTS = [
  {
    name: "Dimitri Razarenov",
    role: "Leitender Polygraphologe · Berater für Risikomanagement & Verhaltensanalyse",
    exp: "12 Jahre Erfahrung",
    edu: "Höhere Bildung, Praktische Psychologie",
    photo: "/manus-storage/dimitri_large_65e18c5f.jpg",
    bio: "Dimitri Razarenov ist einer der erfahrensten Polygraphexaminatoren in Deutschland. Er spezialisiert sich auf komplexe Unternehmensermittlungen, Sicherheitsüberprüfungen und Treuetest-Untersuchungen. Seine Ausbildung in praktischer Psychologie ermöglicht ihm eine präzise Einschätzung physiologischer Reaktionsmuster.",
  },
  {
    name: "Tatjana Neubauer",
    role: "Psychologin",
    exp: "",
    edu: "Höhere Bildung, Diplompsychologin",
    photo: "/manus-storage/tatjana_cropped_8715085d.jpg",
    bio: "Tatjana Neubauer ist Diplompsychologin und versteht die emotionalen Hintergründe jeder Untersuchungssituation. Sie sorgt für eine professionelle, einfühlsame Gesprächsführung.",
  },
];

export default function ErfahreneExperten() {
  useEffect(() => {
    const BASE = "https://luegendetektor-test-muenchen.de";
    document.title = "Erfahrene Experten | Polygraph München – Zertifizierte Polygraphexaminatoren";
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
    setMeta("description", "Unsere zertifizierten Polygraphexaminatoren Dimitri Razarenov und Tatjana Neubauer verfügen über jahrelange Erfahrung in der professionellen Lügendetektion.");
    setMeta("og:title", "Erfahrene Experten | Polygraph München", true);
    setMeta("og:description", "Zertifizierte Polygraphexaminatoren mit jahrzehntelanger Erfahrung – Dimitri Razarenov & Tatjana Neubauer.", true);
    setMeta("og:url", `${BASE}/erfahrene-experten`, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("twitter:card", "summary_large_image");
    setLink("canonical", `${BASE}/erfahrene-experten`);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: "#f8f9fb", minHeight: "100vh" }}>
      <SharedNavbar />
      <FloatingButtons />

      {/* Hero */}
      <section style={{ background: DARK_NAVY, padding: "100px 24px 60px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Erfahrene Experten" }]} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", marginTop: "16px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className="fas fa-user-tie" style={{ color: WHITE, fontSize: "24px" }}></i>
            </div>
            <div>
              <h1 style={{ color: WHITE, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, margin: 0 }}>
                Unsere Experten
              </h1>
              <p style={{ color: ORANGE, fontSize: "1rem", fontWeight: 600, margin: "4px 0 0" }}>Zertifizierte Polygraphexaminatoren mit jahrzehntelanger Erfahrung</p>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7, maxWidth: "720px" }}>
            Ein Polygraphtest ist nur so gut wie der Examinator, der ihn durchführt. Unsere Spezialisten vereinen technisches Wissen, psychologisches Verständnis und jahrelange Praxiserfahrung.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 24px" }}>

        {/* Specialist cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginBottom: "48px" }}>
          {SPECIALISTS.map(s => (
            <div key={s.name} style={{ background: WHITE, borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderTop: `4px solid ${ORANGE}` }}>
              <img
                src={s.photo}
                alt={s.name}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
              />
              <div style={{ padding: "28px 32px" }}>
                <h2 style={{ color: DARK_NAVY, fontWeight: 700, fontSize: "22px", marginBottom: "4px" }}>{s.name}</h2>
                <p style={{ color: ORANGE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{s.role}</p>
                {s.exp && (
                  <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "14px", marginBottom: "12px" }}>
                    <i className="fas fa-award" style={{ marginRight: "6px" }}></i>{s.exp}
                  </p>
                )}
                <p style={{ color: "#555", fontSize: "13px", marginBottom: "14px" }}>
                  <i className="fas fa-graduation-cap" style={{ color: ORANGE, marginRight: "6px" }}></i>{s.edu}
                </p>
                <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>{s.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", marginBottom: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px" }}>
            Was einen guten Polygraphexaminator ausmacht
          </h2>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
            Die Durchführung eines Polygraphtests erfordert weit mehr als technisches Bedienen eines Geräts. Ein erfahrener Examinator versteht die physiologischen Grundlagen der Stressreaktion, beherrscht verschiedene Befragungstechniken und ist in der Lage, Messdaten korrekt zu interpretieren.
          </p>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8 }}>
            Unsere Examinatoren wurden nach internationalen Standards ausgebildet und verfügen über umfangreiche Erfahrung in unterschiedlichsten Untersuchungssituationen – von privaten Treuetest-Anfragen bis hin zu komplexen Unternehmensermittlungen.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "32px" }}>
          {[
            { icon: "fas fa-certificate", title: "Internationale Zertifizierung", text: "Ausbildung und Zertifizierung nach den Standards führender internationaler Polygraphverbände." },
            { icon: "fas fa-brain", title: "Psychologisches Fachwissen", text: "Fundiertes Verständnis der psychophysiologischen Grundlagen von Stressreaktionen und Täuschungsverhalten." },
            { icon: "fas fa-comments", title: "Befragungskompetenz", text: "Beherrschung mehrerer wissenschaftlich anerkannter Befragungstechniken (CQT, GKT, MGQT)." },
            { icon: "fas fa-chart-line", title: "Datenanalyse", text: "Präzise Auswertung der Messdaten nach standardisierten numerischen Bewertungsverfahren." },
            { icon: "fas fa-globe", title: "Mehrsprachige Kompetenz", text: "Untersuchungen in Deutsch, Russisch, Englisch und weiteren Sprachen möglich." },
            { icon: "fas fa-shield-alt", title: "Diskrete Professionalität", text: "Jeder Examinator ist auf den sensiblen Umgang mit vertraulichen Informationen spezialisiert." },
          ].map(item => (
            <div key={item.title} style={{ background: WHITE, borderRadius: "8px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: `3px solid ${ORANGE}` }}>
              <i className={item.icon} style={{ color: ORANGE, fontSize: "28px", marginBottom: "14px", display: "block" }}></i>
              <h3 style={{ color: DARK_NAVY, fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: DARK_NAVY, borderRadius: "8px", padding: "40px", marginBottom: "32px" }}>
          <h2 style={{ color: WHITE, fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px" }}>
            Doppelte Prüfung – unser Qualitätsstandard
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
            Jedes Untersuchungsergebnis wird von zwei unabhängigen Examinatoren ausgewertet. Dieses Vier-Augen-Prinzip minimiert subjektive Interpretationsfehler und erhöht die Zuverlässigkeit des Ergebnisses erheblich.
          </p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.8 }}>
            Nur wenn beide Examinatoren zu einem übereinstimmenden Ergebnis gelangen, wird dieses in den Abschlussbericht aufgenommen. Bei abweichenden Einschätzungen wird die Untersuchung wiederholt.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>
            Beratungsgespräch mit einem Experten
          </h2>
          <p style={{ color: "#555", fontSize: "15px", marginBottom: "28px" }}>
            Sprechen Sie direkt mit einem unserer Examinatoren über Ihr Anliegen.
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
