import { facts } from "../data/masterData"
import { bio } from "../data/masterData"

export default function Master() {
  return (
    <>
    <section className="sec">
      <div className="in master">
        <div className="ph master-photo">[Photo of the master]</div>
        <div>
          <p className="eyebrow">The Master</p>
          <h1 className="h2">Maître [Name]</h1>
          <p className="lead">
            Maître [Name] has been fencing for [XX] years and teaching for [XX]. A former
            [competitive background, e.g. provincial team member], they now focus on helping
            people of all ages fall in love with the sport.
          </p>
          <p className="lead">
            Their classes are patient, clear and full of good humour. Beginners learn safely and
            quickly, kids stay engaged, and competitors get honest, detailed feedback.
          </p>
          <div className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="lbl">{f.label}</p>
                <p>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Biography />
    </>
  );
}



function Biography() {
  return (
    <section className="sec bio">
      <div className="in">
        <h2 className="h3">A Brief Biography of Maître Bac</h2>
        {bio.map((p, i) => (
          <p key={i} className="lead">{p}</p>
        ))}
      </div>
    </section>
  );
}
