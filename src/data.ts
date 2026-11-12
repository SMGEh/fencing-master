export interface Program {
  id: string;
  audience: string;
  name: string;
  description: string;
  schedule: string;
  price: string;
  featured?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string[];
  hours: string;
}

export interface Contact {
  address: string[];
  phone: string;
  phoneHref: string;
  email: string;
}

// Replace every [bracketed] value with your real details.
export const programs: Program[] = [
  {
    id: "junior",
    audience: "Ages 7 to 12",
    name: "Junior Fencers",
    description:
      "A playful introduction to the sport. Kids build balance, coordination and focus through games, footwork drills and gentle bouting.",
    schedule: "[DAY / TIME]",
    price: "[PRICE] per term",
  },
  {
    id: "recreation",
    audience: "Teens and adults",
    name: "Recreation",
    description:
      "Fence for fitness, fun and friends. Learn the fundamentals of foil, épée or sabre, then enjoy relaxed open bouting with no pressure to compete.",
    schedule: "[DAY / TIME]",
    price: "[PRICE] per term",
  },
  {
    id: "competitive",
    audience: "All ages · by assessment",
    name: "Competitive",
    description:
      "Structured training for fencers ready for tournaments: tactics, conditioning, private lessons and coaching support at local and regional events.",
    schedule: "[DAY / TIME]",
    price: "[PRICE] per term",
    featured: true,
  },
];

export const contact: Contact = {
  address: ["[Street Address]", "[City, Province / State, Postal Code]"],
  phone: "[(000) 000-0000]",
  phoneHref: "tel:+10000000000",
  email: "[info@fencingmaster.com]",
};

export const locations: Location[] = [
  {
    id: "main",
    name: "Main Club",
    address: ["[Street Address]", "[City, Province / State, Postal Code]"],
    hours: "[Days and times]",
  },
  {
    id: "two",
    name: "[Location Two]",
    address: ["[Street Address]", "[City, Province / State, Postal Code]"],
    hours: "[Days and times]",
  },
  {
    id: "three",
    name: "[Location Three]",
    address: ["[Street Address]", "[City, Province / State, Postal Code]"],
    hours: "[Days and times]",
  },
];

export const mapsUrl = (loc: Location): string =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(loc.address.join(", "));
