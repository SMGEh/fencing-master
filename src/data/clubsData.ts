import type { Location } from "../types/lessons";

// Replace every [bracketed] value with your real details.
export const locations: Location[] = [
  {
    id: "main",
    name: "West Point Grey Fencing Club (Main Club)",
    institution: "Jericho Hill Centre",
    room: "North Room",
    address: ["4196 West 4th Avenue", "Vancouver, BC,", "Canada, V6R 4J5"],
    phone: "(604) 257-8140",
    phoneHref: "tel:+16047324875",
    equipmentProvided: false,
    color: "#1f5fbf",
  },
  {
    id: "SFU",
    name: "Simon Fraser University Fencing Club",
    website: "https://athleticsandrecreation.its.sfu.ca/Program/GetProgramDetails?courseId=ffc2689c-0fd0-4460-a2b3-6220332d8b9f",
    institution: "Simon Fraser University",
    room: "Central Gym - West Side",
    address: ["8888 University Drive", "Burnaby, BC,", "Canada, V5A 1S6"],
    phone: "(778) 782-4142",
    phoneHref: "tel:+17787824142",
    equipmentProvided: true,
    color: "#16805a",
  },
  {
    id: "WV",
    name: "West Vancouver Fencing Club",
    institution: "[Institution]",
    room: "[Room]",
    address: ["780-22nd Street, Marine Drive", "West Vancouver, BC,", "Canada, V7V 4B9"],
    phone: "(604) 925-7270",
    phoneHref: "tel:+16049257270",
    equipmentProvided: true,
    color: "#8343b8",
  },
  {
    id: "VTM",
    name: "Vancouver Theatrical and Modern Fencing Club",
    institution: "West Point Grey Community Centre",
    room: "WPG Office (Aberthau House)",
    address: ["4397 West 2nd Avenue", "Vancouver, BC,", "Canada, V6R 1K4"],
    phone: "(604) 732-4875",
    phoneHref: "tel:+16047324875",
    equipmentProvided: true,
    color: "#a35a00",
  },
];

export const mapsUrl =(loc: Location): string =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(loc.address.join(", "));
