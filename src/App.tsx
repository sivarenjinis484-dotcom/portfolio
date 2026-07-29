import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { IoSparkles } from 'react-icons/io5';
import { HiOutlineArrowRight } from 'react-icons/hi';

const sections = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Certifications',
  'Achievements',
  'Contact',
];

const navLinks = sections.map((section) => ({
  label: section,
  href: `#${section.toLowerCase()}`,
}));

const skillGroups = [
  {
    title: 'Programming',
    items: ['C', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'Tailwind'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
];

const projects = [
  {
    title: 'AI Mock Interview Platform',
    description:
      'An interview preparation platform that uses AI to simulate technical interview questions and feedback.',
    tags: ['React', 'Node.js', 'AI'],
  },
  {
    title: 'Public Infrastructure Monitoring System',
    description:
      'A real-time dashboard for tracking civic infrastructure health and reporting maintenance issues.',
    tags: ['Java', 'Spring', 'MySQL'],
  },
  {
    title: 'Fake Image Detector',
    description:
      'A tool for detecting manipulated images using machine learning features and prediction confidence.',
    tags: ['Python', 'ML', 'Flask'],
  },
  {
    title: 'Password Strength Analyzer',
    description:
      'A utility that analyzes password strength and recommends improvements for stronger security.',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
];

const timeline = [
  {
    title: 'Bachelor of Technology',
    role: 'Computer Science Engineering',
    institution: 'College of Engineering Kallooppara',
    period: '2023–2027',
  },
  {
    title: 'Higher Secondary',
    role: 'Science Stream',
    institution: 'School Name',
    period: '2021–2023',
  },
];

const experience = [
  {
    role: 'Frontend Development Intern',
    company: 'Tech Innovators',
    period: 'Jun 2025 - Aug 2025',
    details: [
      'Built responsive UI components for the internal portal.',
      'Collaborated with designers to create accessible page flows.',
      'Improved page performance and animation behavior.',
    ],
  },
];

const certifications = [
  'Python Programming',
  'AI & Prompt Engineering',
  'UI/UX Design',
  'Web Development',
];

const achievements = [
  'Class Representative',
  'Hackathon Participant',
  '5+ Online Courses',
  'Open Source Contributor',
];

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.18),_transparent_22%),radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.16),_transparent_25%),linear-gradient(180deg,#09090F_0%,#09090F_100%)] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <a href="#home" className="inline-flex items-center gap-2 text-lg font-semibold text-white">
              <span className="text-purple-400">&lt;/&gt;</span> Sivarenjini S
            </a>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <FiDownload className="inline mr-2" /> Download Resume
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section id="home" className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/5 px-4 py-2 text-sm text-purple-200">
              <IoSparkles className="text-purple-300" /> Hello, I&apos;m
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">Sivarenjini S</h1>
              <p className="text-lg text-purple-300">B.Tech Computer Science Student</p>
              <p className="max-w-xl text-3xl font-semibold text-transparent bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text sm:text-4xl">
                Aspiring Full Stack Developer & AI Enthusiast
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              I enjoy building AI-powered applications and modern web experiences that solve real-world problems.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-purple-500"
              >
                <FiDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-purple-400/50"
              >
                Contact Me <HiOutlineArrowRight />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-300 transition hover:text-white">
                <FiGithub className="text-2xl" />
              </a>
              <a href="#" className="text-slate-300 transition hover:text-white">
                <FiLinkedin className="text-2xl" />
              </a>
              <a href="mailto:example@email.com" className="text-slate-300 transition hover:text-white">
                <FiMail className="text-2xl" />
              </a>
              <a href="#" className="text-slate-300 transition hover:text-white">
                <FiInstagram className="text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto flex max-w-lg items-center justify-center"
          >
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-white/10 shadow-glow" />
            <div className="relative rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-2 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=720&q=80"
                alt="Portrait of Sivarenjini"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-purple-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5">01</span>
              About Me
            </div>
            <h2 className="text-3xl font-semibold text-white">About Me</h2>
            <p className="max-w-xl text-slate-300">
              I am a passionate Computer Science student with a growing interest in AI, software engineering, and building polished web experiences. I enjoy exploring new tools, solving problems through code, and continuously improving my skills.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-sm uppercase text-slate-400">Location</h3>
                <p className="mt-3 text-lg font-semibold text-white">Kerala, India</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-sm uppercase text-slate-400">Education</h3>
                <p className="mt-3 text-lg font-semibold text-white">B.Tech Computer Science (2023–2027)</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-sm uppercase text-slate-400">Email</h3>
                <p className="mt-3 text-lg font-semibold text-white">example@email.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="h-full rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),transparent_24%)] p-8">
              <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                <div className="h-56 w-56 rounded-full border border-white/10 bg-white/5" />
                <p className="text-white/90">A clean illustration or coding graphic can go here to highlight my developer persona.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-purple-300">02 — Skills</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Core technical strengths</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{item}</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" style={{ width: '85%' }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-purple-300">03 — Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Selected work</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ scale: 1.02 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft backdrop-blur-xl"
              >
                <div className="h-52 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 p-5">
                  <div className="h-full rounded-[1.5rem] bg-white/5" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-3 text-sm text-purple-200">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15">P</span>
                    <span className="font-medium">Featured</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-slate-300">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-3">
                    <a href="#" className="text-sm font-semibold text-purple-300 transition hover:text-white">
                      GitHub
                    </a>
                    <a href="#" className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500">
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-purple-300">04 — Experience</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Professional experience</h2>
            </div>
          </div>
          <div className="mt-10 space-y-6">
            {experience.map((item) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.role}</p>
                    <p className="text-sm text-slate-400">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">{item.period}</span>
                </div>
                <ul className="mt-6 space-y-3 text-slate-300">
                  {item.details.map((line) => (<li key={line}>• {line}</li>))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-purple-300">05 — Certifications</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Certifications</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-soft backdrop-blur-xl"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Certificate</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="achievements" className="mt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-purple-300">06 — Achievements</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Achievements</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-soft backdrop-blur-xl"
              >
                <p className="text-2xl">⭐</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{achievement}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-purple-300">07 — Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Get in touch</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Reach out for internships, project collaborations, or just to connect about technology.
              </p>
              <div className="mt-8 space-y-4 text-slate-300">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase text-slate-400">Email</p>
                  <p className="mt-2 text-white">example@email.com</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase text-slate-400">Phone</p>
                  <p className="mt-2 text-white">+91 91234 56789</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase text-slate-400">Location</p>
                  <p className="mt-2 text-white">Kerala, India</p>
                </div>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-xl"
            >
              <div className="grid gap-6">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Name</span>
                  <input className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-400" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <input className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-400" placeholder="your@email.com" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Message</span>
                  <textarea className="h-40 w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-400" placeholder="Write your message" />
                </label>
                <button className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500">
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-slate-300 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <p className="text-lg font-semibold text-white">&lt;/&gt; Sivarenjini S</p>
            <p className="mt-2 text-sm">Made with ❤️ using React & Tailwind CSS</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
