export interface Photo {
  /** Path to the image, e.g. `${import.meta.env.BASE_URL}images/clubs/main/photo1.jpg`. */
  src: string;
  /** Short description of the photo, read by screen readers. */
  alt: string;
  /** Optional caption shown under the photo in the viewer. */
  caption?: string;
}

/** One tab on the Photos page — one folder in public/images/photos/. */
export interface PhotoTab {
  /** The folder name. */
  id: string;
  /** The name shown on the tab. */
  label: string;
  photos: Photo[];
}
