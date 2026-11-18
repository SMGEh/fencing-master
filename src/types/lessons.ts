export interface Program {
  id: string;
  audience: string;
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

export interface Location {
  id: string;
  name: string;
  /** Building or institution the club meets in, shown above the address. */
  institution?: string;
  /** Room within the institution, shown above the address. */
  room?: string;
  /** Street, city/province, then country and postal code — one line each. */
  address: string[];
  phone: string;
  /** "tel:" link for the phone number, digits only. */
  phoneHref: string;
  /** true if the club lends fencing equipment; false if fencers bring their own. */
  equipmentProvided: boolean;
  /** Optional link to the club's own website. */
  website?: string;
  /** Colour used for this club on the schedule calendar. */
  color: string;
}

/** A weekly recurring class. day: 0 = Sunday … 6 = Saturday. Times are 24h "HH:MM". */
export interface Session {
  id: string;
  locationId: string;
  programId: string;
  day: number;
  start: string;
  end: string;
}
