export type HomepageReference = {
  id?: string;
  title: string;
  result: string;
  href: string;
  imageUrl?: string | null;
  industry?: string;
  description?: string;
};

export const referenceStorageKey = "klickfunden_homepage_references";
