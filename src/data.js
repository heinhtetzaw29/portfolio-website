export const profile = {
  name: "Hein (Harry) Zaw",
  initials: "HZ",
  mastheadTag: "/ Data Analyst · Sydney",
  heroLocation: "Sydney, New South Wales // Graduate Portfolio",
  heroSubhead: "Data science graduate. Sydney.",
  positioning:
    "I'm a recent Bachelor of Computing graduate from the University of Sydney, majoring in Data Science. I turn biomedical, spatial, and operational datasets into clear, production-ready tools and reproducible pipelines.",
  location: "Sydney, Australia",
  email: "heinhtetzaw2909@gmail.com",
  phone: "+61 493 304 365",
  github: "https://github.com/heinhtetzaw29",
  linkedin: "https://linkedin.com/in/hzaw29",
  resumeUrl: "/resume.pdf",
  headshotUrl: "/assets/headshot.jpg",
  aboutParagraphs: [
    "I hold a Bachelor of Computing from the University of Sydney, where I majored in Data Science. My work sits at the intersection of rigorous statistical analysis and clean, useful interfaces. I care about how numbers get communicated to decision-makers, whether that's an investor weighing a biomedical dataset or a planner reading a spatial score.",
    "Outside of querying data, I coach Muay Thai and report on community news for BCBG. I'm looking for graduate Data Analyst and Data Scientist roles across Sydney.",
  ],
  education: {
    degree: "B. Computing, Data Science",
    institution: "University of Sydney",
  },
  locationStatus: {
    value: "Sydney, NSW",
    note: "Open to Graduate Roles",
  },
  availability: "Available for Sydney-based graduate roles & data projects · 2026",
};

export const experience = [
  {
    title: "News Reporter & Operations Coordinator",
    org: "BCBG",
    location: "Sydney, NSW",
    period: "Nov 2024 – Present",
    bullets: [
      "I research, write, and deliver weekly news segments on Myanmar affairs for Sydney's Burmese-speaking community.",
      "I track and optimise funding from government grants and the station across budget periods, and present weekly editorial and funding briefings to the station head.",
    ],
  },
  {
    title: "Operations Analyst Intern",
    org: "City Golf Resort Hotel",
    location: "Yangon, Myanmar",
    period: "Dec 2023 – Feb 2024",
    bullets: [
      "I turned reservation and property management data into occupancy insights using SQL and Excel, and my recommendations contributed to a ~5% reduction in off-season expenditure.",
      "I built and maintained a centralised Excel dashboard tracking weekly and monthly KPIs (occupancy, room utilisation, F&B revenue) for department heads.",
    ],
  },
  {
    title: "Muay Thai Coach (Kids)",
    org: "Cortex MMA",
    location: "Sydney, NSW",
    period: "Oct 2022 – Present",
    bullets: [
      "I design and deliver weekly classes for children, building age-appropriate training plans and tracking individual progress.",
    ],
  },
];

export const skills = [
  {
    category: "Languages & Tools",
    tag: "[CAT.01]",
    items: [
      { name: "Python", tag: "Core" },
      { name: "R", tag: "Statistical" },
      { name: "SQL", tag: "Relational" },
      { name: "Java", tag: "General Purpose" },
      { name: "HTML / CSS / JavaScript", tag: "Web" },
      { name: "Git", tag: "VCS" },
      { name: "Excel", tag: "Modeling" },
    ],
  },
  {
    category: "Data & Analytics",
    tag: "[CAT.02]",
    items: [
      { name: "Machine Learning", tag: "Predictive" },
      { name: "Statistical & Predictive Modelling", tag: "Inference" },
      { name: "Cross-Validation", tag: "Evaluation" },
      { name: "scikit-learn", tag: "Modeling" },
      { name: "XGBoost", tag: "Boosting" },
      { name: "Pandas / NumPy", tag: "Data Wrangling" },
      { name: "Matplotlib / ggplot2", tag: "Visualisation" },
      { name: "limma", tag: "Feature Selection" },
    ],
  },
  {
    category: "Engineering & Deployment",
    tag: "[CAT.03]",
    items: [
      { name: "PostgreSQL / PostGIS", tag: "Spatial DB" },
      { name: "R Shiny", tag: "Reactive UI" },
      { name: "Folium / GeoPandas", tag: "Spatial Mapping" },
      { name: "Database Design", tag: "Schema" },
      { name: "Dashboard Development", tag: "Reporting" },
      { name: "Data Pipelines", tag: "ETL" },
      { name: "Jupyter / Databricks", tag: "Notebooks" },
    ],
  },
];

