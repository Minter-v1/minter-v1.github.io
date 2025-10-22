import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

function normalizeBasePath(input: string | undefined) {
  if (!input) return "";

  let candidate = input;

  if (candidate.includes("://")) {
    try {
      const url = new URL(candidate);
      candidate = url.pathname || "";
    } catch {
      candidate = "";
    }
  }

  if (!candidate) return "";

  if (!candidate.startsWith("/")) {
    candidate = `/${candidate}`;
  }

  candidate = candidate.replace(/\/+$/, "");

  return candidate === "/" ? "" : candidate;
}

const SITE_BASE_PATH = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
const SITE_URL_ROOT =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://minter-v1.github.io";
const SITE_URL =
  SITE_BASE_PATH && SITE_BASE_PATH !== "/"
    ? `${SITE_URL_ROOT.replace(/\/$/, "")}${SITE_BASE_PATH}`
    : SITE_URL_ROOT;

export const DATA = {
  name: "Minji Lee",
  initials: "ML",
  url: SITE_URL,
  location: "Daejeon, South Korea",
  locationLink: "https://www.google.com/maps/place/daejeon",
  description:
    "AI 기반 풀스택 개발자. iOS, AOS, 크로스플랫폼 애플리케이션 개발에 흥미를 가지고 있으며, HBNU SWUNIV에서 소프트웨어융합을 전공 중입니다.",
  summary:
    "현재 HBNU 소프트웨어융합대학에서 AI와 풀스택 개발을 공부하고 있습니다. 다양한 프로젝트를 통해 Kotlin, TypeScript, Python 등의 기술을 활용한 경험이 있으며, 특히 AI 기반 애플리케이션 개발에 관심이 많습니다. 한국과학기술정보연구원에서 연구원으로 활동하며 LLM 평가 데이터 개발에 참여했습니다.",
  avatarUrl: "/minter.jpeg",
  skills: [
    "TypeScript",
    "Python",
    "Kotlin",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "AI/ML",
    "Mobile Development",
    "Flutter",
    "Django",
    "PostgreSQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adf5858@enaver.com",
    tel: "+82) 010-5671-9334",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Minter-v1",
        icon: Icons.github,

        navbar: true,
      },
      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "https://dub.sh/dillion-linkedin",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "HBNU SWUNIV",
      href: "https://www.hbnu.ac.kr",
      degree: "소프트웨어융합대학",
      logoUrl: "/hbu.svg",
      start: "2022",
      end: "Present",
    },
  ],

  // Add research section before projects
  research: [
    {
      agency: "한국과학기술정보연구원(KiSTi)",
      href: "https://www.kisti.re.kr",
      title: "Developing Evaluation Data and Metrics for Science and Technology Information specific Large Language Models",
      role: "참여 연구원(Researcher)",
      period: "2024.05.15 ~ 2024.11.30",
      description: "데이터 설계 및 생성, 보고서 작성",
      logoUrl: "/kisti.png",
    },
  ],

  publications: [
    {
      title: "Korean Benchmark for Science and Technology Information in Specialized Fields",
      conference: "2024 HCLT",
      date: "2024.10.11",
      authors: "Minji Lee(1st)",
      award: "🏆Best Paper",
    },
    {
      title: "Korean News Summarization with Contrasts by Augmenting Counterfactual Data",
      conference: "2024 ICCE-Asia",
      date: "2024.11.03",
      authors: "Minji Lee(1st)",
      award: "",
    },
  ],

  projects: [
    {
      title: "AI-Fortune-App",
      href: "https://github.com/Minter-v1/AI-Fortune-App",
      dates: "2024",
      active: true,
      description:
        "AI 기반 사주 감정케어 애플리케이션",
      technologies: [
        "Kotlin",
        "Android",
        "AI/ML",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Minter-v1/AI-Fortune-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MOA-app",
      href: "https://github.com/PublicIsDJ/MOA-app",
      dates: "2024",
      active: true,
      description:
        "모바일 애플리케이션 프로젝트",
      technologies: [
        "TypeScript",
        "React Native",
        "Mobile Development",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PublicIsDJ/MOA-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MOA-api",
      href: "https://github.com/PublicIsDJ/MOA-api",
      dates: "2024",
      active: true,
      description:
        "MOA 애플리케이션 백엔드 API",
      technologies: [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PublicIsDJ/MOA-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Project-Solo",
      href: "https://github.com/Smartnewb/Project-Solo",
      dates: "2024",
      active: true,
      description:
        "개인 프로젝트",
      technologies: [
        "TypeScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Smartnewb/Project-Solo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "YS-2025-LivingLab",
      href: "https://github.com/Minter-v1/YS-2025-LivingLab",
      dates: "2024",
      active: true,
      description:
        "2025 유성구청 리빙랩 : 종량제 지급 자동화 프로그램 개발",
      technologies: [
        "Python",
        "Automation",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Minter-v1/YS-2025-LivingLab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MDS-2025-Back",
      href: "https://github.com/combile/MDS-2025-Back",
      dates: "2024",
      active: true,
      description:
        "HBNU SW 2025 다학제 캡스톤 백엔드 작업 공간",
      technologies: [
        "Python",
        "Backend",
        "Database",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/combile/MDS-2025-Back",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
