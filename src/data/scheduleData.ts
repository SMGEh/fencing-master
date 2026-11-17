import type { Session } from "../types/lessons";

// Sample timetable: replace with the real class times for each club.
export const sessions: Session[] = [
  { id: "m1", locationId: "main", programId: "junior", day: 0, start: "16:30", end: "17:30" },
  { id: "m2", locationId: "main", programId: "recreation", day: 0, start: "18:00", end: "19:30" },
  { id: "m3", locationId: "main", programId: "competitive", day: 2, start: "17:30", end: "20:00" },
  { id: "m4", locationId: "main", programId: "junior", day: 5, start: "10:00", end: "11:00" },
  { id: "t1", locationId: "two", programId: "recreation", day: 1, start: "19:00", end: "20:30" },
  { id: "t2", locationId: "two", programId: "junior", day: 3, start: "16:30", end: "17:30" },
  { id: "t3", locationId: "two", programId: "competitive", day: 5, start: "12:00", end: "14:30" },
  { id: "h1", locationId: "three", programId: "junior", day: 2, start: "16:00", end: "17:00" },
  { id: "h2", locationId: "three", programId: "recreation", day: 4, start: "18:30", end: "20:00" },
  { id: "h3", locationId: "three", programId: "competitive", day: 6, start: "13:00", end: "15:30" },
  { id: "f1", locationId: "four", programId: "junior", day: 1, start: "16:30", end: "17:30" },
  { id: "f2", locationId: "four", programId: "recreation", day: 3, start: "19:00", end: "20:30" },
  { id: "f3", locationId: "four", programId: "competitive", day: 4, start: "17:00", end: "19:30" },
];