export interface Book {
  title: string;
  description: string[];
  specs: string;
  /** A single price, or one line per edition when editions are priced differently. */
  price?: string | string[];
  note?: string;
  languages: string[];
}

export interface CallNumber {
  text: string;
  call: string;
}
