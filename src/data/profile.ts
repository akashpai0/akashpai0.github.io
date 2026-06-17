export interface ExperienceEntry {
  title: string;
  organization: string;
  dates: string;
  highlights: string[];
}

export interface Profile {
  name: string;
  tagline: string;
  location: string;
  oneLiner: string;
  about: string[];
  experience: ExperienceEntry[];
  education: {
    school: string;
    program: string;
    dates: string;
    stats: string[];
    apScores: string;
  };
  skills: string[];
  contact: {
    links: {
      label: string;
      url: string;
    }[];
  };
  nav: { label: string; href: string }[];
}

export const profile: Profile = {
  name: "Akash Pai",
  tagline: "IB Student @ Palm Harbor University High School",
  location: "Greater Tampa Bay Area",
  oneLiner: "Interested in computer science and robotics.",
  about: [
    "Junior in the International Baccalaureate program at Palm Harbor University High School.",
    "President of PHUHS Robotics, a 6-team club. Previously Team Captain and Secretary.",
    "Planning to major in computer science with a specialization in robotics.",
  ],
  experience: [
    {
      title: "President",
      organization: "PHUHS Robotics",
      dates: "May 2026 – Present",
      highlights: [
        "Lead a 6-team robotics club as President; previously Team Captain and Secretary.",
        "Head Programmer — qualified for FTC World Championships (Year 1), reached State Finals (Year 2).",
      ],
    },
    {
      title: "Student Volunteer",
      organization: "PCS STEM Explorer Program",
      dates: "Aug 2023 – Present",
      highlights: [
        "Facilitate local STEM events, demonstrating robotics and teaching students to drive and program robots.",
        "Help organize summer camps focused on competition-level robotics skills.",
      ],
    },
  ],
  education: {
    school: "Palm Harbor University High School",
    program: "International Baccalaureate",
    dates: "Aug 2023 – May 2027",
    stats: [
      "Weighted GPA: 4.65",
      "Unweighted GPA: 4.0",
      "SAT: 1510",
    ],
    apScores:
      "AP CSP 5 · AP Macro 5 · AP Statistics 5 · AP CSA 4 · AP Calc AB 4 · AP Micro 4 · AP US History 4 · AP World History 4",
  },
  skills: ["Java", "Python", "PyTorch"],
  contact: {
    links: [
      {
        label: "github.com/akashpai0",
        url: "https://github.com/akashpai0",
      },
      {
        label: "linkedin.com/in/akashpai0",
        url: "https://www.linkedin.com/in/akashpai0/",
      },
    ],
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
