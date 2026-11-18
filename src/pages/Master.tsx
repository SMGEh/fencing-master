import { facts, bio, yearsFencing, yearsTeaching } from "../data/masterData"

export default function Master() {
  return (
    <>
    <section className="sec">
      <div className="in master">
        <img
          className="master-photo"
          src={`${import.meta.env.BASE_URL}images/master/master.png`}
          alt="Maître Bac Tau"
        />
        <div>
          <p className="eyebrow">The Master</p>
          <h1 className="h2">Maître Bac Tau</h1>
          <p className="lead">
            Maître Bac has been fencing for {yearsFencing} years and teaching for {yearsTeaching}. A former
            olympic fencing instructor, they now focus on helping
            people of all ages fall in love with the sport.
          </p>
          <p className="lead">
            Their classes are patient, clear and full of good humour. Beginners learn safely and
            quickly, kids stay engaged, and competitors get honest, detailed feedback.
          </p>
          <div className="facts">
            {facts.map((f) => (
              <div key={f.label} className={Array.isArray(f.value) ? "fact-tall" : undefined}>
                <p className="lbl">{f.label}</p>
                {Array.isArray(f.value) ? (
                  <ul className="facts-list">
                    {f.value.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{f.value}</p>
                )}
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
