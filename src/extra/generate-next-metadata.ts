import { SiteConfig } from "@@/types/site";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
// https://github.com/gokulkrishh/awesome-meta-and-manifest
// https://nikolasbarwicki.com/articles/seo-in-next-js-13-with-metadata-api
export const generateNextMetadata = (
  siteConfig: SiteConfig,
  forPWA?: boolean
): Metadata => {
  const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
      {
        name: `${siteConfig.name} Team`,
        url: siteConfig.url,
      },
    ],
    creator: `${siteConfig.name} Team`,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: siteConfig.twitter
      ? {
          card: "summary_large_image",
          title: siteConfig.name,
          description: siteConfig.description,
          images: [siteConfig.ogImage],
          creator: siteConfig.twitter.account,
        }
      : undefined,
  };

  const pwaMetadata: Metadata = {
    icons: {
      icon: "/icons/favicon.ico",
      shortcut: "/icons/favicon.png",
      apple: "/icons/icon-192x192.png",
    },
    manifest: `/manifest.json`,
    appleWebApp: {
      title: siteConfig.name,
      capable: true,
      statusBarStyle: "black-translucent",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    generator: "Next.js",
    publisher: "Vercel",
    viewport: {
      userScalable: false,
      initialScale: 1,
      width: "device-width",
      minimumScale: 1,
      maximumScale: 1,
    },
    applicationName: siteConfig.name,
    other: {
      "msapplication-tap-highlight": "no",
      "msapplication-navbutton-color": "#ffffff",
      "msapplication-TileColor": "#ffffff",
      "msapplication-TileImage": "/icons/icon-192x192.png",
      "msapplication-tooltip": siteConfig.name,
      "msapplication-starturl": "/",
      "mobile-web-app-capable": "yes",
      "theme-color": "#ffffff",
    },
  };

  return {
    ...metadata,
    ...(forPWA ? pwaMetadata : {}),
  };
};
