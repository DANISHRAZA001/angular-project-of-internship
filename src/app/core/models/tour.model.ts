export interface Tour {
  name: string;
  slug: string;
  tags: string[];
  img: string;
  duration: string;
  type: string;
}

export interface Destination {
  slug: string;
  name: string;
  subtitle: string;
  img: string;
  tags: string[];
  description: string;
  description2?: string;
  thingsToDo?: string[];
  attractions?: { title: string; desc: string }[];
  infoGrid: { label: string; value: string }[];
  ctaTitle: string;
  ctaText: string;
}

export interface Package {
  name: string;
  duration: string;
  price: string;
  img: string;
  highlights: string[];
  category: string;
}

export interface Activity {
  name: string;
  img: string;
  locations: string;
  detail: string;
}

export interface FeaturedCard {
  name: string;
  duration: string;
  price: string;
  img: string;
}
