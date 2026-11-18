import type { Book, CallNumber } from "../types/books";

export const books: Book[] = [
  {
    title: "The Fundamental Principles and Techniques of the Foil",
    description: [
      "This volume presents a clear, concise and detailed analysis of the principles and techniques of the French traditional method of foil fencing. Well-illustrated diagrams and pictures clearly illustrate all the important fencing techniques and positions. This is a critical reference work for beginning fencers who want to start with a solid foundation, and for more advanced fencers who wish to improve their technique.",
    ],
    specs: 'Bound in soft cover, 5-1/2" x 8-1/2", 156 pages, 201 illustrations, B/W',
    price: "$20.00 Canadian",
    languages: ["English"],
  },
  {
    title: "The Comprehensive Guide for Fencing Strategy, Speed Development, Injury Prevention and Medical Care",
    description: [
      "This volume contains a customized training and development plan for modern day fencing competition with a focus on speed, a key factor for success. It is a guide and resource for aspiring fencers who wish to develop strategy and speed. This volume is unique in that it also includes a complete chapter devoted to injury prevention and medical care.",
    ],
    specs: 'Bound in hard cover, 5-1/2" x 8-1/2", 182 pages with illustrations, B/W',
    price: "$30.00 Canadian",
    languages: ["English"],
  },
  {
    title: "The Manual for the Care and Repair of Electrical Fencing Equipment",
    description: [
      "This volume provides a comprehensive guide to the care and maintenance of electrical weapons and scoring equipment. The foil, épée and sabre sections provide instruction on repairing and maintaining fencing weaponry. The scoring section covers accuracy testing. There is an additional section on pre-tournament equipment control and testing requirements to enable the competitive fencer to avoid problems in tournament. This volume remains a valuable handbook for the competitive fencer as well as an excellent reference for the fencing club.",
    ],
    specs: 'Bound in soft cover, 5-1/2" x 8-1/2", 217 pages, 339 illustrations, B/W',
    price: "$25.00 Canadian",
    languages: ["English"],
  },
  {
    title: "FENCING: Competitive Training and Practice — The Foil, The Épée, The Sabre, and the Manual for the Care and Repair of Electrical Fencing Equipment",
    description: [
      "This unique work represents a generation's worth of accumulated knowledge and experience encapsulated into a well-organized five-volume series. Fencing is one of the world's oldest and most prestigious organized sports. Fencers, their coaches and their supporters are a profoundly loyal group bound by a tremendous respect for this ancient art. This indispensable authoritative reference series reflects that profound loyalty and respect.",
      "This volume is a comprehensive guide for serious fencers who wish to improve their performance at both the club and competitive levels. The book contains sections on the anatomy and physiology of the human body, fencing physiology, training programs, and nutrition for fencers. This well-illustrated volume makes an ideal training manual full of practical ideas to help fencers achieve their best performance.",
    ],
    specs: 'Bound in soft cover, 5-1/2" x 8-1/2", approximately 867 pages and 915 illustrations, B/W',
    price: "$85.00 Canadian",
    languages: ["English"],
  },
  {
    title: "Artistic Fencing",
    description: [
      "Today, artistic fencing is considered a new and popular European martial art. In a journey through the timeless and fantastic, this book describes the fencing practice under many forms and styles, with the rapier, small sword and dagger throughout different eras, from times past to the end of the nineteenth century.",
      "Presently, artistic fencing not only appears on the stage and in films, but also in historical re-enactments. This book covers many different treatises, which lay out the history of ancient fencing and the reconstruction of realistic sword combats. It provides a resource for sword enthusiasts, history buffs, and drama students with in-depth theoretical and practical instruction. Readers will discover a unique experience in the thrill and exhilaration of swordplay as it has been practiced for hundreds of years.",
    ],
    specs: 'Bound in soft cover, approximately 261 pages, 5.5" x 8.5", with over 800 illustrations by the author',
    languages: ["English", "French", "Italian"],
    price: ["English: $39.00 Canadian", "French: €24.00", "Italian: €19.00"],
  },
];

export const callNumbers: CallNumber[] = [
  { text: "Fencing: competitive training and practice: the foil, the épée, the sabre and weapon repairs. Bac Hy Tau. Vancouver Theatrical and Modern Fencing Club, 2014, third ed., 1 volume.", call: "MA 26550" },
  { text: "The comprehensive guide for fencing strategy, speed development, injury prevention and medical care. Bac H. Tau. Bac H. Tau, 2013, 173 pages.", call: "MA 26168" },
  { text: "Criteria for the organization of technical training in world fencing academies. Bac H. Tau. [S.n], 2000, 1 volume.", call: "MA 26551" },
  { text: "Fencing. Maître Bac. Bac H. Tau, ca 1991, 1 volume.", call: "MA 10393" },
  { text: "Fencing. Bac Hy Tau. Bac H. Tau, cop. 1981 (cop. 1977), 4 volumes.", call: "MA 8479" },
  { text: "Fencing: the fundamental principles and techniques of foil. Bac Hy Tau. Bac H. Tau, 1981–1995, 2 volumes.", call: "MA 8479/1 and MA 8479/2" },
];
