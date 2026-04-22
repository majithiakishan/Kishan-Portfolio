import { useEffect, useState } from "react";
import profilePhoto from "./assets/profile-photo.jpeg";

import { AnimatePresence, motion } from "framer-motion";

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ShieldIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 3l7 3v6c0 4.5-2.7 7.9-7 9-4.3-1.1-7-4.5-7-9V6l7-3z" />
  </IconBase>
);

const MonitorIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8" />
    <path d="M12 16v4" />
  </IconBase>
);

const NetworkIcon = ({ className }) => (
  <IconBase className={className}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M7 12h5" />
    <path d="M14 12l3-5" />
    <path d="M14 12l3 5" />
  </IconBase>
);

const LaptopIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="5" y="6" width="14" height="9" rx="1.5" />
    <path d="M3 18h18" />
  </IconBase>
);

const CodeIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M8 8l-4 4 4 4" />
    <path d="M16 8l4 4-4 4" />
    <path d="M14 4l-4 16" />
  </IconBase>
);

const MapPinIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.2" />
  </IconBase>
);

const BriefcaseIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7" />
    <path d="M3 12h18" />
  </IconBase>
);

const GraduationCapIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M2 9l10-5 10 5-10 5-10-5z" />
    <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
  </IconBase>
);

const LinkedinIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7" />
    <path d="M8 7.5v.01" />
    <path d="M12 17v-4a2 2 0 114 0v4" />
    <path d="M12 10v7" />
  </IconBase>
);

const GithubIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M9 18c-4 1.2-4-2-6-2" />
    <path d="M15 18v-3.2a2.8 2.8 0 00-.8-2.2c2.6-.3 5.3-1.3 5.3-5.8A4.5 4.5 0 0018.2 3.7 4.2 4.2 0 0018.1.9S17 .6 14.5 2.3a14.4 14.4 0 00-5 0C7 .6 5.9.9 5.9.9A4.2 4.2 0 005.8 3.7 4.5 4.5 0 004.5 6.8c0 4.5 2.7 5.5 5.3 5.8A2.8 2.8 0 009 14.8V18" />
  </IconBase>
);

const MailIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </IconBase>
);

const DownloadIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 4v10" />
    <path d="M8 10l4 4 4-4" />
    <path d="M4 20h16" />
  </IconBase>
);

const ArrowRightIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </IconBase>
);

