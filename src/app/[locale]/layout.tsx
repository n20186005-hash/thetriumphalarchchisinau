import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

const DOMAIN = 'thetriumphalarchchisinau.com';
const BASE_URL = `https://${DOMAIN}`;
const HERO_IMAGE = `${BASE_URL}/gallery/the-triumphal-arch-1.jpg`;
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/5fERqY3q8DvdoLFL6';
const GOVT_TOURISM_URL = 'https://turism.gov.md/';
const ATTRACTION_ID = `${BASE_URL}/#attraction`;

const SEO_ENTITIES = {
  en: {
    name: 'The Triumphal Arch',
    alternateName: ['The Triumphal Arch', 'Chișinău The Triumphal Arch'],
    description: 'Comprehensive visitor guide to The Triumphal Arch in Chișinău, Chișinău Municipality, Republic of Moldova.',
    streetAddress: 'Great National Assembly Square',
    addressLocality: 'Chișinău',
    addressRegion: 'Chișinău Municipality',
    postalCode: 'MD-2000',
    addressCountry: 'MD',
    latitude: 47.024783,
    longitude: 28.8326026,
    imageAlt: 'The Triumphal Arch - Main view in Chișinău, Republic of Moldova',
    ogTitle: 'The Triumphal Arch - Chișinău Travel Guide',
    ogDescription: 'Official visitor guide to The Triumphal Arch in Chișinău, Chișinău Municipality, Republic of Moldova.',
    faq: [
      {
        question: 'Where is The Triumphal Arch located?',
        answer: 'The Triumphal Arch is located in Great National Assembly Square, Chișinău, Chișinău Municipality, Republic of Moldova.'
      },
      {
        question: 'Is The Triumphal Arch free to visit?',
        answer: 'Yes, The Triumphal Arch is a public space and is free to visit year-round during daylight hours.'
      },
      {
        question: 'What are the best nearby attractions around The Triumphal Arch?',
        answer: 'Nearby attractions include Great National Assembly Square, Cathedral of Christ\'s Nativity, Presidential Palace, and Ștefan cel Mare Central Park, all within walking distance.'
      }
    ]
  },
  ro: {
    name: 'Arcul de Triumf',
    alternateName: ['Arcul de Triumf', 'Chișinău Arcul de Triumf'],
    description: 'Ghid complet de vizitare pentru Arcul de Triumf din Chișinău, Municipiul Chișinău, Republica Moldova.',
    streetAddress: 'Piața Marii Adunări Naționale',
    addressLocality: 'Chișinău',
    addressRegion: 'Municipiul Chișinău',
    postalCode: 'MD-2000',
    addressCountry: 'MD',
    latitude: 47.024783,
    longitude: 28.8326026,
    imageAlt: 'Arcul de Triumf - Vedere principală în Chișinău, Republica Moldova',
    ogTitle: 'Arcul de Triumf - Ghid de Călătorie Chișinău',
    ogDescription: 'Ghid oficial de vizitare pentru Arcul de Triumf din Chișinău, Municipiul Chișinău, Republica Moldova.',
    faq: [
      {
        question: 'Unde este situat Arcul de Triumf?',
        answer: 'Arcul de Triumf este situat în Piața Marii Adunări Naționale, Chișinău, Municipiul Chișinău, Republica Moldova.'
      },
      {
        question: 'Este gratuită vizitarea Arcului de Triumf?',
        answer: 'Da, Arcul de Triumf este un spațiu public și este gratuit de vizitat pe tot parcursul anului, în timpul orelor de zi.'
      },
      {
        question: 'Care sunt cele mai bune atracții din apropierea Arcului de Triumf?',
        answer: 'Atracțiile din apropiere includ Piața Marii Adunări Naționale, Catedrala „Nașterea Domnului”, Palatul Președinției și Parcul Central „Ștefan cel Mare”, toate la distanță scurtă de mers pe jos.'
      }
    ]
  },
  zh: {
    name: '凯旋门 The Triumphal Arch',
    alternateName: ['凯旋门', '基希讷乌凯旋门'],
    description: '摩尔多瓦共和国基希讷乌直辖市基希讷乌市凯旋门综合游客指南。',
    streetAddress: '大国民议会广场',
    addressLocality: '基希讷乌',
    addressRegion: '基希讷乌直辖市',
    postalCode: 'MD-2000',
    addressCountry: 'MD',
    latitude: 47.024783,
    longitude: 28.8326026,
    imageAlt: '凯旋门 - 摩尔多瓦共和国基希讷乌市主景',
    ogTitle: '凯旋门 - 基希讷乌旅行指南',
    ogDescription: '摩尔多瓦共和国基希讷乌直辖市基希讷乌市凯旋门官方游客指南。',
    faq: [
      {
        question: '凯旋门位于哪里？',
        answer: '凯旋门位于摩尔多瓦共和国基希讷乌直辖市基希讷乌市大国民议会广场。'
      },
      {
        question: '参观凯旋门需要门票吗？',
        answer: '是的，凯旋门是公共空间，全年白天时段均可免费参观。'
      },
      {
        question: '凯旋门周边有哪些值得游览的景点？',
        answer: '周边景点包括大国民议会广场、基督诞生大教堂、总统府和斯特凡大公中央公园，均在步行范围内。'
      }
    ]
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const l = (locale === 'zh' || locale === 'ro' || locale === 'en') ? locale : 'en';
  const entity = SEO_ENTITIES[l];

  const zhUrl = `${BASE_URL}/zh`;
  const enUrl = `${BASE_URL}/en`;
  const roUrl = `${BASE_URL}/ro`;
  
  let selfUrl = enUrl;
  if (locale === 'zh') selfUrl = zhUrl;
  if (locale === 'ro') selfUrl = roUrl;

  let ogLocale = 'en_US';
  if (locale === 'zh') ogLocale = 'zh_CN';
  if (locale === 'ro') ogLocale = 'ro_RO';

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'ro': roUrl,
        'x-default': roUrl,
      },
    },
    openGraph: {
      title: entity.ogTitle,
      description: entity.ogDescription,
      url: selfUrl,
      siteName: 'The Triumphal Arch',
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: HERO_IMAGE,
          width: 1200,
          height: 630,
          alt: entity.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: entity.ogTitle,
      description: entity.ogDescription,
      images: [HERO_IMAGE],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const l = (locale === 'zh' || locale === 'ro' || locale === 'en') ? locale : 'en';
  const entity = SEO_ENTITIES[l];

  const touristAttractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': ATTRACTION_ID,
    name: entity.name,
    alternateName: entity.alternateName,
    description: entity.description,
    url: BASE_URL,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: entity.streetAddress,
      addressLocality: entity.addressLocality,
      addressRegion: entity.addressRegion,
      postalCode: entity.postalCode,
      addressCountry: entity.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: entity.latitude,
      longitude: entity.longitude,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entity.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale === 'ro' ? 'ro' : 'en'} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={BASE_URL} />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:image:alt" content={entity.imageAlt} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
