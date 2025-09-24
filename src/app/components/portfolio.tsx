'use client';


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { url } from "inspector";


// ---- Quick data model you can customize ----
const DATA = {
  name: "Xenus Gonsalves",
  title: "Software Engineer",
  about:
    "Software Engineer experienced in designing scalable systems. Proficient in Python, Java, JavaScript, Swift, Angular, React and REST APIs with exceptional problem solving skills. MS in Computer Science graduate from USC, seeking full-time Software Engineering roles.",
  skills: {
    "Programming Languages": ["Python", "TypeScript", "Java", "C++"],
    "Frameworks & Libraries": ["React", "Angular", "MongoDB", "Flask", "Node.js", "Tailwind"],
    "Analytics & ML": ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "Matplotlib"],
  },
  tools: {
    Databases: ["PostgreSQL", "MongoDB", "SQLite"],
    Dev: ["Git", "Docker", "VS Code", "Linux"],
  },
  education: [
    {
      degree: "Masters in Computer Science",
      org: "University of Southern California",
      period: "2023 – 2025",
      logo: "USC_logo.png",
      url: "https://viterbigradadmission.usc.edu/programs/masters/msprograms/computer-science/ms-computer-science/",
      details: ["GPA: 3.57 / 4.00", "Key coursework: Analysis of Algorithms, Web Technologies, Machine Learning, Database Management Systems, Natural Language Processing, Multimedia System Design, Information Retrieval and SEO"],
    },
    {
      degree: "Bachelors in Computer Engineering",
      org: "University of Mumbai",
      period: "2019 – 2023",
      logo: "MU_logo.png",
      url: "https://mu.ac.in/wp-content/uploads/2022/05/6.16-Computer-Engineering-8-Branches.pdf",
      details: ["GPA: 3.7 / 4.00", "Key CourseWork: Data Structures, Analysis of Algorithms, Software Engineering, OOPs, Internet Programming, DBMS, Python, Java, Machine Learning, Artificial Intelligence, Natural Language Processing"],
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      org: "Easley-Dunn Productions",
      period: "May 2025 – Present",
      bullets: [
        "Built a Game Machinations Simulation tool in React as a Co-Lead.",
        "Designed the Graph manipulation logic and integrated with the front-end and conducted Testing in Typescript.",
      ],
    },
    {
      role: "Software Developement Intern",
      org: "Xfinion",
      period: "May 2024 – Aug 2025",
      bullets: [
        "Integrated logistics and asset tracking functionalities using Python, in our CARTN project.",
        "Engineered a responsive e-commerce website to represent the project(CARTN), utilizing HTML, JavaScript, CSS, and Tailwind, significantly enhancing user experience and optimizing performance across multiple devices."],
    },
    {
      role: "Web Developement Intern",
      org: "Social Tangle",
      period: "May 2019 – Jun 2019",
      bullets: [
        "Developed a Blood Bank System application using Python, HTML, Bootstrap and DBMS to manage blood donations and track donor information.",
        "Designed and implemented a user-friendly interface for efficient blood bank operations, integrating database functionality to store and retrieve critical donor data."],
    },
  ],
  collaborations: [
    { title: "Guest Speaker", date: "Aug 2025" },
    { title: "Hackathon Judge", date: "Jul 2025" },
  ],
  projects: [
    {
      title: "Real-Time Stock Trading and Market Analysis Platform",
      tag: "Angular",
      link: "https://www.youtube.com/watch?v=CyJnCJBcxYk",
      desc: "Angular/Node/MongoDB app with charts, portfolio & watchlists.",
    },
    {
      title: "Pixellate - Video Indexing and Search Software",
      tag: "Multimedia",
      link: "https://github.com/Reubensuju/Pixellate",
      desc: "Python, OpenCV",
    },
    {
      title: "Smart System for the Visually Impaired - Object Detection and Navigation.",
      tag: "Tensorflow",
      link: "https://github.com/Xenus99/Smart-System-for-the-Visually-Impaired",
      desc: "Python, Tensorflow, OpenCV",
    },

  ],
  certifications: [
    { name: "AWS Certified Cloud Practitioner", date: "2024" },
    { name: "Google Data Analytics (Coursera)", date: "2023" },
  ],
  gallery: [
    { alt: "Talk @ Meetup", src: "https://picsum.photos/seed/a/600/400" },
    { alt: "Hackathon", src: "https://picsum.photos/seed/b/600/400" },
    { alt: "Workshop", src: "https://picsum.photos/seed/c/600/400" },
    { alt: "Project Poster", src: "https://picsum.photos/seed/d/600/400" },
  ],
  contact: {
    email: "xgonsalves99@gmail.com",
    links: [
      { label: "LinkedIn", logo: "icons/linkedin.svg", href: "https://www.linkedin.com/in/xenus-gonsalves/" },
      { label: "GitHub", logo: "icons/github.svg", href: "https://github.com/Xenus99" },
      { label: "Resume", logo: "icons/resume.svg", href: "#" },
      { label: "Instagram", logo: "icons/instagram.svg", href: "https://www.instagram.com/xenocide_99/" },

    ],
  },
};

// ---- UI helpers ----
const Section = ({ id, title, children }: any) => (
  <section id={id} className="scroll-mt-24 py-16" aria-label={title}>
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  </section>
);

