export interface HistoryParagraph {
  text: string;
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
}

export interface HistorySection {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  paragraphs?: HistoryParagraph[];
  subsections?: HistorySubsection[];
}

export interface HistorySubsection {
  id: string;
  title: string;
  paragraphs: HistoryParagraph[];
}
