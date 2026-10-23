import type { TopicContent } from './types';

// Romanian content for Batch-1 topics. Facts are written conservatively and,
// where historical sources differ, are hedged with a verification note.
export const roTopics: Record<string, TopicContent> = {
  istorie: {
    title: 'Istoria Arcului de Triumf din Chișinău | Ghid independent',
    description:
      'Cine a construit Arcul de Triumf din Chișinău, când și de ce: contextul Războiului Ruso-Turc, arhitectul și schimbările de-a lungul timpului.',
    h1: 'Istoria Arcului de Triumf din Chișinău',
    intro:
      'Arcul de Triumf din Chișinău este unul dintre puținele monumente care leagă centrul modern al capitalei de epoca țaristă. Construit la începutul anilor 1840, a fost gândit ca un punct de intrare ceremonial spre ansamblul format din piață și Catedrala „Nașterea Domnului”.',
    sections: [
      {
        id: 'context',
        title: 'Contextul istoric',
        content:
          'Monumentul a fost ridicat pentru a comemora victoria Imperiului Rus în <strong>Războiul Ruso-Turc (1828–1829)</strong>. În acea perioadă, Chișinăul era reședință de regiune din cadrul Imperiului Rus, iar arcul de triumf făcea parte dintr-un limbaj arhitectural folosit pentru a marca marile victorii militare.',
      },
      {
        id: 'constructie',
        title: 'Construcția (1840–1841)',
        content:
          'Arcul a fost construit în perioada <strong>1840–1841</strong>, în piatră albă, în stil neoclasic, cu coloane și basoreliefuri. Conform surselor locale, proiectul este atribuit arhitectului Luca Zaush (Zaușchevici), dar atribuirea exactă este discutată în literatura de specialitate.',
      },
      {
        id: 'evolutie',
        title: 'De-a lungul timpului',
        content:
          'Monumentul a supraviețuit ambelor războaie mondiale și a rămas în inima pieței centrale a orașului. De-a lungul secolelor a trecut prin mai multe reparații și restaurări, păstrându-și rolul de punct de referință al capitalei și de spațiu pentru ceremonii oficiale.',
      },
      {
        id: 'azi',
        title: 'Monumentul astăzi',
        content:
          'Astăzi Arcul de Triumf este un monument de importanță națională, aflat în proprietatea publică a statului și protejat de Agenția de Inspectare și Restaurare a Monumentelor. Este unul dintre simbolurile vizuale ale Chișinăului.',
      },
    ],
    faq: [
      {
        question: 'Când a fost construit Arcul de Triumf din Chișinău?',
        answer:
          'Arcul de Triumf din Chișinău a fost construit în perioada 1840–1841.',
      },
      {
        question: 'De ce a fost construit?',
        answer:
          'A fost construit pentru a comemora victoria Imperiului Rus în Războiul Ruso-Turc (1828–1829).',
      },
      {
        question: 'Cine l-a proiectat?',
        answer:
          'Sursele locale atribuie proiectul arhitectului Luca Zaush (Zaușchevici), însă atribuirea exactă este discutată în literatura de specialitate.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  arhitectura: {
    title: 'Arhitectura Arcului de Triumf din Chișinău | Ghid independent',
    description:
      'Stil neoclasic, materiale, coloane și proporții: cum este construit Arcul de Triumf din Chișinău și ce detalii merită observate.',
    h1: 'Arhitectura Arcului de Triumf din Chișinău',
    intro:
      'Arcul de Triumf din Chișinău este un monument compact, dar proporționat, care folosește un vocabular neoclasic simplu. Înțelegerea detaliilor sale ajută la citirea întregului ansamblu square–catedrală.',
    sections: [
      {
        id: 'stil',
        title: 'Stilul neoclasic',
        content:
          'Monumentul folosește <strong>stilul neoclasic</strong>: un arc de triumf cu deschidere centrală, flancat de coloane. Limbajul este sobru, specific monumentelor comemorative din prima jumătate a secolului al XIX-lea.',
      },
      {
        id: 'materiale',
        title: 'Materiale și culoare',
        content:
          'Arcul este realizat din <strong>piatră albă</strong> și are o înălțime de aproximativ <strong>13 metri</strong>. Culoarea deschisă îl face ușor de fotografiat atât ziua, cât și seara, când este luminat.',
      },
      {
        id: 'coloane',
        title: 'Coloane și basoreliefuri',
        content:
          'Fațada este marcată de <strong>coloane</strong> (în număr de patru, câte două pe laturile înguste) și de <strong>basoreliefuri</strong> cu scene istorice. Apropierea de coloane și de registrul superior dezvăluie detalii de execuție care merită observate la fața locului.',
      },
      {
        id: 'ansamblu',
        title: 'Relația cu ansamblul central',
        content:
          'Arcul nu stă izolat: el cadreză vizual intrarea spre Catedrala „Nașterea Domnului” și spre parcul din fața acesteia, formând un ax ceremonial care definește centrul istoric al Chișinăului.',
      },
    ],
    faq: [
      {
        question: 'Cât de înalt este Arcul de Triumf?',
        answer: 'Are o înălțime de aproximativ 13 metri.',
      },
      {
        question: 'Din ce este realizat?',
        answer: 'Este realizat din piatră albă, în stil neoclasic.',
      },
      {
        question: 'Are basoreliefuri?',
        answer:
          'Da, monumentul are basoreliefuri cu scene istorice pe registrul superior, vizibile de aproape.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  ceasul: {
    title: 'Ceasul Arcului de Triumf din Chișinău | Ghid independent',
    description:
      'Ce spun sursele istorice despre ceasul Arcului de Triumf din Chișinău, ce s-a păstrat și ce poți vedea astăzi.',
    h1: 'Ceasul Arcului de Triumf din Chișinău',
    intro:
      'Unele descrieri istorice ale Arcului de Triumf din Chișinău menționează un ceas ca parte a decorului original. Pentru că sursele diferă, pagina de față prezintă ce este documentat și ce nu.',
    sections: [
      {
        id: 'surse',
        title: 'Ce spun sursele',
        content:
          'În descrierile vechi ale ansamblului square–catedrală apar referiri la un <strong>ceas</strong> montat pe monument. Nu toate sursele sunt de acord asupra amplasamentului exact sau a perioadei în care acest ceas a funcționat.',
      },
      {
        id: 'azi',
        title: 'Ce se vede astăzi',
        content:
          'În prezent, pe Arcul de Triumf <strong>nu este vizibil niciun ceas funcțional</strong>. Dacă te interesează ora exactă în timpul vizitei, cel mai simplu este să folosești telefonul sau ceasul din stațiile centrale.',
      },
      {
        id: 'verificare',
        title: 'Notă de verificare',
        content:
          'Detaliile despre ceas fac obiectul unor descrieri contradictorii în sursele locale. Recomandăm verificarea la fața locului și consultarea surselor oficiale de patrimoniu pentru o istorie completă.',
      },
    ],
    faq: [
      {
        question: 'Arcul de Triumf din Chișinău are un ceas?',
        answer:
          'Sursele istorice menționează un ceas pe monument, dar astăzi nu este vizibil niciun ceas funcțional pe arc.',
      },
      {
        question: 'De unde pot afla ora în timpul vizitei?',
        answer:
          'Zona centrală are indicatoare și stații; în practică, cel mai comod este telefonul tău.',
      },
      {
        question: 'Unde găsesc o istorie sigură a detaliilor arcului?',
        answer:
          'Agenția de Inspectare și Restaurare a Monumentelor și muzeele locale din Chișinău sunt sursele recomandate.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  clopotul: {
    title: 'Clopotul Arcului de Triumf din Chișinău | Ghid independent',
    description:
      'Povestea clopotului Arcului de Triumf din Chișinău, turnat din tunuri otomane capturate și mutat ulterior la Catedrala „Nașterea Domnului”.',
    h1: 'Clopotul Arcului de Triumf din Chișinău',
    intro:
      'Una dintre cele mai cunoscute povești despre Arcul de Triumf din Chișinău este cea a <strong>clopotului</strong> turnat din tunuri otomane capturate în război și aflat inițial în arc.',
    sections: [
      {
        id: 'origine',
        title: 'Turnat din tunuri otomane',
        content:
          'Conform tradiției locale, clopotul arcului a fost <strong>turnat din tunuri otomane capturate</strong> în timpul Războiului Ruso-Turc (1828–1829). Simbolul era dublu: victoria militară și chemarea credincioșilor la sărbători.',
      },
      {
        id: 'mutare',
        title: 'Mutarea la catedrală',
        content:
          'În timp, clopotul a fost mutat la <strong>Catedrala „Nașterea Domnului”</strong>, aflată la câțiva pași de arc. Astăzi, turnul-clopotniță al catedralei este locul asociat acestui clopot în memoria locală.',
      },
      {
        id: 'legate',
        title: 'Legătura cu ansamblul central',
        content:
          'Clopotul leagă simbolic Arcul de Triumf de viața spirituală a pieței: ambele monumente au fost gândite împreună, ca un ax ceremonial al Chișinăului secolului al XIX-lea.',
      },
    ],
    faq: [
      {
        question: 'Din ce a fost turnat clopotul arcului?',
        answer:
          'Conform tradiției, din tunuri otomane capturate în Războiul Ruso-Turc (1828–1829).',
      },
      {
        question: 'Unde se află clopotul astăzi?',
        answer:
          'A fost mutat la Catedrala „Nașterea Domnului”, în turnul-clopotniță aflată lângă arc.',
      },
      {
        question: 'Pot vedea clopotul?',
        answer:
          'Clopotnița catedralei este vizibilă din piață; accesul în interior depinde de programul bisericii.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  portile-sfinte: {
    title: 'De ce se numește „Porțile Sfinte” | Arcul de Triumf Chișinău',
    description:
      'Originea denumirii istorice „Porțile Sfinte” a Arcului de Triumf din Chișinău și legătura cu Catedrala „Nașterea Domnului”.',
    h1: 'De ce se numește „Porțile Sfinte”?',
    intro:
      'Pe lângă numele oficial, Arcul de Triumf din Chișinău este cunoscut local și sub denumirea istorică de <strong>„Porțile Sfinte”</strong> („Sfintele Porți”).',
    sections: [
      {
        id: 'origine',
        title: 'O poreclă cu sens religios',
        content:
          'Denumirea reflectă rolul simbolic al arcului ca <strong>poartă către centrul spiritual</strong> al Chișinăului. La doar câțiva pași se află Catedrala „Nașterea Domnului”, cea mai importantă biserică ortodoxă a Moldovei.',
      },
      {
        id: 'folosire',
        title: 'Cum este folosită astăzi',
        content:
          'Numele „Porțile Sfinte” este încă folosit în ghidurile turistice și de către locuitorii orașului atunci când vorbesc despre monumentul de la intrarea în ansamblul central.',
      },
      {
        id: 'atentie',
        title: 'O precizare utilă',
        content:
          'Denumirea este una popular-istorică, nu oficială. Pe hărți și în documentele de patrimoniu, monumentul apare sub numele „Arcul de Triumf”.',
      },
    ],
    faq: [
      {
        question: 'Care este numele oficial?',
        answer: 'Numele oficial este „Arcul de Triumf”; „Porțile Sfinte” este o denumire istorică populară.',
      },
      {
        question: 'De ce i se spune „Porțile Sfinte”?',
        answer:
          'Pentru că marchează simbolic intrarea spre centrul spiritual al orașului, lângă Catedrala „Nașterea Domnului”.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  restaurare: {
    title: 'Restaurarea Arcului de Triumf (2026–2027) | Ghid independent',
    description:
      'Ce prevede anunțul Guvernului Republicii Moldova din septembrie 2026 despre restaurarea Arcului de Triumf din Chișinău: calendar, incertitudini și impact asupra vizitei.',
    h1: 'Restaurarea Arcului de Triumf (2026–2027)',
    intro:
      'La <strong>22 septembrie 2026</strong>, Guvernul Republicii Moldova a aprobat măsurile pentru pregătirea restaurării Arcului de Triumf din Chișinău. Această pagină sintetizează ce este confirmat oficial și ce rămâne necunoscut.',
    sections: [
      {
        id: 'decizie',
        title: 'Ce a aprobat Guvernul',
        content:
          'Guvernul a aprobat, la 22 septembrie 2026, măsurile necesare pentru <strong>pregătirea restaurării</strong> monumentului. Accentul este pe etapa de documentare și organizare, nu pe lucrări deja începute.',
      },
      {
        id: 'calendar',
        title: 'Calendarul cunoscut',
        content:
          'În 2026 sunt în desfășurare documentarea tehnică și studiile de fezabilitate. <strong>Începerea efectivă a restaurării este planificată pentru perioada martie–aprilie 2027.</strong>',
      },
      {
        id: 'necunoscut',
        title: 'Ce nu se știe încă',
        content:
          'Detaliile despre organizarea șantierului, durata exactă a lucrărilor și restricțiile de acces urmează să fie comunicate oficial. Până la anunțuri clare, nu tratăm monumentul ca fiind închis.',
      },
      {
        id: 'impact',
        title: 'Impact asupra vizitei',
        content:
          'Până la finalizarea lucrărilor, monumentul <strong>rămâne deschis publicului</strong>. Unele activități de pe șantier pot afecta temporar accesul sau fotografierea anumitor unghiuri; recomandăm verificarea periodică a acestei pagini.',
      },
    ],
    faq: [
      {
        question: 'Când începe restaurarea?',
        answer:
          'Lucrările sunt planificate să înceapă în perioada martie–aprilie 2027, conform anunțului guvernamental din septembrie 2026.',
      },
      {
        question: 'Este închis monumentul acum?',
        answer:
          'Nu. Până la finalizarea lucrărilor, Arcul de Triumf rămâne deschis publicului.',
      },
      {
        question: 'Care este sursa informației?',
        answer:
          'Comunicatul de presă al Guvernului Republicii Moldova din 22 septembrie 2026.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
    source: 'Sursă: Guvernul Republicii Moldova (22 septembrie 2026)',
  },

  'locatie-harta': {
    title: 'Locația Arcului de Triumf din Chișinău | Hartă și indicații',
    description:
      'Unde se află exact Arcul de Triumf din Chișinău, coordonate GPS, cod Plus și repere în jurul Pieței Marii Adunări Naționale.',
    h1: 'Locația Arcului de Triumf din Chișinău',
    intro:
      'Arcul de Triumf se află în <strong>Piața Marii Adunări Naționale</strong>, în centrul Chișinăului, la câțiva pași de Catedrala „Nașterea Domnului”.',
    sections: [
      {
        id: 'coordonate',
        title: 'Coordonate și cod Plus',
        content:
          'Coordonate aproximative: <strong>47.0248° N, 28.8326° E</strong>. Cod Plus: <strong>2RFM+W2 Chișinău</strong>. Le poți copia direct în Google Maps sau într-o aplicație de navigație.',
      },
      {
        id: 'repere',
        title: 'Repere în jur',
        content:
          'În imediata apropiere se află Catedrala „Nașterea Domnului”, clădirile guvernamentale (Președinție, Parlament) și Parcul Central „Ștefan cel Mare”. Toate sunt la câteva minute de mers pe jos.',
      },
      {
        id: 'cum',
        title: 'Cum îl recunoști',
        content:
          'Monumentul este un arc de piatră albă, înalt de circa 13 m, situat pe latura pieței opusă catedralei. Este greu de ratat: marchează vizual intrarea în ansamblul central.',
      },
    ],
    faq: [
      {
        question: 'În ce piață se află?',
        answer: 'În Piața Marii Adunări Naționale, în centrul Chișinăului.',
      },
      {
        question: 'Care este codul Plus?',
        answer: '2RFM+W2 Chișinău, Republica Moldova.',
      },
      {
        question: 'Este departe de catedrală?',
        answer: 'Nu, catedrala este la câțiva pași de arc, în aceeași piață.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'transport-public': {
    title: 'Transport public spre Arcul de Triumf din Chișinău | Ghid independent',
    description:
      'Cum ajungi la Arcul de Triumf din Chișinău cu troleibuzul și autobuzul: stații centrale și mersul pe jos din centru.',
    h1: 'Transport public spre Arcul de Triumf',
    intro:
      'Centrul Chișinăului este bine deservit de <strong>troleibuze și autobuze</strong>. Piața Marii Adunări Naționale, unde se află Arcul de Triumf, are stații în apropiere.',
    sections: [
      {
        id: 'central',
        title: 'Din centrul orașului',
        content:
          'Dacă te afli deja în centru, cel mai simplu este să <strong>mergi pe jos</strong>: arcul este la câteva minute de orice punct central (Piața Centrală, bulevardul Ștefan cel Mare).',
      },
      {
        id: 'statii',
        title: 'Stații și linii',
        content:
          'Mai multe linii de <strong>troleibuz și autobuz</strong> opresc în sau lângă Piața Marii Adunări Naționale. Pentru numerele exacte de linii și orar, verifică aplicațiile locale de transport sau panourile din stații.',
      },
      {
        id: 'de-la-gara',
        title: 'De la gară și autogară',
        content:
          'De la Gara Feroviară Chișinău și de la autogările principale poți lua un troleibuz spre centru; de la stația cea mai apropiat de piață mai ai o scurtă plimbare pe jos.',
      },
      {
        id: 'sfat',
        title: 'Sfat practic',
        content:
          'Parcarea în centru este limitată și cu plată. Pentru o vizită relaxată, lasă mașina la periferie și folosește transportul public sau mersul pe jos.',
      },
    ],
    faq: [
      {
        question: 'Care stație este cea mai apropiată?',
        answer: 'Stațiile din Piața Marii Adunări Naționale, la câteva minute de arc.',
      },
      {
        question: 'Pot ajunge pe jos din centru?',
        answer: 'Da, arcul este la câteva minute de mers pe jos din orice punct central.',
      },
      {
        question: 'Unde găsesc numerele exacte de linii?',
        answer:
          'În aplicațiile locale de transport și pe panourile din stații; acestea se schimbă, așa că verifică înainte de plecare.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026 (numerele de linii se verifică local)',
  },

  fotografii: {
    title: 'Unde fotografiezi Arcul de Triumf din Chișinău | Locuri și momente',
    description:
      'Cele mai bune unghiuri și momente pentru fotografii la Arcul de Triumf din Chișinău, cu harta pozițiilor și indicații de iluminare.',
    h1: 'Fotografii la Arcul de Triumf din Chișinău',
    intro:
      'Arcul de Triumf este un subiect fotogenic datorită pietrei albe și poziției în piață. Iată unde și când merită să fotografiezi.',
    sections: [
      {
        id: 'fațada',
        title: 'Fațada principală',
        content:
          'Vederile frontale din <strong>mijlocul pieței</strong> capturează arcada și coloanele în ansamblu. Dimineața devreme lumina bate frontal și evită umbra clădirilor.',
      },
      {
        id: 'detalii',
        title: 'Detalii arhitecturale',
        content:
          'Apropie-te de <strong>basoreliefuri și coloane</strong> pentru cadru strâns. Un obiectiv standard (35–50 mm echivalent) redă cel mai bine proporțiile.',
      },
      {
        id: 'noapte',
        title: 'Lumina de seară',
        content:
          'Seara, monumentul este luminat și contrastează cu cerul. Pentru un cadru cu Piața Marii Adunări Naționale în fundal, poziționează-te pe latura opusă arcului.',
      },
    ],
    faq: [
      {
        question: 'Care este cel mai bun moment pentru fotografii?',
        answer:
          'Dimineața devreme pentru lumină frontală și seară pentru luminile ornamentale.',
      },
      {
        question: 'Pot face fotografii de sus?',
        answer:
          'Nu există o terasă publică; unghiurile bune sunt la nivelul solului, din mijlocul și marginile pieței.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'in-apropiere': {
    title: 'Ce vizitezi lângă Arcul de Triumf din Chișinău | Atracții apropiate',
    description:
      'O prezentare a atracțiilor din jurul Arcului de Triumf din Chișinău: catedrala, parcul, clădirile guvernamentale și muzeele, cu distanțe de mers pe jos.',
    h1: 'Ce vizitezi lângă Arcul de Triumf',
    intro:
      'Arcul de Triumf este un punct de plecare excelent pentru centrul Chișinăului. Iată ce poți combina într-o singură plimbare.',
    sections: [
      {
        id: 'imediat',
        title: 'La câțiva pași',
        content:
          'În aceeași piață: <strong>Catedrala „Nașterea Domnului”</strong> și <strong>Parcul Catedralei</strong>. Ambele sunt la 1–3 minute de mers pe jos.',
      },
      {
        id: 'central',
        title: 'La 5–10 minute',
        content:
          '<strong>Parcul Central „Ștefan cel Mare”</strong>, <strong>Aleea Clasicilor</strong> și <strong>Monumentul Ștefan cel Mare</strong> se află la o plimbare scurtă spre nord-est.',
      },
      {
        id: 'muzee',
        title: 'Muzee',
        content:
          '<strong>Muzeul Național de Istorie</strong> și <strong>Muzeul Național de Artă</strong> sunt la circa 10–15 minute de mers pe jos și pot completa o jumătate de zi culturală.',
      },
    ],
    faq: [
      {
        question: 'Cele mai apropiate atracții?',
        answer: 'Catedrala „Nașterea Domnului” și Parcul Catedralei, la 1–3 minute.',
      },
      {
        question: 'Merită o jumătate de zi în zonă?',
        answer:
          'Da: arcul, catedrala, parcul central și muzeele se leagă natural într-un traseu pedestru.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'catedrala-nasterea-domnului': {
    title: 'Catedrala „Nașterea Domnului” din Chișinău | Ghid independent',
    description:
      'Istoria, arhitectura și vizitarea Catedralei „Nașterea Domnului” din Chișinău, aflată lângă Arcul de Triumf.',
    h1: 'Catedrala „Nașterea Domnului”',
    intro:
      'Catedrala „Nașterea Domnului” este cea mai importantă biserică ortodoxă a Moldovei și se află la câțiva pași de Arcul de Triumf, în aceeași piață.',
    sections: [
      {
        id: 'istorie',
        title: 'Istoric',
        content:
          'Catedrala a fost construită în prima jumătate a secolului al XIX-lea (consecrată în <strong>1836</strong>), în aceeași perioadă de înflorire urbană care a produs și Arcul de Triumf. Este un simbol al identității bisericești naționale.',
      },
      {
        id: 'arhitectura',
        title: 'Arhitectură',
        content:
          'Edificiul este în stil neoclasic rusesc, cu o volumetrie clară și o <strong>turn-clopotniță</strong> separată, aflată în fața sa. Turnul este locul asociat, în memoria locală, clopotului venit de la Arcul de Triumf.',
      },
      {
        id: 'vizitare',
        title: 'Cum o vizitezi',
        content:
          'Catedrala este un loc de cult activ. Vizitatorii sunt bineveniți; recomandăm îmbrăcăminte modestă și respectarea programului slujbelor. Curtea și parcul din față sunt deschise și pot fi fotografiați liber.',
      },
    ],
    faq: [
      {
        question: 'Când a fost construită?',
        answer: 'A fost consecrată în 1836, în prima jumătate a secolului al XIX-lea.',
      },
      {
        question: 'Este aproape de Arcul de Triumf?',
        answer: 'Da, la câțiva pași, în aceeași Piață a Marii Adunări Naționale.',
      },
      {
        question: 'Se poate intra?',
        answer:
          'Este o biserică activă; accesul este permis cu respectarea programului și a regulilor de îmbrăcăminte.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026 (programul se verifică local)',
  },

  'piata-marii-adunari-nationale': {
    title: 'Piața Marii Adunări Naționale din Chișinău | Ghid independent',
    description:
      'Istoria și rolul Pieței Marii Adunări Naționale din Chișinău, piața centrală unde se află Arcul de Triumf.',
    h1: 'Piața Marii Adunări Naționale',
    intro:
      'Piața Marii Adunări Naționale este piața centrală a Chișinăului și gazda Arcului de Triumf, a Catedralei „Nașterea Domnului” și a principalelor clădiri guvernamentale.',
    sections: [
      {
        id: 'istorie',
        title: 'Istoric',
        content:
          'Piața și-a schimbat numele de mai multe ori de-a lungul secolelor, reflectând istoria politică a orașului. Astăzi poartă numele <strong>Marii Adunări Naționale</strong>, forul legislativ al Republicii Moldova.',
      },
      {
        id: 'rol',
        title: 'Rol civic',
        content:
          'Este spațiul principal pentru <strong>sărbători naționale, parade și evenimente publice</strong>. În jur se află Președinția, Parlamentul și alte instituții.',
      },
      {
        id: 'vizitare',
        title: 'Ce vezi aici',
        content:
          'Pe lângă Arc și catedrală, piața oferă spații pietonale deschise, ideal pentru o plimbare între obiectivele centrului istoric.',
      },
    ],
    faq: [
      {
        question: 'De ce este importantă piața?',
        answer:
          'Este piața centrală civică a Chișinăului și gazda Arcului de Triumf și a catedralei.',
      },
      {
        question: 'Ce instituții sunt în jur?',
        answer: 'Președinția, Parlamentul și alte clădiri guvernamentale.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'traseu-o-ora': {
    title: 'Traseu pedestru de o oră de la Arcul de Triumf | Chișinău centru',
    description:
      'Un traseu compact de o oră prin centrul Chișinăului, pornind de la Arcul de Triumf: catedrala, parcul central, Aleea Clasicilor și înapoi.',
    h1: 'Traseu pedestru de o oră',
    intro:
      'Dacă ai o singură oră, acest traseu leagă cele mai importante obiective din centrul Chișinăului, pornind de la Arcul de Triumf.',
    sections: [
      {
        id: 'etape',
        title: 'Etapele traseului',
        content:
          '1) Arcul de Triumf (10 min) → 2) Catedrala „Nașterea Domnului” și Parcul Catedralei (15 min) → 3) Parcul Central „Ștefan cel Mare” (15 min) → 4) Aleea Clasicilor și Monumentul Ștefan cel Mare (15 min) → întoarcere în piață (5 min).',
      },
      {
        id: 'ritm',
        title: 'Ritm și odihnă',
        content:
          'Traseul este plat și pavat. Există bănci în parcul central pentru o pauză; dacă timpul permite, prelungește etapa 3 cu o cafea în zonă.',
      },
      {
        id: 'sfaturi',
        title: 'Sfaturi',
        content:
          'Păstrează Arcul de Triumf la început și la sfârșit pentru fotografii cu lumini diferite. Totul se face pe jos, fără transport public.',
      },
    ],
    faq: [
      {
        question: 'Cât durează traseul?',
        answer: 'Aproximativ o oră, în ritm relaxat, cu scurte pauze.',
      },
      {
        question: 'Este accesibil cu căruciorul?',
        answer:
          'Da, traseul este plat și pavat; zonele pietonale sunt accesibile.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },
};
