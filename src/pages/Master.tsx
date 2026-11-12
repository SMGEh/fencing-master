const facts = [
  { label: "Weapons", value: "Foil · Épée · Sabre" },
  { label: "Certification", value: "[Coaching certification]" },
  { label: "Experience", value: "[XX] years coaching" },
];

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

const bio = [
  "Maître Bac began his fencing career in 1965. He went on to earn the Diplôme de Moniteur d'Escrime from Ligne de l'Académie d'Armes de Paris; the Brevet d'Etat de Prévôt d'Escrime from Ecole Interarmée et des Sports in Fontainebleau; and the Brevet d'Etat de Maître d'Escrime & Education Physique et des Sports, the highest qualification awarded a fencing master, from Institut National du Sports et d'Education Physique in Paris in July, 1970.",
  "Maître Bac traces his fencing heritage back to his distinguished fencing masters. Among those of high prestige include Maître J.L. Le Bail, his first fencing master, of Cercle d'Escrime de Rony sous Bois; Maître M. Piot of Association Sportive de la Police de Paris, Section d'Escrime; and Maître L. Prost, J. Godet, Gourgue, Crizoni and P. Lacaze of Ecole de Maître d'Escrime, Institut National du Sports et d'Education Physique.",
  "Maître Bac has extensive and intensive experience as a competitive fencer in all three weapons and had taught in various renowned fencing clubs in Paris. He is currently on the Coaching Commission of the Academie d'Armes Internationale. Highlights of his coaching experience include being the National Coach of the Finnish Fencing Federation and the Modern Pentathlon Federation of Finland, and playing a significant role in Finland's achievements at the Scandinavian Fencing Championship and at the 1972 Munich Olympic Games; being the Provincial Coach of the British Columbia Fencing Association of Canada; and being the Head Coach of the Northern California Fencing Division of the United States Fencing Association. Maître Bac also has experience working with physically challenged fencers, having taught the wheelchair fencers of Association des Paralysées de France, délégation du Val-De-Marne at Créteil. During the past decade, Maître Bac has focused his attention and energy on spreading and perpetuating the spirit of the French school of fencing by initiating novice fencers, training competitive fencers of all levels and working on his books.",
  "Maître Bac did his postgraduate work in Physical Education and Sports at Helsinki University, Finland. His teaching credentials also include Maître d'Armes & d'Education Physique et des Sports, Brevet d'Etat de Professeur de Judo, Jiu-Jitsu et Méthodes de Combat Assimilées, and an instructorship in theatrical fencing, French boxing, weightlifting, swimming, diving, shooting and equestrian skills. His broad knowledge and expertise in a variety of sports have engendered an exceptional understanding into the philosophy and principles of sports. After years of research, compilation, writing and editing, Maître Bac's insight and vision have been encapsulated into his books — The Fundamental Principles and Techniques of Foil (1981); FENCING: Competitive Training and Practice, the Foil, the Epée, the Sabre (1995) and The Manual for the Care and Repair of Electrical Fencing Equipment (1996) which has been translated into German.",
  "While Maître Bac's genre is rooted in the French tradition, the assimilation of his personal study and practice of fencing has transcended one particular school. In light of this versatility, Maître Bac's books are highly recommended by ranking officials of French Fencing Academy (AAF), International Fencing Academy (AAI), International Fencing Federation (FIE), and International Olympic Committee (IOC) as comprehensive references for fencers of all levels and for candidates for a fencing instructorship.",
];

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
