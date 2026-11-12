import { Link } from "react-router-dom";

const highlights = [
  { title: "For every age", text: "Kids, teens and adults, from first lesson to first tournament." },
  { title: "Small groups", text: "Every fencer gets real coaching time, every class." },
  { title: "Expert coaching", text: "Patient, clear teaching from an experienced master." },
];

export default function Home() {
  return (
    <section className="sec hero">
      <div className="in">
        <p className="eyebrow">Recreational fencing for ages 7 to adult</p>
        <h1 className="hero-title">
          Pick up a blade.
          <br />
          <span>Move like a fencer.</span>
        </h1>
        <p className="hero-lead">
          Fencing is part chess, part sprint. Our small classes teach footwork, control and
          tactics in a friendly, safe setting. No experience needed.
        </p>
        <div className="row">
          <Link to="/lessons" className="btn btn-primary">See Lessons</Link>
          <Link to="/locations" className="btn btn-outline">Find a Location</Link>
        </div>
        <div className="grid highlights">
          {highlights.map((h) => (
            <div key={h.title}>
              <p className="highlight-title">{h.title}</p>
              <p className="muted">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
