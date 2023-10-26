export type SiteConfig = {
  displayName: string;
  name: string;
  url: string;
  description: string;
  ogImage: string;
  keywords: string[];
  twitter?: {
    account: string;
    url: string;
  };
  linkedIn?: {
    account: string;
    url: string;
  };
  github?: {
    account: string;
    url: string;
  };
};
