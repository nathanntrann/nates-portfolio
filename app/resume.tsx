"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const education = [
  {
    school: "California State University, Long Beach",
    degree: "Bachelor of Science in Mechanical Engineering",
    date: "May 2024",
    courses: [
      "Thermodynamics",
      "Fluid Mechanics",
      "Machine Design",
      "Control Systems",
    ],
  },
  {
    school: "University of California, Irvine",
    degree: "Master of Engineering in Electrical Engineering & Computer Science",
    date: "Expected Graduation: June 2025",
    concentrations: ["Machine Learning", "Data Science"],
    courses: [
      "Machine Learning",
      "DL Accelerator Design",
      "Network Science",
      "Artificial Intelligence",
    ],
  },
];

const certificates = [
  "Machine Learning - Stanford University",
  "Supervised Machine Learning: Regression and Classification - Stanford University",
  "Unsupervised Learning, Recommenders, Reinforcement Learning - Stanford University",
  "Advanced Learning Algorithms - Stanford University",
  "Machine Learning with Python - IBM",
];

const experience = [
  {
    company: "DigitalGlue",
    location: "Tustin, CA",
    title: "Maintenance Engineer",
    date: "Jan 2024 - May 2024",
    bullets: [
      "Integrated IoT-based monitoring systems for predictive maintenance, leading to a 50% reduction in unexpected failures.",
      "Programmed and troubleshoot PLC systems to optimize production line processes and repaired automated systems' mechanical, electrical, and software-related issues, ensuring continuous production flow.",
    ],
  },
  {
    company: "California State University - Long Beach",
    location: "Long Beach, CA",
    title: "Engineering Peer Advisor",
    date: "Sep 2020 - Oct 2023",
    bullets: [
      "Increased student retention by 15% by optimizing academic advising workflows and improving communication strategies.",
      "Boosted administrative work output by 25% by streamlining data tracking and reporting systems using Microsoft Excel (50%), Word (30%), and PowerPoint (20%) for efficient documentation, scheduling, and presentations.",
    ],
  },
  {
    company: "Cali Chem Inc dba Be Beauty",
    location: "Garden Grove, CA",
    title: "Junior Mechanical Engineer",
    date: "Mar 2020 - Mar 2021",
    bullets: [
      "Collaborated with cross-functional teams, including engineers and production managers, to streamline manufacturing processes using Python/SQL and Solidworks, resulting in optimized workflows and a 20% increase in overall operational performance.",
      "Applied technical expertise to troubleshoot and resolve technical issues, minimizing equipment downtime and enhancing production efficiency in the beauty supply manufacturing process.",
    ],
  },
  {
    company: "Gen3 Battery System Development, Brelle & Co",
    location: "",
    title: "Machine Learning Engineer",
    date: "Sep 2024 – Present",
    bullets: [
      "Designed and deployed a machine learning system that generates MISRA-compliant embedded C code from FreeRTOS kernel data and user input, improving development speed by 35%.",
      "Fine-tuned the CodeT5 model using PyTorch and Hugging Face, achieving a training loss of 0.82 and validation loss of 0.94, with datasets structured and versioned in AWS S3.",
      "Integrated the ChatGPT API to enable natural language-to-code translation, reducing developer onboarding time by 40% and broadening accessibility to non-technical users.",
    ],
  },
];

const projects = [
  {
    title: "Wildlife Disposable UAV, CSULB",
    role: "Mechanical Engineer",
    date: "Sep 2022 – May 2024",
    bullets: [
      "Leveraged advanced skills in Computer-Aided Design (CAD), Solidworks, and 3D printing to design and develop UAV components, including airfoils and fuselages, optimized for wildfire monitoring and maintenance.",
      "Conducted extensive prototyping and performance testing to ensure the UAV met operational and environmental requirements, resulting in a 20% reduction in material costs while maintaining structural integrity.",
    ],
  },
];

const skills = [
  {
    category: "Software",
    items: [
      "Python",
      "C++",
      "SQL",
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Google Suite (Docs, Sheets, Slides)",
      "Git",
    ],
  },
  {
    category: "Tools",
    items: [
      "CUDA",
      "Azure",
      "Hugging Face",
      "Docker",
      "PyTorch",
      "Tensorflow",
      "Pandas",
      "Linux UX",
      "AWS",
      "SciPy",
      "scikit-learn",
      "Github",
      "Solidworks",
      "FreeRTOS",
    ],
  },
  {
    category: "Hands-On",
    items: [
      "Soldering",
      "3-D printing",
      "electrical wiring",
      "woodworking",
      "Arduino",
      "Power tools",
      "Machining",
      "CAD",
    ],
  },
];

export default function Resume() {
  return (
    <div className="bg-navy min-h-screen font-sans text-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-navy/80 backdrop-blur border-b border-lightNavy z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-bold text-lg tracking-tight text-green">Nathan</span>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="/">Home</Link>
            <a href="#education" className="hover:text-green transition-colors">Education</a>
            <a href="#certificates" className="hover:text-green transition-colors">Certificates</a>
            <a href="#experience" className="hover:text-green transition-colors">Experience</a>
            <a href="#projects" className="hover:text-green transition-colors">Projects</a>
            <a href="#skills" className="hover:text-green transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-32">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-green">Resume</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-lightestSlate mb-6">Nathan</h2>
        </motion.section>

        {/* Education Section */}
        <section className="mb-16" id="education">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-1 bg-green rounded" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="flex flex-col gap-6">
            {education.map((edu, i) => (
              <div key={i} className="border-l-4 border-green pl-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-lg text-lightestSlate">{edu.school}</span>
                  <span className="text-xs text-slate">{edu.date}</span>
                </div>
                <div className="font-medium text-green mb-1">{edu.degree}</div>
                {edu.concentrations && (
                  <div className="text-slate text-sm mb-1">Concentrations: {edu.concentrations.join(", ")}</div>
                )}
                <div className="text-slate text-sm">Relevant Courses: {edu.courses.join(", ")}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-16" id="certificates">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-1 bg-green rounded" />
            <h3 className="text-2xl font-bold">Professional Certificates</h3>
          </div>
          <ul className="list-disc list-inside text-slate">
            {certificates.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mb-16" id="experience">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-1 bg-green rounded" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <div key={i} className="border-l-4 border-green pl-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-lg text-lightestSlate">{exp.title}</span>
                  <span className="text-xs text-slate">{exp.date}</span>
                </div>
                <div className="font-medium text-green mb-1">{exp.company}{exp.location && `, ${exp.location}`}</div>
                <ul className="list-disc list-inside text-slate text-base">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16" id="projects">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-1 bg-green rounded" />
            <h3 className="text-2xl font-bold">Projects</h3>
          </div>
          <div className="flex flex-col gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="border-l-4 border-green pl-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-lg text-lightestSlate">{proj.title}</span>
                  <span className="text-xs text-slate">{proj.date}</span>
                </div>
                <div className="font-medium text-green mb-1">{proj.role}</div>
                <ul className="list-disc list-inside text-slate text-base">
                  {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16" id="skills">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-1 bg-green rounded" />
            <h3 className="text-2xl font-bold">Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((cat, i) => (
              <div key={i} className="border border-lightNavy rounded-lg p-6 bg-lightNavy/60">
                <div className="font-semibold text-lg text-lightestSlate mb-2">{cat.category}</div>
                <ul className="list-disc list-inside text-slate text-base">
                  {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-slate text-xs border-t border-lightNavy tracking-wide bg-navy">
        &copy; {new Date().getFullYear()} Nathan. Inspired by brittanychiang.com v4.
      </footer>
    </div>
  );
} 