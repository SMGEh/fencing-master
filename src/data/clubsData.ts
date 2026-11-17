import type { Location } from "../types/lessons";

// Replace every [bracketed] value with your real details.
export const locations: Location[] = [
  {
    id: "main",
    name: "Main Club",
    address: ["[Street Address]", "[City, Province / State, Postal Code]"],
    hours: "[Days and times]",
    phone: "[(000) 000-0000]",
    phoneHref: "tel:+10000000000",
    equipmentProvided: true,
    color: "#1f5fbf",
  },
  {
    id: "two",
    name: "[Location Two]",
    website: "https://example.com", // TODO: replace with the club's real website
    address: ["[Street Address]", "[City, Province / State, Postal Code]"],
    hours: "[Days and times]",
    phone: "[(000) 000-0000]",
    phoneHref: "tel:+10000000000",
    equipmentProvided: true,
    color: "#16805a",
  },
  {
    id: "three",
    name: "[Location Three]",
    address: ["[Street Address]", "[City, Province / State, Postal Code]"],
    hours: "[Days and times]",
    phone: "[(000) 000-0000]",
    phoneHref: "tel:+10000000000",
    equipmentProvided: false,
    color: "#8343b8",
  },
  {
    id: "four",
    name: "[Location Four]",
    address: ["[Street Address]", "[City, Province / State, Postal Code]"],
    hours: "[Days and times]",
    phone: "[(000) 000-0000]",
    phoneHref: "tel:+10000000000",
    equipmentProvided: true,
    color: "#a35a00",
  },
];

export const mapsUrl = (loc: Location): string =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(loc.address.join(", "));
