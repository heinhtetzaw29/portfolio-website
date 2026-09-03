export const profile = {
  name: "Hein (Harry) Zaw",
  initials: "HZ",
  role: "Aspiring Data Scientist & Analyst",
  location: "Sydney, Australia",
  email: "heinhtetzaw2909@gmail.com",
  phone: "+61 493 304 365",
  github: "https://github.com/heinhtetzaw29",
  linkedin: "https://linkedin.com/in/hzaw29",
  resumeUrl: "/resume.pdf",
  headshotUrl: "/assets/headshot.jpg",
  about: `I'm a Data Science graduate from the University of Sydney (Bachelor of
    Computing, majoring in Data Science), specialising in predictive modelling
    and analytical storytelling — bridging the gap between complex datasets
    and actionable insight through clean, rigorous methodology. I have
    hands-on experience across data analysis, machine learning, and dashboard
    reporting; in a previous operations role, my analysis of occupancy trends
    contributed to a ~5% reduction in off-season expenditure. I hold
    certifications in Python and data analysis from IBM, and I'm eager to
    bring an analytical, proactive approach to a team that wants to make more
    data-informed decisions.`,
};

export const skills = [
  { category: "Languages", items: ["Python", "SQL", "R", "Java", "HTML", "CSS", "JavaScript"] },
  {
    category: "Libraries & Tools",
    items: [
      "scikit-learn",
      "XGBoost",
      "Pandas",
      "GeoPandas",
      "NumPy",
      "Matplotlib",
      "ggplot2",
      "R Shiny",
      "limma",
      "PostgreSQL/PostGIS",
      "Folium",
      "Git",
      "Jupyter",
      "Databricks",
      "Excel",
    ],
  },
  {
    category: "Methods",
    items: [
      "Machine Learning",
      "Statistical & Predictive Modelling",
      "Data Pipelines",
      "Database Design",
      "Dashboard Development",
      "Data Visualisation",
      "Cross-Validation",
    ],
  },
];

