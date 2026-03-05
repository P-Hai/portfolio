const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
];

const words = [
  { text: "Scale", imgPath: "/images/ideas.svg" },
  { text: "Speed", imgPath: "/images/speed.svg" },
  { text: "Reliability", imgPath: "/images/reliability.png" },
  { text: "Growth", imgPath: "/images/growth.svg" },
  { text: "Scale", imgPath: "/images/ideas.svg" },
  { text: "Speed", imgPath: "/images/speed.svg" },
  { text: "Reliability", imgPath: "/images/reliability.png" },
  { text: "Growth", imgPath: "/images/growth.svg" },
];

const counterItems = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 80, suffix: "+", label: "Stakeholders" },
  { value: 100, suffix: "+", label: "Datasets" },
  { value: 90, suffix: "%", label: "Manual Work Automated" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Cloud DataWarehouse",
    modelPath: "/models/cloud.glb",
    scale: 1.2,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Data Modeling",
    modelPath: "/models/modeling.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Advanced SQL",
    modelPath: "/models/sql.glb",
    scale: 5,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Data Pipelines",
    modelPath: "/models/tube.glb",
    scale: 0.7,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Hải brings strong analytical thinking and solid technical expertise to Affina, contributing to improved data quality and optimized reporting performance. As an Analytics Engineer, he focuses on building and standardizing scalable data models, ensuring accurate and reliable datasets that effectively support business decision-making. ",
    imgPath: "/images/affina.jpg",
    logoPath: "/images/logo.jpg",
    title: "Analytics Engineer",
    date: "April 2025 - Present",
    responsibilities: [
      "Design, build, and maintain scalable data models and ELT pipelines to ensure reliable and well-structured datasets.",
      "Transform raw data into clean, validated, and business-ready insights to support reporting and decision-making.",
      "Collaborate with stakeholders to define data requirements, improve data quality, and optimize analytics performance.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const certifications = [
  {
    title: "B2 APTIS Certificate",
    issuer: "British Council",
    date: "2025",
    imgPath: "/images/aptis.png",
    description: "English Language Proficiency",
  },
  {
    title: "SQL Certificate - HackerRank",
    issuer: "Professional SQL Developer",
    date: "2025",
    imgPath: "/images/sql.webp",
    description: "Database Management & Query Optimization",
  },
  {
    title: "Power BI Certificate - IBEP",
    issuer: "Microsoft Power BI",
    date: "2024",
    imgPath: "/images/powerbi.jpg",
    description: "Data Visualization & Business Intelligence",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/im.marcus___/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://chat.zalo.me/",
    imgPath: "/images/zalo.png",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/hai.nguyen.19020/",
    imgPath: "/images/fb.png",
  },
  {
    name: "linkedin",
    url: "https://github.com/Marcus0175",
    imgPath: "/images/github.jpg",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  certifications,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