export default function CyberSecurityPortfolio() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  const profileImage = profilePhoto;



  const certifications = [
    {
      name: "Associate of ISC2",
      issuer: "ISC2",
      issued: "24 March 2026",
      expiry: "No Expiry",
      status: "Active",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      issued: "24 September 2025",
      expiry: "24 September 2028",
      status: "Active",
    },
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      issued: "29 June 2025",
      expiry: "29 June 2028",
      status: "Active",
    },
    {
      name: "Cisco Ethical Hacker",
      issuer: "Cisco Networking Academy",
      issued: "20 March 2024",
      expiry: "No Expiry",
      status: "Completed",
    },
  ];

  const skills = [
    {
      title: "Cybersecurity",
      icon: ShieldIcon,
      text: "Security monitoring, threat detection, vulnerability management, and incident-driven thinking.",
      glow: "from-blue-500/30 to-cyan-400/5",
      border: "border-blue-500/40",
    },
    {
      title: "IT Support",
      icon: MonitorIcon,
      text: "Technical support, troubleshooting, user assistance, and day-to-day systems maintenance.",
      glow: "from-emerald-500/30 to-emerald-400/5",
      border: "border-emerald-500/40",
    },
    {
      title: "Network Security",
      icon: NetworkIcon,
      text: "Network awareness, protocol understanding, secure configuration, and visibility of traffic behaviour.",
      glow: "from-violet-500/30 to-violet-400/5",
      border: "border-violet-500/40",
    },
    {
      title: "System Administration",
      icon: LaptopIcon,
      text: "User management, endpoint support, operational discipline, and platform configuration skills.",
      glow: "from-sky-500/30 to-sky-400/5",
      border: "border-sky-500/40",
    },
    {
      title: "Tools & Technologies",
      icon: CodeIcon,
      text: "Wazuh, SIEM concepts, Atomic Red Team, Windows, Linux, networking, and technical troubleshooting.",
      glow: "from-orange-500/30 to-orange-400/5",
      border: "border-orange-500/40",
    },
  ];

  const experience = {
    relevant: [
      {
        period: "Apr 2021 – Sep 2023",
        role: "IT & Security Analyst",
        company: "Emcure Pharmaceuticals, Pune, Maharashtra, India",
        details: [
          "Supported security operations in a regulated enterprise environment with a focus on monitoring, incident response, detection, and remediation.",
          "Performed real-time monitoring and alert triage across security tools, identifying suspicious activity and potential threats.",
          "Monitored and analysed alerts from endpoint, system, and security controls to distinguish genuine threats from false positives.",
          "Investigated malware detections, phishing attempts, suspicious authentication events, and anomalous system behaviour.",
          "Analysed logs from multiple sources including network, endpoint, and system logs to determine scope, impact, and root cause of incidents.",
          "Followed standard operating procedures to investigate alerts, assess severity, and understand business impact.",
          "Supported incident response activities including investigation, containment, remediation, and coordination with IT teams and third-party vendors.",
          "Escalated confirmed incidents appropriately while ensuring accurate documentation within ticketing and ITSM systems.",
          "Documented incidents, actions taken, findings, and investigation notes to maintain audit-ready records.",
          "Assisted with vulnerability identification, patch coordination, misconfiguration analysis, and risk reduction activities.",
          "Contributed to security reporting, alert trend analysis, incident summaries, and post-incident reviews to improve control effectiveness and detection quality.",
        ],
      },
    ],
    nonRelevant: [
      {
        period: "Apr 2025 – Present",
        role: "Warehouse Operative",
        company: "DHL, UK",
        details: [
          "Operate in a structured and compliance-driven environment requiring accuracy and accountability.",
          "Maintain adherence to operational procedures, process discipline, and reliability standards.",
          "Work within systems-dependent workflows where consistency and continuity are essential.",
        ],
      },
      {
        period: "Sept 2024 – Dec 2024",
        role: "Print Operations",
        company: "Print2Stitch, Leicester, UK",
        details: [
          "Managed day-to-day printing operations while maintaining output quality and workflow efficiency.",
          "Performed troubleshooting and quality control to keep operations running smoothly.",
        ],
      },
      {
        period: "Feb 2024 – Mar 2025",
        role: "Parcel Sorter",
        company: "Royal Mail, Northampton, UK",
        details: [
          "Sorted and scanned parcels for tracking and distribution.",
          "Worked with automated conveyor and logistics processes in a fast-paced operational environment.",
        ],
      },
      {
        period: "Nov 2023 – Jan 2024",
        role: "Sortation Operative",
        company: "Amazon Warehouse, Coalville, UK",
        details: [
          "Handled package sorting and logistics operations using automated systems.",
          "Maintained safety compliance and performance standards in a high-volume environment.",
        ],
      },
      {
        period: "2013 – 2023",
        role: "Retail Operations Manager",
        company: "Bal Krishna Mobiles, Rajkot,Gujarat, India",
        details: [
          "Supported customer systems, device access, endpoint issues, and connectivity troubleshooting.",
          "Managed inventory, sales activity, and customer engagement while ensuring secure handling of customer data and devices.",
          "Resolved day-to-day technical and operational issues while communicating clearly with both technical and non-technical users.",
        ],
      },
      {
        period: "Apr 2016 – Sep 2023",
        role: "Commodity Agent",
        company: "Shreeji Broker, Rajkot,Gujarat, India",
        details: [
          "Monitored commodity markets and executed buy and sell orders.",
          "Provided investment strategy input and risk-aware advisory to clients.",
        ],
      },
    ],
  };

  const projects = [
    {
      title: "Security Design & Risk Assessment Project",
      details: [
        "Designed a secure enterprise IT infrastructure by identifying assets, threats, and vulnerabilities.",
        "Conducted risk assessments using likelihood and impact analysis aligned with ISO 27001 principles.",
        "Proposed mitigation controls including encryption, access control, SIEM integration, and segmentation.",
        "Evaluated security weaknesses across cloud, network, and application environments.",
      ],
    },
    {
      title: "Vulnerability Assessment & Penetration Testing Project",
      details: [
        "Conducted penetration testing using OWASP methodologies to identify vulnerabilities such as SQL Injection and misconfigurations.",
        "Assessed business impact and provided risk-based remediation strategies.",
        "Recommended controls including input validation, MFA, and secure configurations.",
      ],
    },
    {
      title: "Malware Analysis Project",
      details: [
        "Analysed malicious files using forensic tools to identify behaviour, persistence mechanisms, and system impact.",
        "Investigated indicators such as privilege escalation, registry modifications, and command-and-control communication.",
        "Produced detailed technical reports outlining threat behaviour and mitigation strategies.",
      ],
    },
    {
      title: "SOC & Incident Investigation Project",
      details: [
        "Performed alert triage, investigation, and classification based on severity and impact.",
        "Documented incidents and supported structured incident response processes.",
        "Developed insights into threat detection workflows and security monitoring practices.",
      ],
    },
    {
      title: "Wazuh SIEM Home Lab",
      details: [
        "Built a Wazuh-based SIEM lab using Ubuntu Server for centralised log collection.",
        "Simulated attacks using Atomic Red Team to generate realistic attack telemetry.",
        "Added Linux as an agent and performed similar attacks to collect and analyse logs.",
        "Validated visibility and improved understanding of attacker behaviour, telemetry, and detection opportunities.",
      ],
    },
  ];

  const education = [
    {
      title: "MSc Cyber Security",
      institution: "De Montfort University",
      summary: "Pass (59%)",
      modules: [
        ["Foundations of Cyber Security", "58%"],
        ["Cyber Threat Intelligence", "54%"],
        ["Host and Network Security", "60%"],
        ["Penetration Testing and Incident Response", "62%"],
        ["Cyber Engineering", "69%"],
        ["Digital Forensics Principles and Practice", "76%"],
        ["Malware Analysis", "60%"],
        ["Legal, Ethical and Professional Practice", "62%"],
        ["Project", "53%"],
      ],
    },
    {
      title: "Bachelor of Computer Application",
      institution: "Saurashtra University",
      summary: "First Distinction (78.167%)",
      modules: [
        ["CS-01 Technical Communication Skill", "70/100"],
        ["CS-05 Practical-1 (Based on CS-048 PC Software)", "93/100"],
        ["CS-02 Problem Solving Method & Programming in C", "70/100"],
        ["CS-06 Practicals-2 (Based on CS-2)", "93/100"],
        ["CS-03 Computer Fundamentals & Emerging Tech", "63/100"],
        ["CS-04 Networking & Internet Environment", "89/100"],
        ["CS-07 Data Structure Using C Language", "83/100"],
        ["CS-08 Web Programming", "83/100"],
        ["CS-09 Computer Organization & Architecture", "80/100"],
        ["CS-10 Mathematics & Statistical Foundations of Comp. Sci.", "93/100"],
      ],
    },
  ];

  const section = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const splashWords = [
    "Securing Systems.",
    "Solving Problems.",
    "Building Trust.",
  ];

  const splashContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.24,
        delayChildren: 1.0,
      },
    },
  };

  const splashItem = {
    hidden: { opacity: 0, scale: 0.6, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: [0.6, 1.18, 0.98, 1],
      filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(0px)"],
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const card =
    "rounded-3xl border border-blue-900/70 bg-[#041121]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]";

  const StatCard = ({ icon: Icon, label, value }) => (
    <div className={`${card} p-5`}>
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-blue-400" />
        <div>
          <div className="text-sm text-blue-300">{label}</div>
          <div className="mt-1 font-semibold text-white">{value}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.03,
              filter: "blur(8px)",
              transition: { duration: 0.45, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-slate-950"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.22),_transparent_35%)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />

            <motion.div
              variants={splashContainer}
              initial="hidden"
              animate="visible"
              className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-6xl"
              >
                Kishan welcomes you to his portfolio
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35 }}
                className="mt-5 text-sm font-medium uppercase tracking-[0.35em] text-slate-300 md:text-base"
              >
                Cybersecurity • IT Support • Systems • Technical Analysis
              </motion.p>

              <div className="mt-12 space-y-4 md:space-y-6">
                {splashWords.map((word) => (
                  <motion.div
                    key={word}
                    variants={splashItem}
                    className="text-3xl font-black tracking-tight text-white drop-shadow-[0_0_24px_rgba(59,130,246,0.45)] md:text-6xl"
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={showIntro ? "pointer-events-none blur-sm" : ""}>
        <header className="sticky top-0 z-50 border-b border-blue-900/60 bg-[#020817]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-700/50 bg-blue-500/10 text-xl font-black text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                KM
              </div>
              <div className="text-lg font-bold tracking-wide">
                KISHAN <span className="text-blue-400">MAJITHIA</span>
              </div>
            </div>

            <nav className="hidden gap-7 text-sm font-medium uppercase tracking-wide text-slate-200 md:flex">
              {[
                ["Home", "hero"],
                ["Skills", "skills"],
                ["Experience", "experience"],
                ["Certifications", "certifications"],
                ["Projects", "projects"],
                ["Education", "education"],
                ["Contact", "contact"],
              ].map(([label, id], index) => (
                <a
                  key={`${label}-${id}`}
                  href={`#${id}`}
                  className={`transition hover:text-blue-400 ${index === 0 ? "text-blue-400" : ""}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-10">
          <motion.section
            id="hero"
            variants={section}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="pt-8">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-700/50 bg-blue-500/10 px-4 py-3 text-sm font-medium text-slate-100 shadow-[0_0_18px_rgba(59,130,246,0.18)]">
                <ShieldIcon className="h-4 w-4 text-blue-400" />
                IT SUPPORT &amp; CYBERSECURITY PROFESSIONAL
              </div>

              <h1 className="mt-8 text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
                Kishan <span className="text-blue-400">Majithia</span>
              </h1>

              <p className="mt-5 text-2xl text-slate-200 md:text-3xl">
                <span className="text-blue-400">Cybersecurity</span>
                <span className="mx-3 text-slate-500">|</span>
                <span className="text-blue-400">IT Support</span>
                <span className="mx-3 text-slate-500">|</span>
                <span>Operations</span>
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300">
                Detail-oriented IT Support and Cybersecurity professional with hands-on experience in system administration, threat detection, network security, and user support. Passionate about strengthening security, solving technical problems, and driving operational excellence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#education"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-4 font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5"
                >
                  Download CV <DownloadIcon className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-2xl border border-blue-700/60 bg-transparent px-7 py-4 font-bold text-white transition hover:bg-blue-500/10"
                >
                  Contact Me <MailIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <StatCard icon={MapPinIcon} label="Location" value="Leicester, UK" />
                <StatCard icon={BriefcaseIcon} label="Experience" value="3+ Years" />
                <StatCard icon={GraduationCapIcon} label="Education" value="MSc Cyber Security" />
              </div>

              <div className="mt-7 flex items-center gap-4">
                {[
                  [LinkedinIcon, "https://www.linkedin.com/in/kishanmajithiya1995"],
                  [GithubIcon, "https://github.com/majithiakishan"],
                  [MailIcon, "mailto:majithiakishan8980@gmail.com"],
                ].map(([Icon, href], index) => (
                  <a
                    key={`${href}-${index}`}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-900/70 bg-[#041121] text-slate-200 transition hover:border-blue-500/60 hover:text-blue-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative flex items-start justify-center pt-6 lg:justify-end">
              <div className="absolute right-0 top-5 h-[78%] w-[78%] rounded-[36px] bg-blue-500/10 blur-3xl" />
              <div className="relative w-full max-w-[440px] rounded-[34px] border border-blue-500/50 bg-[#071426] p-3 shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_0_40px_rgba(59,130,246,0.25)]">
                <div className="overflow-hidden rounded-[28px] border border-blue-400/40 bg-slate-900 shadow-[0_0_35px_rgba(59,130,246,0.35)]">
                  <img
                    src={profileImage}
                    alt="Kishan Majithia"
                    className="h-[620px] w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="skills"
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={`mt-12 ${card} p-6`}
          >
            <div className="mb-6 text-3xl font-bold text-blue-400">CORE SKILLS</div>
            <div className="grid gap-5 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className={`rounded-2xl border ${skill.border} bg-gradient-to-b ${skill.glow} from-[#071426] to-[#03101f] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
                  >
                    <Icon className="h-12 w-12 text-blue-400" />
                    <h3 className="mt-8 text-2xl font-bold">{skill.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{skill.text}</p>
                    <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-transparent" />
                  </div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            id="certifications"
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={`mt-6 ${card} p-6`}
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-3xl font-bold text-blue-400">CERTIFICATIONS</div>
              <a
                href="https://www.credly.com/users/kishan-majithia.4fd4b29b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-blue-600/60 px-5 py-3 font-semibold text-white transition hover:bg-blue-500/10"
              >
                Verify Credentials <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-2xl border border-blue-900/60 bg-[#061324] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                >
                  <div className="text-2xl font-bold leading-tight text-white">{cert.name}</div>
                  <div className="mt-5 space-y-3 text-sm text-slate-300">
                    <div>
                      <span className="text-slate-500">Issued by</span>
                      <div className="mt-1 font-medium text-white">{cert.issuer}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Issued</span>
                      <div className="mt-1 font-medium text-white">{cert.issued}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Expiry</span>
                      <div className="mt-1 font-medium text-white">{cert.expiry}</div>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
                    {cert.status}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="experience"
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={`mt-6 ${card} p-6`}
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-3xl font-bold text-blue-400">EXPERIENCE</div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-blue-600/60 px-5 py-3 font-semibold text-white transition hover:bg-blue-500/10"
              >
                Contact Me <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mb-8">
              <div className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-300">
                Relevant Experience
              </div>
              <div className="space-y-6">
                {experience.relevant.map((item, index) => (
                  <div
                    key={`${item.role}-${index}`}
                    className="rounded-2xl border border-emerald-900/60 bg-[#061324] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{item.role}</h3>
                        <p className="mt-1 text-lg text-slate-300">{item.company}</p>
                      </div>
                      <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                        {item.period}
                      </div>
                    </div>
                    <ul className="mt-5 space-y-3 text-slate-300">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex gap-3 rounded-xl border border-emerald-900/40 bg-emerald-500/5 px-4 py-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-300">
                Other Experience
              </div>
              <div className="space-y-6">
                {experience.nonRelevant.map((item, index) => (
                  <div
                    key={`${item.role}-${index}`}
                    className="rounded-2xl border border-blue-900/60 bg-[#061324] p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <p className="mt-1 text-base text-slate-300">{item.company}</p>
                      </div>
                      <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                        {item.period}
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-slate-300">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={`mt-6 ${card} p-6`}
          >
            <div className="mb-6 text-3xl font-bold text-blue-400">PROJECTS</div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-blue-900/60 bg-[#061324] p-6">
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="education"
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={`mt-6 ${card} p-6`}
          >
            <div className="mb-6 text-3xl font-bold text-blue-400">EDUCATION</div>
            <div className="grid gap-6 lg:grid-cols-2">
              {education.map((course) => (
                <div key={course.title} className="rounded-2xl border border-blue-900/60 bg-[#061324] p-6">
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <p className="mt-1 text-lg text-slate-300">{course.institution}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-blue-400">{course.summary}</p>
                  <div className="mt-5 space-y-2 text-sm text-slate-300">
                    {course.modules.map(([name, mark], idx) => (
                      <div
                        key={`${course.title}-${idx}`}
                        className="flex items-start justify-between gap-4 rounded-xl border border-blue-900/50 bg-[#041121] px-4 py-3"
                      >
                        <span>{name}</span>
                        <span className="shrink-0 font-semibold text-white">{mark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={`mt-6 ${card} p-6`}
          >
            <div className="mb-6 text-3xl font-bold text-blue-400">CONTACT</div>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                {[
                  ["LinkedIn", "https://www.linkedin.com/in/kishanmajithiya1995", "linkedin.com/in/kishanmajithiya1995"],
                  ["GitHub", "https://github.com/majithiakishan", "github.com/majithiakishan"],
                  ["Email", "mailto:majithiakishan8980@gmail.com", "majithiakishan8980@gmail.com"],
                  ["Mobile", "tel:+447920672543", "+44 7920672543"],
                ].map(([label, href, text]) => (
                  <div key={label} className="rounded-2xl border border-blue-900/60 bg-[#061324] p-5">
                    <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</div>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-2 block text-lg font-semibold text-white hover:text-blue-400"
                    >
                      {text}
                    </a>
                  </div>
                ))}
                <div className="rounded-2xl border border-blue-900/60 bg-[#061324] p-5">
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Location</div>
                  <div className="mt-2 text-lg font-semibold text-white">Leicester, UK</div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-900/60 bg-[#061324] p-6">
                <h3 className="text-2xl font-bold">Send a Message</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This form is ready for Formspree. Replace <span className="font-bold text-white">YOUR_FORM_ID</span> in the form action with your Formspree form ID, and messages will be delivered to your email.
                </p>
                <form action="https://formspree.io/f/mnjloavp" method="POST" className="mt-5 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-2xl border border-blue-900/70 bg-[#041121] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-2xl border border-blue-900/70 bg-[#041121] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                    />
                  </div>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-2xl border border-blue-900/70 bg-[#041121] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                  />
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write your message here"
                    className="w-full rounded-2xl border border-blue-900/70 bg-[#041121] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-4 font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
