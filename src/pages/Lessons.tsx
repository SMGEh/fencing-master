import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { locations, mapsUrl } from "../data/clubsData";
import type { Location } from "../types/lessons";

const withBreaks = (lines: string[]) => lines.map((line, i) => (i ? [<br key={i} />, line] : line));

/** Institution and room, then — after a small gap — the street address. */
function ClubAddress({ loc }: { loc: Location }) {
  const place = [loc.institution, loc.room].filter((l): l is string => Boolean(l));
  return (
    <>
      <p className="club-place">{withBreaks(place)}</p>
      <p className="club-address">{withBreaks(loc.address)}</p>
    </>
  );
}
import { contact } from "../data/contactData";
import { programs } from "../data/programsData";
import { sessions } from "../data/scheduleData";
import type { Session } from "../types/lessons";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const HOUR_PX = 72;

const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const fmt = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, "0")}${suffix}` : `${h12}${suffix}`;
};

const locById = (id: string) => locations.find((l) => l.id === id)!;
const progById = (id: string) => programs.find((p) => p.id === id)!;

/** Place overlapping sessions side by side within a day column. */
function layoutDay(list: Session[]) {
  const sorted = [...list].sort((a, b) => toMin(a.start) - toMin(b.start));
  const laneEnds: number[] = [];
  const placed = sorted.map((s) => {
    let lane = laneEnds.findIndex((end) => end <= toMin(s.start));
    if (lane === -1) lane = laneEnds.length;
    laneEnds[lane] = toMin(s.end);
    return { s, lane };
  });
  return placed.map(({ s, lane }) => {
    const overlaps = placed.filter(
      (o) => toMin(o.s.start) < toMin(s.end) && toMin(s.start) < toMin(o.s.end)
    );
    const lanes = Math.max(...overlaps.map((o) => o.lane)) + 1;
    return { s, lane, lanes };
  });
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export default function Lessons() {
  const [params, setParams] = useSearchParams();
  const clubParam = params.get("club");
  const selected = useMemo(
    () =>
      clubParam === null
        ? locations.map((l) => l.id)
        : clubParam.split(",").filter((id) => locations.some((l) => l.id === id)),
    [clubParam]
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const detailRef = useRef<HTMLElement>(null);
  useEffect(() => {
    // On phones the details card sits below the agenda, so bring it into view.
    if (activeId && window.matchMedia("(max-width: 760px)").matches)
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [activeId]);
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  const setSelected = (ids: string[]) => {
    // No param = every club; "club=" (empty) = none selected.
    setParams(ids.length === locations.length ? {} : { club: ids.join(",") }, { replace: true });
    setActiveId(null);
  };
  const toggle = (id: string) => {
    const next = selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id];
    setSelected(next);
  };

  const visible = sessions.filter((s) => selected.includes(s.locationId));
  const active = visible.find((s) => s.id === activeId) ?? null;

  const startHour = Math.floor(Math.min(...sessions.map((s) => toMin(s.start))) / 60);
  const endHour = Math.ceil(Math.max(...sessions.map((s) => toMin(s.end))) / 60);
  const hours = Array.from({ length: endHour - startHour }, (_, i) => startHour + i);

  const eventLabel = (s: Session) =>
    `${progById(s.programId).name} at ${locById(s.locationId).name}, ${DAYS[s.day]} ${fmt(s.start)} to ${fmt(s.end)}`;

  return (
    <section className="sec">
      <div className="in">
        <p className="eyebrow">Lessons &amp; Locations</p>
        <h1 className="h2">Weekly schedule</h1>
        <p className="lead">
          Every class at every club in one place. Pick the clubs you want to see, then select a class for details.
        </p>

        <div className="club-pick-head">
          <p className="lbl">Select clubs</p>
          {selected.length < locations.length ? (
            <button type="button" className="text-btn" onClick={() => setSelected(locations.map((l) => l.id))}>
              Select all
            </button>
          ) : (
            <button type="button" className="text-btn" onClick={() => setSelected([])}>
              Clear
            </button>
          )}
        </div>
        <div id="clubs" className="club-info" role="group" aria-label="Select clubs to show on the schedule">
          {locations.map((loc) => {
            const on = selected.includes(loc.id);
            return (
              <article
                key={loc.id}
                className={on ? "club-info-card selected" : "club-info-card"}
                style={{ "--club": loc.color } as CSSProperties}
              >
                <span className="club-check" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3>
                  {/* This button stretches over the whole card, so clicking anywhere toggles the club. */}
                  <button type="button" className="club-toggle" aria-pressed={on} onClick={() => toggle(loc.id)}>
                    {loc.name}
                  </button>
                </h3>
                <ClubAddress loc={loc} />
                <div className="club-info-rest">
                  <p>
                    <a href={loc.phoneHref} className="club-phone">{loc.phone}</a>
                  </p>
                  <p className="club-equip">
                    * {loc.equipmentProvided ? "Equipment provided" : "Bring your own equipment"}
                  </p>
                  {loc.website && (
                    <a href={loc.website} target="_blank" rel="noreferrer" className="inline-link club-site-link">
                      Visit Registration Site
                    </a>
                  )}
                  <a href={mapsUrl(loc)} target="_blank" rel="noreferrer" className="inline-link club-map-link">
                    <PinIcon />
                    View on Google Maps
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <div className="club-register-notes">
          <p>* To register, visit the club's website or call the club's phone number listed above.</p>
          <p>* We highly recommend visiting the club in person or visiting during a trial session before signing up.</p>
        </div>

        {/* Desktop: week grid */}
        <div className="cal" style={{ "--rows": hours.length, "--hour": `${HOUR_PX}px` } as CSSProperties}>
          <div className="cal-head">
            <div />
            {DAYS.map((d) => (
              <div key={d} className="cal-day-name">{d.slice(0, 3)}</div>
            ))}
          </div>
          <div className="cal-body">
            <div className="cal-times">
              {hours.map((h) => (
                <div key={h} className="cal-time">{fmt(`${h}:00`)}</div>
              ))}
            </div>
            {DAYS.map((_, day) => (
              <div key={day} className="cal-col">
                {layoutDay(visible.filter((s) => s.day === day)).map(({ s, lane, lanes }) => {
                  const loc = locById(s.locationId);
                  const top = ((toMin(s.start) - startHour * 60) / 60) * HOUR_PX;
                  const height = ((toMin(s.end) - toMin(s.start)) / 60) * HOUR_PX;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      className={s.id === activeId ? "cal-event active" : "cal-event"}
                      style={{
                        top,
                        height,
                        left: `calc(${(lane / lanes) * 100}% + 2px)`,
                        width: `calc(${100 / lanes}% - 4px)`,
                        "--club": loc.color,
                      } as CSSProperties}
                      aria-label={eventLabel(s)}
                      onClick={() => setActiveId(s.id === activeId ? null : s.id)}
                    >
                      <span className="cal-event-time">{fmt(s.start)}–{fmt(s.end)}</span>
                      <span className="cal-event-name">{progById(s.programId).name}</span>
                      <span className="cal-event-club">{loc.name}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: agenda list */}
        <div className="agenda">
          {DAYS.map((d, day) => {
            const list = visible
              .filter((s) => s.day === day)
              .sort((a, b) => toMin(a.start) - toMin(b.start));
            if (!list.length) return null;
            return (
              <div key={d} className="agenda-day">
                <p className="lbl">{d}</p>
                {list.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={s.id === activeId ? "agenda-item active" : "agenda-item"}
                    style={{ "--club": locById(s.locationId).color } as CSSProperties}
                    onClick={() => setActiveId(s.id === activeId ? null : s.id)}
                  >
                    <span className="strong">{fmt(s.start)}–{fmt(s.end)}</span>
                    <span>{progById(s.programId).name}</span>
                    <span className="muted">{locById(s.locationId).name}</span>
                  </button>
                ))}
              </div>
            );
          })}
        </div>

        {visible.length === 0 && <p className="muted help">Select a club to see its classes.</p>}

        {active && (() => {
          const loc = locById(active.locationId);
          const prog = progById(active.programId);
          return (
            <article ref={detailRef} className="card cal-detail" style={{ "--club": loc.color } as CSSProperties} aria-live="polite">
              <span className="tag">{prog.audience}</span>
              <h3>{prog.name}</h3>
              <p className="strong">{DAYS[active.day]}, {fmt(active.start)}–{fmt(active.end)}</p>
              <div className="cal-detail-club">
                <p className="lbl">Club</p>
                <p className="strong">{loc.name}</p>
                <ClubAddress loc={loc} />
                <p><a href={loc.phoneHref} className="inline-link">{loc.phone}</a></p>
                <p className="club-equip">
                  * {loc.equipmentProvided ? "Equipment provided" : "Bring your own equipment"}
                </p>
              </div>
              <p>{prog.description}</p>
              <p className="strong">{prog.price}</p>
              <a href={mapsUrl(loc)} target="_blank" rel="noreferrer" className="btn btn-primary map-btn">
                <PinIcon />
                View on Google Maps
              </a>
            </article>
          );
        })()}

        <div className="contact-strip">
          <div>
            <p className="lbl">Main address</p>
            <p className="contact-text">
              {contact.address[0]}
              <br />
              {contact.address[1]}
            </p>
          </div>
          <div>
            <p className="lbl">Phone</p>
            <p className="contact-text"><a href={contact.phoneHref} className="inline-link">{contact.phone}</a></p>
          </div>
          <div>
            <p className="lbl">Email</p>
            <p className="contact-text"><a href={`mailto:${contact.email}`} className="inline-link">{contact.email}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
