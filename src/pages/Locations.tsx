import { contact, locations, mapsUrl } from "../data";

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export default function Locations() {
  return (
    <section className="sec">
      <div className="in">
        <p className="eyebrow">Locations &amp; Contact</p>
        <h1 className="h2">Come visit us</h1>

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

        <h2 className="h3">Our training locations</h2>
        <div className="grid">
          {locations.map((loc) => (
            <article key={loc.id} className="card location">
              {/* Replace this placeholder with <img src="..." alt="..." /> */}
              <div className="ph location-photo">[Photo of {loc.name}]</div>
              <div className="location-body">
                <h3>{loc.name}</h3>
                <p>
                  {loc.address[0]}
                  <br />
                  {loc.address[1]}
                </p>
                <p>{loc.hours}</p>
                <a href={mapsUrl(loc)} target="_blank" rel="noreferrer" className="btn btn-primary map-btn">
                  <PinIcon />
                  View on Google Maps
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
