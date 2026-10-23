import { setRequestLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

const BASE_URL = 'https://www.thetriumphalarchchisinau.com';
const PAGE = 'cookie-settings';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (['zh', 'ro', 'en'].includes(locale) ? locale : 'en') as 'zh' | 'en' | 'ro';
  const messages = await getMessages();
  const selfUrl = `${BASE_URL}/${l}/${PAGE}`;
  const ogLocale = l === 'zh' ? 'zh_CN' : l === 'ro' ? 'ro_MD' : 'en_US';

  return {
    title: (messages as any).cookieSettings?.title,
    alternates: {
      canonical: selfUrl,
      languages: {
        'ro-MD': `${BASE_URL}/ro/${PAGE}`,
        en: `${BASE_URL}/en/${PAGE}`,
        'zh-CN': `${BASE_URL}/zh/${PAGE}`,
        'x-default': `${BASE_URL}/ro/${PAGE}`,
      },
    },
    openGraph: {
      title: (messages as any).cookieSettings?.title,
      url: selfUrl,
      siteName: 'The Triumphal Arch',
      locale: ogLocale,
      type: 'website',
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
