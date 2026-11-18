
import { useState } from "react";
import HistoryParagraph from "../components/HistoryParagraph";

import { historySections } from "../data/historyData";


export default function History() {
  const [selectedSection, setSelectedSection] = useState<
    (typeof historySections)[number] | null
  >(null);
  // Every thumbnail is cropped to the first section's image shape, measured once it loads.
  const [thumbRatio, setThumbRatio] = useState<number | null>(null);

  return (
    <section className="sec">
      <div className="in">
        <p className="eyebrow">History</p>
        <h1 className="h2">The History of Fencing</h1>
        <p className="lead">
          Explore the history, traditions, and evolution of fencing,
          from its ancient origins to the modern sport we know today.
        </p>

        <div className="history-row">
          {historySections.map((section, i) => (
            <button
                key={section.id}
                className={`history-card ${
                    selectedSection?.id === section.id ? "selected" : ""
                }`}
                onClick={() =>
                    setSelectedSection(
                    selectedSection?.id === section.id ? null : section
                    )
                }
                >
                <img
                    className="history-image"
                    src={section.image}
                    alt={section.imageAlt}
                    style={thumbRatio ? { aspectRatio: thumbRatio } : undefined}
                    onLoad={
                      i === 0
                        ? (e) => {
                            const img = e.currentTarget;
                            if (img.naturalHeight) setThumbRatio(img.naturalWidth / img.naturalHeight);
                          }
                        : undefined
                    }
                />

                <div className="history-content">
                    <h3>{section.title}</h3>
                    <p>{section.summary}</p>
                    <span className="inline-link">Read more →</span>
                </div>
                </button>
          ))}
        </div>
            {selectedSection && (
                <div className="history-expanded">
                    <h2 className="h2">{selectedSection.title}</h2>

                    <div className="history-expanded-content">

                        {selectedSection.paragraphs?.map((paragraph, index) => (
                          <HistoryParagraph
                            key={index}
                            text={paragraph.text}
                            image={paragraph.image}
                            imageAlt={paragraph.imageAlt}
                            imageSide={paragraph.imageSide}
                          />
                        ))}

                        {selectedSection.subsections?.map((subsection) => (
                          <div className="history-subsection" key={subsection.id}>
                            <h3>{subsection.title}</h3>

                            {subsection.paragraphs?.map((paragraph, index) => (
                              <HistoryParagraph
                                key={index}
                                text={paragraph.text}
                                image={paragraph.image}
                                imageAlt={paragraph.imageAlt}
                                imageSide={paragraph.imageSide}
                              />
                            ))}
                          </div>
                        ))}

                    </div>
                </div>
            )}
      </div>
    </section>
  );
}
