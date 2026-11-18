import type { Session } from "../types/lessons";

// Sample timetable: replace with the real class times for each club.
export const sessions: Session[] = [
  { id: "m1", locationId: "main", programId: "junior", day: 1, start: "19:00", end: "20:00" },
  { id: "m2", locationId: "main", programId: "recreation", day: 3, start: "19:00", end: "20:00" },
  { id: "m3", locationId: "main", programId: "competitive", day: 6, start: "13:00", end: "16:00" },
  { id: "t1", locationId: "SFU", programId: "recreation", day: 4, start: "18:30", end: "20:30" },
  { id: "h1", locationId: "WV", programId: "junior", day: 3, start: "16:00", end: "17:00" },
  { id: "f1", locationId: "VTM", programId: "junior", day: 2, start: "16:30", end: "17:30" },
];