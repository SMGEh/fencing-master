import { useEffect, useRef, useState } from "react";
import { photoTabs } from "../data/photosData";
import type { Photo } from "../types/photos";

/** How many photos show on one page of the grid. */
const PER_PAGE = 9;

/** Shows the photo, or a placeholder box if the file is missing. */
function PhotoImg({ photo, className }: { photo: Photo; className: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [photo.src]);
  if (failed) return <div className={`ph ${className}`}>Photo coming soon</div>;
  return <img className={className} src={photo.src} alt={photo.alt} onError={() => setFailed(true)} />;
}

export default function Photos() {
  const [tabId, setTabId] = useState(photoTabs[0].id);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const tab = photoTabs.find((t) => t.id === tabId)!;
  const photos = tab.photos;
  const pageCount = Math.max(1, Math.ceil(photos.length / PER_PAGE));
  const pagePhotos = photos.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const chooseTab = (id: string) => {
    setTabId(id);
    setPage(0);
  };

  // Open and close the native dialog in step with `open`.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (dir: 1 | -1) =>
    setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length));

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const current = open !== null ? photos[open] : null;

  // Tab strip scrolling: the arrow buttons are disabled at either end.
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const updateScroll = () => {
    const el = tabsRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    updateScroll();

    // Re-check whenever the strip or any tab changes size (window resize, web font finishing loading, …).
    const ro = new ResizeObserver(updateScroll);
    ro.observe(el);
    Array.from(el.children).forEach((c) => ro.observe(c));
    document.fonts?.ready.then(updateScroll);

    // Mouse wheel scrolls the tabs sideways. At either end the page scrolls as normal.
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!delta) return;
      const max = el.scrollWidth - el.clientWidth;
      const atEnd = delta > 0 ? el.scrollLeft >= max - 1 : el.scrollLeft <= 1;
      if (max <= 0 || atEnd) return;
      e.preventDefault();
      el.scrollLeft += delta;
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      ro.disconnect();
      el.removeEventListener("wheel", onWheel);
    };
  }, []);
  const scrollTabs = (dir: 1 | -1) => {
    const el = tabsRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + dir * Math.max(120, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="sec">
      <div className="in">
        <p className="eyebrow">Photos</p>
        <h1 className="h2">Our Fencing Photos</h1>
        <p className="lead">A look inside our clubs. Select a photo to see it up close.</p>

        <div className="photo-tabs-wrap">
          <button
            type="button"
            className="photo-tabs-scroll"
            aria-label="Scroll tabs left"
            disabled={!canLeft}
            onClick={() => scrollTabs(-1)}
          >
            ‹
          </button>
          <div
            ref={tabsRef}
            className="photo-tabs"
            role="tablist"
            aria-label="Choose a photo gallery"
            onScroll={updateScroll}
          >
            {photoTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={t.id === tabId}
                className={t.id === tabId ? "photo-tab active" : "photo-tab"}
                onClick={(e) => {
                  chooseTab(t.id);
                  e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="photo-tabs-scroll"
            aria-label="Scroll tabs right"
            disabled={!canRight}
            onClick={() => scrollTabs(1)}
          >
            ›
          </button>
        </div>

        <div role="tabpanel" aria-label={tab.label}>
          {photos.length === 0 ? (
            <p className="muted">Photos coming soon.</p>
          ) : (
            <div className="photo-grid">
              {pagePhotos.map((p, i) => {
                const index = page * PER_PAGE + i;
                return (
                  <button
                    key={p.src}
                    type="button"
                    className="photo-thumb"
                    aria-label={`Open ${p.alt}`}
                    onClick={() => setOpen(index)}
                  >
                    <PhotoImg photo={p} className="photo-thumb-img" />
                  </button>
                );
              })}
            </div>
          )}

          {pageCount > 1 && (
            <nav className="photo-pager" aria-label="Photo pages">
              <button type="button" className="btn btn-outline" disabled={page === 0} onClick={() => setPage(page - 1)}>
                ← Previous
              </button>
              <span className="photo-pager-count">
                Page {page + 1} of {pageCount}
              </span>
              <button
                type="button"
                className="btn btn-outline"
                disabled={page === pageCount - 1}
                onClick={() => setPage(page + 1)}
              >
                Next →
              </button>
            </nav>
          )}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="photo-viewer"
        aria-label="Photo viewer"
        onClose={() => setOpen(null)}
        onKeyDown={onKey}
        // Clicking the dark backdrop (the dialog itself, outside the inner frame) closes it.
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
      >
        {current && (
          <div className="photo-viewer-frame">
            <div className="photo-viewer-head">
              <p className="photo-viewer-title">{current.caption ?? current.alt}</p>
              <button type="button" className="photo-viewer-close" aria-label="Close" onClick={() => setOpen(null)}>
                ×
              </button>
            </div>
            <PhotoImg photo={current} className="photo-viewer-img" />
            <div className="photo-viewer-bar">
              <button type="button" className="photo-viewer-nav" aria-label="Previous photo" onClick={() => step(-1)}>
                ←
              </button>
              <span className="photo-viewer-count">
                {open! + 1} / {photos.length}
              </span>
              <button type="button" className="photo-viewer-nav" aria-label="Next photo" onClick={() => step(1)}>
                →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
