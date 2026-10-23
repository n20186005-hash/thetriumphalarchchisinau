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

  vizitare: {
    title: 'Vizitarea Arcului de Triumf din Chișinău | Ghid independent',
    description:
      'Program, durată, cost și recomandări de vizitare pentru Arcul de Triumf din Chișinău: un monument deschis, gratuit, în piața centrală.',
    h1: 'Vizitarea Arcului de Triumf din Chișinău',
    intro:
      'Arcul de Triumf este un monument deschis și gratuit, amplasat în mijlocul pieței centrale a Chișinăului. Nu există bilet de intrare și nu există un program de vizitare propriu-zis — îl poți vedea oricând, în trecere sau ca parte a unei plimbări prin centru.',
    sections: [
      {
        id: 'program',
        title: 'Program și acces',
        content:
          'Monumentul este situat în spațiul public al Pieței Marii Adunări Naționale și este accesibil în orice moment. Nu se percepe taxă de vizitare. În serile de vară este iluminat, iar zona este frecventată atât de localnici, cât și de turiști.',
      },
      {
        id: 'durata',
        title: 'Cât timp îți trebuie',
        content:
          'O vizită propriu-zisă durează între 10 și 30 de minute: timp suficient pentru a fotografia monumentul, a citi plăcuțele și a traversa spre Catedrala „Nașterea Domnului”. Pentru un traseu complet prin centru, planifică o oră.',
      },
      {
        id: 'recomandari',
        title: 'Recomandări',
        content:
          'Evită să te cațări pe monument și respectă spațiul ceremoniilor oficiale. În zilele cu evenimente publice în piață, zona poate fi aglomerată; diminețile și serile târzii sunt mai liniștite.',
      },
    ],
    faq: [
      {
        question: 'Se plătește intrarea?',
        answer:
          'Nu. Arcul de Triumf este un monument public, liber accesibil, fără taxă de vizitare.',
      },
      {
        question: 'Care este programul?',
        answer:
          'Nu există un program închis: monumentul este în aer liber, în piața centrală, accesibil oricând.',
      },
      {
        question: 'Cât durează o vizită?',
        answer:
          'Între 10 și 30 de minute pentru monument, respectiv o oră pentru un traseu complet prin centru.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'de-la-aeroport': {
    title: 'De la Aeroportul Chișinău la Arcul de Triumf | Ghid independent',
    description:
      'Cum ajungi de la Aeroportul Internațional Chișinău la Arcul de Triumf: taxi, aplicații de transport și autobuze, cu timpi și distanțe orientative.',
    h1: 'De la Aeroportul Chișinău la Arcul de Triumf',
    intro:
      'Aeroportul Internațional Chișinău se află la câțiva kilometri sud-vest de centru. Până la Arcul de Triumf poți ajunge cu mașina (taxi sau aplicații de transport) sau cu mijloacele de transport în comun.',
    sections: [
      {
        id: 'distanta',
        title: 'Distanța și timpul',
        content:
          'Aeroportul este situat la aproximativ <strong>13–15 km</strong> de Piața Marii Adunări Naționale. Cu mașina, deplasarea durează de obicei <strong>20–30 de minute</strong>, în funcție de trafic.',
      },
      {
        id: 'transport',
        title: 'Cu taxiul și aplicațiile',
        content:
          'În fața aeroportului există stații de taxi și funcționează aplicații de transport local. Tarifele variază; recomandăm confirmarea prețului înainte de plecare sau folosirea unei aplicații cu preț afișat.',
      },
      {
        id: 'autobuz',
        title: 'Cu transportul în comun',
        content:
          'Există linii de autobuze și microbuze care leagă aeroportul de centru. Numărul liniei și programul pot varia; verifică la fața locului orarul actualizat sau site-ul aeroportului.',
      },
    ],
    faq: [
      {
        question: 'Cât e drumul de la aeroport la centru?',
        answer: 'Aproximativ 13–15 km, respectiv 20–30 de minute cu mașina.',
      },
      {
        question: 'E recomandat taxiul sau autobuzul?',
        answer:
          'Pentru confort și bagaje, taxiul/aplicațiile sunt comode; autobuzul este opțiunea mai economică.',
      },
      {
        question: 'Unde găsesc orarul autobuzelor?',
        answer:
          'La fața locului, pe panourile stației, sau pe site-ul Aeroportului Internațional Chișinău.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'de-la-gara': {
    title: 'De la Gara Feroviară la Arcul de Triumf | Ghid independent',
    description:
      'Cum ajungi de la Gara Feroviară din Chișinău la Arcul de Triumf: troleibuz, autobuz, taxi și timpi orientativi.',
    h1: 'De la Gara Feroviară la Arcul de Triumf',
    intro:
      'Gara Feroviară din Chișinău se află în partea de nord a orașului, la câțiva kilometri de centru. De acolo până la Arcul de Triumf poți merge cu transportul în comun sau cu taxiul.',
    sections: [
      {
        id: 'distanta',
        title: 'Distanța',
        content:
          'Gara este situată la aproximativ <strong>2–3 km</strong> de Piața Marii Adunări Naționale. Pe jos, traseul este parcurs în circa 30–40 de minute; cu transportul în comun durează mai puțin.',
      },
      {
        id: 'transport',
        title: 'Cu transportul în comun',
        content:
          'Din zona gării circulă troleibuze, autobuze și microbuze spre centru. Numerele de linii și orarele se schimbă; verifică indicatoarele de la stație sau aplicațiile locale de transport.',
      },
      {
        id: 'taxi',
        title: 'Cu taxiul',
        content:
          'O cursă scurtă cu taxiul sau o aplicație de transport duce la centru în câteva minute, în funcție de trafic.',
      },
    ],
    faq: [
      {
        question: 'Cât e de la gară la Arcul de Triumf?',
        answer: 'Aproximativ 2–3 km; circa 30–40 de minute pe jos sau mai puțin cu transportul.',
      },
      {
        question: 'Merge troleibuzul spre centru?',
        answer:
          'Da, din zona gării circulă troleibuze și autobuze spre centru; verifică numărul liniei la stație.',
      },
      {
        question: 'E departe de mers pe jos?',
        answer:
          'Nu este foarte departe, dar cu transportul în comun ajungi mai repede și mai comod.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'de-la-autogara-centrala': {
    title: 'De la Autogara Centrală la Arcul de Triumf | Ghid independent',
    description:
      'Cum ajungi de la Autogara Centrală din Chișinău la Arcul de Triumf cu transportul în comun sau taxiul.',
    h1: 'De la Autogara Centrală la Arcul de Triumf',
    intro:
      'Autogara Centrală deservește cursele interurbane și este situată la marginea zonei centrale. De acolo la Arcul de Triumf poți ajunge cu autobuzul/microbuzul sau cu taxiul.',
    sections: [
      {
        id: 'distanta',
        title: 'Distanța',
        content:
          'Autogara Centrală se află la aproximativ <strong>3–4 km</strong> de Piața Marii Adunări Naționale. Cu transportul în comun ajungi în centru în 15–25 de minute, în funcție de traseu.',
      },
      {
        id: 'transport',
        title: 'Cu transportul în comun',
        content:
          'Din fața autogării pleacă autobuze și microbuze spre centru. Linia și orarul pot varia; confirmă la ghișeu sau pe panoul stației.',
      },
      {
        id: 'taxi',
        title: 'Cu taxiul',
        content:
          'O cursă cu taxiul sau o aplicație de transport este scurtă și comodă, mai ales dacă ai bagaje.',
      },
    ],
    faq: [
      {
        question: 'Cât e de la autogară la centru?',
        answer: 'Aproximativ 3–4 km, respectiv 15–25 de minute cu transportul în comun.',
      },
      {
        question: 'Ce mijloc de transport aleg?',
        answer: 'Microbuzele/autobuzele sunt economice; taxiul este mai comod cu bagaje.',
      },
      {
        question: 'Autogara e în centru?',
        answer:
          'E la marginea zonei centrale, la câțiva kilometri de Piața Marii Adunări Naționale.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  parcare: {
    title: 'Parcare lângă Arcul de Triumf din Chișinău | Ghid independent',
    description:
      'Unde poți parca mașina lângă Arcul de Triumf și Piața Marii Adunări Naționale: parcări cu plată, tarife și recomandări.',
    h1: 'Parcare lângă Arcul de Triumf',
    intro:
      'Zona centrală din jurul Pieței Marii Adunări Naționale are parcări cu plată la sol și în spații amenajate. În week-end și în zilele cu evenimente, locurile se ocupă rapid.',
    sections: [
      {
        id: 'optiuni',
        title: 'Opțiuni de parcare',
        content:
          'În imediata apropiere a pieței există <strong>parcări cu plată</strong>, atât la sol, cât și în incinte amenajate. Tarifele diferă de la o zonă la alta și se actualizează frecvent.',
      },
      {
        id: 'tarife',
        title: 'Despre tarife',
        content:
          'Nu putem confirma un tarif fix; plățile se fac de obicei prin parcometre sau aplicații locale. Recomandăm verificarea afișajului de la fața locului înainte de a lăsa mașina.',
      },
      {
        id: 'recomandari',
        title: 'Recomandări',
        content:
          'Dacă vizitezi centrul în timpul zilei, sosește mai devreme pentru un loc. Alternativa comodă este transportul în comun, care elimină grija parcării.',
      },
    ],
    faq: [
      {
        question: 'E parcare plătită în centru?',
        answer:
          'Da, zona Pieței Marii Adunări Naționale are parcări cu plată la sol și amenajate.',
      },
      {
        question: 'Cât costă parcarea?',
        answer: 'Tarifele variază pe zone și se actualizează; verifică afișajul parcometrului la fața locului.',
      },
      {
        question: 'Unde e mai ușor de parcat?',
        answer:
          'Sosește dimineața sau folosește transportul în comun pentru a evita aglomerația.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  accesibilitate: {
    title: 'Accesibilitate la Arcul de Triumf din Chișinău | Ghid independent',
    description:
      'Accesul cu căruciorul, pentru persoane cu dizabilități și cu copii mici la Arcul de Triumf și în piața centrală.',
    h1: 'Accesibilitate la Arcul de Triumf',
    intro:
      'Arcul de Triumf este amplasat într-o piață pietonală, plată și pavată, ceea ce îl face accesibil pentru majoritatea vizitatorilor, inclusiv persoane cu dizabilități de mobilitate, folositori de cărucior sau părinți cu copii mici.',
    sections: [
      {
        id: 'teren',
        title: 'Teren și pavaj',
        content:
          'Piața este <strong>plată și pavată</strong>, fără trepte la nivelul solului. Accesul spre monument și spre Catedrala „Nașterea Domnului” se face pe alei accesibile.',
      },
      {
        id: 'servicii',
        title: 'Servicii utile',
        content:
          'În zona centrală există bănci, iluminat și treceri de pietoni semnalizate. Toaletele publice sunt limitate; cele mai apropiate se găsesc în incintele marilor clădiri sau ale cafenelelor.',
      },
      {
        id: 'recomandari',
        title: 'Recomandări',
        content:
          'În zilele călduroase, umbra naturală este redusă în piață; ia apă și o pălărie. În evenimentele mari, suprafața devine aglomerată și mai greu de străbătut cu căruciorul.',
      },
    ],
    faq: [
      {
        question: 'E accesibil cu căruciorul?',
        answer: 'Da, piața este plată și pavată, accesibilă cu căruciorul și scaunul cu rotile.',
      },
      {
        question: 'Sunt trepte la monument?',
        answer: 'Nu, accesul la nivelul solului este fără trepte.',
      },
      {
        question: 'Unde găsesc toalete publice?',
        answer: 'Sunt limitate în piață; cele mai comode sunt în cafenelele și clădirile publice din jur.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'clopotnita-catedralei': {
    title: 'Clopotnița Catedralei din Chișinău | Ghid independent',
    description:
      'Clopotnița Catedralei Mitropolitane „Nașterea Domnului” din Chișinău și legătura sa cu ansamblul central.',
    h1: 'Clopotnița Catedralei „Nașterea Domnului”',
    intro:
      'Clopotnița este turnul-clopotniță al Catedralei Mitropolitane „Nașterea Domnului”, aflată chiar lângă Arcul de Triumf. Împreună cu parcul și piața, formează ansamblul central simbolic al Chișinăului.',
    sections: [
      {
        id: 'descriere',
        title: 'Descriere',
        content:
          'Clopotnița este o structură distinctă, așezată în apropierea catedralei, din care se anunțau slujbele și evenimentele. Este parte a ansamblului religios și urban care definește centrul istoric.',
      },
      {
        id: 'legatura',
        title: 'Legătura cu Arcul de Triumf',
        content:
          'Arcul de Triumf a fost gândit ca un punct de intrare ceremonial spre acest ansamblu catedrală–clopotniță–piață. Cele două monumente se completează vizual și istoric.',
      },
      {
        id: 'istoric',
        title: 'Notă istorică',
        content:
          'Catedrala și clopotnița au o istorie legată de prima jumătate a secolului al XIX-lea. Detaliile exacte de construcție și modificările ulterioare sunt documentate de instituțiile de patrimoniu local.',
      },
    ],
    faq: [
      {
        question: 'Unde e clopotnița catedralei?',
        answer: 'În imediata apropiere a Catedralei „Nașterea Domnului”, lângă Arcul de Triumf.',
      },
      {
        question: 'Se poate urca în clopotniță?',
        answer: 'Accesul depinde de programul cultului; verifică la fața locului.',
      },
      {
        question: 'Ce legătură are cu Arcul de Triumf?',
        answer: 'Ambele fac parte din același ansamblu central ceremonial al Chișinăului.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'parcul-catedralei': {
    title: 'Parcul Catedralei din Chișinău | Ghid independent',
    description:
      'Parcul din fața Catedralei „Nașterea Domnului” din Chișinău: oaza verde între monument, catedrală și piață.',
    h1: 'Parcul Catedralei din Chișinău',
    intro:
      'Parcul Catedralei este spațiul verde din fața Catedralei „Nașterea Domnului”, între aceasta și Piața Marii Adunări Naționale. Este un loc de relaxare la câțiva pași de Arcul de Triumf.',
    sections: [
      {
        id: 'descriere',
        title: 'Descriere',
        content:
          'Parcul este un mic spațiu amenajat cu alei, bănci și vegetație, care leagă vizual catedrala de piață. Este tranzitat natural de cei care vin să vadă Arcul de Triumf.',
      },
      {
        id: 'alley',
        title: 'Aleea Clasicilor',
        content:
          'În acest parc se află Aleea Clasicilor Literaturii Române, un traseu cu busturi ale unor scriitori importanți. Detaliile despre Aleea Clasicilor sunt pe pagina dedicată.',
      },
      {
        id: 'rol',
        title: 'Rolul în centru',
        content:
          'Parcul funcționează ca o „pauză” verde între monumentele centrale și este locul unde localnicii se opresc în drum spre serviciu sau în plimbările de weekend.',
      },
    ],
    faq: [
      {
        question: 'Unde e parcul catedralei?',
        answer: 'În fața Catedralei „Nașterea Domnului”, între catedrală și piață.',
      },
      {
        question: 'Are busturi de scriitori?',
        answer: 'Da, în parc se află Aleea Clasicilor cu busturi de scriitori.',
      },
      {
        question: 'E aproape de Arcul de Triumf?',
        answer: 'Da, la câțiva pași.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'parcul-stefan-cel-mare': {
    title: 'Parcul „Ștefan cel Mare” din Chișinău | Ghid independent',
    description:
      'Parcul central „Ștefan cel Mare” din Chișinău, cu monumentul omonim, la scurtă distanță de Arcul de Triumf.',
    h1: 'Parcul „Ștefan cel Mare” din Chișinău',
    intro:
      'Parcul „Ștefan cel Mare” este unul dintre cele mai cunoscute spații verzi ale Chișinăului, aflat pe bulevardul cu același nume, la câteva minute de mers de Arcul de Triumf.',
    sections: [
      {
        id: 'descriere',
        title: 'Descriere',
        content:
          'Parcul este un lung spațiu verde cu alei, bănci și vegetație, foarte frecventat de localnici. În capătul său se află Monumentul lui Ștefan cel Mare.',
      },
      {
        id: 'monument',
        title: 'Monumentul lui Ștefan cel Mare',
        content:
          'În parc se află statuia ecvestră a lui Ștefan cel Mare (domnitorul Moldovei), un simbol al orașului. Detaliile sunt pe pagina dedicată monumentului.',
      },
      {
        id: 'legatura',
        title: 'Legătura cu centrul',
        content:
          'Din parc poți ajunge pe jos, în 10–15 minute, la Arcul de Triumf și la Piața Marii Adunări Naționale, trecând prin centrul istoric.',
      },
    ],
    faq: [
      {
        question: 'Unde e parcul Ștefan cel Mare?',
        answer: 'Pe bulevardul „Ștefan cel Mare”, la câteva minute de Arcul de Triumf.',
      },
      {
        question: 'Are un monument?',
        answer: 'Da, statuia lui Ștefan cel Mare se află în parc.',
      },
      {
        question: 'Merită combinat cu Arcul de Triumf?',
        answer: 'Da, sunt la câteva minute distanță, pe jos.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'monumentul-stefan-cel-mare': {
    title: 'Monumentul lui Ștefan cel Mare din Chișinău | Ghid independent',
    description:
      'Statuia lui Ștefan cel Mare din Chișinău: istoric, autor și cum ajungi de la Arcul de Triumf.',
    h1: 'Monumentul lui Ștefan cel Mare',
    intro:
      'Monumentul lui Ștefan cel Mare (domnitorul Moldovei, secolul al XV-lea) este una dintre cele mai cunoscute opere de artă publică din Chișinău, situată în parcul cu același nume, la câteva minute de Arcul de Triumf.',
    sections: [
      {
        id: 'descriere',
        title: 'Descriere',
        content:
          'Statuia este o operă de sculptură în bronz, așezată pe un soclu, în mijlocul parcului „Ștefan cel Mare”. Este un punct de întâlnire cunoscut și un simbol al identității locale.',
      },
      {
        id: 'autor',
        title: 'Autor și istoric',
        content:
          'Monumentul a fost dezvelit în <strong>1928</strong> și este opera sculptorului <strong>Alexandru Plămădeală</strong>. Datele exacte și istoricul comemorărilor sunt documentate de muzeele locale.',
      },
      {
        id: 'legatura',
        title: 'Legătura cu Arcul de Triumf',
        content:
          'Ambele sunt simboluri ale Chișinăului la distanță scurtă una de alta; le poți vizita împreună într-o plimbare de o oră prin centru.',
      },
    ],
    faq: [
      {
        question: 'Cine a sculptat monumentul?',
        answer: 'Sculptorul Alexandru Plămădeală; a fost dezvelit în 1928.',
      },
      {
        question: 'Unde se află?',
        answer: 'În parcul „Ștefan cel Mare”, la câteva minute de Arcul de Triumf.',
      },
      {
        question: 'E departe de Arcul de Triumf?',
        answer: 'Nu, se ajunge pe jos în 10–15 minute.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'aleea-clasicilor': {
    title: 'Aleea Clasicilor din Chișinău | Ghid independent',
    description:
      'Aleea Clasicilor Literaturii Române din Chișinău: busturi de scriitori în parcul catedralei, la pas de Arcul de Triumf.',
    h1: 'Aleea Clasicilor Literaturii Române',
    intro:
      'Aleea Clasicilor este un traseu sculptural din parcul Catedralei, cu busturi ale unor scriitori români importanți. Este o oprire liniștită la câțiva pași de Arcul de Triumf.',
    sections: [
      {
        id: 'descriere',
        title: 'Descriere',
        content:
          'Aleea reunește <strong>busturi</strong> ale unor personalități ale literaturii române, dispuse de-a lungul unei alei din parc. Este un spațiu de promenadă culturală, gratuit și deschis.',
      },
      {
        id: 'figuri',
        title: 'Cine este reprezentat',
        content:
          'Printre figuri se numără scriitori canonici ai culturii române. Pentru lista completă și context, recomandăm ghidurile muzeelor locale din Chișinău.',
      },
      {
        id: 'legatura',
        title: 'Legătura cu centrul',
        content:
          'Aleea pornește din parcul Catedralei și se leagă natural de traseul spre Arcul de Triumf și Piața Marii Adunări Naționale.',
      },
    ],
    faq: [
      {
        question: 'Ce este Aleea Clasicilor?',
        answer: 'Un traseu cu busturi de scriitori români, în parcul Catedralei.',
      },
      {
        question: 'Se plătește intrarea?',
        answer: 'Nu, aleea este în parc, liber accesibilă.',
      },
      {
        question: 'E aproape de Arcul de Triumf?',
        answer: 'Da, la câțiva pași, în parcul Catedralei.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'strada-eugen-doga': {
    title: 'Strada Eugen Doga din Chișinău | Ghid independent',
    description:
      'Strada Eugen Doga din Chișinău: despre toponimia centrală și legătura cu cultura orașului, la pas de Arcul de Triumf.',
    h1: 'Strada Eugen Doga din Chișinău',
    intro:
      'Strada Eugen Doga poartă numele compozitorului moldovean Eugen Doga, una dintre figurile culturale cele mai cunoscute ale țării. Este parte din rețeaua de străzi centrale a Chișinăului.',
    sections: [
      {
        id: 'descriere',
        title: 'Despre stradă',
        content:
          'După modelul multor orașe, Chișinăul își actualizează toponimia pentru a onora personalități culturale. Strada Eugen Doga este un astfel de exemplu, situat în zona centrală, accesibilă pe jos de la Arcul de Triumf.',
      },
      {
        id: 'figura',
        title: 'Eugen Doga',
        content:
          'Eugen Doga este un compozitor moldovean cunoscut, în special pentru muzică de film și valsuri. Prezența numelui său în centrul orașului reflectă importanța culturii în identitatea locală.',
      },
      {
        id: 'legatura',
        title: 'Legătura cu vizita',
        content:
          'Strada poate fi inclusă într-o plimbare urbană care leagă Arcul de Triumf de celelalte puncte centrale; nu este un obiectiv turistic în sine, ci o parte a țesăturii urbane.',
      },
    ],
    faq: [
      {
        question: 'Cine a fost Eugen Doga?',
        answer: 'Un compozitor moldovean cunoscut, în special pentru muzică de film și valsuri.',
      },
      {
        question: 'Unde e strada?',
        answer: 'În zona centrală a Chișinăului, accesibilă pe jos de la Arcul de Triumf.',
      },
      {
        question: 'E un obiectiv turistic?',
        answer: 'Nu în mod direct; este o stradă centrală cu nume cultural, parte a unei plimbări urbane.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'ghid-educational': {
    title: 'Ghid educațional: Arcul de Triumf din Chișinău | Ghid independent',
    description:
      'Resurse și idei pentru profesori și elevi despre Arcul de Triumf din Chișinău: istorie, arhitectură și simboluri.',
    h1: 'Ghid educațional: Arcul de Triumf',
    intro:
      'Această pagină reunește sugestii pentru o vizită sau un proiect școlar despre Arcul de Triumf: context istoric, limbaj arhitectural și semnificație simbolică. Este un material de plecare, nu o sursă oficială.',
    sections: [
      {
        id: 'context',
        title: 'Context istoric',
        content:
          'Monumentul comemorează victoria Imperiului Rus în Războiul Ruso-Turc (1828–1829) și a fost construit în 1840–1841. Discuția poate pleca de la rolul arcurilor de triumf în Europa secolului al XIX-lea.',
      },
      {
        id: 'arhitectura',
        title: 'Limbaj arhitectural',
        content:
          'Observați stilul neoclasic, cele patru coloane, basoreliefurile și proporțiile. Se poate compara cu alte monumente comemorative din oraș.',
      },
      {
        id: 'simboluri',
        title: 'Semnificație',
        content:
          'Arcul leagă centrul modern de epoca țaristă și de identitatea locală. Încurajăm verificarea detaliilor la muzeele și instituțiile de patrimoniu din Chișinău.',
      },
    ],
    faq: [
      {
        question: 'Pentru ce clasă e potrivit?',
        answer: 'Pentru istorie și arte, la gimnaziu și liceu, ca exemplu de monument comemorativ.',
      },
      {
        question: 'E gratuit pentru școli?',
        answer: 'Monumentul este în aer liber și liber accesibil; nu este nevoie de programare.',
      },
      {
        question: 'Unde găsesc surse sigure?',
        answer: 'Muzeele locale și Agenția de Inspectare și Restaurare a Monumentelor.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  desen: {
    title: 'Desen și schițe la Arcul de Triumf | Ghid independent',
    description:
      'Sfaturi pentru desen, schițe și fotografie la Arcul de Triumf din Chișinău: unghiuri, lumină și echipament.',
    h1: 'Desen și schițe la Arcul de Triumf',
    intro:
      'Arcul de Triumf este un subiect accesibil pentru desen în plein-air: forme clare, proporții echilibrate și un cadru urban liniștit. Iată câteva sugestii.',
    sections: [
      {
        id: 'unghiuri',
        title: 'Unghiuri',
        content:
          'Unghiul din față, pe axul dintre catedrală și arc, oferă compoziția clasică. Profilele de pe laturile înguste evidențiază coloanele și basoreliefurile.',
      },
      {
        id: 'lumina',
        title: 'Lumina',
        content:
          'Diminețile și serile oferă lumină laterală blândă, ideală pentru relief. Evită amiază, când umbra dispare sub arc.',
      },
      {
        id: 'echipament',
        title: 'Echipament',
        content:
          'Un bloc notes, creioane și o bancă în parcul catedralei sunt suficiente. Pentru fotografie, un teleobiectiv scurt comprimă axul catedrală–arc.',
      },
    ],
    faq: [
      {
        question: 'De unde desenez cel mai bine?',
        answer: 'Din parcul catedralei, pe axul dintre arc și catedrală.',
      },
      {
        question: 'Când e lumina ideală?',
        answer: 'Dimineața devreme și seara, pentru relief și culori calde.',
      },
      {
        question: 'E nevoie de permisiune?',
        answer: 'Nu, monumentul este în spațiul public; respectă doar spațiul evenimentelor oficiale.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'chisinau-vs-bucuresti': {
    title: 'Arcul de Triumf din Chișinău vs București | Ghid independent',
    description:
      'Comparație între Arcul de Triumf din Chișinău și cel din București: istoric, dimensiuni și semnificație.',
    h1: 'Chișinău vs București: arcele de triumf',
    intro:
      'Atât Chișinăul, cât și Bucureștiul au câte un Arcul de Triumf. Cele două monumente diferă prin epocă, dimensiuni și context istoric.',
    sections: [
      {
        id: 'chisinau',
        title: 'Arcul din Chișinău',
        content:
          'Construit în <strong>1840–1841</strong>, înalt de circa <strong>13 metri</strong>, în stil neoclasic, comemorează victoria Ruso-Turcă (1828–1829). Este mai mic și mai vechi decât cel din București.',
      },
      {
        id: 'bucuresti',
        title: 'Arcul din București',
        content:
          'Bucureștiul are un Arcul de Triumf construit inițial din lemn/cretă în <strong>1922</strong> și reconstruit în piatră între <strong>1935–1936</strong>, pentru încoronarea Regelui Carol al II-lea. Este mai înalt (circa 27 m).',
      },
      {
        id: 'comparatie',
        title: 'În sinteză',
        content:
          'Ambele sunt arcuri comemorative, dar Chișinău îl leagă de un război din secolul al XIX-lea, iar Bucureștiul de evenimentele din România interbelică. Dimensiunile și stilul reflectă epocile diferite.',
      },
    ],
    faq: [
      {
        question: 'Care e mai vechi?',
        answer: 'Cel din Chișinău (1840–1841) este mai vechi decât cel din București (reconstruit 1935–1936).',
      },
      {
        question: 'Care e mai înalt?',
        answer: 'Cel din București, de circa 27 m, față de circa 13 m la Chișinău.',
      },
      {
        question: 'Au același sens?',
        answer: 'Nu exact: contextul istoric și comemorările diferă.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'cu-copiii': {
    title: 'Vizita la Arcul de Triumf cu copiii | Ghid independent',
    description:
      'Sfaturi pentru o vizită cu copiii la Arcul de Triumf din Chișinău: siguranță, distanță, timp și ce să faci în jur.',
    h1: 'La Arcul de Triumf cu copiii',
    intro:
      'Centrul Chișinăului este prietenos cu familiile: piețele sunt plate și pietonale, iar Arcul de Triumf se vizitează rapid. Iată cum să organizezi o ieșire cu cei mici.',
    sections: [
      {
        id: 'siguranta',
        title: 'Siguranță',
        content:
          'Piața este pavată și fără trafic în zona pietonală. Supraveghează copiii la marginea carosabilului și în zilele cu evenimente aglomerate.',
      },
      {
        id: 'timp',
        title: 'Timp și ritm',
        content:
          'O oprire la arc durează 15–30 de minute. Adaugă parcul catedralei și, opțional, parcul „Ștefan cel Mare” pentru o plimbare de o oră.',
      },
      {
        id: 'activitati',
        title: 'Ce să faci',
        content:
          'Numără coloanele, caută basoreliefurile, povestește despre ce este un arc de triumf. Muzeele din apropiere au secțiuni potrivite pentru copii.',
      },
    ],
    faq: [
      {
        question: 'E sigur pentru copii?',
        answer: 'Da, zona pietonală este plată și fără trafic.',
      },
      {
        question: 'Cât timp ne trebuie?',
        answer: '15–30 de minute la arc, o oră cu parcurile.',
      },
      {
        question: 'Ce muzee sunt aproape?',
        answer: 'Muzeul Național de Istorie și Muzeul Național de Artă sunt la câteva minute.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  anotimpuri: {
    title: 'Cel mai bun anotimp pentru Arcul de Triumf | Ghid independent',
    description:
      'Când să vizitezi Arcul de Triumf din Chișinău: primăvară, vară, toamnă și iarnă, cu avantaje pe fiecare sezon.',
    h1: 'Cel mai bun anotimp pentru vizită',
    intro:
      'Fiind un monument în aer liber, Arcul de Triumf poate fi vizitat tot anul. Fiecare anotimp are specificul său în Chișinău.',
    sections: [
      {
        id: 'cald',
        title: 'Primăvară și vară',
        content:
          'Din aprilie până în septembrie, vremea este mai blândă și parcurile sunt verzi. Serile de vară sunt plăcute, iar monumentul este iluminat.',
      },
      {
        id: 'toamna',
        title: 'Toamnă',
        content:
          'Septembrie și octombrie aduc lumini calde și aglomerație mai redusă — un moment excelent pentru fotografie.',
      },
      {
        id: 'iarna',
        title: 'Iarnă',
        content:
          'Iarna, monumentul sub zăpadă are un aspect aparte. Temperaturile pot fi scăzute; îmbracă-te călduros și verifică prognoza.',
      },
    ],
    faq: [
      {
        question: 'Care e cel mai bun sezon?',
        answer: 'Primăvara–toamna, pentru vreme blândă; toamna este excelentă pentru fotografie.',
      },
      {
        question: 'Se vizitează iarna?',
        answer: 'Da, dar pregătește-te pentru frig.',
      },
      {
        question: 'E deschis tot anul?',
        answer: 'Da, fiind în aer liber, este accesibil tot timpul anului.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'muzeul-national-de-istorie': {
    title: 'Muzeul Național de Istorie (Chișinău) | Ghid independent',
    description:
      'Muzeul Național de Istorie a Moldovei din Chișinău: ce să vezi, unde este și cum ajungi de la Arcul de Triumf.',
    h1: 'Muzeul Național de Istorie a Moldovei',
    intro:
      'Muzeul Național de Istorie a Moldovei este una dintre instituțiile de bază ale capitalei, situată pe strada 31 August 1989, la câteva minute de mers de Arcul de Triumf.',
    sections: [
      {
        id: 'descriere',
        title: 'Descriere',
        content:
          'Muzeul găzduiește colecții de arheologie, istorie și etnografie legate de spațiul moldovenesc. În fața clădirii se află o replică a Lupoaicei Capitoline, iar în curte este celebrul butoi uriaș de vin („Crama”).',
      },
      {
        id: 'detalii',
        title: 'Detalii practice',
        content:
          'Programul și taxa de intrare pot varia; recomandăm verificarea pe site-ul oficial al muzeului înainte de vizită.',
      },
      {
        id: 'legatura',
        title: 'Legătura cu Arcul de Triumf',
        content:
          'De la muzeu la arc ajungi pe jos în 10–15 minute, străbătând centrul istoric.',
      },
    ],
    faq: [
      {
        question: 'Unde e muzeul?',
        answer: 'Pe strada 31 August 1989, la câteva minute de Arcul de Triumf.',
      },
      {
        question: 'Ce are special?',
        answer: 'Colecții de istorie a Moldovei și butoiul uriaș de vin din curte.',
      },
      {
        question: 'Se plătește intrarea?',
        answer: 'Taxa poate varia; verifică site-ul oficial al muzeului.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'muzeul-national-de-arta': {
    title: 'Muzeul Național de Artă (Chișinău) | Ghid independent',
    description:
      'Muzeul Național de Artă al Moldovei din Chișinău: colecții, clădire și drumul de la Arcul de Triumf.',
    h1: 'Muzeul Național de Artă al Moldovei',
    intro:
      'Muzeul Național de Artă al Moldovei este situat în centrul capitalei, pe strada 31 August 1989, la scurtă distanță de Arcul de Triumf și de Piața Marii Adunări Naționale.',
    sections: [
      {
        id: 'descriere',
        title: 'Descriere',
        content:
          'Muzeul reunește artă moldovenească și europeană, într-o clădire istorică din centrul orașului. Este o oprire naturală într-o zi culturală în centru.',
      },
      {
        id: 'detalii',
        title: 'Detalii practice',
        content:
          'Programul și taxa de vizitare pot varia; recomandăm verificarea pe site-ul oficial înainte de vizită.',
      },
      {
        id: 'legatura',
        title: 'Legătura cu Arcul de Triumf',
        content:
          'De la muzeu la arc ajungi pe jos în câteva minute, trecând prin piața centrală.',
      },
    ],
    faq: [
      {
        question: 'Unde e muzeul de artă?',
        answer: 'Pe strada 31 August 1989, în centru, aproape de Arcul de Triumf.',
      },
      {
        question: 'Ce tip de artă are?',
        answer: 'Artă moldovenească și europeană, într-o clădire istorică.',
      },
      {
        question: 'Se plătește intrarea?',
        answer: 'Taxa poate varia; verifică site-ul oficial.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'traseu-jumatate-de-zi': {
    title: 'Traseu de jumătate de zi prin centru (Chișinău) | Ghid independent',
    description:
      'Un traseu de jumătate de zi care leagă Arcul de Triumf de catedrală, parcuri, muzee și piața centrală.',
    h1: 'Traseu de jumătate de zi prin centru',
    intro:
      'Dacă ai câteva ore, acest traseu te duce prin principalele puncte centrale ale Chișinăului, pornind de la Arcul de Triumf.',
    sections: [
      {
        id: 'etapa1',
        title: 'Etapa 1 — Monumentul',
        content:
          'Începe la Arcul de Triumf (30 min): fotografiază, citește plăcuțele, traversează spre catedrală.',
      },
      {
        id: 'etapa2',
        title: 'Etapa 2 — Catedrala și parcul',
        content:
          'Vizitează Catedrala „Nașterea Domnului” și Aleea Clasicilor (45 min).',
      },
      {
        id: 'etapa3',
        title: 'Etapa 3 — Muzee și piață',
        content:
          'Alege un muzeu (Istorie sau Artă) și încheie în Piața Marii Adunări Naționale (1–1,5 h).',
      },
    ],
    faq: [
      {
        question: 'Cât durează traseul?',
        answer: 'Aproximativ 3–4 ore, cu muzeele incluse.',
      },
      {
        question: 'E fezabil pe jos?',
        answer: 'Da, toate punctele sunt la câteva minute distanță.',
      },
      {
        question: 'Ce muzeu aleg?',
        answer: 'Istorie (cu butoiul de vin) sau Artă, în funcție de interes.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'chisinau-intr-o-zi': {
    title: 'Chișinău într-o zi: traseu complet | Ghid independent',
    description:
      'Cum să vezi Chișinăul într-o zi, pornind de la Arcul de Triumf: monumente, parcuri, muzee și bulevardele centrale.',
    h1: 'Chișinău într-o zi',
    intro:
      'Cu o zi la dispoziție, poți combina Arcul de Triumf cu cele mai importante puncte ale capitalei într-un traseu pe jos, cu pauze de masă.',
    sections: [
      {
        id: 'dimineata',
        title: 'Dimineața',
        content:
          'Arcul de Triumf, Catedrala „Nașterea Domnului”, parcul catedralei și Aleea Clasicilor (2 h).',
      },
      {
        id: 'pranz',
        title: 'Prânz și muzee',
        content:
          'Pauză de masă în centru, apoi Muzeul Național de Istorie și, opțional, Muzeul Național de Artă (2–3 h).',
      },
      {
        id: 'dupa-amiaza',
        title: 'După-amiaza',
        content:
          'Bulevardul „Ștefan cel Mare”, parcul omonim și Monumentul lui Ștefan cel Mare, încheind seara în piața centrală (2 h).',
      },
    ],
    faq: [
      {
        question: 'Se poate face pe jos?',
        answer: 'În mare parte da; distanțele în centru sunt scurte.',
      },
      {
        question: 'Cât timp îmi trebuie?',
        answer: 'O zi întreagă, cu pauze.',
      },
      {
        question: 'De unde încep?',
        answer: 'De la Arcul de Triumf, în piața centrală.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'obiective-gratuite': {
    title: 'Obiective gratuite în centrul Chișinăului | Ghid independent',
    description:
      'Ce poți vedea gratuit în centrul Chișinăului, pornind de la Arcul de Triumf: monumente, parcuri și piețe.',
    h1: 'Obiective gratuite în centru',
    intro:
      'Multe dintre atracțiile centrale ale Chișinăului sunt libere accesibil, fără taxă. Iată o listă de plecare.',
    sections: [
      {
        id: 'monumente',
        title: 'Monumente și piețe',
        content:
          'Arcul de Triumf, Piața Marii Adunări Naționale, Catedrala „Nașterea Domnului” (interiorul este biserică) și Monumentul lui Ștefan cel Mare sunt libere.',
      },
      {
        id: 'parcuri',
        title: 'Parcuri și alei',
        content:
          'Parcul catedralei cu Aleea Clasicilor și parcul „Ștefan cel Mare” sunt spații verzi deschise, fără taxă.',
      },
      {
        id: 'muzee',
        title: 'Despre muzee',
        content:
          'Muzeele (Istorie, Artă) pot avea taxă de intrare; verifică pe site-ul fiecăruia. Evenimentele din piață sunt, de regulă, libere.',
      },
    ],
    faq: [
      {
        question: 'Ce e gratuit în centru?',
        answer: 'Arcul de Triumf, piața, catedrala (ca biserică), parcurile și aleea clasicilor.',
      },
      {
        question: 'Muzeele sunt gratuite?',
        answer: 'Nu neapărat; verifică taxa pe site-ul muzeului.',
      },
      {
        question: 'E nevoie de bilet pentru arc?',
        answer: 'Nu, monumentul este în aer liber și liber accesibil.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'chisinau-pe-ploaie': {
    title: 'Chișinău pe ploaie: ce să faci | Ghid independent',
    description:
      'Idei pentru o zi ploioasă în Chișinău, pornind de la Arcul de Triumf: muzee, cafenele și privit monumentul de la adăpost.',
    h1: 'Chișinău pe ploaie',
    intro:
      'Dacă plouă, centrul Chișinăului rămâne vizitabil. Iată cum să îți organizezi ziua fără să depinzi de vreme.',
    sections: [
      {
        id: 'muzee',
        title: 'Muzee la adăpost',
        content:
          'Muzeul Național de Istorie și Muzeul Național de Artă oferă vizite la adăpost de ploaie și sunt la câteva minute de Arcul de Triumf.',
      },
      {
        id: 'cafenele',
        title: 'Pauze la cafenea',
        content:
          'Zona centrală are multe cafenele și locuri de stat la interior; folosește-le ca puncte de popas între obiective.',
      },
      {
        id: 'monumentul',
        title: 'Văzut de la adăpost',
        content:
          'Arcul de Triumf poate fi privit și fotografiat din trecere; poți folosi pasajele și intrările clădirilor pentru adăpost.',
      },
    ],
    faq: [
      {
        question: 'Ce fac dacă plouă?',
        answer: 'Vizitează muzeele din centru și fă pauze la cafenea.',
      },
      {
        question: 'Se poate vedea arcul pe ploaie?',
        answer: 'Da, dar rapid, de la adăpost; poartă umbrela.',
      },
      {
        question: 'Unde stau la uscat?',
        answer: 'Cafenelele și muzeele centrale sunt opțiuni la adăpost.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'unde-mananci': {
    title: 'Unde mânânci lângă Arcul de Triumf | Ghid independent',
    description:
      'Tipuri de locuri de mâncare în jurul Arcului de Triumf și al pieței centrale din Chișinău (fără recomandări de branduri).',
    h1: 'Unde mânânci lângă Arcul de Triumf',
    intro:
      'Zona centrală din jurul Arcului de Triumf și al Pieței Marii Adunări Naționale are multe opțiuni de masă. Această pagină descrie tipurile de locuri, fără a recomanda un anumit comerciant.',
    sections: [
      {
        id: 'tipuri',
        title: 'Tipuri de locuri',
        content:
          'În centru găsești <strong>cafenele</strong>, <strong>restaurante</strong> cu bucătărie locală și internațională, <strong>braserii</strong> și <strong>fast-food</strong>. Prețurile și meniurile diferă de la un loc la altul.',
      },
      {
        id: 'piata',
        title: 'Zona pieței',
        content:
          'Piața centrală și străzile adiacente concentrează cea mai mare varietate, la câțiva pași de monument. Este comod să iei masa între obiective.',
      },
      {
        id: 'nota',
        title: 'Notă',
        content:
          'Nu facem recomandări de branduri sau clasamente; alege în funcție de buget și preferințe, verificând recenziile actualizate ale clienților.',
      },
    ],
    faq: [
      {
        question: 'Unde e mai multe opțiuni?',
        answer: 'În jurul pieței centrale și pe străzile adiacente.',
      },
      {
        question: 'Recomandați un restaurant?',
        answer: 'Nu recomandăm branduri; descriem doar tipurile de locuri disponibile.',
      },
      {
        question: 'E scump în centru?',
        answer: 'Gama de prețuri este variată; compară meniurile la fața locului.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },

  'traseu-arhitectural': {
    title: 'Traseu arhitectural în centru (Chișinău) | Ghid independent',
    description:
      'Un traseu de arhitectură prin centrul Chișinăului: de la Arcul de Triumf la clădiri din secolele XIX–XX.',
    h1: 'Traseu arhitectural în centru',
    intro:
      'Centrul istoric al Chișinăului păstrează clădiri din secolele XIX și începutul secolului XX. Acest traseu le leagă pe cele mai accesibile, pornind de la Arcul de Triumf.',
    sections: [
      {
        id: 'etapa1',
        title: 'Etapa 1 — Neoclasicul',
        content:
          'Arcul de Triumf (1840–1841) și Catedrala „Nașterea Domnului” definesc limbajul neoclasic al pieței centrale.',
      },
      {
        id: 'etapa2',
        title: 'Etapa 2 — Clădiri publice',
        content:
          'În jurul pieței și pe bulevardele adiacente se află foste clădiri publice și bancare cu fațade istorice; observă ornamentația și materialele.',
      },
      {
        id: 'etapa3',
        title: 'Etapa 3 — Bulevardul central',
        content:
          'Bulevardul „Ștefan cel Mare” reunește arhitectură comercială și instituțională de epoci diferite, până la parcul omonim.',
      },
    ],
    faq: [
      {
        question: 'Ce stil domină centrul?',
        answer: 'Neoclasicul secolului al XIX-lea, completat de clădiri din începutul secolului XX.',
      },
      {
        question: 'E pe jos?',
        answer: 'Da, traseul este compact, în centru.',
      },
      {
        question: 'De unde încep?',
        answer: 'De la Arcul de Triumf, în piața centrală.',
      },
    ],
    updated: 'Actualizat: Octombrie 2026',
  },
};
