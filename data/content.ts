export interface GalleryItem {
  id: string;
  category: string;
  image: string;
  title?: string;
  description?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  tagline: string;
  description: string;
  features: string[];
  gallery: string[];
  process: { step: string; title: string; desc: string }[];
}

export const SITE_METADATA = {
  name: "Sreeram Creations",
  tagline: "Make Your Moments Magical",
  headline: "Luxury Photography & Cinematography",
  phone: "+91 9294053749",
  email: "sreeram.creations19@gmail.com",
  location: "Madanapalle",
  instagram: "@sreeram.creations",
  instagramUrl: "https://www.instagram.com/sreeram.creations/",
  youtube: "@SreeramCreations",
  youtubeUrl: "https://www.youtube.com/@SreeramCreations",
};

export const HERO_SLIDES = [
  {
    image: "/images/hero1.jpg",
    title: "Sreeram Creations",
    subtitle: "Make Your Moments Magical",
    caption: "High-End Luxury Wedding Ceremony",
  },
  {
    image: "/images/hero2.jpg",
    title: "Sacred Traditions",
    subtitle: "Golden Hour Romance & Fine Art",
    caption: "Garden Portraiture",
  },
  {
    image: "/images/hero3.jpg",
    title: "Destination Fine Art",
    subtitle: "Architectural Symmetry & Twilight Magic",
    caption: "Twilight Architectural Portraiture",
  },
  {
    image: "/images/hero4.jpg",
    title: "Editorial Moments",
    subtitle: "Vibrant Heritage & Heritage Rituals",
    caption: "Traditional Wedding Rituals",
  },
  {
    image: "/images/hero5.jpg",
    title: "Cinematic Grandeur",
    subtitle: "Cliffside Celebrations & Aerial Storytelling",
    caption: "Private Cliffside Estate Reception",
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    slug: "pre-wedding",
    title: "Pre-Wedding Photography",
    subtitle: "Cinematic romance in breathtaking global destinations.",
    heroImage: "/images/PBR00927.JPG",
    tagline: "Where love stories meet architectural grandeur and high-fashion aesthetics.",
    description: "Our pre-wedding shoots are conceived as bespoke fashion editorials. We curate exotic locations, styling palettes, and lighting setups to frame your bond in timeless elegance.",
    gallery: [
      "/images/DSC09764.JPG",
      "/doc/p4.jpg",
      "/images/D1.jpg",
      "/images/hero1.jpg",
      "/images/d4.jpg",
      "/images/d3.jpg",
    ],

    features: [
      "Destination shoots in iconic global locations",
      "Cinematic storytelling with editorial styling and lighting",
      "Luxury wardrobe consultation and on-site styling",
      "High-resolution digital delivery and museum-grade albums",
    ],
    process: [
      { step: "01", title: "Concept & Moodboard", desc: "Collaborative session to design your bespoke visual narrative." },
      { step: "02", title: "Destination Shoot", desc: "Multi-day shooting experience with dedicated lighting & hair/makeup team." },
      { step: "03", title: "Curation & Master Edit", desc: "Hand-finished color grading and museum-grade album creation." },
    ]
  },
  {
    slug: "traditional-wedding",
    title: "Traditional Wedding Photography",
    subtitle: "Capturing sacred rituals, royal splendor, and heritage emotion.",
    heroImage: "/images/N1.jpg",
    tagline: "Honoring ancient customs with contemporary artistic vision.",
    description: "Traditional celebrations demand deep respect for rituals combined with an eagle eye for raw emotional moments. We document every garland exchange, sacred mantra, and tearful farewell in vivid, archival quality.",
    features: [
      "Multi-camera live coverage for main rituals and mandap ceremonies",
      "Traditional family portraits with royal studio lighting setups",
      "Luxury leather-bound heirloom albums",
    ],
    gallery: [
      "/images/t8.jpg",
      "/images/t2.jpg",
      "/images/t3.jpg",
      "/images/t4.png",
      "/images/t5.jpg",
      "/images/t7.jpg",
    ],
    process: [
      { step: "01", title: "Ritual Breakdown", desc: "Detailed timeline mapping of all muhurtham, sangeet, and reception events." },
      { step: "02", title: "On-Site Execution", desc: "Discrete multi-photographer team documenting both intimate and grand moments." },
      { step: "03", title: "Teaser", desc: "Delivering initial highlight portraits within 24 hours of the event." },
    ]
  },
  {
    slug: "corporate",
    title: "Corporate ",
    subtitle: "Prestigious executive portraiture and large-scale event coverage.",
    heroImage: "/images/n2.jpg",
    tagline: "Refining corporate image with architectural precision and high-contrast clarity.",
    description: "For luxury brands, global summits, and executive galas, we deliver authoritative imagery that reinforces prestige and market leadership.",
    features: [
      "C-Suite executive headshots & editorial board portraits",
      "High-profile keynotes, award galas, and venue architecture documentation",
      "Commercial license inclusion for worldwide publication",
    ],
    gallery: [
      "/images/c15.JPG",
      "/images/c2.JPG",
      "/images/c3.JPG",
    ],
    process: [
      { step: "01", title: "Briefing & Branding Scope", desc: "Aligning on corporate guidelines and shot lists." },
      { step: "02", title: "Event Photography", desc: "Unobtrusive coverage capturing high-level networking and keynote moments." },
      { step: "03", title: "Rapid Delivery", desc: "Fast-turnaround high-res digital assets for PR & media releases." },
    ]
  },
  {
    slug: "maternity",
    title: "Maternity & Newborn Fine Art",
    subtitle: "Sculptural silhouette portraiture celebrating life's most gentle miracle.",
    heroImage: "/images/m4.jpg",
    tagline: "Fine-art monochromatic and warm tonal maternity art.",
    description: "Designed around safety, comfort, and high-fashion minimalism. We transform pregnancy into museum-caliber portraiture with soft directional light and flowing couture fabrics.",
    features: [
      "Private climate-controlled studio sessions",
      "Soft focus & delicate retouching accentuating natural beauty",
      "Fine-art acrylic & canvas wall displays",
    ],
    gallery: [
      "/images/m1.jpg",
      "/images/m7.jpg",
      "/images/m3.jpg",
      "/images/m4.jpg",
      "/images/m5.jpg",
      "/images/m6.jpg",
    ],
    process: [
      { step: "01", title: "Styling Consultation", desc: "Selecting custom couture fabrics and light moodboards." },
      { step: "02", title: "Relaxed Session", desc: "Private studio session with unhurried breaks." },
      { step: "03", title: "Fine Art Proofing", desc: "Viewing session to select signature wall art pieces." },
    ]
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "Traditional",
    image: "/images/p8.jpg",
  },
  {
    id: "g2",
    category: "Pre-Wedding",
    image: "/doc/p1.jpg",
  },
  {
    id: "g3",
    category: "Pre-Wedding",
    image: "/doc/p2.jpg",
  },
  {
    id: "g4",
    category: "Traditional",
    image: "/doc/t1.jpg",
  },
  {
    id: "g5",
    category: "Maternity & Baby Photography",
    image: "/doc/m1.jpg",
  },
  {
    id: "g6",
    category: "Interior",
    image: "/images/c2.JPG",
  },
  {
    id: "g7",
    category: "Interior",
    image: "/images/c3.JPG",
  },
  {
    id: "g8",
    category: "Traditional",
    image: "/doc/t2.jpg",
  },
  {
    id: "g9",
    category: "Pre-Wedding",
    image: "/doc/p3.jpg",
  },
  {
    id: "g10",
    category: "Traditional",
    image: "/doc/t3.jpg",
  },

  {
    id: "g11",
    category: "Pre-Wedding",
    image: "/doc/p4.jpg",
  },
  {
    id: "g12",
    category: "Pre-Wedding",
    image: "/doc/p5.jpg",
  },
  {
    id: "g13",
    category: "Pre-Wedding",
    image: "/doc/p6.jpg",
  },
  {
    id: "g14",
    category: "Pre-Wedding",
    image: "/doc/p7.jpg",
  },
  {
    id: "g15",
    category: "Pre-Wedding",
    image: "/doc/p8.jpg",
  },
  {
    id: "g16",
    category: "Traditional",
    image: "/doc/t4.jpg",
  },
  {
    id: "g17",
    category: "Traditional",
    image: "/doc/t5.jpg",
  },
  {
    id: "g18",
    category: "Traditional",
    image: "/doc/t6.png",
  },
  {
    id: "g19",
    category: "Traditional",
    image: "/doc/t7.jpg",
  },
  {
    id: "g20",
    category: "Traditional",
    image: "/doc/t8.jpg",
  },
  {
    id: "g21",
    category: "Maternity & Baby Photography",
    image: "/images/m1.jpg",
  },
  {
    id: "g22",
    category: "Maternity & Baby Photography",
    image: "/images/m10.JPG",
  },
  {
    id: "g23",
    category: "Maternity & Baby Photography",
    image: "/doc/m2.jpg",
  },
  {
    id: "g24",
    category: "Maternity & Baby Photography",
    image: "/images/m11.JPG",
  },
  {
    id: "g26",
    category: "Maternity & Baby Photography",
    image: "/doc/m6.jpg",
  },
  {
    id: "g27",
    category: "Maternity & Baby Photography",
    image: "/images/hero5.jpg",
  },
  {
    id: "g28",
    category: "Interior",
    image: "/images/c5.JPG",
  },
  {
    id: "g29",
    category: "Interior",
    image: "/images/c6.jpg",
  },
  {
    id: "g30",
    category: "Interior",
    image: "/images/c7.jpg",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Ms. Sindhu from Sreeram Creations gifted us with precious memories, beyond our expectations. Her attention to details, to all the individuals at the event, maintaining the mood of the event is very unique. She gets the message delivered through her creations, effortlessly. Definitely going back for more.",
    author: "raki nagendra",
  },

  {
    quote: "The team at Sreeram Creations is exceptional. They captured our wedding with such artistry and professionalism. Every photo tells a story, and we are thrilled with the results.",
    author: "PTR academy",

  },
  {
    quote: "We are extremely happy with the wedding photography. The team captured every special moment so beautifully and naturally. The photos are very clear, full of emotions, and perfectly highlight the important rituals as well as candid memories. The creativity, professionalism, and patience shown throughout the event were truly impressive. These pictures will be a lifetime treasure for us, and we are very thankful for the wonderful work done.",
    author: "Nikhanjan Reddy",
  },
  {
    quote: "Thankyou so much Sreeram Creations for capturing my big day so beautifully, The Team is so friendly and talented, the output is clean, creative and amazing.I wish to enjoy your service on many occasions in the future.Team work is truly recommended for the best photography and editing.",
    author: "yadu vamsi",
  },
  {
    quote: "We are extremely happy with the wedding photography. The team beautifully captured every special moment with creativity, professionalism, and patience, giving us clear, emotional photos that will remain a lifetime treasure",
    author: "Nikhanjan Reddy",
  },
];
