import type { Program } from "../types/lessons";

// Replace every [bracketed] value with your real details.
export const programs: Program[] = [
  {
    id: "junior",
    audience: "Ages 7 to 12",
    name: "Junior Fencers",
    description:
      "A playful introduction to the sport. Kids build balance, coordination and focus through games, footwork drills and gentle bouting.",
    price: "[PRICE] per term",
  },
  {
    id: "recreation",
    audience: "Teens and adults",
    name: "Recreation",
    description:
      "Fence for fitness, fun and friends. Learn the fundamentals of foil, épée or sabre, then enjoy relaxed open bouting with no pressure to compete.",
    price: "[PRICE] per term",
  },
  {
    id: "competitive",
    audience: "All ages · by assessment",
    name: "Competitive",
    description:
      "Structured training for fencers ready for tournaments: tactics, conditioning, private lessons and coaching support at local and regional events.",
    price: "[PRICE] per term",
    featured: true,
  },
];
