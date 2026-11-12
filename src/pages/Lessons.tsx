import { Link } from "react-router-dom";
import { programs } from "../data";

export default function Lessons() {
  return (
    <section className="sec">
      <div className="in">
        <p className="eyebrow">Lessons</p>
        <h1 className="h2">Find your path</h1>
        <p className="lead">
          Three programs, one club. Start where you are, and move between them as your goals change.
        </p>
        <div className="grid">
          {programs.map((p) => (
            <article key={p.id} className={p.featured ? "card featured" : "card"}>
              <span className="tag">{p.audience}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p className="strong">{p.schedule}</p>
              <p className="strong">{p.price}</p>
            </article>
          ))}
        </div>
        <p className="muted help">
          Questions about which program suits you?{" "}
          <Link to="/locations" className="inline-link">Contact us</Link> and we will help you choose.
        </p>
      </div>
    </section>
  );
}
