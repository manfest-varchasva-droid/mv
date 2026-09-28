export const site = {
  name: "Manfest-Varchasva",
  shortName: "MV",
  edition: "2027",
  dates: "5–7 February 2027",
  venue: "IIM Lucknow",
  tagline: "Where ideas, culture and energy collide.",
  email: "manfest-varchasva@iiml.ac.in",
  address: "IIM Lucknow, Prabandh Nagar, Lucknow 226013",
  heroImage:
    "/headliners/salim-sulaiman.jpeg",
};

export const headliners = [
  {
    name: "Seedhe Maut",
    edition: "MV 2025–26",
    image: "/headliners/seedhe-maut-final.jpg",
  },
  {
    name: "Papon",
    edition: "MV 2025–26",
    image: "/headliners/papon-final.jpg",
  },
  {
    name: "Bismil",
    edition: "MV 2025–26",
    image: "/headliners/bismil-final.jpg",
  },
  {
    name: "Salim–Sulaiman",
    edition: "MV 2024–25",
    image:
      "/headliners/salim-sulaiman.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Jubin Nautiyal",
    edition: "MV 2023–24",
    image:
      "/headliners/jubin-nautiyal-final.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Amit Trivedi",
    edition: "MV 2022–23",
    image:
      "/headliners/amit-trivedi.jpg",
    focus: "50% 50%",
  },
  {
    name: "Javed Ali",
    edition: "MV 2021–22",
    image:
      "/headliners/javed-ali-final.jpeg",
    focus: "50% 50%",
  },
  {
    name: "KK",
    edition: "MV 2020–21",
    image: "/headliners/kk.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Guru Randhawa",
    edition: "MV 2019–20",
    image:
      "/headliners/guru-randhawa.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Vishal & Shekhar",
    edition: "MV 2018–19",
    image:
      "/headliners/vishal-shekhar-final.jpeg",
    focus: "50% 50%",
  },
]

export const leaders = [
  {
    name: "Justice D.Y. Chandrachud",
    role: "50th Chief Justice of India",
    image:
      "/leaders/dy-chandrachud-final.jpg",
  },
  {
    name: "Kapil Dev",
    role: "Former Indian Cricketer",
    image:
      "/leaders/kapil-dev-final.jpg",
  },
  {
    name: "Dr. A.P.J. Abdul Kalam",
    role: "11th President of India",
    image:
      "/leaders/apj-abdul-kalam.jpg",
  },
  {
    name: "Smriti Irani",
    role: "Former Cabinet Minister",
    image:
      "/leaders/smriti-irani.jpg",
  },
  {
    name: "Jyotiraditya Scindia",
    role: "Minister of Communications",
    image:
      "/leaders/jyotiraditya-scindia.jpeg",
  },
  {
    name: "Azim Hashim Premji",
    role: "Chairman, Wipro Limited",
    image:
      "/leaders/azim-premji-final.jpg",
  },
  {
    name: "Dr. Philip Kotler",
    role: "Father of Modern Marketing",
    image:
      "/leaders/philip-kotler.jpeg",
  },
  {
    name: "Dr. Duvvuri Subbarao",
    role: "Ex Governor RBI",
    image:
      "/leaders/duvvuri-subbarao.jpg",
  },
  {
    name: "Arjun Rampal",
    role: "National award winning actor",
    image:
      "/leaders/arjun-rampal.jpg",
  },
  {
    name: "Ashwin Sanghi",
    role: "Critically acclaimed writer",
    image:
      "/leaders/ashwin-sanghi-final.jpg",
  },
  {
    name: "Ashish Vidyarthi",
    role: "Actor, Motivational Speaker",
    image:
      "https://avidlearning.in/uploads/faculty/069D865A-E2B7-44A9-9DFD-960569374F22.jpg",
  },
];

export const stats = [
  { value: "301+", label: "Colleges" },
  { value: "₹25L+", label: "Prize Money" },
  { value: "70+", label: "Events" },
  { value: "30,000+", label: "Participants" },
  { value: "70+", label: "Partners" },
];

export const partnerLogos = [
  {
    name: "Axis Bank",
    image:
      "/partners/axis-bank.png",
  },
  {
    name: "Alpha 8",
    image:
      "/partners/alpha-8.png",
  },
  {
    name: "Bonn",
    image:
      "/partners/bonn.png",
  },
  {
    name: "Decathlon",
    image:
      "/partners/decathlon.png",
  },
  {
    name: "Devyani International",
    image:
      "/partners/devyani-international.png",
  },
  {
    name: "Mahindra Solarize",
    image:
      "/partners/mahindra-solarize.png",
  },
  {
    name: "IDFC FIRST Bank",
    image:
      "/partners/idfc-first-bank.png",
  },
  {
    name: "SBI",
    image:
      "/partners/sbi.png",
  },
  {
    name: "LIC",
    image:
      "/partners/lic.png",
  },
  {
    name: "Plum",
    image:
      "/partners/plum.png",
  },
  {
    name: "Safexpress",
    image:
      "/partners/safexpress.png",
  },
  {
    name: "Sparx",
    image:
      "/partners/sparx.png",
  },
  {
    name: "UPSRTC",
    image:
      "/partners/upsrtc.png",
  },
  {
    name: "UPSDM",
    image:
      "/partners/upsdm.png",
  },
];

