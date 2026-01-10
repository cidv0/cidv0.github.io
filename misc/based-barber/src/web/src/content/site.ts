export const site = {
  name: "Based Barber Co",
  city: "West Chester, PA",
  description:
    "Modern barbering in West Chester, PA. Clean fades, sharp lineups, and precision beard work with easy online booking.",
  seo: {
    baseUrl: "https://basedbarber.example.com",
  },
  contact: {
    phone: "610-555-0144",
    phoneDisplay: "(610) 555-0144",
    email: "hello@basedbarber.example.com",
    address: {
      line1: "19 N High St",
      line2: "Suite 2",
      city: "West Chester",
      state: "PA",
      zip: "19380",
    },
    parkingNote: "Free street parking after 5 PM. Public lot behind the block.",
    mapLinkUrl:
      "https://www.google.com/maps/dir/?api=1&destination=19%20N%20High%20St%20West%20Chester%20PA%2019380",
    mapEmbedUrl:
      "https://www.google.com/maps?q=19%20N%20High%20St%20West%20Chester%20PA%2019380&output=embed",
  },
  hours: [
    { label: "Mon", value: "Closed" },
    { label: "Tue", value: "10:00 AM - 6:00 PM" },
    { label: "Wed", value: "10:00 AM - 6:00 PM" },
    { label: "Thu", value: "10:00 AM - 8:00 PM" },
    { label: "Fri", value: "10:00 AM - 6:00 PM" },
    { label: "Sat", value: "9:00 AM - 4:00 PM" },
    { label: "Sun", value: "Closed" },
  ],
  bookingUrl: "https://booking.example.com/based-barber",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    headline: "Modern barbering in West Chester, PA.",
    subhead: "Clean fades, sharp lineups, and precision beard work.",
    primaryCta: { label: "Book Now", href: "/book" },
    secondaryCta: { label: "Get Directions", href: "/contact" },
  },
  trust: {
    rating: "4.8+",
    reviewCount: "120+",
    walkIns: "Walk-ins welcome",
    location: "West Chester, PA",
  },
  valueProps: [
    "Detail-focused fades and lineups",
    "Consistent results, every visit",
    "Easy online booking",
    "Comfortable, professional vibe",
  ],
  servicesPreview: [
    {
      name: "Signature Cut",
      duration: "45 min",
      price: "From $38",
      description: "Consultation, cut, and style finish.",
    },
    {
      name: "Skin Fade",
      duration: "45 min",
      price: "From $42",
      description: "Tight fade with crisp blend work.",
    },
    {
      name: "Beard Trim",
      duration: "30 min",
      price: "From $25",
      description: "Lineup and shaping with hot towel.",
    },
    {
      name: "Cut + Beard",
      duration: "60 min",
      price: "From $60",
      description: "Full service cut plus beard detailing.",
    },
    {
      name: "Kids Cut",
      duration: "30 min",
      price: "From $28",
      description: "Clean cut for ages 12 and under.",
    },
    {
      name: "Lineup",
      duration: "15 min",
      price: "From $18",
      description: "Quick edge up and cleanup.",
    },
  ],
  services: [
    {
      category: "Haircuts",
      items: [
        {
          name: "Signature Cut",
          description: "Consultation, cut, and style finish.",
          duration: "45 min",
          price: "$38",
        },
        {
          name: "Clipper Cut",
          description: "One length or tapered clipper cut.",
          duration: "30 min",
          price: "$30",
        },
        {
          name: "Kids Cut",
          description: "Ages 12 and under.",
          duration: "30 min",
          price: "$28",
        },
      ],
    },
    {
      category: "Fades",
      items: [
        {
          name: "Skin Fade",
          description: "Tight fade with crisp blend work.",
          duration: "45 min",
          price: "$42",
        },
        {
          name: "Taper Fade",
          description: "Clean taper with natural finish.",
          duration: "40 min",
          price: "$40",
        },
      ],
    },
    {
      category: "Beard",
      items: [
        {
          name: "Beard Trim",
          description: "Lineup and shaping with hot towel.",
          duration: "30 min",
          price: "$25",
        },
        {
          name: "Beard Deluxe",
          description: "Trim, steam, and conditioning treatment.",
          duration: "40 min",
          price: "$35",
        },
      ],
    },
    {
      category: "Combos",
      items: [
        {
          name: "Cut + Beard",
          description: "Full service cut plus beard detailing.",
          duration: "60 min",
          price: "$60",
        },
      ],
    },
    {
      category: "Add-ons",
      items: [
        {
          name: "Lineup",
          description: "Quick edge up and cleanup.",
          duration: "15 min",
          price: "$18",
        },
        {
          name: "Hot Towel",
          description: "Extra steam and refresh.",
          duration: "10 min",
          price: "$10",
        },
      ],
    },
  ],
  reviews: [
    {
      quote: "Best fade in West Chester. Clean, fast, and professional.",
      name: "Marcus T.",
    },
    {
      quote: "Attention to detail is unmatched. Always leave sharp.",
      name: "Alex R.",
    },
    {
      quote: "Easy booking and the vibe is great.",
      name: "Jasmine K.",
    },
    {
      quote: "They take their time and it shows. Highly recommend.",
      name: "Chris P.",
    },
    {
      quote: "Perfect beard trim every time.",
      name: "Luis V.",
    },
    {
      quote: "My new go-to spot in town.",
      name: "Sam D.",
    },
  ],
  gallery: [
    { src: "/gallery/sample-1.jpg", label: "Classic taper fade" },
    { src: "/gallery/sample-2.jpg", label: "Textured crop" },
    { src: "/gallery/sample-3.jpg", label: "Beard detail work" },
    { src: "/gallery/sample-4.jpg", label: "Skin fade finish" },
    { src: "/gallery/sample-5.jpg", label: "Lineup precision" },
    { src: "/gallery/sample-6.jpg", label: "Modern pompadour" },
    { src: "/gallery/sample-7.jpg", label: "Buzz cut refresh" },
    { src: "/gallery/sample-8.jpg", label: "Curly top fade" },
    { src: "/gallery/sample-9.jpg", label: "Beard and fade combo" },
    { src: "/gallery/sample-10.jpg", label: "Side part taper" },
    { src: "/gallery/sample-11.jpg", label: "Low fade crop" },
    { src: "/gallery/sample-12.jpg", label: "Clean lineup" },
  ],
  about: {
    headline: "A clean, modern shop built on consistency.",
    story:
      "Based Barber Co is a West Chester barbershop focused on precision cuts, thoughtful service, and a relaxed experience. We specialize in fades, lineups, and beard work with a focus on consistency and detail.",
    specialties: [
      "Fades and tapers",
      "Beard shaping",
      "Modern styles",
      "Classic cuts",
    ],
  },
  faq: [
    {
      question: "What is the late policy?",
      answer:
        "We hold appointments for 10 minutes. After that, we may need to reschedule depending on the day.",
    },
    {
      question: "What is the no-show policy?",
      answer:
        "No-shows may be charged a fee and require a deposit for future bookings.",
    },
    {
      question: "What payment types do you accept?",
      answer: "Cash, card, and mobile pay.",
    },
    {
      question: "Do you take walk-ins?",
      answer:
        "Walk-ins are welcome when availability allows. Booking ahead is recommended.",
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/basedbarber" },
    { label: "TikTok", href: "https://tiktok.com/@basedbarber" },
    { label: "Facebook", href: "https://facebook.com/basedbarber" },
  ],
};
