export interface Book {
  title: string;
  description: string[];
  specs: string;
  price?: string;
  shipping?: string;
  note?: string;
  // TODO: replace "#" with the real order links.
  orders: { label: string; url: string }[];
}

export interface CallNumber {
  text: string;
  call: string;
}
