// src/content/data.ts
import type { Project } from "@/components/ProjectCard";
import type { ExperienceItem } from "@/components/Experience";
import type { EducationItem } from "@/components/Education";

export const profile = {
  name: "Nikhileswar Reddy Chirra",
  title: "Data Analyst • Data Engineer • BI Developer",
  summary:
    "Hands-on with SQL, Python, Power BI/Tableau, ETL pipelines, and cloud data warehousing. Passionate about turning messy data into business impact.",
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
};

export const skills: string[] = [
  "Python", "SQL", "Power BI", "Tableau",
  "Pandas", "NumPy", "Airflow", "dbt",
  "Azure", "AWS", "Snowflake", "Databricks",
];

export const projects: Project[] = [
  {
    title: "Sales Insights Dashboard",
    stack: ["Power BI", "DAX", "SQL"],
    highlights: [
      "Modeled star schema, built drill-through views",
      "Automated daily refresh using gateway",
    ],
    link: "https://github.com/your-handle/sales-insights",
    image: "/projects/project-1.png"
  },
  {
    title: "Customer Churn Prediction",
    stack: ["Python", "Scikit-learn", "Pandas"],
    highlights: [
      "Feature engineered 25+ signals; ROC-AUC ↑ to 0.89",
      "Built inference notebook & report",
    ],
    link: "https://github.com/your-handle/churn-model",
    image: "/projects/project-2.png"
  },
  {
    title: "ELT with dbt + Snowflake",
    stack: ["dbt", "Snowflake", "SQL"],
    highlights: [
      "Sources → models → marts with tests & docs",
      "CI on pull requests with slim CI",
    ],
    link: "https://github.com/your-handle/elt-starter",
    image: "/projects/project-3.png"
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "Company A",
    role: "Data Analyst",
    period: "2023 – Present",
    bullets: [
      "Owned KPI reporting; cut manual work by 60%",
      "Built reusable SQL models and BI templates"
    ],
  },
  {
    company: "Company B",
    role: "Data Engineer Intern",
    period: "2022 – 2023",
    bullets: [
      "Ingested APIs to lakehouse; scheduled with Airflow",
      "Implemented PII tokenization and quality checks"
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Your University",
    degree: "B.S., Computer Science",
    period: "2019 – 2023",
    bullets: ["Graduated with honors", "Data science specialization"],
  },
];
