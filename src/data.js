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
  about: `I'm a Data Science graduate from the University of Sydney, with a
    Bachelor of Computing majoring in Data Science. I turn messy datasets into
    clear, useful insight. At a Sydney hotel, I analysed occupancy trends and
    cut off-season costs by 5%. I hold Python and data analysis certifications
    from IBM. Now I want to help a team make sharper, data-backed decisions.`,
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
      "I applied machine learning to biomedical data and built a commercial investment recommendation. The analysis weighed model performance against real market viability.",
    description:
      "University of Sydney capstone, supervised by Accenture, six-person team. I built and tuned the logistic regression classifiers and set the model-building workflow for all four algorithms. Five-fold cross-validation pushed gene expression classifiers past 0.9 accuracy. I presented the final R Shiny dashboard to stakeholders and turned model trade-offs into investment insight.",
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
          body: "I merged gene expression data (three GEO series, 277 cancer and 25 normal samples) with methylation data (five GEO series, 1,032 samples). I corrected batch effects with ComBat and undersampled to balance classes. For validation, I held out a separate external dataset and batch corrected it on its own, to test real generalisation.",
        },
        {
          heading: "Model Architecture & Workflow",
          body: "I built and tuned the logistic regression classifiers. I also set the standardised workflow the whole team used: top differentially expressed or methylated features from limma, five-fold cross-validation, and one shared set of metrics (accuracy, AUC, sensitivity, specificity, kappa). Logistic Regression, Random Forest, k-NN, and XGBoost all ran on that same basis.",
          image: "/assets/projects/biomed-cv-performance.png",
          imageCaption: "Cross-validation performance across all four models, by data type.",
        },
        {
          heading: "Unified Multi-Omics Model",
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
        secondaryStats: [
          { label: "CV Accuracy (Gene Expression)", value: "> 0.90" },
          { label: "Kappa Range", value: "0.74 – 0.95" },
        ],
        insight:
          "The top-performing classifier was not the best investment. Gene expression profiling stayed the safer, established choice. Methylation profiling won our recommendation instead, thanks to its lower cost and steeper market growth (13.6% CAGR versus 5%). That trade-off reframed our final recommendation, and I led the stakeholder presentation that explained it to a non-technical investor audience.",
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
      "I built a normalised spatial database from 7 open Greater Sydney datasets, to surface links between amenity, transport access, and demographics.",
    description:
      "Three-person team. I co-designed a normalised PostgreSQL/PostGIS database that merged 7 open Greater Sydney government datasets into one spatially indexed schema. I joined roughly 880 car-share bay locations to ABS SA2 boundaries, then built interactive Folium heatmaps and choropleths across all 360 SA2 regions.",
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
          body: "In a three-person team, I co-designed and built a normalised PostgreSQL/PostGIS database, merging 7 open Greater Sydney government datasets (businesses, transport stops, population, income, polling places, bike parking, and car-share bays) into one spatially indexed relational schema.",
        },
        {
          heading: "Spatial Joins & Composite Scoring",
          body: "I sourced and integrated the project's only GeoJSON dataset. I joined roughly 880 car-share bay locations to ABS SA2 boundaries in PostGIS, then computed a per-region z-score and folded it into our composite \"bustling neighbourhood\" score.",
          image: "/assets/projects/sydney-sa2-scores.jpg",
          imageCaption: "Per-SA2 composite score classification (Low → Extreme) across 360 regions.",
        },
        {
          heading: "Exploratory Analysis",
          body: "I queried the integrated dataset with SQL and ran exploratory analysis in Python and Pandas. Interactive Folium heatmaps then surfaced links between business density, transport access, and demographics across Sydney.",
        },
      ],
      results: {
        stat: "r ≈ 0.03",
        statLabel: "Amenity vs. income correlation",
        statDescription:
          "Correlation analysis across all 360 SA2 regions found almost no link between neighbourhood amenity score and median household income. That result challenged an assumption we started with.",
        secondaryStats: [
          { label: "Datasets Integrated", value: "7" },
          { label: "Car-Share Bays Joined", value: "~880" },
        ],
        insight:
          "I contributed to the correlation analysis and the interactive Folium choropleths across all 360 SA2 regions. The result: almost no link between neighbourhood amenity score and median household income (r ≈ 0.03). Amenity-rich areas in Sydney are not reserved for higher-income households.",
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
      "I'm fine-tuning an open-weight LLM to turn natural language into SQL, against a real public dataset schema. Eval-first methodology, LoRA fine-tuning, and a full failure analysis.",
    tags: ["LLM Fine-Tuning", "Text-to-SQL", "LoRA", "Evaluation"],
  },
];