export type EventItem = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  details?: string[];
  prize?: string;
};

export const events: EventItem[] = [
  {
    slug: "campus-ambassador",
    name: "Campus Ambassador 9.0",
    category: "Campus Ambassador",
    blurb:
      "A chance to be the face of Manfest-Varchasva on your campus, drive participation and expand the fest’s outreach through online and offline channels.",
    details: [
      "2025–26 edition of the Campus Ambassador Programme",
      "Be the face of Manfest-Varchasva on your campus and drive participation for events",
      "Grow fest outreach through campus networks, websites and social media channels",
      "Official Manfest-Varchasva certificate for all ambassadors",
      "National Campus Ambassador: prizes worth ₹7,000",
      "Runner-up: prizes worth ₹5,000",
      "Second runner-up: prizes worth ₹3,000",
      "Registration deadline for this edition was 15 January 2026",
    ],
    prize: "₹15,000 total prizes",
  },
  {
    slug: "vibes",
    name: "Vibes",
    category: "Dance",
    blurb:
      "The flagship solo freestyle dance competition where individual performers bring their own style, energy and stage presence to own the spotlight at Manfest-Varchasva.",
  },
  {
    slug: "imperio",
    name: "Imperio",
    category: "Dance",
    blurb:
      "The ultimate Western group dance arena where crews bring raw energy, synchronized precision and stage presence to Manfest-Varchasva.",
    details: [
      "Team size: 6–20 members",
      "2 rounds: online preliminary + offline final",
      "Only Western dance forms are permitted",
      "Only registered teams can participate",
      "Submission and registration deadline: 20 January 2026",
      "Final round: 6–8 February 2026 at IIM Lucknow",
    ],
    prize: "₹24,000 first place · ₹15,000 runners-up",
  },
  {
    slug: "duex-danza",
    name: "Duex Danza",
    category: "Dance",
    blurb: "A cultural dance event from Manfest-Varchasva.",
  },
  {
    slug: "taal",
    name: "Taal",
    category: "Dance",
    blurb: "A dance event in the Manfest-Varchasva cultural programme.",
  },
  {
    slug: "jashn",
    name: "JashN",
    category: "Fashion Parade",
    blurb: "The fashion parade event of Manfest-Varchasva.",
  },
  {
    slug: "antarnaad",
    name: "Antarnaad",
    category: "Theatre",
    blurb: "A theatre event from the cultural line-up.",
  },
  {
    slug: "halla-bol",
    name: "Halla Bol",
    category: "Theatre",
    blurb: "A theatre event from the cultural line-up.",
  },
  {
    slug: "izhaar",
    name: "Izhaar",
    category: "Theatre",
    blurb: "A theatre event from the cultural line-up.",
  },
  {
    slug: "stairway-to-hell",
    name: "Stairway to Hell",
    category: "Music",
    blurb: "A music event from the Manfest-Varchasva cultural programme.",
  },
  {
    slug: "sur",
    name: "Sur",
    category: "Music",
    blurb: "A music event from the Manfest-Varchasva cultural programme.",
  },
  {
    slug: "the-joust",
    name: "The Joust",
    category: "Literary",
    blurb: "A literary event from the cultural line-up.",
  },
  {
    slug: "rohan",
    name: "Rohan",
    category: "Literary",
    blurb: "A literary event from the cultural line-up.",
  },
  {
    slug: "iim-lucknow-mun",
    name: "IIM Lucknow MUN",
    category: "MUN",
    blurb: "The Model United Nations platform at Manfest-Varchasva.",
  },
  {
    slug: "young-leaders-programme",
    name: "YLP",
    category: "Leaders Express",
    blurb: "A Leaders Express format focused on ideas, leadership and conversation.",
  },
  {
    slug: "icons",
    name: "ICONS",
    category: "Leaders Express",
    blurb: "A Leaders Express format featuring notable voices and ideas.",
  },
  {
    slug: "minute-to-win-it",
    name: "Minute to Win It",
    category: "Management",
    blurb: "A management challenge from the Manfest-Varchasva event line-up.",
  },
  {
    slug: "vridhi-season-4",
    name: "Vridhi Season 4",
    category: "Management",
    blurb: "A management event from the Manfest-Varchasva programme.",
  },
];

export const galleryImages = [
  ...headliners.map((item) => ({ src: item.image, alt: item.name })),
  ...leaders.slice(0, 4).map((item) => ({ src: item.image, alt: item.name })),
];