const Pill = ({ children }: any) => (
  <span className="inline-flex items-center text-sm px-3 py-1 rounded-full border">
    {children}
  </span>
);

const Card = ({ children }: any) => (
  <div className="rounded-2xl border p-5 shadow-sm hover:shadow transition">{children}</div>
);

const useScrollTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return show;
};

export default function Portfolio() {
  const showTop = useScrollTop();
  return (
    <div className="min-h-screen text-sm md:text-base">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-black/60 border-b">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#about" className="font-bold tracking-tight">{DATA.name}</a>
            <div className="hidden md:flex gap-4">
              {[
                ["About", "about"],
                ["Education", "education"],
                ["Experience", "experience"],
                ["Projects", "projects"],
                // ["Certifications", "certifications"],
                // ["Gallery", "gallery"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} className="hover:underline">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {DATA.name}
            </h1>
            <p className="mt-2 text-lg opacity-80">{DATA.title}</p>
            <p className="mt-6 leading-relaxed max-w-prose">{DATA.about}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {Object.entries(DATA.skills).flatMap(([group, items]) => [
                <Pill key={group}>
                  <strong className="mr-2">{group}:</strong> {items.join(", ")}
                </Pill>,
              ])}
            </div>
          </motion.div>
          <motion.div
            className="aspect-[4/3] rounded-2xl border"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Replace with your photo */}
            <img src="ai_portrait_cropped.png" alt="Xenus" className="w-full h-full rounded-2xl object-cover"/>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-4">
          {DATA.education.map((ed, idx) => (
            <a href={ed.url} target="_blank" rel="noopener noreferrer">
            <Card key={idx}>
                <img src={ed.logo} alt={ed.org} className="mb-2 w-150 h-50 rounded-2xl"/>
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{ed.degree}</h3>
                  <p className="opacity-80">{ed.org}</p>
                </div>

                <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-neutral-800 border">
                  {ed.period}
                </span>
              </div>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                {ed.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </Card>
            </a>

          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {DATA.experience.map((ex, idx) => (
            <Card key={idx}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{ex.role}</h3>
                  <p className="opacity-80">{ex.org}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-neutral-800 border">
                  {ex.period}
                </span>
              </div>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                {ex.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Collaborations & Speaking */}
        {/* <div className="mt-10">
          <h3 className="font-semibold mb-3">Collaborations & Speaking</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {DATA.collaborations.map((c, i) => (
              <Card key={i}>
                <div className="flex items-center justify-between">
                  <span>{c.title}</span>
                  <span className="text-xs opacity-70">{c.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div> */}
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-4">
          {DATA.projects.map((p, i) => (
            <a key={i} href={p.link} className="block focus:outline-none group" target="_blank">
              <Card>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold group-hover:underline">{p.title}</h3>
                  <Pill>{p.tag}</Pill>
                </div>
                <p className="opacity-80">{p.desc}</p>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      {/* <Section id="certifications" title="Certifications">
        <div className="grid md:grid-cols-3 gap-4">
          {DATA.certifications.map((c, i) => (
            <Card key={i}>
              <div className="flex items-center justify-between">
                <span>{c.name}</span>
                <span className="text-xs opacity-70">{c.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section> */}

      {/* Gallery */}
      {/* <Section id="gallery" title="Gallery">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {DATA.gallery.map((g, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden border">
              <img src={g.src} alt={g.alt} className="w-full h-48 object-cover" />
              <figcaption className="p-2 text-xs opacity-70">{g.alt}</figcaption>
            </figure>
          ))}
        </div>
      </Section> */}

      {/* Contact */}
      {/* <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-1 gap-6 items-start">
          <div>
            <h3 className="font-semibold">Get in touch</h3>
            <p className="mt-2">Email: <a className="underline" href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a></p>
            <div className="mt-3 flex gap-3 flex-wrap">
              {DATA.contact.links.map((l, i) => (
                <a key={i} className="underline" href={l.href} target="_blank"><img src={l.logo} alt={l.label} className="inline-block w-10 h-10 mr-1 bg-white rounded-4xl" /></a>
              ))}
            </div>
          </div>
          <Card>
            <h3 className="font-semibold">Notes</h3>
            <p className="mt-2 opacity-80">Available to start immediately and open to relocation.</p>
          </Card>
        </div>
      </Section> */}

      {/* Footer */}
      <footer className="py-2 border-t" id="contact">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="opacity-70">© {new Date().getFullYear()} {DATA.name}</span>

        <div>
        <p className="mt-2">Email: <a className="underline" href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a></p>
        <div className="mt-3 flex gap-3 flex-wrap">
            {DATA.contact.links.map((l, i) => (
            <a key={i} className="underline" href={l.href} target="_blank"><img src={l.logo} alt={l.label} className="inline-block w-10 h-10 mr-1 bg-white rounded-4xl" /></a>
            ))}
        </div>
        </div>

          <a href="#about" className="underline">Back to top</a>
        </div>
      </footer>

      {/* Floating back-to-top */}
      {showTop && (
        <a
          href="#about"
          className="fixed bottom-6 right-6 rounded-full border shadow px-4 py-2 text-sm backdrop-blur bg-white/70 dark:bg-black/60"
        >
          ↑ Top
        </a>
      )}
    </div>
  );
}
