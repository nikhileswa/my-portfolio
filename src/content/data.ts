// src/content/data.ts
export const profile = {
  name: "Nikhileswar Reddy Chirra",
  title: "Data Analyst • Data Engineer • BI Developer",
  location: "San Antonio, TX",
  email: "nikhileshwar124@gmail.com",
  phone: "+1-726-437-8667",
  linkedin: "https://www.linkedin.com/in/nikhileswar-reddy-5a14011a3/",
  github: "",
};

export const skills = [
  "Python","SQL","Power BI","Tableau","TensorFlow","Keras","Pandas","NumPy",
  "AWS (S3, Lambda)","Azure (storage/refresh)","Airflow","ETL Pipelines",
  "Scikit-learn","Matplotlib","Seaborn","Excel (Power Query)","SAS","BigQuery",
  "FastAPI/Flask","Git","JIRA","Visio","Lucidchart"
];

export const projects = [
  {
    title: "NLP-Driven Multi-Label Satellite Image Classifier",
    stack: ["Python","SQL","Flask","TensorFlow","Keras","Pandas","Matplotlib"],
    highlights: [
      "EDA + CV on 4,000+ satellite images with SQL-backed experiments",
      "Improved performance via architecture + training tweaks; visualized dataset health"
    ],
    link: "#",
    image: "/projects/project-1.png",
  },
  {
    title: "Optimized E-Commerce Sales Performance",
    stack: ["Python","SQL","Tableau","Power BI"],
    highlights: [
      "Unified sales/customer/web data into real-time KPI dashboards",
      "A/B pricing tests raised CLV by ~18%; +10% revenue in key lines"
    ],
    link: "#",
    image: "/projects/project-2.png",
  },
  {
    title: "Real-Time KPI Monitoring & Anomaly Detection",
    stack: ["Power BI","Python","Power Automate","Scikit-learn","Azure","Teams"],
    highlights: [
      "2-minute refresh for 50K+ daily transactions during peaks",
      ">10% failure spikes & ~15% revenue dips flagged in ~5 minutes"
    ],
    link: "#",
    image: "/projects/project-3.png",
  }
];

export const experience = [
  {
    company: "Oriana Information Technologies",
    role: "Data Analyst",
    period: "Jun 2022 – May 2023",
    bullets: [
      "Built 99.2% accurate CNN for satellite imagery; handled class imbalance",
      "Power BI/Tableau KPIs (98.5% precision, 97.8% recall) and cut geo-bias ~30%",
      "ETL on AWS S3/Lambda with controls for auditability; +40% pipeline efficiency",
    ],
  },
  {
    company: "Sciffer Analytics",
    role: "Data Engineer Intern",
    period: "Mar 2022 – Sep 2022",
    bullets: [
      "Data augmentation +50% training volume; +15% model performance (semi-supervised)",
      "Custom CNN: 92% accuracy; 500 imgs/sec inference",
    ],
  },
  {
    company: "The SPARKS Foundation",
    role: "Data Science Intern",
    period: "Oct 2020 – Jan 2021",
    bullets: [
      "K-Means/DBSCAN on 12k+ records → segments that lifted conversions ~15%",
      "Transformed 30k+ XML docs for ML; CV + F1 up ~15% via tuning",
    ],
  },
];

export const education = [
  {
    school: "Webster University",
    degree: "M.S. Information Technology & Management",
    period: "Aug 2023 – Mar 2025",
  },
  {
    school: "VIT University",
    degree: "B.Tech Computer Science (Data Analytics)",
    period: "Jul 2019 – May 2023",
  },
];