export const projects = [
  {
    slug: "biomedical-ml-pipeline",
    caseStudyNumber: "001",
    sysTag: "[SYS.01] // BIOMEDICAL",
    contextTag: "Accenture Supervised",
    classification: "Biomedical Data Science · Investment Analysis",
    title: "Biomedical ML Pipeline & Investment Analysis",
    summary:
      "I applied machine learning to biomedical data and built a commercial investment recommendation. The analysis weighed model performance against real market viability.",
    description:
      "University of Sydney capstone, supervised by Accenture, six-person team. I built and tuned the logistic regression classifiers and set the model-building workflow for all four algorithms. Five-fold cross-validation pushed gene expression classifiers past 0.9 accuracy. I presented the final R Shiny dashboard to stakeholders and turned model trade-offs into investment insight.",
    abstract:
      "The brief: recommend which biomedical data-assaying technique (gene expression profiling, DNA methylation profiling, or an integrated multi-omics approach) represents the strongest investment. That call needed model performance and commercial reality in the same frame, so our team paired rigorous cross-validated modelling with real market factors (assay cost, market size, projected growth) before writing a recommendation.",
    tags: ["R", "Python", "Machine Learning", "R Shiny", "limma"],
    coverImage: "/assets/projects/biomed-shiny-landing.png",
    githubUrl: "",
    liveUrl: "",
    caseStudy: {
      specBar: [
        { label: "Role & Scope", value: "Logistic Regression & Workflow Lead", sub: "6-person capstone team" },
        { label: "Timeline", value: "Semester Capstone, 2025", sub: "University of Sydney" },
        { label: "Tooling & Environment", value: "R · Python · R Shiny", sub: "scikit-learn, limma, MOFA2" },
        { label: "Primary Deliverables", value: "Interactive Risk Dashboard", sub: "Investor recommendation briefing" },
      ],
      heroImage: "/assets/projects/biomed-pipeline.png",
      heroCaption: "FIG 1. Project workflow: preprocessing, modelling, and investment integration.",
      sections: [
        {
          heading: "Data Acquisition & Preprocessing",
          index: "01 / Data Pipeline",
          body: "I merged gene expression data (three GEO series, 277 cancer and 25 normal samples) with methylation data (five GEO series, 1,032 samples). I corrected batch effects with ComBat and undersampled to balance classes. For validation, I held out a separate external dataset and batch corrected it on its own, to test real generalisation.",
          callouts: [
            { label: "CV Accuracy (Gene Expression)", value: "> 0.90" },
            { label: "Kappa Range", value: "0.74 – 0.95" },
          ],
        },
        {
          heading: "Model Architecture & Workflow",
          index: "02 / Model Workflow",
          body: "I built and tuned the logistic regression classifiers. I also set the standardised workflow the whole team used: top differentially expressed or methylated features from limma, five-fold cross-validation, and one shared set of metrics (accuracy, AUC, sensitivity, specificity, kappa). Logistic Regression, Random Forest, k-NN, and XGBoost all ran on that same basis.",
          image: "/assets/projects/biomed-cv-performance.png",
          imageCaption: "Cross-validation performance across all four models, by data type.",
        },
        {
          heading: "Unified Multi-Omics Model",
          index: "03 / Multi-Omics",
          body: "I trained a Multi-Omics Factor Analysis (MOFA) model on paired gene expression and methylation samples, to test whether combining both beat either alone.",
          image: "/assets/projects/biomed-external-performance.png",
          imageCaption: "External (held-out) performance comparing the best single-modality models against MOFA.",
        },
      ],
      results: {
        stat: "0.94",
        statLabel: "Out-of-sample accuracy",
        statDescription:
          "Gene expression MOFA predictions on external data. Sensitivity and specificity both topped 0.9, the strongest result in the study.",
        insight:
          "The top-performing classifier was not the best investment. Gene expression profiling stayed the safer, established choice. Methylation profiling won our recommendation instead, thanks to its lower cost and steeper market growth (13.6% CAGR versus 5%). That trade-off reframed our final recommendation, and I led the stakeholder presentation that explained it to a non-technical investor audience.",
      },
      synthesis: [
        {
          label: "Engineering Rigor",
          value: "One Shared Workflow",
          body: "Every model ran through the same limma feature selection, five-fold CV, and metric set, so comparisons across four algorithms were fair.",
        },
        {
          label: "Stakeholder Utility",
          value: "Investor Briefing",
          body: "An R Shiny dashboard I helped present directly to Accenture supervisors, turning model trade-offs into one investment call.",
        },
        {
          label: "Model Performance",
          value: "0.94 External Accuracy",
          body: "Gene expression MOFA held up on real external data, not only in cross-validation.",
        },
      ],
      dashboardImages: [
        { src: "/assets/projects/biomed-shiny-landing.png", caption: "Landing page: instructions and market comparison." },
        { src: "/assets/projects/biomed-shiny-results.png", caption: "Prediction results across all five models, by modality." },
      ],
    },
  },
  {
    slug: "sydney-urban-data-platform",
    caseStudyNumber: "002",
    sysTag: "[SYS.02] // URBAN ANALYTICS",
    contextTag: "University of Sydney",
    classification: "Spatial Data Engineering · Urban Analytics",
    title: "Sydney Urban Data Platform",
    summary:
      "I built a normalised spatial database from 7 open Greater Sydney datasets, to surface links between amenity, transport access, and demographics.",
    description:
      "Three-person team. I co-designed a normalised PostgreSQL/PostGIS database that merged 7 open Greater Sydney government datasets into one spatially indexed schema. I joined roughly 880 car-share bay locations to ABS SA2 boundaries, then built interactive Folium heatmaps and choropleths across all 360 SA2 regions.",
    abstract:
      "Greater Sydney publishes dozens of open civic datasets, but each lives in its own format and schema. The brief was to merge seven of them (business locations, transport stops, population, income, polling places, bike parking, car-share bays) into one queryable, spatially indexed database, then build a single composite score of how well-resourced each neighbourhood is, and test that score against income.",
    tags: ["PostgreSQL/PostGIS", "SQL", "Python", "Pandas", "GeoPandas", "Folium"],
    coverImage: "/assets/projects/sydney-heatmap.jpg",
    githubUrl: "",
    liveUrl: "",
    caseStudy: {
      specBar: [
        { label: "Role & Scope", value: "Co-Developer, Spatial Data & Scoring", sub: "3-person team project" },
        { label: "Timeline", value: "Semester Project, 2024", sub: "University of Sydney" },
        { label: "Tooling & Environment", value: "PostgreSQL · PostGIS · Python", sub: "Pandas, GeoPandas, Folium" },
        { label: "Primary Deliverables", value: "Composite Scoring Pipeline", sub: "Interactive choropleth heatmaps" },
      ],
      heroImage: "/assets/projects/sydney-heatmap.jpg",
      heroCaption: "FIG 1. Composite \"bustling neighbourhood\" score across Greater Sydney.",
      sections: [
        {
          heading: "Database Design & Integration",
          index: "01 / Schema Design",
          body: "In a three-person team, I co-designed and built a normalised PostgreSQL/PostGIS database, merging 7 open Greater Sydney government datasets (businesses, transport stops, population, income, polling places, bike parking, and car-share bays) into one spatially indexed relational schema.",
          callouts: [
            { label: "Datasets Integrated", value: "7" },
            { label: "SA2 Regions Scored", value: "360" },
          ],
        },
        {
          heading: "Spatial Joins & Composite Scoring",
          index: "02 / Spatial Joins",
          body: "I sourced and integrated the project's only GeoJSON dataset. I joined roughly 880 car-share bay locations to ABS SA2 boundaries in PostGIS, then computed a per-region z-score and folded it into our composite \"bustling neighbourhood\" score.",
          image: "/assets/projects/sydney-sa2-scores.jpg",
          imageCaption: "Per-SA2 composite score classification (Low → Extreme) across 360 regions.",
        },
        {
          heading: "Exploratory Analysis",
          index: "03 / Correlation Analysis",
          body: "I queried the integrated dataset with SQL and ran exploratory analysis in Python and Pandas. Interactive Folium heatmaps then surfaced links between business density, transport access, and demographics across Sydney.",
        },
      ],
      results: {
        stat: "r ≈ 0.03",
        statLabel: "Amenity vs. income correlation",
        statDescription:
          "Correlation analysis across all 360 SA2 regions found almost no link between neighbourhood amenity score and median household income. That result challenged an assumption we started with.",
        insight:
          "I contributed to the correlation analysis and the interactive Folium choropleths across all 360 SA2 regions. The result: almost no link between neighbourhood amenity score and median household income (r ≈ 0.03). Amenity-rich areas in Sydney are not reserved for higher-income households.",
      },
      synthesis: [
        {
          label: "Engineering Rigor",
          value: "One Relational Schema",
          body: "Seven separate open datasets merged into a single spatially indexed PostgreSQL/PostGIS database.",
        },
        {
          label: "Analytical Scope",
          value: "360-Region Coverage",
          body: "Every Greater Sydney SA2 region scored end to end, with no gaps in the composite index.",
        },
        {
          label: "Key Finding",
          value: "r ≈ 0.03 Correlation",
          body: "Amenity and income turned out to be nearly unrelated, a real finding rather than the one we expected going in.",
        },
      ],
      dashboardImages: [
        { src: "/assets/projects/sydney-heatmap.jpg", caption: "Business/transport/demographic density heatmap." },
        { src: "/assets/projects/sydney-sa2-scores.jpg", caption: "SA2-level composite score, categorised Low to Extreme." },
      ],
    },
  },
  {
    slug: "text-to-sql-fine-tuning",
    comingSoon: true,
    sysTag: "[SYS.03] // NLP",
    contextTag: "In Progress",
    title: "Fine-Tuning an LLM for Text-to-SQL",
    summary:
      "I'm fine-tuning an open-weight LLM to turn natural language into SQL, against a real public dataset schema. Eval-first methodology, LoRA fine-tuning, and a full failure analysis.",
    tags: ["LLM Fine-Tuning", "Text-to-SQL", "LoRA", "Evaluation"],
  },
];