export const projects = [
  {
    slug: "biomedical-ml-pipeline",
    caseStudyNumber: "001",
    title: "Biomedical ML Pipeline & Investment Analysis",
    summary:
      "Applying machine learning to biomedical data to form a commercial investment recommendation, balancing model performance against real-world market viability.",
    description:
      "University of Sydney capstone (supervised by Accenture), 6-person team. Built and tuned logistic regression classifiers, standardised a model-building workflow across four algorithms, and applied five-fold cross-validation to achieve over 0.9 accuracy on gene expression classifiers. Presented the final R Shiny dashboard to stakeholders, translating model trade-offs into investment insight.",
    tags: ["R", "Python", "Machine Learning", "R Shiny", "limma"],
    coverImage: "/assets/projects/biomed-shiny-landing.png",
    githubUrl: "",
    liveUrl: "",
    caseStudy: {
      domain: "Biomedical Data / Investment Analysis",
      methods: "Logistic Regression, Random Forest, k-NN, XGBoost, MOFA",
      timeline: "Semester Capstone, 2025",
      heroImage: "/assets/projects/biomed-pipeline.png",
      heroCaption: "FIG 1. Project workflow: preprocessing, modelling, and investment integration.",
      sections: [
        {
          heading: "Data Acquisition & Preprocessing",
          body: "Gene expression data (three GEO series, 277 cancer / 25 normal samples) and methylation data (five GEO series, 1,032 samples) were merged, batch-effect corrected with ComBat, and undersampled to balance classes. A separate external dataset was held out for validation, batch corrected independently to test true generalisation.",
        },
        {
          heading: "Model Architecture & Workflow",
          body: "I built and tuned the logistic regression classifiers and defined the standardised model-building workflow used across the team, ensuring Logistic Regression, Random Forest, k-NN, and XGBoost were all trained and evaluated on a consistent, comparable basis — top differentially expressed/methylated features via limma, five-fold cross-validation, and a shared set of evaluation metrics (accuracy, AUC, sensitivity, specificity, kappa).",
          image: "/assets/projects/biomed-cv-performance.png",
          imageCaption: "Cross-validation performance across all four models, by data type.",
        },
        {
          heading: "Unified Multi-Omics Model",
          body: "A Multi-Omics Factor Analysis (MOFA) model was trained on paired gene expression and methylation samples to test whether combining modalities improved predictive power over either alone.",
          image: "/assets/projects/biomed-external-performance.png",
          imageCaption: "External (held-out) performance comparing the best single-modality models against MOFA.",
        },
      ],
      results: {
        stat: "0.94",
        statLabel: "Out-of-sample accuracy",
        statDescription:
          "Gene expression MOFA predictions on external data, with sensitivity and specificity both above 0.9 — the strongest-performing approach in the study.",
        secondaryStats: [
          { label: "CV Accuracy (Gene Expression)", value: "> 0.90" },
          { label: "Kappa Range", value: "0.74 – 0.95" },
        ],
        insight:
          "The highest-performing classifier did not correspond to the strongest investment opportunity — gene expression profiling remains the safer, more established choice, while methylation profiling was recommended as the better investment given its lower cost and steeper projected market growth (13.6% CAGR vs 5%). This reframed the team's final recommendation, and I led the stakeholder presentation translating that trade-off for a non-technical investor audience.",
      },
      dashboardImages: [
        { src: "/assets/projects/biomed-shiny-landing.png", caption: "Landing page: instructions and market comparison." },
        { src: "/assets/projects/biomed-shiny-results.png", caption: "Prediction results across all five models, by modality." },
      ],
    },
  },
  {
    slug: "sydney-urban-data-platform",
    caseStudyNumber: "002",
    title: "Sydney Urban Data Platform",
    summary:
      "A normalised spatial database integrating 7 open Greater Sydney datasets, surfacing relationships between amenity, transport access, and demographics.",
    description:
      "Co-designed a normalised PostgreSQL/PostGIS database in a 3-person team, integrating 7 open Greater Sydney government datasets into a single spatially indexed schema. Spatially joined ~880 car-share bay locations to ABS SA2 boundaries and built interactive Folium heatmaps and choropleths across 360 SA2 regions.",
    tags: ["PostgreSQL/PostGIS", "SQL", "Python", "Pandas", "GeoPandas", "Folium"],
    coverImage: "/assets/projects/sydney-heatmap.jpg",
    githubUrl: "",
    liveUrl: "",
    caseStudy: {
      domain: "Urban Analytics / Spatial Data",
      methods: "PostGIS Spatial Joins, Composite Scoring, Correlation Analysis",
      timeline: "Semester Project, 2024",
      heroImage: "/assets/projects/sydney-heatmap.jpg",
      heroCaption: "FIG 1. Composite \"bustling neighbourhood\" score across Greater Sydney.",
      sections: [
        {
          heading: "Database Design & Integration",
          body: "Co-designed and implemented a normalised PostgreSQL/PostGIS database in a 3-person team, integrating 7 open Greater Sydney government datasets — businesses, transport stops, population, income, polling places, bike parking, and car-share bays — into a single spatially indexed relational schema.",
        },
        {
          heading: "Spatial Joins & Composite Scoring",
          body: "I sourced and integrated the project's only GeoJSON dataset, spatially joining ~880 car-share bay locations to ABS SA2 boundaries in PostGIS, then computed a per-region z-score that was folded into the team's composite \"bustling neighbourhood\" scoring pipeline.",
          image: "/assets/projects/sydney-sa2-scores.jpg",
          imageCaption: "Per-SA2 composite score classification (Low → Extreme) across 360 regions.",
        },
        {
          heading: "Exploratory Analysis",
          body: "Queried the integrated dataset with SQL and built exploratory Python/Pandas analysis alongside interactive Folium heatmaps, surfacing relationships between business density, transport access, and demographics across Sydney.",
        },
      ],
      results: {
        stat: "r ≈ 0.03",
        statLabel: "Amenity vs. income correlation",
        statDescription:
          "Correlation analysis across 360 SA2 regions found almost no relationship between neighbourhood amenity score and median household income — challenging an assumption the team started with.",
        secondaryStats: [
          { label: "Datasets Integrated", value: "7" },
          { label: "Car-Share Bays Joined", value: "~880" },
        ],
        insight:
          "Contributed to correlation analysis and interactive Folium choropleths across all 360 SA2 regions, which found almost no relationship between neighbourhood amenity score and median household income (r ≈ 0.03) — showing that amenity-rich areas in Sydney aren't reserved for higher-income households.",
      },
      dashboardImages: [
        { src: "/assets/projects/sydney-heatmap.jpg", caption: "Business/transport/demographic density heatmap." },
        { src: "/assets/projects/sydney-sa2-scores.jpg", caption: "SA2-level composite score, categorised Low to Extreme." },
      ],
    },
  },
  {
    slug: "text-to-sql-fine-tuning",
    comingSoon: true,
    title: "Fine-Tuning an LLM for Text-to-SQL",
    summary:
      "Fine-tuning an open-weight LLM to translate natural language into SQL against a real public dataset schema — eval-first methodology, LoRA fine-tuning, and a full failure analysis.",
    tags: ["LLM Fine-Tuning", "Text-to-SQL", "LoRA", "Evaluation"],
  },
];
