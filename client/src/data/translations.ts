// ============================================================
// TRANSLATIONS – DE / EN
// ============================================================

export type Lang = "de" | "en";

export const t = {
  // ── NAVBAR ──
  nav: {
    services:   { de: "DIENSTLEISTUNGEN", en: "SERVICES" },
    prices:     { de: "PREISE",           en: "PRICES" },
    about:      { de: "ÜBER UNS",         en: "ABOUT US" },
    equipment:  { de: "AUSRÜSTUNG",       en: "EQUIPMENT" },
    contact:    { de: "KONTAKTE",         en: "CONTACTS" },
    cta:        { de: "KONTAKTIEREN SIE UNS", en: "CONTACT US" },
  },

  // ── HERO ──
  hero: {
    title1:     { de: "LÜGENDETEKTORTEST Untersuchungen", en: "LIE DETECTOR TEST for Private Clients & Companies" },
    title2:     { de: "in Deutschland, Österreich und der Schweiz", en: "in Germany, Austria & Switzerland" },
    subtitle:   { de: "Premium-Prüfung zum fairen Preis", en: "Premium examination at a fair price" },
    accuracy:   { de: "GENAUIGKEIT 98–99%", en: "ACCURACY 98–99%" },
    anon:       { de: "100% anonym, vertraulich und ohne Weitergabe von Anfragedetails", en: "100% anonymous, confidential and without disclosure of inquiry details" },
    badge1:     { de: "Absolute Vertraulichkeit", en: "Absolute Confidentiality" },
    badge2:     { de: "Erfahrene Experten",       en: "Experienced Experts" },
    badge3:     { de: "Moderne Ausrüstung",       en: "Modern Equipment" },
    btnRequest: { de: "JETZT ANFRAGEN",           en: "REQUEST NOW" },
    btnPhone:   { de: "+49 175 6036003",          en: "+49 175 6036003" },
  },

  // ── STATS ──
  stats: {
    s1v: { de: "98–99%", en: "98–99%" },
    s1l: { de: "Genauigkeit", en: "Accuracy" },
    s2v: { de: "12+",    en: "12+" },
    s2l: { de: "Jahre Erfahrung", en: "Years of Experience" },
    s3v: { de: "2.000+", en: "2,000+" },
    s3l: { de: "Abgeschlossene Tests", en: "Completed Tests" },
    s4v: { de: "100%",   en: "100%" },
    s4l: { de: "Vertraulichkeit", en: "Confidentiality" },
  },

  // ── SERVICES SECTION ──
  services: {
    heading:  { de: "UNSERE DIENSTLEISTUNGEN", en: "OUR SERVICES" },
    sub:      { de: "Professionelle Polygraphuntersuchungen für jeden Bedarf", en: "Professional polygraph examinations for every need" },
    tabPriv:  { de: "PRIVAT", en: "PRIVATE" },
    tabBiz:   { de: "GESCHÄFTLICH", en: "BUSINESS" },
    btnBook:  { de: "Termin buchen", en: "Book appointment" },
    btnMore:  { de: "Mehr erfahren", en: "Learn more" },
    from:     { de: "ab",           en: "from" },
  },

  // ── ABOUT ──
  about: {
    heading:  { de: "ÜBER UNS", en: "ABOUT US" },
    sub:      { de: "Ihr vertrauenswürdiger Partner für Polygraphuntersuchungen", en: "Your trusted partner for polygraph examinations" },
    p1:       { de: "luegendetektor-test-muenchen.de – Ihr Spezialist für professionelle Polygraphuntersuchungen und Lügendetektor-Tests in München und ganz Bayern.", en: "luegendetektor-test-muenchen.de – Your specialist for professional polygraph examinations and lie detector tests in Munich and throughout Bavaria." },
    p2:       { de: "Unser Team besteht aus zertifizierten Polygraphologen mit über 15 Jahren Erfahrung. Wir verwenden modernste Ausrüstung und wissenschaftlich anerkannte Methoden.", en: "Our team consists of certified polygraphers with over 15 years of experience. We use state-of-the-art equipment and scientifically recognized methods." },
    p3:       { de: "Jede Untersuchung wird streng vertraulich behandelt. Ihre Privatsphäre hat für uns höchste Priorität.", en: "Every examination is treated with strict confidentiality. Your privacy is our highest priority." },
    whyTitle: { de: "Warum POLYGRAPH München?", en: "Why POLYGRAPH Munich?" },
    r1:       { de: "Zertifizierte Experten mit internationaler Ausbildung", en: "Certified experts with international training" },
    r2:       { de: "Modernste Polygraph-Technologie (Lafayette LX6)", en: "State-of-the-art polygraph technology (Lafayette LX6)" },
    r3:       { de: "Streng vertraulich – keine Datenweitergabe", en: "Strictly confidential – no data sharing" },
    r4:       { de: "Flexible Termine, auch am Wochenende", en: "Flexible appointments, including weekends" },
    r5:       { de: "Schriftliches Gutachten mit Rechtsgültigkeit", en: "Written report with legal validity" },
    r6:       { de: "Hausbesuche und mobile Tests möglich", en: "Home visits and mobile tests available" },
  },

  // ── PROCESS ──
  process: {
    heading: { de: "WIE LÄUFT EIN TEST AB?", en: "HOW DOES A TEST WORK?" },
    sub:     { de: "Einfach, diskret und professionell", en: "Simple, discreet and professional" },
    steps: [
      { title: { de: "Erstberatung",       en: "Initial Consultation" }, desc: { de: "Kostenlose telefonische Beratung und Terminvereinbarung", en: "Free telephone consultation and appointment scheduling" } },
      { title: { de: "Vorgespräch",        en: "Pre-Interview" },        desc: { de: "Ausführliche Besprechung der Fragen und des Ablaufs", en: "Detailed discussion of questions and procedure" } },
      { title: { de: "Testdurchführung",   en: "Test Execution" },       desc: { de: "Professionelle Polygraphuntersuchung (60–90 Min.)", en: "Professional polygraph examination (60–90 min.)" } },
      { title: { de: "Auswertung",         en: "Evaluation" },           desc: { de: "Wissenschaftliche Analyse der Messdaten", en: "Scientific analysis of measurement data" } },
      { title: { de: "Ergebnisbericht",    en: "Results Report" },       desc: { de: "Schriftliches Gutachten mit detaillierten Ergebnissen", en: "Written report with detailed results" } },
    ],
  },

  // ── EQUIPMENT ──
  equipment: {
    heading: { de: "UNSERE AUSRÜSTUNG", en: "OUR EQUIPMENT" },
    sub:     { de: "Modernste Polygraph-Technologie für präzise Ergebnisse", en: "State-of-the-art polygraph technology for precise results" },
    mainTitle: { de: "Lafayette LX6 – Professioneller Polygraph", en: "Lafayette LX6 – Professional Polygraph" },
    mainDesc:  { de: "Das Lafayette LX6 ist das weltweit führende Polygraphsystem, das von Strafverfolgungsbehörden und Geheimdiensten eingesetzt wird.", en: "The Lafayette LX6 is the world's leading polygraph system used by law enforcement agencies and intelligence services." },
  },

  // ── SPECIALISTS ──
  specialists: {
    heading: { de: "UNSERE SPEZIALISTEN", en: "OUR SPECIALISTS" },
    sub:     { de: "Zertifizierte Experten mit internationaler Erfahrung", en: "Certified experts with international experience" },
    s1name:  { de: "Dimitri Razarenov", en: "Dimitri Razarenov" },
    s1role:  { de: "Leitender Polygraphologe · Berater für Risikomanagement & Verhaltensanalyse", en: "Senior Polygrapher · Risk Management & Behavioural Analysis Consultant" },
    s1desc:  { de: "Zertifizierter Polygraphologe mit über 15 Jahren Erfahrung. Ausgebildet nach internationalen Standards (APA). Spezialist für Unternehmens- und Privatuntersuchungen.", en: "Certified polygrapher with over 15 years of experience. Trained to international standards (APA). Specialist in corporate and private examinations." },
    s2name:  { de: "Tatjana Neubauer", en: "Tatjana Neubauer" },
    s2role:  { de: "Psychologin", en: "Psychologist" },
    s2desc:  { de: "Diplompsychologin mit Spezialisierung auf Stressanalyse und Verhaltenspsychologie. Unterstützt bei sensiblen Untersuchungen.", en: "Graduate psychologist specializing in stress analysis and behavioral psychology. Supports sensitive examinations." },
  },

  // ── PRICES ──
  prices: {
    heading: { de: "PREISE", en: "PRICES" },
    sub:     { de: "Transparente Preise ohne versteckte Kosten", en: "Transparent prices with no hidden costs" },
    from:    { de: "ab", en: "from" },
    book:    { de: "Jetzt buchen", en: "Book now" },
    note:    { de: "Alle Preise inkl. MwSt. Kostenlose Erstberatung.", en: "All prices incl. VAT. Free initial consultation." },
  },

  // ── FAQ ──
  faq: {
    heading: { de: "HÄUFIGE FRAGEN", en: "FREQUENTLY ASKED QUESTIONS" },
    sub:     { de: "Antworten auf die wichtigsten Fragen", en: "Answers to the most important questions" },
  },

  // ── CONTACT ──
  contact: {
    heading:   { de: "KONTAKT AUFNEHMEN", en: "GET IN TOUCH" },
    sub:       { de: "Kostenlose Erstberatung", en: "Free Initial Consultation" },
    infoTitle: { de: "Kontaktinformationen", en: "Contact Information" },
    address:   { de: "Adresse",        en: "Address" },
    phone:     { de: "Telefon",        en: "Phone" },
    email:     { de: "E-Mail",         en: "Email" },
    whatsapp:  { de: "WhatsApp",       en: "WhatsApp" },
    hours:     { de: "Öffnungszeiten", en: "Opening Hours" },
    hoursVal:  { de: "Täglich 10:00–22:00 Uhr", en: "Daily 10:00–22:00" },
    hoursSub:  { de: "Termine auch am Wochenende möglich", en: "Appointments also available on weekends" },
    formName:  { de: "Ihr Name *",        en: "Your Name *" },
    formPhone: { de: "Telefonnummer",     en: "Phone Number" },
    formEmail: { de: "E-Mail-Adresse *",  en: "Email Address *" },
    formMsg:   { de: "Ihre Nachricht",    en: "Your Message" },
    formPh1:   { de: "Max Mustermann",    en: "John Smith" },
    formPh2:   { de: "+49 ...",           en: "+49 ..." },
    formPh3:   { de: "ihre@email.de",     en: "your@email.com" },
    formPh4:   { de: "Beschreiben Sie kurz Ihr Anliegen...", en: "Briefly describe your concern..." },
    btnSend:   { de: "Anfrage senden",    en: "Send Request" },
    privacy:   { de: "Ihre Daten werden vertraulich behandelt", en: "Your data will be treated confidentially" },
    thankYou:  { de: "Vielen Dank!",      en: "Thank you!" },
    thankMsg:  { de: "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.", en: "Your request has been sent successfully. We will get back to you as soon as possible." },
    btnWA:     { de: "WhatsApp",          en: "WhatsApp" },
    btnEmail:  { de: "E-Mail",            en: "Email" },
  },

  // ── FOOTER ──
  footer: {
    desc:    { de: "Professionelle Polygraphuntersuchungen in München. Genau. Zuverlässig. Objektiv.", en: "Professional polygraph examinations in Munich. Precise. Reliable. Objective." },
    navTitle: { de: "Navigation", en: "Navigation" },
    nav: [
      { de: "Dienstleistungen", en: "Services",  id: "services" },
      { de: "Preise",           en: "Prices",    id: "prices" },
      { de: "Über uns",         en: "About us",  id: "about" },
      { de: "Ausrüstung",       en: "Equipment", id: "equipment" },
      { de: "Kontakt",          en: "Contact",   id: "contact" },
    ],
    servTitle: { de: "Dienstleistungen", en: "Services" },
    legalTitle: { de: "Rechtliches",    en: "Legal" },
    copyright: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
  },

  // ── REPORT SECTION ──
  report: {
    heading: { de: "ERGEBNIS DER PRÜFUNG", en: "EXAMINATION RESULT" },
    sub:     { de: "Ein detaillierter Bericht zu allen Parametern", en: "A detailed report on all parameters" },
    intro:   { de: "Das Gutachten des Polygraphologen muss mehrere Pflichtabschnitte enthalten:", en: "The polygraph expert's report must contain several mandatory sections:" },
    section1Title: { de: "1. Allgemeine Informationen", en: "1. General Information" },
    section1Items: [
      { de: "Daten der geprüften Person",     en: "Data of the examined person" },
      { de: "Gründe für die Untersuchung",   en: "Reasons for the examination" },
      { de: "Datum und Ort der Durchführung", en: "Date and place of examination" },
    ],
    section2Title: { de: "2. Methodik der Durchführung", en: "2. Methodology" },
    section2Items: [
      { de: "Liste der gestellten Fragen",       en: "List of questions asked" },
      { de: "Beschreibung des Testverfahrens",   en: "Description of the testing procedure" },
      { de: "Verwendete Ausrüstung",            en: "Equipment used" },
    ],
    section3Title: { de: "3. Analyseergebnisse", en: "3. Analysis Results" },
    section3Items: [
      { de: "Reaktionen der geprüften Person auf jede Frage", en: "Reactions of the examined person to each question" },
      { de: "Interpretation der erhaltenen Ergebnisse",       en: "Interpretation of the results obtained" },
      { de: "Schlussfolgerungen aus dem Test",                en: "Conclusions from the test" },
    ],
    btnRequest: { de: "ANFRAGE SENDEN",  en: "SEND REQUEST" },
  },

  // ── CASE STUDIES ──
  cases: {
    heading: { de: "FALLSTUDIEN", en: "CASE STUDIES" },
    sub:     { de: "Echte Fälle aus unserer Praxis", en: "Real cases from our practice" },
    items: [
      {
        de: `Fall Nr. 1: Emotionale Bindung, die zur Untreue wurde

In einer Ehe mit zehnjähriger Geschichte entstanden Kommunikationsprobleme, die zunächst als vorübergehend eingestuft wurden. Einer der Partner begann, außerhalb der Arbeitszeit intensiv mit einer Kollegin zu kommunizieren. Die Korrespondenz nahm allmählich persönlichen Charakter an – es wurden Familienprobleme besprochen und emotionale Unterstützung geleistet.

Bei der Analyse digitaler Spuren wurden regelmäßige Kontakte in den Abendstunden sowie Treffen außerhalb des Büros festgestellt, die keinen beruflichen Bezug hatten. Direkte Beweise für eine körperliche Untreue fehlten in der Anfangsphase, doch die Art der Kommunikation deutete auf die Entstehung einer stabilen emotionalen Abhängigkeit hin.

In der Folge entwickelte sich die Beziehung zu einem körperlichen Verhältnis, was durch ein Geständnis bestätigt wurde. Der Fall zeigt eine typische Eskalation: von emotionaler Verstrickung zur tatsächlichen Untreue. Die Konsequenzen umfassten Scheidung und Vermögensstreitigkeiten.`,
        en: `Case No. 1: Emotional bond that turned into infidelity

In a marriage of ten years, communication problems arose that were initially considered temporary. One partner began communicating intensively with a colleague outside working hours. The correspondence gradually took on a personal character – family problems were discussed and emotional support was provided.

Analysis of digital traces revealed regular contacts in the evening hours and meetings outside the office unrelated to work. Direct evidence of physical infidelity was absent in the early stages, but the nature of the communication indicated the formation of a stable emotional dependency.

Subsequently, the relationship developed into a physical affair, which was confirmed by a confession. The case illustrates a typical escalation: from emotional involvement to actual infidelity. The consequences included divorce and property disputes.`,
      },
      {
        de: `Fall Nr. 2: Nutzung von Dienstreisen zur Vertuschung von Untreue

Ein Mittelmanager unternahm regelmäßig Dienstreisen. Der Ehepartner bemerkte Unstimmigkeiten im Reiseplan und bei den Ausgaben. Eine Überprüfung ergab, dass ein Teil der Reisen entweder keinen geschäftlichen Anlass hatte oder ohne objektive Gründe verlängert wurde.

Die Analyse von Hotelbuchungen und Zahlungen zeigte die Anwesenheit einer zweiten Person, die nicht mit dem Unternehmen verbunden war. Zusätzlich wurden wiederkehrende Reisen in dieselbe Stadt an Wochenenden unter dem Vorwand geschäftlicher Treffen festgestellt.

Bei der Konfrontation räumte die betreffende Person eine langjährige außereheliche Beziehung ein. Der entscheidende Faktor zur Vertuschung war die Möglichkeit, die Abwesenheit mit dienstlichen Verpflichtungen zu erklären. Die Folgen waren Scheidung und Reputationsrisiken am Arbeitsplatz.`,
        en: `Case No. 2: Using business trips to conceal infidelity

A middle manager regularly went on business trips. The spouse noticed discrepancies in the schedule and financial expenses. A review revealed that some trips either had no business necessity or were extended without objective reasons.

Analysis of hotel bookings and payments revealed the presence of a second person not connected to the company. Additionally, recurring trips to the same city on weekends under the pretext of business meetings were identified.

During confrontation, the person admitted to a long-term extramarital relationship. The key concealment factor was the ability to explain absences with professional obligations. The consequences were divorce and reputational risks at work.`,
      },
      {
        de: `Fall Nr. 3: Doppelleben über soziale Netzwerke

Einer der Partner nutzte soziale Netzwerke und Messenger aktiv und pflegte dabei parallele Bekanntschaften. Der Ehepartner schöpfte Verdacht aufgrund von Heimlichkeit beim Telefongebrauch und Widersprüchen in den Berichten über die außerhalb verbrachte Zeit.

Die digitale Analyse ergab das Vorhandensein mehrerer Konten, von denen ein Teil vor dem engsten Umfeld verborgen gehalten wurde. Über diese Konten wurde eine aktive Korrespondenz geführt, einschließlich des Austauschs persönlicher Fotos und der Vereinbarung von Treffen.

Es stellte sich heraus, dass die Person über einen langen Zeitraum mehrere parallele Beziehungen gepflegt hatte. Der Fall veranschaulicht, wie digitale Werkzeuge das Führen eines „Doppellebens" erleichtern. Das Ergebnis war das Ende der Beziehung und ein psychologischer Konflikt.`,
        en: `Case No. 3: Double life through social networks

One partner actively used social networks and messengers, maintaining parallel acquaintances. The spouse became suspicious due to secretiveness with the phone and inconsistencies in accounts of time spent away from home.

Digital analysis revealed the existence of several accounts, some of which were hidden from the immediate circle. Through these accounts, active correspondence was conducted, including the exchange of personal photos and arrangements for meetings.

It turned out that the person had maintained several parallel relationships over a long period. The case illustrates how digital tools facilitate leading a "double life". The outcome was the end of the relationship and a psychological conflict.`,
      },
      {
        de: `Fall Nr. 4: Manager entlarvt, der Unterschriften in Verträgen gefälscht hat

Ein mittelständisches Dienstleistungsunternehmen bemerkte Unstimmigkeiten in mehreren Vertragsunterlagen, bei denen Unterschriften von Geschäftsführern und Kunden nicht mit den Originalen übereinstimmten. Schriftgutachten bestätigten den Verdacht der Fälschung, konnten jedoch den Verursacher nicht eindeutig identifizieren. Mehrere Führungskräfte mit Zugang zu den betreffenden Dokumenten wurden befragt. Im Polygraphentest zeigte ein leitender Manager ausgeprägte physiologische Reaktionen auf Fragen zur Dokumentenmanipulation und zur eigenmächtigen Vertragsgestaltung. Nach dem Test räumte er ein, in mehreren Fällen Unterschriften gefälscht zu haben, um Verträge ohne Genehmigung der Geschäftsführung abzuschließen. Das Unternehmen erstattete Anzeige und überprüfte alle von ihm bearbeiteten Verträge der letzten zwei Jahre.`,
        en: `Case No. 4: Exposed the manager who forged signatures in contracts

A mid-sized service company noticed discrepancies in several contract documents where signatures of managing directors and clients did not match the originals. Handwriting analyses confirmed the suspicion of forgery but could not clearly identify the perpetrator. Several executives with access to the relevant documents were interviewed. In the polygraph test, a senior manager showed pronounced physiological reactions to questions about document manipulation and unauthorized contract arrangements. After the test, he admitted to having forged signatures in several cases in order to conclude contracts without management approval. The company filed a complaint and reviewed all contracts he had handled over the past two years.`,
      },
      {
        de: `Fall Nr. 5: Kassierer ermittelt, der systematisch keine Quittungen ausstellte und Einnahmen stahl

Ein Einzelhandelsunternehmen mit mehreren Filialen stellte fest, dass in einer bestimmten Filiale die Tageseinnahmen regelmäßig unter dem Durchschnitt vergleichbarer Standorte lagen, ohne dass dies durch geringere Kundenfrequenz erklärbar war. Kassensystemprotokolle zeigten auffällig viele Transaktionen ohne Belegausdruck. Da mehrere Kassierer in Schichten arbeiteten, war eine direkte Zuordnung schwierig. Im Rahmen der Polygraphenuntersuchung wurden alle betroffenen Mitarbeiter einzeln befragt. Ein Kassierer zeigte bei Fragen zu nicht verbuchten Einnahmen und zur persönlichen Bereicherung deutliche Stressreaktionen. Nach dem Test gestand er, über einen Zeitraum von mehreren Monaten systematisch Bargeld aus der Kasse entnommen zu haben, indem er bei bestimmten Transaktionen bewusst keinen Beleg ausdruckte. Der Gesamtschaden wurde auf über 8.000 Euro geschätzt.`,
        en: `Case No. 5: Determined which cashier systematically failed to issue receipts and stole revenue

A retail company with several branches found that daily revenues at one particular branch were consistently below the average of comparable locations, without this being explainable by lower customer traffic. Cash register system logs showed an unusually high number of transactions without receipt printouts. Since several cashiers worked in shifts, direct attribution was difficult. All affected employees were individually interviewed as part of the polygraph examination. One cashier showed clear stress reactions to questions about unrecorded revenues and personal enrichment. After the test, he confessed to having systematically withdrawn cash from the register over a period of several months by deliberately not printing receipts for certain transactions. The total damage was estimated at over 8,000 euros.`,
      },
      {
        de: `Fall Nr. 6: Ermittelt, wer im Team eine falsche anonyme Beschwerde gegen den Vorgesetzten verbreitet hat

In einem mittelständischen Unternehmen wurde eine anonyme Beschwerde bei der Personalabteilung eingereicht, in der einem Abteilungsleiter schwerwiegendes Fehlverhalten vorgeworfen wurde. Eine interne Prüfung ergab, dass die geschilderten Vorfälle nicht stattgefunden hatten und die Beschwerde offensichtlich erfunden war. Der betroffene Vorgesetzte erlitt erheblichen Reputationsschaden. Da die Beschwerde detaillierte interne Informationen enthielt, musste der Verfasser aus dem engsten Kollegenkreis stammen. Alle Teammitglieder wurden im Rahmen einer Polygraphenuntersuchung befragt. Eine Mitarbeiterin zeigte bei Fragen zur Urheberschaft der Beschwerde und zu ihrer Motivation deutliche physiologische Reaktionen. Nach dem Test gab sie zu, die Beschwerde verfasst zu haben, um den Vorgesetzten aus persönlichen Gründen zu schädigen. Das Unternehmen leitete arbeitsrechtliche Konsequenzen ein und rehabilitierte den betroffenen Abteilungsleiter offiziell.`,
        en: `Case No. 6: Determined who in the team spread a false anonymous complaint against the manager

At a mid-sized company, an anonymous complaint was submitted to the HR department accusing a department head of serious misconduct. An internal review revealed that the described incidents had not taken place and that the complaint was obviously fabricated. The affected manager suffered significant reputational damage. Since the complaint contained detailed internal information, the author had to come from the immediate team. All team members were interviewed as part of a polygraph examination. One employee showed clear physiological reactions to questions about authorship of the complaint and her motivation. After the test, she admitted to having written the complaint to harm the manager for personal reasons. The company initiated employment law consequences and officially rehabilitated the affected department head.`,
      },
    ],
    dates: ["13.02.2026", "10.02.2026", "07.02.2026", "04.02.2026", "01.02.2026", "28.01.2026"],
    btnAll: { de: "ALLE FÄLLE ANSEHEN", en: "VIEW ALL CASES" },
  },

  // ── CTA BANNER ──
  cta: {
    heading: { de: "BEREIT FÜR DIE WAHRHEIT?", en: "READY FOR THE TRUTH?" },
    sub:     { de: "Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung", en: "Contact us today for a free initial consultation" },
    btn1:    { de: "JETZT ANFRAGEN",     en: "REQUEST NOW" },
    btn2:    { de: "+49 175 6036003",    en: "+49 175 6036003" },
  },
};
