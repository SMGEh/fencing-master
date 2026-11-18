import { books, callNumbers } from "../data/booksData";
import { contact } from "../data/contactData";

const formatList = (items: string[]): string =>
  items.length <= 2 ? items.join(" and ") : `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;

export default function Books() {
  return (
    <>
      <section className="sec">
        <div className="in">
          <p className="eyebrow">Books</p>
          <h1 className="h2">Fencing Books by Maître Bac</h1>
          <p className="lead">
            Five titles covering foil technique, competitive training, equipment repair, strategy
            and artistic fencing. To buy a copy, email{" "}
            <a href={`mailto:${contact.email}`} className="inline-link">{contact.email}</a>.
          </p>
          <p className="lead">
            The books can also be found in the Olympic Studies Centre (OSC) online catalogue.{" "}
            <a href="#osc" className="inline-link">See the call numbers</a>
          </p>
        </div>
      </section>

      <section className="sec books-sec">
        <div className="in books">
          {books.map((b) => (
            <article key={b.title} className="card book">
              <div className="ph book-cover">[Cover image]</div>
              <div>
                <h2 className="book-title">{b.title}</h2>
                {b.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="book-specs">{b.specs}</p>
                {b.note && <p className="book-specs">{b.note}</p>}
                <p className="book-specs">
                  Available in <strong>{formatList(b.languages)}</strong>
                </p>
                {b.price &&
                  (Array.isArray(b.price) ? b.price : [b.price]).map((p) => (
                    <p key={p} className="strong">{p}</p>
                  ))}
                <p className="book-specs">
                  To buy, email{" "}
                  <a href={`mailto:${contact.email}`} className="inline-link">{contact.email}</a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="osc" className="sec bio">
        <div className="in">
          <h2 className="h3">Olympic Studies Centre Call Numbers</h2>
          <ul className="call-list">
            {callNumbers.map((c) => (
              <li key={c.call}>
                <p>{c.text}</p>
                <p className="lbl">Call number: {c.call}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
