import { link } from "fs";

export const navItems = [
  { name: "Story", link: "#story" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const machineLearning = [
  {
    id: 1,
    title: "Exploring psychiatric disorders",
    des: "In this study, an EEG dataset comprising approximately 1,000 attributes was utilized to identify psychiatric disorders. The primary objective was twofold: to determine whether the mind was healthy and, if not, to identify the specific psychiatric disorder present. Psychiatric disorders encompass a wide range of conditions, including depression, personality disorders, anxiety disorders, schizophrenia, eating disorders, and addictive behaviors, all of which significantly impact an individual's thinking, mood, and behavior.",
    img: "/brain2.png",
    link: "Psychiatric Disorders",
    iconLists: [],
    linkOpen:
      "https://www.kaggle.com/embed/santiagoramirez2002/deep-learning-exploring-psychiatric-disorders?kernelSessionId=196578271",
  },
  ,
  {
    id: 2,
    title:
      "Predicting Drug Sensitivity in Cancer Cell Lines Using Deep Learning",
    des: "This study leverages deep learning to predict the natural logarithm of the half-maximal inhibitory concentration (LN_IC50) for various anti-cancer drugs based on the genomic features of cancer cell lines. Utilizing the Genomics of Drug Sensitivity in Cancer (GDSC) dataset, the research aims to explore the relationship between genetic markers and drug response, contributing to the field of personalized medicine and therapeutic biomarker discovery.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-start",
    img: "cancer.png",
    link: "Drug Sensitivity",
    iconLists: [],
    linkOpen:
      "https://www.kaggle.com/embed/santiagoramirez2002/genomics-of-drug-sensitivity-in-cancer-analysis?kernelSessionId=193765848",
  },
];
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AIMG",
    des: "Co-founded a cutting-edge technology startup with my brother that utilizes artificial intelligence to generate high-quality images and prints them on demand for customers.",
    img: "/AIMG.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "AIMG.art",
    linkOpen: "https://aimg.art",
  },
  {
    id: 2,
    title: "Free Geek Toronto Website",
    des: "This website employs web scraping to gather internet pricing data for products and employs AI to estimate their approximate values.",
    img: "/freegeek.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "priceanything.netlify.app",
    linkOpen: "https://priceanything.netlify.app",
  },
  {
    id: 3,
    title: "Artu",
    des: "Worked in a tech startup that monitors the government publication and provides a platform for businesses to access the data.",
    img: "/artu.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "artu.ai",
    linkOpen: "https://artu.ai",
  },
  {
    id: 4,
    title: "Gala",
    des: "Created a mobile application where users can create their own events.",
    img: "/Gala.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Filmaker",
    desc: "Have done short films, commmericals and documentaries for fun in my free time ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Developer",
    desc: "Have developed and maintained backend services for a web-based platforms using Node.js, Express, MogoDB, and PostgreSQL.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/rmz92002",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.youtube.com/@ramitavids9486",
    img: "/youtube.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/santiago-ramirez-villalobos-68802424a",
    img: "/link.svg",
  },
];
